<script lang="ts">
  import type { Status } from "../store";
  import { statusStore } from "../store";
  import Division from "$comps/sidebar/division.svelte";
  import Lasers from "$comps/sidebar/lasers.svelte";
  import Map from "$comps/sidebar/slide/map.svelte";

  let connected: boolean = false;
  // onMount(() => {
  //   const sse = new EventSource("http://localhost:8000/status");
  //   sse.onmessage = (event: MessageEvent<string>) => (status = JSON.parse(event.data));
  //   return () => {
  //     if (sse.readyState === 1) sse.close();
  //   };
  // });
  let status: Status = $statusStore;

  $: {
    status = $statusStore;
    connected = $statusStore != undefined ? true : false;
  }
</script>

<div class="relative">
  <!-- <div
          class:translucent={!connected}
          class="hidden absolute w-full h-full transition-all"
        /> -->
  <ol class="menu p-2 mt-4 ">
    <Division name="Map">
      <Map {...status} />
    </Division>

    <Division name="Lasers">
      <Lasers />
      <li>
        <span class="self-center mt-2 text-lg">
          Shutter:&nbsp; <p class="font-mono font-bold">
            {status.shutter ? "OPENED" : "CLOSED"}
          </p>
        </span>
      </li>
    </Division>
  </ol>
</div>
