<!-- Banner.svelte -->
<script>
  // Import any necessary dependencies
  
  // You can add props here if needed
  export let goToHome = () => { window.location.href = '/' };
  
  // Social media URLs - you can replace with actual URLs
  const socialLinks = [
    { 
      name: 'Facebook', 
      url: 'https://www.facebook.com/straightdarts/', 
      icon: '/assets/socials/icons8-facebook-48.png',
      color: '#0E77F0'
    },
    { 
      name: 'Twitter', 
      url: 'https://x.com/StraightDarts', 
      icon: '/assets/socials/icons8-twitter-bird-48.png',
      color: '#1DA1F2'
    },
    { 
      name: 'YouTube', 
      url: 'https://www.youtube.com/channel/UCrQBHCy0uX0IeK2LbrRK2WA', 
      icon: '/assets/socials/icons8-youtube-48.png',
      color: '#FF0000'
    }
  ];
</script>

<div class="banner-wrapper">
<div class="header-banner">
  <!-- Left section - UK Coaching logo -->
  <div class="left-section">
    <img src="/assets/logos/uk_coaching.png" alt="UK Coaching logo">
  </div>

  <!-- Center section - Main logo -->
  <div class="center-section">
    <button class="logo" on:click={goToHome}>
      <img src="/assets/logos/sttpd-logo-170x170.png" alt="Straight To The Point Darts">
    </button>
  </div>

  <!-- Right section - Social links -->
  <div class="right-section">
    {#each socialLinks as link}
      <a href={link.url} class="social-link" style="color: {link.color}" target="_blank" rel="noopener noreferrer">
        <div class="icon-container">
          <img src={link.icon} alt="" aria-hidden="true">
        </div>
        <span>{link.name}</span>
      </a>
    {/each}
  </div>
</div>
</div>

<style>
.banner-wrapper {
  width: 100vw;
  left: 0;
  right: 0;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  background-color: white;
}

.header-banner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 60px;
  background-color: white;
  height: 150px;
  max-width: 1920px;
  margin: 0 auto;
  position: relative;
}

/* Left section - UK Coaching logo */
.left-section {
  flex: 1;
  display: flex;
  justify-content: flex-start;
}

.left-section img {
  height: 100px;
  width: auto;
}

/* Center section - Main logo */
.center-section {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
}

.logo {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  transition: transform 0.2s;
}

.logo:hover {
  transform: scale(1.05);
}

.logo:focus {
  outline: 2px solid #60C3F0; /* Light blue outline for accessibility */
  outline-offset: 4px;
}

.logo img {
  height: 125px;
  width: auto;
}

/* Right section - Social links */
.right-section {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  gap: 27px; /* Match your Godot separation */
}

.social-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: transform 0.2s;
  font-size: 18px;
  font-family: Arial, sans-serif;
}

.social-link:hover {
  transform: translateY(-2px);
}

.icon-container {
  display: flex;
  align-items: center;
}

.social-link img {
  width: 30px;
  height: 30px;
  margin-right: 5px;
}

/* Responsive styles */
@media (max-width: 768px) {
  .header-banner {
    flex-direction: column;
    padding: 15px;
    height: auto;
    gap: 15px;
  }

  .left-section {
    order: 2;
    justify-content: center;
  }

  .center-section {
    position: relative;
    left: 0;
    transform: none;
    order: 1;
  }

  .right-section {
    order: 3;
    flex-wrap: wrap;
    justify-content: center;
  }

  .left-section img, 
  .logo img {
    height: 80px;
  }
  
  .social-link {
    font-size: 16px;
  }
}
</style>