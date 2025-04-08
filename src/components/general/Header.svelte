<!-- Header.svelte -->
<script lang="ts">
  import Banner from './Banner.svelte';
  import NavBar from './NavBar.svelte';
  
  // Export currentPath and onNavigate props to match your App.svelte
  export let currentPath: string = '/';
  export let onNavigate: (path: string) => void;
  
  // Function to handle navigation to home page
  function navigateToHome() {
    onNavigate('/');
  }
</script>

<header class="site-header">
  <Banner goToHome={navigateToHome} />
  <NavBar {currentPath} {onNavigate} />
</header>

<style>
  .site-header {
    width: 100%;
    position: relative;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
</style>