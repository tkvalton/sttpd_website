<!-- src/components/general/AnimatedSection.svelte -->
<script lang="ts">
    // Props
    export let index = 0; // Order in the animation sequence
    export let isVisible = false; // Controlled by parent
    export let stagger = 100; // Delay between sections (ms)
    export let className = ""; // Additional CSS classes
    
    // Calculate delay based on index and stagger
    $: animationDelay = index * stagger;
  </script>
  
  <section 
    class="animated-section {className}" 
    class:visible={isVisible}
    style="transition-delay: {animationDelay}ms;"
  >
    <slot></slot>
  </section>
  
  <style>
    .animated-section {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.8s ease, transform 0.8s ease;
    }
    
    .animated-section.visible {
      opacity: 1;
      transform: translateY(0);
    }
  </style>