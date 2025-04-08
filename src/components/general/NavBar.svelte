<!-- 
  Navigation bar component with sticky positioning and a divider at the top
-->
<script lang="ts">
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  export let currentPath = '/';
  export let onNavigate: (path: string) => void = () => {};
  
  const currentRoute = writable(currentPath);
  
  // Navigation links
  const navItems = [
    { id: 'about', name: 'ABOUT US', path: '/about', external: false },
    { id: 'coaching', name: 'DARTS COACHING', path: '/coaching', external: false },
    { id: 'shop', name: 'SHOP', path: 'https://straight-to-the-point-darts.square.site/', external: true },
    { id: 'mydarts', name: 'MY DARTS', path: '/mydarts', external: false },
    { id: 'blog', name: 'BLOG', path: '/blog', external: false },
    { id: 'contact', name: 'CONTACT', path: '/contact', external: false }
  ];

  // Track if mobile menu is open
  let mobileMenuOpen = false;
  
  // Track if navbar should be sticky
  let isSticky = false;
  let navbarElement: HTMLElement;
  let navbarOffset = 0;
  
  onMount(() => {
    // Get the initial offset position of the navbar
    navbarOffset = navbarElement.offsetTop;
    
    // Add scroll event listener to check if navbar should be sticky
    window.addEventListener('scroll', handleScroll);
    
    // Clean up on component destruction
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  
  // Handle scroll event to make navbar sticky
  function handleScroll() {
    if (window.pageYOffset >= navbarOffset) {
      isSticky = true;
    } else {
      isSticky = false;
    }
  }
  
  // Toggle mobile menu
  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }
  
  // Handle navigation click
  function handleNavClick(item: typeof navItems[0]) {
    if (item.external) {
      // For external links, let the browser handle navigation
      window.open(item.path, '_blank', 'noopener,noreferrer');
    } else {
      // For internal links, use the app's navigation
      onNavigate(item.path);
    }
    
    if (window.innerWidth <= 768) {
      mobileMenuOpen = false;
    }
  }
  
  // Handle keyboard navigation
  function handleKeyDown(event: KeyboardEvent, item: typeof navItems[0]) {
    if (event.key === 'Enter' || event.key === ' ') {
      handleNavClick(item);
    }
  }
  
  // Update current route whenever currentPath changes
  $: $currentRoute = currentPath;
</script>

<div class="navbar-component" class:is-sticky={isSticky}>
  <!-- Divider at the top of navbar -->
  <div class="divider-wrapper">
    <div class="divider"></div>
  </div>

  <div class="navbar-wrapper" bind:this={navbarElement}>
    <nav class="navbar" aria-label="Main navigation">
      <div class="navbar-container">
        <button 
          class="mobile-menu-btn" 
          on:click={toggleMobileMenu}
          aria-expanded={mobileMenuOpen}
          aria-controls="nav-links"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          ☰
        </button>
        
        <ul id="nav-links" class="nav-links" class:active={mobileMenuOpen}>
          {#each navItems as item}
            <li>
              <!-- Different handling for external vs internal links -->
              {#if item.external}
                <a 
                  href={item.path} 
                  class="nav-link"
                  class:active={$currentRoute === item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${item.name} (opens in a new tab)`}
                >
                  {item.name} <span class="external-icon" aria-hidden="true">↗</span>
                </a>
              {:else}
                <a 
                  href={item.path} 
                  class="nav-link"
                  class:active={$currentRoute === item.path}
                  on:click|preventDefault={() => handleNavClick(item)}
                  aria-current={$currentRoute === item.path ? 'page' : undefined}
                >
                  {item.name}
                </a>
              {/if}
            </li>
          {/each}
        </ul>
      </div>
    </nav>
  </div>
</div>

<!-- Add a placeholder div when navbar is sticky to prevent content jump -->
{#if isSticky}
  <div class="navbar-placeholder"></div>
{/if}

<style>
  /* Container for the entire navbar component including the divider */
  .navbar-component {
    position: relative;
    width: 100%;
  }
  
  /* Styles for sticky state of the entire component */
  .navbar-component.is-sticky .divider-wrapper,
  .navbar-component.is-sticky .navbar-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
  }
  
  /* Fixed positioning for divider when sticky */
  .navbar-component.is-sticky .divider-wrapper {
    top: 0;
  }
  
  /* Fixed positioning for navbar when sticky */
  .navbar-component.is-sticky .navbar-wrapper {
    top: 5px; /* The height of the divider */
  }

  /* Divider styles */
  .divider-wrapper {
    width: 100vw;
    left: 0;
    right: 0;
    margin-left: calc(-50vw + 50%);
    margin-right: calc(-50vw + 50%);
    background-color: #13475D;
    z-index: 1001; /* Slightly higher than navbar to ensure it's on top */
  }
  
  .divider {
    height: 5px;
    width: 100%;
    max-width: 100%;
  }

  .navbar-wrapper {
    width: 100vw;
    left: 0;
    right: 0;
    margin-left: calc(-50vw + 50%);
    margin-right: calc(-50vw + 50%);
    background-color: #60C3F0;
    z-index: 1000;
  }
  
  /* Placeholder to prevent content jump when navbar becomes sticky */
  .navbar-placeholder {
    height: 42px; /* Combined height of navbar and divider */
    width: 100%;
  }
  
  .navbar {
    background-color: #60C3F0; /* Light blue color similar to your Godot project */
    padding: 0;
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
  }

  .navbar-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px 0;
    position: relative;
    max-width: 1920px;
    margin: 0 auto;
  }

  .nav-links {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 25px; /* Matches your Godot spacing */
  }

  .nav-links li {
    margin: 0;
  }

  .nav-link {
    color: white;
    text-decoration: none;
    font-family: 'TheBoLDFont', sans-serif;
    font-weight: bold;
    font-size: 16px;
    padding: 8px;
    text-transform: uppercase;
    transition: color 0.3s, font-size 0.2s;
    display: block;
  }

  .nav-link:hover, .nav-link.active {
    color: #13475D; /* Dark blue color */
    font-size: 18px;
  }
  
  .external-icon {
    font-size: 14px;
    display: inline-block;
    margin-left: 4px;
    transition: transform 0.2s ease;
  }
  
  .nav-link:hover .external-icon {
    transform: translate(2px, -2px);
  }

  .mobile-menu-btn {
    display: none;
    color: white;
    background: transparent;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    padding: 5px 10px;
  }

  /* Responsive styles */
  @media (max-width: 768px) {
    .navbar-container {
      flex-direction: column;
      align-items: flex-start;
      padding: 1rem;
    }
    
    .mobile-menu-btn {
      display: block;
    }
    
    .nav-links {
      display: none;
      flex-direction: column;
      width: 100%;
      margin-top: 1rem;
      gap: 0;
    }
    
    .nav-links.active {
      display: flex;
    }
    
    .nav-links li {
      margin: 0.5rem 0;
    }
    
    /* Adjust placeholder height for mobile */
    .navbar-placeholder {
      height: 58px; /* Adjusted for mobile navbar height plus divider */
    }
  }
</style>