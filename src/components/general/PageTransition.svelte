<!-- src/components/general/PageTransition.svelte -->
<script lang="ts">
    import { onMount } from 'svelte';
    
    // Props
    export let delay = 300; // Delay before starting animations (ms)
    export let stagger = 100; // Delay between child animations (ms)
    
    // Internal state
    let isVisible = false;
    
    onMount(() => {
      // Trigger animations after the specified delay
      setTimeout(() => {
        isVisible = true;
      }, delay);
    });
  </script>
  
  <div class="page-transition" class:visible={isVisible}>
    <slot {isVisible} {stagger}></slot>
  </div>
  
  <style>
    .page-transition {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.8s ease, transform 0.8s ease;
    }
    
    .page-transition.visible {
      opacity: 1;
      transform: translateY(0);
    }
  </style>