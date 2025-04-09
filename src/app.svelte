<script lang="ts">
  import { writable } from 'svelte/store';
  import { fade } from 'svelte/transition';
  import Home from './pages/Home.svelte';
  import DartsCoaching from './pages/DartsCoaching.svelte';
  import MyDarts from './pages/MyDarts.svelte';
  import Contact from './pages/Contact.svelte';
  import AboutUs from './pages/AboutUs.svelte';
  import Blog from './pages/Blog.svelte';
  import Header from './components/general/Header.svelte';
  import { setContext } from 'svelte';
  
  const currentPath = writable('/');
  
  // Keep track of whether we're transitioning between pages
  let isTransitioning = false;
  let pageKey = 0; // Used to force re-render of components
  
  // Function to handle navigation
  function handleNavigation(path: string) {
    if ($currentPath === path) return; // Don't navigate to the same page
    
    // Set transitioning state
    isTransitioning = true;
    
    // Small delay for the fade out transition
    setTimeout(() => {
      $currentPath = path;
      pageKey++; // Force re-render of the component
      
      // Update browser URL without reload
      window.history.pushState({}, '', path);
      
      // Scroll to top when navigating
      window.scrollTo(0, 0);
      
      // End transition
      isTransitioning = false;
    }, 200); // Matches the fade transition duration
  }

  setContext('navigate', handleNavigation);
</script>

<div class="app-container">
  <Header 
    currentPath={$currentPath} 
    onNavigate={handleNavigation} 
  />
  
  <div class="content-area">
    {#if !isTransitioning}
      <div class="main-content" transition:fade={{ duration: 200 }}>
        {#key pageKey}
          {#if $currentPath === '/'}
            <Home />
          {:else if $currentPath === '/coaching'}
            <DartsCoaching />
          {:else if $currentPath === '/mydarts'}
            <MyDarts />
          {:else if $currentPath === '/contact'}
            <Contact />
          {:else if $currentPath === '/about'}
            <AboutUs />
          {:else if $currentPath === '/blog'}
            <Blog />
          {:else}
            <!-- Fallback or 404 page -->
            <div class="page-not-found">
              <h1>Page Not Found</h1>
              <p>Sorry, the page you were looking for doesn't exist.</p>
              <button on:click={() => handleNavigation('/')}>Return to Home</button>
            </div>
          {/if}
        {/key}
      </div>
    {/if}
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