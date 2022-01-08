<script>
  import Connected from "$src/components/navbar/connected.svelte";
</script>

<header
  class="flex-none relative z-50 text-sm leading-6 font-medium ring-1 ring-gray-900 ring-opacity-5 shadow-sm py-4 bg-white"
>
  <nav aria-label="Global" class="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center flex-wrap sm:flex-nowrap">
      <div class="inline-block text-3xl">
        <span class="font-light">PySeq</span>
        <span class="grad font-medium">2501</span>
      </div>
      <a
        href="https://github.com/chaichontat/pyseq2501/"
        target="_blank"
        rel="nofollow"
        class="font-mono text-xs opacity-50 mx-4"
        ><div data-tip="Changelog" class="tooltip tooltip-bottom">
          <span class="hidden lg:inline">version</span>&nbsp;0.0.1
        </div></a
      >

      <div class="w-full mt-4 sm:mt-0 sm:w-auto sm:ml-auto flex items-center gap-4">
        <Connected />
        <a
          target="_blank"
          href="https://github.com/chaichontat/pyseq2501"
          rel="noopener"
          class="group border-l pl-4 border-gray-200 hover:text-teal-600 flex items-center"
        >
          GitHub
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="w-6 h-6 fill-current ml-2"
            ><path
              d="M256,32C132.3,32,32,134.9,32,261.7c0,101.5,64.2,187.5,153.2,217.9a17.56,17.56,0,0,0,3.8.4c8.3,0,11.5-6.1,11.5-11.4,0-5.5-.2-19.9-.3-39.1a102.4,102.4,0,0,1-22.6,2.7c-43.1,0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1,1.4-14.1h.1c22.5,2,34.3,23.8,34.3,23.8,11.2,19.6,26.2,25.1,39.6,25.1a63,63,0,0,0,25.6-6c2-14.8,7.8-24.9,14.2-30.7-49.7-5.8-102-25.5-102-113.5,0-25.1,8.7-45.6,23-61.6-2.3-5.8-10-29.2,2.2-60.8a18.64,18.64,0,0,1,5-.5c8.1,0,26.4,3.1,56.6,24.1a208.21,208.21,0,0,1,112.2,0c30.2-21,48.5-24.1,56.6-24.1a18.64,18.64,0,0,1,5,.5c12.2,31.6,4.5,55,2.2,60.8,14.3,16.1,23,36.6,23,61.6,0,88.2-52.4,107.6-102.3,113.3,8,7.1,15.2,21.1,15.2,42.5,0,30.7-.3,55.5-.3,63,0,5.4,3.1,11.5,11.4,11.5a19.35,19.35,0,0,0,4-.4C415.9,449.2,480,363.1,480,261.7,480,134.9,379.7,32,256,32Z"
            /></svg
          >
        </a>
      </div>
    </div>
  </nav>
</header>

<style lang="postcss">
  .grad {
    background: linear-gradient(61.68deg, #225de6 -4.27%, #a664fd 116.09%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
</style>
