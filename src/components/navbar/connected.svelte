<script lang="ts">
  import { localStore, statusStore } from "$src/stores/store";

  $: if (!$localStore.connected) {
    $statusStore.msg = { msg: "Error: Not connected.", t: Date.now() / 1000 };
    $statusStore.block = "capturing";
  }
</script>

<div class="whitespace-nowrap">
  {#if $localStore.connected}
    <span class="flex items-center text-sm font-semibold" style="color:rgb(26, 127, 55);">
      Connected
      <svg aria-label="connected" role="img" height="16" viewBox="0 0 16 16" fill="rgb(26, 127, 55)" class="pl-1">
        <path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
      </svg>
    </span>
  {:else}
    <span class="flex items-center mt-1 text-sm font-semibold translate-y-1 animate-bounce" style="color:rgb(207, 34, 46);">
      Not Connected
      <svg role="img" height="16" viewBox="0 0 16 16" version="1.1" fill="rgb(207, 34, 46)" class="pl-1">
        <path
          fill-rule="evenodd"
          d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"
        />
      </svg>
    </span>
  {/if}
</div>
