<style>
    :global(body) {
      margin: 0;
      padding: 0;
      font-family: 'Arial', sans-serif;
      background-color: white;
    }
    
    .app {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
    
    header {
      width: 100%;
    }
    
    .logo-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 150px;
      padding: 0 60px;
    }
    
    .left-logo, .center-logo, .social-links {
      display: flex;
      align-items: center;
    }
    
    .center-logo img {
      transition: transform 0.3s;
    }
    
    .center-logo img:hover {
      transform: scale(1.05);
    }
    
    .social-links {
      display: flex;
      gap: 27px;
    }
    
    .social-links a {
      display: flex;
      align-items: center;
      text-decoration: none;
    }
    
    .social-text {
      margin-left: 5px;
      font-size: 18px;
    }
    
    .facebook {
      color: #1877F2; /* Facebook blue */
    }
    
    .twitter {
      color: #1DA1F2; /* Twitter blue */
    }
    
    .youtube {
      color: #FF0000; /* YouTube red */
    }
    
    .separator {
      height: 5px;
      background-color: #13475D; /* Dark blue color */
      width: 100%;
    }
    
    .shadow-separator {
      height: 5px;
      width: 100%;
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0.65) 0%, transparent 100%);
      position: relative;
      z-index: 1;
    }
    
    main {
      display: flex;
      flex: 1;
    }
    
    .sidebar {
      width: 250px;
      background-color: #13475D; /* Dark blue color */
      flex-shrink: 0;
    }
    
    .content {
      flex: 1;
      overflow: auto;
    }
    
    /* Responsive styles */
    @media (max-width: 1024px) {
      .sidebar {
        width: 150px;
      }
    }
    
    @media (max-width: 768px) {
      .logo-container {
        flex-direction: column;
        height: auto;
        padding: 20px;
      }
      
      .left-logo, .center-logo, .social-links {
        margin: 10px 0;
      }
      
      .social-links {
        flex-direction: column;
        gap: 10px;
      }
      
      .sidebar {
        display: none;
      }
    }
  </style><!-- 
    Main application component with proper routing and accessibility fixes
  -->
  <script>
    import { onMount } from 'svelte';
    
    // Import components
    import NavBar from './components/NavBar.svelte';
    import Home from './pages/Home.svelte';
    
    // These would need to be created as well
    // For now, they can be placeholder components
    const AboutUs = Home;
    const DartsCoaching = Home;
    const MyDarts = Home;
    const Shop = Home;
    const Blog = Home;
    const Contact = Home;
    
    // Define routes
    const routes = {
      '/': Home,
      '/about': AboutUs,
      '/coaching': DartsCoaching,
      '/mydarts': MyDarts,
      '/shop': Shop,
      '/blog': Blog,
      '/contact': Contact
    };
    
    // Current route state
    let currentPath = '/';
    let CurrentComponent = routes['/'];
    
    // Handle navigation
    function navigate(path) {
      if (!routes[path]) return;
      
      currentPath = path;
      CurrentComponent = routes[path];
      window.history.pushState({}, '', path);
    }
    
    // Handle logo click to navigate home
    function handleLogoClick(event) {
      event.preventDefault();
      navigate('/');
    }
    
    // Initialize and handle browser navigation
    onMount(() => {
      // Set initial path based on current URL
      const path = window.location.pathname;
      currentPath = routes[path] ? path : '/';
      CurrentComponent = routes[currentPath];
      
      // Handle browser back/forward navigation
      window.addEventListener('popstate', () => {
        const newPath = window.location.pathname;
        currentPath = routes[newPath] ? newPath : '/';
        CurrentComponent = routes[currentPath];
      });
      
      // Add accessibility focus outline to the document
      const style = document.createElement('style');
      style.textContent = `
        :focus:not(:focus-visible) {
          outline: none;
        }
        :focus-visible {
          outline: 3px solid #60C3F0;
          outline-offset: 2px;
        }
      `;
      document.head.appendChild(style);
    });
  </script>
  
  <div class="app">
    <header>
      <div class="logo-container">
        <!-- Left content - UK Coaching logo -->
        <div class="left-logo">
          <img src="/images/logos/uk_coaching.png" alt="UK Coaching" width="100" />
        </div>
        
        <!-- Center content - Main logo -->
        <div class="center-logo">
          <a 
            href="/" 
            on:click|preventDefault={handleLogoClick}
            aria-label="Straight To The Point Darts Home"
          >
            <img src="/images/logos/sttpd-logo-170x170.png" alt="" width="125" />
          </a>
        </div>
        
        <!-- Right content - Social links -->
        <div class="social-links">
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Visit our Facebook page"
          >
            <img src="/images/socials/icons8-facebook-48.png" alt="" width="30" />
            <span class="social-text facebook">Facebook</span>
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Visit our Twitter page"
          >
            <img src="/images/socials/icons8-twitter-bird-48.png" alt="" width="30" />
            <span class="social-text twitter">Twitter</span>
          </a>
          <a 
            href="https://youtube.com" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Visit our YouTube channel"
          >
            <img src="/images/socials/icons8-youtube-48.png" alt="" width="30" />
            <span class="social-text youtube">YouTube</span>
          </a>
        </div>
      </div>
      
      <!-- Blue separator -->
      <div class="separator" aria-hidden="true"></div>
      
      <!-- Navigation -->
      <NavBar currentPath={currentPath} onNavigate={navigate} />
      
      <!-- Shadow separator -->
      <div class="shadow-separator" aria-hidden="true"></div>
    </header>
  
    <main>
      <div class="sidebar left" aria-hidden="true"></div>
      <div class="content">
        <svelte:component this={CurrentComponent} />
      </div>
      <div class="sidebar right" aria-hidden="true"></div>
    </main>
  </div>