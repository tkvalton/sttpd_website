<!-- 
  Navigation bar component with accessibility fixes
-->
<script lang="ts">
    import { onMount } from 'svelte';
    
    // If using SvelteKit, uncomment the next line
    // import { page } from '$app/stores';
    
    // For non-SvelteKit projects, create a currentPath store
    import { writable } from 'svelte/store';
    export let currentPath = '/';
    export let onNavigate: (path: string) => void = () => {};
    
    const currentRoute = writable(currentPath);
    
    // Navigation links
    const navItems = [
      { id: 'about', name: 'About Us', path: '/about' },
      { id: 'coaching', name: 'Darts Coaching', path: '/coaching' },
      { id: 'mydarts', name: 'My Darts', path: '/mydarts' },
      { id: 'shop', name: 'Shop', path: '/shop' },
      { id: 'blog', name: 'Blog', path: '/blog' },
      { id: 'contact', name: 'Contact', path: '/contact' }
    ];
  
    // Track if mobile menu is open
    let mobileMenuOpen = false;
    
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
  
  <style>
    .navbar {
      background-color: #60C3F0; /* Light blue color similar to your Godot project */
      padding: 0;
      width: 100%;
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
      font-family: 'Arial', sans-serif;
      font-weight: bold;
      font-size: 14px;
      padding: 8px;
      transition: color 0.3s, font-size 0.2s;
      display: block;
    }
  
    .nav-links a:hover, .nav-links a.active {
      color: #13475D; /* Dark blue color */
      font-size: 16px;
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
    }
  </style>