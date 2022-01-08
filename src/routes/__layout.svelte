<script lang="ts">
  import "../app.css";
  import Header from "./header.svelte";
</script>

<svelte:head>
  <title>PySeq 2501</title>
  <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
</svelte:head>

<!-- Body -->
<div class="font-sans antialiased text-gray-800 min-h-full flex flex-col">
  <Header />
  <slot />
</div>
