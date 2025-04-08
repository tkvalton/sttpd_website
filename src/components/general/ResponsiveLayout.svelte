<!-- ResponsiveLayout.svelte -->
<script lang="ts">
    export let padding = true;
    export let fullWidth = false;
    export let centerContent = false;
    export let maxWidth: string | null = null; // Custom max-width if needed
  </script>
  
  <div class="responsive-container" class:no-padding={!padding} class:full-width={fullWidth} class:center-content={centerContent} style={maxWidth ? `max-width: ${maxWidth}` : ''}>
    <slot></slot>
  </div>
  
  <style>
    .responsive-container {
      width: 100%;
      margin: 0 auto;
      padding-left: var(--container-padding-desktop, 60px);
      padding-right: var(--container-padding-desktop, 60px);
      max-width: var(--content-max-width, 1200px);
      box-sizing: border-box;
    }
    
    .no-padding {
      padding-left: 0;
      padding-right: 0;
    }
    
    .full-width {
      max-width: 100%;
    }
    
    .center-content {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    
    @media (max-width: 1200px) {
      .responsive-container {
        padding-left: var(--container-padding-tablet, 40px);
        padding-right: var(--container-padding-tablet, 40px);
      }
    }
    
    @media (max-width: 768px) {
      .responsive-container {
        padding-left: var(--container-padding-mobile, 20px);
        padding-right: var(--container-padding-mobile, 20px);
      }
    }
  </style>