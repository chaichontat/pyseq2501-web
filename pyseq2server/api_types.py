from __future__ import annotations

from typing import Annotated, Any, Sequence

from pydantic import BaseModel, Field, root_validator

from pyseq2 import Imager
from pyseq2.experiment.command import (  # Experiment,; Reagent,; ReagentGroup,
    Autofocus,
    Goto,
    Hold,
    Prime,
    Pump,
    TakeImage,
    Temp,
)
from pyseq2.experiment.experiment import Experiment
from pyseq2.experiment.reagent import Reagent, ReagentGroup
from pyseq2.utils.coords import mm_to_raw

mm = Annotated[float, "mm"]


class MoveManual(BaseModel):
    xy0: tuple[mm, mm] | None = None
    xy1: tuple[mm, mm] | None = None
    z_tilt: int | tuple[int, int, int] | None = None
    z_obj: int | None = None
    laser_onoff: tuple[bool | None, bool | None] | None = None
    lasers: tuple[int | None, int | None] | None = None
    shutter: bool | None = None
    od: tuple[float | None, float | None] | None = None

    @root_validator(skip_on_failure=True)
    def validate_xy(cls, values: dict[str, Any]) -> dict[str, Any]:
        if values["xy0"] and values["xy1"]:
            raise ValueError("MoveManual: xy0 and xy1 cannot be set at the same time")
        return values

    def to_state(self, fc: bool) -> dict[str, Any]:
        out = self.copy(exclude={"xy0", "xy1"}).dict()
        if self.xy0:
            assert self.xy1 is None
            out["x"], out["y"] = mm_to_raw(fc, x=self.xy0[0], y=self.xy0[1])
        if self.xy1:
            assert self.xy0 is None
            out["x"], out["y"] = mm_to_raw(fc, x=self.xy1[0], y=self.xy1[1])
        return out

    async def run(self, i: Imager, fc: bool) -> None:
        await i.move(**self.to_state(fc))


class CommandResponse(BaseModel):
    step: tuple[int, int, int] | None = None
    msg: str | None = None
    error: str | None = None


class NReagent(BaseModel):
    uid: str | int
    reagent: Reagent | ReagentGroup

    @classmethod
    def default(cls, uid: int):
        return cls(uid=uid, reagent=Reagent.default())


class NCmd(BaseModel):
    uid: str | int
    cmd: Annotated[Pump | Prime | Temp | Hold | Autofocus | TakeImage | Goto, Field(discriminator="op")]

    @classmethod
    def default(cls, uid: int) -> NCmd:
        return cls(uid=uid, cmd=Pump.default())


class NExperiment(BaseModel):
    name: str
    path: str
    fc: bool
    reagents: Sequence[NReagent]
    cmds: Sequence[NCmd]

    def to_experiment(self) -> Experiment:
        return Experiment(
            name=self.name,
            fc=self.fc,
            path=self.path,
            reagents=[r.reagent for r in self.reagents],
            cmds=[c.cmd for c in self.cmds],
        )

    @classmethod
    def from_experiment(cls, e: Experiment, uid: int) -> NExperiment:
        reagents = [NReagent(uid=i + uid, reagent=r) for i, r in enumerate(e.reagents, 1)]
        uid += len(e.reagents)
        cmds = [NCmd(uid=uid + i, cmd=c) for i, c in enumerate(e.cmds, 1)]

        return NExperiment(name=e.name, path=e.path, fc=e.fc, reagents=reagents, cmds=cmds)

    @classmethod
    def default(cls, max_uid: int, fc: bool = False) -> NExperiment:
        return cls(
            name="",
            path=".",
            fc=fc,
            reagents=[NReagent.default(max_uid + 1)],
            cmds=[NCmd.default(max_uid + 2)],
        )


class NTakeImage(TakeImage):
    fc: bool

    @classmethod
    def default(cls) -> NTakeImage:
        ori = super().default()
        return NTakeImage(**ori.dict(), fc=False)


class UserSettings(BaseModel):
    """None happens when the user left the input empty."""

    max_uid: int
    exps: list[NExperiment]
    image_params: NTakeImage

    @classmethod
    def default(cls) -> UserSettings:
        return UserSettings(
            max_uid=6,
            exps=[NExperiment.default(0, False), NExperiment.default(3, True)],
            image_params=NTakeImage.default(),
        )
