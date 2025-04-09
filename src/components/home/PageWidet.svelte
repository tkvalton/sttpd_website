<!-- 
  Enhanced PageWidget component with title overlay
-->
<script lang="ts">
  import { spring } from 'svelte/motion';
  import { getContext } from 'svelte';

  // Add type definition for the navigation function
  const navigate = getContext<(path: string) => void>('navigate');
  
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

  // Handle click navigation
  function handleClick() {
    if (navigate) {
      navigate(link);
    } else {
      // Fallback if navigation function is not available in context
      console.warn('Navigation function not found in context, using window.location');
      window.location.href = link;
    }
  }

  // Handle keyboard navigation
  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      handleClick();
    }
  }
  
  // Calculate color based on the titleColor spring value
  $: colorStyle = `rgb(${$titleColor * 255}, ${$titleColor * 255}, ${$titleColor * 255})`;
  $: hoverColor = `rgb(${96}, ${195}, ${240})`; // #60C3F0 light blue
</script>

<div 
  class="widget" 
  on:mouseenter={handleMouseEnter} 
  on:mouseleave={handleMouseLeave}
  on:click|preventDefault={handleClick}
  on:keydown={handleKeyDown}
  role="button"
  tabindex="0"
  aria-label={`Navigate to ${name}`}
>
  <div class="widget-inner">
    <div class="image-container" class:hovered={isHovered}>
      <div class="image-wrapper">
        <img 
          src={image} 
          alt="" 
          class:hovered={isHovered}
        />
      </div>
      <div class="image-overlay" class:active={isHovered}></div>
      <div class="image-title">
        <h3 
          style="font-size: {$titleSize}px; color: {isHovered ? hoverColor : colorStyle};"
        >
          {name}
        </h3>
      </div>
    </div>

    <div class="info-container">
      <div class="info-panel" class:hovered={isHovered}>
        <div class="content">
          <p>{description}</p>
        </div>
        <div class="hover-indicator" class:active={isHovered}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .widget {
    display: block;
    width: 100%;
    height: 100%; /* Ensure full height */
    max-width: 500px;
    min-height: 400px; /* Set a minimum height */
    margin: 0 auto;
    cursor: pointer;
    perspective: 1000px;
    transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  }

  .widget:hover,
  .widget:focus-visible {
    transform: translateY(-10px) rotateX(2deg);
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.15);
  }

  .widget:focus {
    outline: 3px solid #60C3F0;
    outline-offset: 2px;
  }

  .widget-inner {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }

  .image-container {
    position: relative;
    height: 300px;
    min-height: 250px; /* Ensure minimum image height */
    overflow: hidden;
    transition: all 0.4s ease;
  }

  .image-wrapper {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
  }

  .image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  .image-container.hovered img {
    transform: scale(1.1);
  }

  .image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(19, 71, 93, 0);
    transition: background-color 0.4s ease;
    z-index: 2;
  }

  .image-overlay.active {
    background-color: rgba(19, 71, 93, 0.2);
  }

  .image-title {
    position: absolute;
    bottom: 10px;
    right: 10px;
    z-index: 3;
    background-color: rgba(19, 71, 93, 0.7);
    padding: 5px 10px;
    border-radius: 5px;
  }

  .image-title h3 {
    margin: 0;
    font-family: 'TheBoLDFont', sans-serif;
    font-size: 18px;
    transition: color 0.2s, font-size 0.2s;
  }

  .info-container {
    flex-grow: 1; /* Allow info panel to expand */
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 0; /* Remove the negative margin */
  }

  .info-panel {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    background-color: #13475D;
    transition: background-color 0.4s ease;
  }

  .info-panel.hovered {
    background-color: #0e3047;
  }

  .content {
    flex-grow: 1;
    padding-right: 20px;
  }

  .content p {
    font-family: 'Montserrat', sans-serif;
    color: rgba(255,255,255,0.8);
    margin: 0;
    font-size: 15px;
    text-align: left;
  }

  .hover-indicator {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: rgba(255,255,255,0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.4s ease;
    opacity: 0;
    transform: translateX(10px);
  }

  .hover-indicator.active {
    opacity: 1;
    transform: translateX(0);
  }

  .hover-indicator svg {
    width: 24px;
    height: 24px;
    color: white;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .widget {
      min-height: 350px;
    }

    .image-container {
      height: 250px;
      min-height: 200px;
    }

    .image-title h3 {
      font-size: 16px !important;
    }
  }

  @media (max-width: 480px) {
    .widget {
      min-height: 300px;
    }

    .image-container {
      height: 200px;
      min-height: 150px;
    }
  }
</style>