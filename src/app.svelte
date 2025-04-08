<script lang="ts">
  import { writable } from 'svelte/store';
  import Home from './pages/Home.svelte';
  import DartsCoaching from './pages/DartsCoaching.svelte';
  import Header from './components/general/Header.svelte';
  
  const currentPath = writable('/');
  
  // Function to handle navigation
  function handleNavigation(path: string) {
    $currentPath = path;
    // Update browser URL without reload
    window.history.pushState({}, '', path);
  }
</script>

<div class="app-container">
  <div class="banner-area">
    <Header 
      currentPath={$currentPath} 
      onNavigate={handleNavigation} 
    />
  </div>
  
  <div class="content-area">
    <div class="main-content">
      {#if $currentPath === '/'}
        <Home onNavigate={handleNavigation} />
      {:else if $currentPath === '/coaching'}
        <DartsCoaching />
      {:else if $currentPath === '/mydarts'}
        <!-- MyDarts page - you can create this component later -->
        <div>My Darts Page - Coming Soon</div>
      {:else}
        <!-- Fallback or 404 page -->
        <div>Page not found</div>
      {/if}
    </div>
  </div>
</div>

<style>
  @font-face {
    font-family: 'TheBoLDFont';
    src: url('/assets/fonts/THEBOLDFONT-FREEVERSION.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url('/assets/fonts/Montserrat-SemiBold.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  :global(body) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
    width: 100%;
    overflow-x: hidden;
  }
  
  :global(*, *::before, *::after) {
    box-sizing: inherit;
  }
  
  .app-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  main {
    width: 100%;
    max-width: 1920px;
    margin: 0 auto;
    padding: 0 20px;
  }
</style>