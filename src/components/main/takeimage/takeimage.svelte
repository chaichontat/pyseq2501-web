<script lang="ts">
  import { cmdStore, userStore as us } from "$src/stores/store";
  import XYInput from "$comps/main/xy_input.svelte";
  import { browser } from "$app/env";
  import tooltip from "$src/tooltip";
  import type { TakeImage } from "$src/stores/command";
  import LaserChannels from "./laserChannels.svelte";
  import Go from "../go.svelte";

  export let inAuto: boolean = true;
  export let params: TakeImage;
  export let stats = { height: 0, width: 0, n_cols: 0, n_bundles: 0, n_z: 1, time: 0 };
  export let z_stack = false;

  function blockControls(div: HTMLElement | null, changeTo: boolean): void {
    if (div) {
      div.querySelectorAll("input").forEach((el) => (el.disabled = changeTo));
      div.querySelectorAll("select").forEach((el) => (el.disabled = changeTo));
      div.querySelectorAll("button").forEach((el) => (el.disabled = changeTo));
    }
  }

  function updateImageParams() {
    // Necessary to update map.
    $us.image_params.xy0 = params.xy0;
    $us.image_params.xy1 = params.xy1;
  }

  function genTime(t: number): string {
    const d = new Date(t * 1000).toISOString();
    return t > 3600 ? `${d.substring(11, 19)} hrs` : `${d.substring(14, 19)} mins`;
  }

  $: if (browser) blockControls(document.getElementById("control"), $us.block);

  $: stats.height = Math.max(params.xy1[1], params.xy0[1]) - Math.min(params.xy1[1], params.xy0[1]);
  $: stats.width = Math.max(params.xy1[0], params.xy0[0]) - Math.min(params.xy1[0], params.xy0[0]);
  $: stats.n_cols = Math.ceil(stats.width / (0.768 * (1 - params.overlap)));
  $: stats.n_bundles = Math.ceil(stats.height / 0.048);
  $: stats.time = (stats.n_bundles * stats.n_cols) / 20;
  $: stats.n_z = Math.abs(params.z_to - params.z_from) + 1;
</script>

<!-- <div class:hidden={$us.block} class="absolute z-50  -mx-10 w-full h-96 bg-black/[0.1]" /> -->
<!-- Capture params. -->
<div id="control" class="grid grid-cols-2 gap-y-6 gap-x-4">
  <section class="flex flex-col text-lg font-medium">
    <p class="mt-1 text-lg">Name</p>
    <div class="flex w-full max-w-md gap-x-2">
      <input type="text" class="flex-grow mb-4 pretty" bind:value={params.name} />
      <Go color="indigo">Preview</Go>
    </div>

    {#if inAuto}
      <p class="text-lg">Image Path</p>
      <input type="text" class="max-w-md mb-4 pretty" bind:value={params.path} />
    {/if}
  </section>

  <!-- Optics -->
  <section class="font-medium leading-10 ">
    <h2>Laser and Channels</h2>
    <div class="grid grid-cols-2" class:opacity-70={$us.block}>
      <LaserChannels bind:params i={0} />
      <LaserChannels bind:params i={1} />
    </div>
  </section>

  <!-- XY Input -->
  <section class="flex flex-col gap-2" class:-mt-20={!inAuto}>
    <h2>Positions</h2>
    <div class="-mt-1 space-y-4">
      <div>
        <p>📌 Corner 1</p>
        <XYInput bind:xy={params.xy0} on:change={updateImageParams} on:go={() => ($cmdStore = "move0")} />
      </div>
      <div>
        <p>📍 Corner 2</p>
        <XYInput bind:xy={params.xy1} on:change={updateImageParams} on:go={() => ($cmdStore = "move1")} />
      </div>
      <div class="flex gap-8">
        <div>
          <p>X-Overlap</p>
          <input type="number" class="w-20 pr-2 pretty" bind:value={params.overlap} step="0.01" min="0" max="0.99" />
          (0-1)
        </div>
        <div class="flex flex-col justify-center font-normal">
          <span class="tabular-nums">{stats.width.toFixed(2)} × {stats.height.toFixed(2)} mm.</span>
          <span class="tabular-nums">{stats.n_cols} columns of {stats.n_bundles} bundles.</span>
          <span class="tabular-nums" class:font-semibold={!z_stack}>
            {genTime(stats.time)}
            {#if z_stack}
              per z-stack.
            {/if}
          </span>
        </div>
      </div>
    </div>
  </section>

  <!-- TODO Unequal level -->
  <!-- Focus stuffs -->
  <section class="flex flex-col gap-2">
    <h2>Focus</h2>
    <div class="-mt-1 space-y-4">
      <div class="flex space-x-8">
        <div>
          <p>Z Tilt</p>
          <div class="flex gap-2">
            <input type="number" class="w-28 pretty" bind:value={params.z_tilt} />
            <Go />
          </div>
        </div>
        <div>
          <p>Z Objective</p>
          <span class="flex gap-2">
            <input type="number" class="w-28 pretty" bind:value={params.z_obj} />
            <Go />
            <button type="button" class="px-4 py-1 font-medium text-gray-900 rounded-lg w-36 white-button">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
              </svg>

              <span>Autofocus</span>
            </button>
          </span>
        </div>
      </div>

      <div class="space-y-2">
        <label>
          <input type="checkbox" class="mr-1 rounded" bind:checked={z_stack} />
          Z-Stack
        </label>
        <div class="flex font-medium" id="zBox">
          <span class="flex items-center border-l rounded-l-lg color-group" class:span-disabled={$us.block || !z_stack} use:tooltip={"Nyquist is 232."}>Spacing</span>
          <input type="number" min="1" max="60000" step="1" bind:value={params.z_spacing} class="z-10 h-10 text-center rounded-none pretty w-28" disabled={$us.block || !z_stack} />
          <span use:tooltip={"Multiple of Spacing"} class="flex items-center color-group" class:span-disabled={$us.block || !z_stack}>From</span>
          <input type="number" min="-100" max="100" step="1" bind:value={params.z_from} class="z-10 w-16 h-10 text-center rounded-none pretty" disabled={$us.block || !z_stack} />
          <span use:tooltip={"Multiple of Spacing"} class="flex items-center color-group" class:span-disabled={$us.block || !z_stack}>To</span>
          <input type="number" min="-100" max="100" step="1" bind:value={params.z_to} class="z-10 w-16 h-10 text-center rounded-l-none rounded-r-lg pretty" disabled={$us.block || !z_stack} />
        </div>
        {#if z_stack}
          <div>{stats.n_z} Z steps from {params.z_obj + params.z_from * params.z_spacing} to {params.z_obj + params.z_to * params.z_spacing}</div>
          <div class="font-semibold">Total time: {stats.n_z ? genTime(stats.n_z * stats.time) : genTime(stats.time)}.</div>
        {/if}
      </div>
    </div>
  </section>
</div>

<style lang="postcss">
  h2 {
    @apply mb-1 text-xl font-semibold text-gray-800;
  }

  p {
    @apply mb-1 font-medium;
  }

  .span-disabled {
    @apply text-gray-500 bg-gray-50 border-gray-200 shadow-none;
  }
</style>