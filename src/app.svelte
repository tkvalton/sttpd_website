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
    // Scroll to top when navigating
    window.scrollTo(0, 0);
  }
</script>

<div class="app-container">
  <Header 
    currentPath={$currentPath} 
    onNavigate={handleNavigation} 
  />
  
  <div class="content-area">
    <div class="main-content">
      {#if $currentPath === '/'}
        <Home />
      {:else if $currentPath === '/coaching'}
        <DartsCoaching />
      {:else}
        <!-- Fallback or 404 page -->
        <div class="page-not-found">
          <h1>Page Not Found</h1>
          <p>Sorry, the page you were looking for doesn't exist.</p>
          <button on:click={() => handleNavigation('/')}>Return to Home</button>
        </div>
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
    background-color: #13475D; /* Dark blue background */
    width: 100%;
    min-height: 100vh;
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
  
  .content-area {
    display: flex;
    justify-content: center;
    width: 100%;
    flex: 1;
  }
  
  .main-content {
    width: 100%;
    max-width: 1200px;
    background-color: white;
    min-height: 100%;
  }
  
  .page-not-found {
    padding: 60px 20px;
    text-align: center;
  }
  
  .page-not-found button {
    margin-top: 20px;
    background-color: #60C3F0;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
  }
  
  /* Media queries for responsive layout */
  @media (max-width: 1200px) {
    .main-content {
      max-width: 100%;
    }
  }
</style>