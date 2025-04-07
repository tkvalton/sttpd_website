<script lang="ts">
  import Home from './components/page/home/Home.svelte';
  import NavBar from './components/general/NavBar.svelte';
</script>

<main>
  <NavBar currentPath="/" />
  <Home />
</main>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
  }
  
  main {
    width: 100%;
    max-width: 1920px;
    margin: 0 auto;
  }
</style>