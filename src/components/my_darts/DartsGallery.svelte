<!-- src/components/mydarts/DartsGallery.svelte -->
<script lang="ts">
    import { onMount, createEventDispatcher } from 'svelte';
    import { spring } from 'svelte/motion';
    import { fade, fly } from 'svelte/transition';
    
    // Props
    export let images: string[] = [];
    export let startIndex: number = 0;
    
    // State
    let currentImageIndex = startIndex;
    let isFullscreen = false;
    let touchStartX = 0;
    let touchEndX = 0;
    let galleryElement: HTMLElement;
    
    // Create an event dispatcher for external components
    const dispatch = createEventDispatcher();
    
    // Image scale animation with spring physics
    const scale = spring(1);
    
    function setImage(index: number) {
      if (index < 0) {
        currentImageIndex = images.length - 1;
      } else if (index >= images.length) {
        currentImageIndex = 0;
      } else {
        currentImageIndex = index;
      }
      
      // Reset scale animation - fixed by removing stiffness parameter
      scale.set(0.95, { hard: true });
      scale.set(1);
      
      // Dispatch the change event
      dispatch('change', { index: currentImageIndex });
    }
    
    function nextImage() {
      setImage(currentImageIndex + 1);
    }
    
    function prevImage() {
      setImage(currentImageIndex - 1);
    }
    
    function toggleFullscreen() {
      isFullscreen = !isFullscreen;
      if (isFullscreen) {
        document.body.style.overflow = 'hidden'; // Prevent scrolling when fullscreen
      } else {
        document.body.style.overflow = ''; // Restore scrolling
      }
    }
    
    // Handle keyboard navigation
    function handleKeydown(event: KeyboardEvent) {
      if (isFullscreen) {
        if (event.key === 'ArrowRight') {
          nextImage();
        } else if (event.key === 'ArrowLeft') {
          prevImage();
        } else if (event.key === 'Escape') {
          toggleFullscreen();
        }
      }
    }
    
    // Handle touch events for swipe
    function handleTouchStart(event: TouchEvent) {
      touchStartX = event.touches[0].clientX;
    }
    
    function handleTouchMove(event: TouchEvent) {
      touchEndX = event.touches[0].clientX;
    }
    
    function handleTouchEnd() {
      // Calculate swipe direction
      if (touchStartX - touchEndX > 50) {
        // Swipe left, show next image
        nextImage();
      } else if (touchEndX - touchStartX > 50) {
        // Swipe right, show previous image
        prevImage();
      }
      
      // Reset touch points
      touchStartX = 0;
      touchEndX = 0;
    }
    
    onMount(() => {
      // Add global keyboard listener
      window.addEventListener('keydown', handleKeydown);
      
      // Cleanup on destroy
      return () => {
        window.removeEventListener('keydown', handleKeydown);
        document.body.style.overflow = ''; // Ensure scrolling is restored
      };
    });
  </script>
  
  <div 
    class="darts-gallery" 
    bind:this={galleryElement}
  >
    <div class="gallery-container">
      <!-- Main Image -->
      <div 
        class="main-image-container" 
        on:click={toggleFullscreen} 
        on:keydown={(e) => e.key === 'Enter' && toggleFullscreen()} 
        role="button" 
        tabindex="0"
        aria-label="View image fullscreen"
      >
        <img 
          src={images[currentImageIndex]} 
          alt="Darts product view" 
          class="main-image"
          style="transform: scale({$scale})"
        />
        
        <button class="zoom-icon" aria-label="Toggle fullscreen view">
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none">
            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
          </svg>
        </button>
      </div>
      
      <!-- Thumbnails -->
      <div class="thumbnail-strip">
        {#each images as image, index}
          <button 
            class="thumbnail" 
            class:active={currentImageIndex === index}
            on:click={() => setImage(index)}
            aria-label={`View darts image ${index + 1}`}
            aria-current={currentImageIndex === index}
          >
            <img src={image} alt={`Darts view ${index + 1}`} />
          </button>
        {/each}
      </div>
      
      <!-- Navigation buttons (visible on hover) -->
      {#if images.length > 1}
        <button 
          class="nav-button prev" 
          on:click|stopPropagation={prevImage}
          aria-label="Previous image"
        >
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        
        <button 
          class="nav-button next" 
          on:click|stopPropagation={nextImage}
          aria-label="Next image"
        >
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      {/if}
    </div>
    
    <!-- Fullscreen overlay -->
    {#if isFullscreen}
      <div 
        class="fullscreen-overlay"
        on:touchstart={handleTouchStart}
        on:touchmove={handleTouchMove}
        on:touchend={handleTouchEnd}
        transition:fade={{ duration: 200 }}
      >
        <div class="fullscreen-content" transition:fly={{ y: 20, duration: 300 }}>
          <img 
            src={images[currentImageIndex]} 
            alt="Darts fullscreen view" 
            class="fullscreen-image"
            style="transform: scale({$scale})"
          />
          
          <button 
            class="close-button" 
            on:click={toggleFullscreen}
            aria-label="Close fullscreen view"
          >
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          
          {#if images.length > 1}
            <button 
              class="fullscreen-nav prev" 
              on:click|stopPropagation={prevImage}
              aria-label="Previous image"
            >
              <svg viewBox="0 0 24 24" width="36" height="36" stroke="currentColor" stroke-width="2" fill="none">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            
            <button 
              class="fullscreen-nav next" 
              on:click|stopPropagation={nextImage}
              aria-label="Next image"
            >
              <svg viewBox="0 0 24 24" width="36" height="36" stroke="currentColor" stroke-width="2" fill="none">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
            
            <div class="pagination">
              {currentImageIndex + 1} / {images.length}
            </div>
          {/if}
        </div>
      </div>
    {/if}
  </div>
  
  <style>
    .darts-gallery {
      width: 100%;
      position: relative;
    }
    
    .gallery-container {
      position: relative;
      width: 100%;
    }
    
    .main-image-container {
      position: relative;
      overflow: hidden;
      border-radius: 8px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      cursor: pointer;
      aspect-ratio: 16 / 9;
      background-color: #f8f8f8;
    }
    
    .main-image {
      width: 100%;
      height: 100%;
      object-fit: contain;
      transition: transform 0.3s ease;
    }
    
    .main-image-container:hover .main-image {
      transform: scale(1.02);
    }
    
    .zoom-icon {
      position: absolute;
      bottom: 15px;
      right: 15px;
      background-color: rgba(19, 71, 93, 0.8);
      color: white;
      border: none;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: background-color 0.3s;
      opacity: 0;
      transform: translateY(10px);
      transition: opacity 0.3s, transform 0.3s;
    }
    
    .main-image-container:hover .zoom-icon {
      opacity: 1;
      transform: translateY(0);
    }
    
    .zoom-icon:hover {
      background-color: rgba(19, 71, 93, 1);
    }
    
    .thumbnail-strip {
      display: flex;
      gap: 10px;
      margin-top: 15px;
      justify-content: center;
      flex-wrap: wrap;
    }
    
    .thumbnail {
      width: 80px;
      height: 60px;
      border-radius: 4px;
      overflow: hidden;
      cursor: pointer;
      padding: 0;
      border: 2px solid transparent;
      transition: all 0.2s ease;
      background: none;
    }
    
    .thumbnail:hover {
      transform: translateY(-3px);
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    }
    
    .thumbnail.active {
      border-color: #60C3F0;
    }
    
    .thumbnail img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    .nav-button {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background-color: rgba(255, 255, 255, 0.6);
      color: #13475D;
      border: none;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      opacity: 0;
      transition: opacity 0.3s, background-color 0.3s;
      z-index: 2;
    }
    
    .nav-button.prev {
      left: 15px;
    }
    
    .nav-button.next {
      right: 15px;
    }
    
    .gallery-container:hover .nav-button {
      opacity: 1;
    }
    
    .nav-button:hover {
      background-color: rgba(255, 255, 255, 0.9);
    }
    
    /* Fullscreen Overlay */
    .fullscreen-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.9);
      z-index: 1000;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    .fullscreen-content {
      position: relative;
      width: 90%;
      height: 90%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    .fullscreen-image {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }
    
    .close-button {
      position: absolute;
      top: -40px;
      right: 0;
      background: none;
      border: none;
      color: white;
      font-size: 24px;
      cursor: pointer;
      z-index: 1001;
    }
    
    .fullscreen-nav {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background-color: rgba(255, 255, 255, 0.2);
      color: white;
      border: none;
      border-radius: 50%;
      width: 60px;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: background-color 0.3s;
    }
    
    .fullscreen-nav.prev {
      left: -80px;
    }
    
    .fullscreen-nav.next {
      right: -80px;
    }
    
    .fullscreen-nav:hover {
      background-color: rgba(255, 255, 255, 0.3);
    }
    
    .pagination {
      position: absolute;
      bottom: -40px;
      left: 0;
      right: 0;
      text-align: center;
      color: white;
      font-size: 16px;
    }
    
    /* Responsive styles */
    @media (max-width: 768px) {
      .thumbnail {
        width: 60px;
        height: 45px;
      }
      
      .fullscreen-nav.prev {
        left: 10px;
      }
      
      .fullscreen-nav.next {
        right: 10px;
      }
      
      .nav-button {
        opacity: 1;
        background-color: rgba(255, 255, 255, 0.8);
      }
    }
  </style>