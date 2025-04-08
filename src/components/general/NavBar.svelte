<!-- 
  Navigation bar component with sticky positioning
-->
<script lang="ts">
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  export let currentPath = '/';
  export let onNavigate: (path: string) => void = () => {};
  
  const currentRoute = writable(currentPath);
  
  // Navigation links
  const navItems = [
    { id: 'about', name: 'ABOUT US', path: '/about' },
    { id: 'coaching', name: 'DARTS COACHING', path: '/coaching' },
    { id: 'mydarts', name: 'MY DARTS', path: '/mydarts' },
    { id: 'shop', name: 'SHOP', path: '/shop' },
    { id: 'blog', name: 'BLOG', path: '/blog' },
    { id: 'contact', name: 'CONTACT', path: '/contact' }
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
  function handleNavClick(path: string) {
    onNavigate(path);
    if (window.innerWidth <= 768) {
      mobileMenuOpen = false;
    }
  }
  
  // Handle keyboard navigation
  function handleKeyDown(event: KeyboardEvent, path: string) {
    if (event.key === 'Enter' || event.key === ' ') {
      handleNavClick(path);
    }
  }
  
  // Update current route whenever currentPath changes
  $: $currentRoute = currentPath;
</script>

<div class="navbar-wrapper" class:sticky={isSticky} bind:this={navbarElement}>
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
            <a 
              href={item.path} 
              class:active={$currentRoute === item.path}
              on:click|preventDefault={() => handleNavClick(item.path)}
              aria-current={$currentRoute === item.path ? 'page' : undefined}
            >
              {item.name}
            </a>
          </li>
        {/each}
      </ul>
    </div>
  </nav>
</div>

<!-- Add a placeholder div when navbar is sticky to prevent content jump -->
{#if isSticky}
  <div class="navbar-placeholder"></div>
{/if}

<style>
  .navbar-wrapper {
    width: 100vw;
    left: 0;
    right: 0;
    margin-left: calc(-50vw + 50%);
    margin-right: calc(-50vw + 50%);
    background-color: #60C3F0;
    z-index: 1000;
  }
  
  /* Sticky navbar styling */
  .navbar-wrapper.sticky {
    position: fixed;
    top: 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  
  /* Placeholder to prevent content jump when navbar becomes sticky */
  .navbar-placeholder {
    height: 37px; /* Same height as navbar - adjust if needed */
    width: 100%;
  }
  
  .navbar {
    background-color: #60C3F0; /* Light blue color similar to your Godot project */
    padding: 0;
    width: 100%;
    max-width: 1920px;
    margin: 0 auto;
  }

  .navbar-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px 0;
    position: relative;
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

  .nav-links a {
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

  .nav-links a:hover, .nav-links a.active {
    color: #13475D; /* Dark blue color */
    font-size: 18px;
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
      height: 53px; /* Adjust based on mobile navbar height */
    }
  }
</style>