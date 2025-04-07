<!-- 
  PageWidget component with accessibility fixes
  Represents a clickable content card with hover animations
-->
<script lang="ts">
    import { onMount } from 'svelte';
    import { spring } from 'svelte/motion';
    
    // Props for the widget
    export let name = 'Widget Title';
    export let description = '';
    export let image = '';
    export let link = '/';
    
    // Animation state
    let isHovered = false;
    let titleSize = spring(21); // Normal font size
    let titleColor = spring(1); // White (1) to blue (0)
    
    // Handle hover states
    function handleMouseEnter() {
      isHovered = true;
      titleSize.set(24); // Larger font size on hover
      titleColor.set(0); // Blue color on hover (0 = blue, 1 = white)
    }
    
    function handleMouseLeave() {
      isHovered = false;
      titleSize.set(21); // Back to normal size
      titleColor.set(1); // Back to white color
    }
  
    // Handle keyboard navigation
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Enter' || event.key === ' ') {
        window.location.href = link;
      }
    }
    
    // Calculate color based on the titleColor spring value
    $: colorStyle = `rgb(${$titleColor * 255}, ${$titleColor * 255}, ${$titleColor * 255})`;
    $: hoverColor = `rgb(${96}, ${195}, ${240})`; // #60C3F0 light blue
  </script>
  
  <a 
    href={link} 
    class="widget" 
    on:mouseenter={handleMouseEnter} 
    on:mouseleave={handleMouseLeave}
    on:keydown={handleKeyDown}
    aria-labelledby={`widget-title-${name.toLowerCase().replace(/\s+/g, '-')}`}
  >
    <div class="image-container">
      <div class="image-border" aria-hidden="true"></div>
      <div class="image-wrapper">
        <img src={image} alt="" aria-hidden="true" />
      </div>
    </div>
    
    <div class="info-container">
      <div class="info-panel" style="background-color: #13475D;"> <!-- Dark blue color -->
        <div class="title">
          <h3 
            id={`widget-title-${name.toLowerCase().replace(/\s+/g, '-')}`}
            style="font-size: {$titleSize}px; color: {isHovered ? hoverColor : colorStyle};"
          >
            {name}
          </h3>
          <p class="description">{description}</p>
        </div>
      </div>
    </div>
  </a>
  
  <style>
    .widget {
      display: flex;
      flex-direction: column;
      width: 500px;
      text-decoration: none;
      margin: 20px;
      position: relative;
    }
    
    .image-container {
      position: relative;
      height: 300px;
      margin-bottom: -70px; /* Overlap with info container */
    }
    
    .image-wrapper {
      position: relative;
      height: 100%;
      z-index: 1;
    }
    
    img {
      width: 100%;
      height: calc(100% - 67px);
      object-fit: cover;
      border-radius: 5px;
    }
    
    .info-container {
      position: relative;
      z-index: 2;
    }
    
    .info-panel {
      height: 75px;
      border-radius: 0 0 5px 5px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    .title {
      padding: 10px;
      width: 100%;
    }
    
    h3 {
      text-align: center;
      font-family: 'Arial', sans-serif;
      font-weight: bold;
      margin: 0;
      transition: color 0.2s;
    }
    
    .description {
      font-size: 11px;
      color: white;
      margin: 5px 0 0;
      max-width: 300px;
      text-align: center;
    }
  
    /* Focus style for keyboard navigation */
    .widget:focus {
      outline: 3px solid #60C3F0;
      outline-offset: 2px;
    }
  </style>