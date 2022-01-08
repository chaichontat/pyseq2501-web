<script lang="ts">
  import Sidebar from "./sidebar.svelte";

  import Preview from "../components/main/preview.svelte";
  import Progress from "../components/main/progress.svelte";
</script>

<main class="flex-auto flex mt-4">
  <div class="relative flex w-full">
    <div class="w-full flex-none lg:grid lg:grid-cols-4 lg:gap-8">
      <!-- Sidebar -->
      <aside
        class="bg-gray-50 lg:bg-transparent -mx-4 sm:-mx-6 lg:mx-0 py-12 sm:py-16 px-4 sm:px-6 lg:pl-0 lg:pr-8"
      >
        <Sidebar />
      </aside>

      <!-- Main -->
      <div class="relative col-span-3 lg:-ml-8 mr-8 bg-white lg:shadow-md">
        <Progress curr={null} full={null} />
        <!-- <Graph /> -->
        <Preview />
      </div>
    </div>
  </div>
</main>
