<script lang="ts">
  import { cmdStore, statusStore as ss, userStore as us } from "$src/stores/store";
  import { localStore as ls } from "$src/stores/store";
  import { Switch } from "@rgossiaux/svelte-headlessui";
  export let checked = false;

  export let fc_: 0 | 1;

let i: 2 | 8

  function genColor(x: typeof i) {
    switch (x) {
      case 2:
        return "bg-indigo-600";
      case 8:
        return "bg-purple-600";
      default:
        return "bg-blue-700";
    }
  }


  $: switch ($i) {
    case 2:
      checked = false;
      break;
    case 8:
      checked = true;
      break;
  }
</script>

<Switch
  on:change={() =>
    (checked = !checked)
    {$ss.block = "moving";
    $cmdStore = {inlet : { $fc :  $i} };

  }}
  class={`${genColor($ls.inlet)}
    relative inline-flex h-[24px] w-[48px] flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-all duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
  disabled={$ls.inlet}
>
  <span
    aria-hidden="true"
    class={`${checked ? "translate-x-6" : "translate-x-0"} thing pointer-events-none inline-block h-[20px] w-[20px] transform bg-white shadow ring-0 transition duration-200 ease-in-out`}
    style="border-radius: 50%;"
  />
</Switch>
