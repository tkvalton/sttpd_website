<!--
  ServicePanel.svelte - Perfect match version 
  Precisely matching Image 2 mockup with correct highlight text styling
-->
<script lang="ts">
    // Service information props
    export let title = "Service Title";
    export let highlightText = "";
    export let description = "";
    export let price = "";
    export let reverse = false;
  
    // Optional information for the right panel
    export let instructions: string[] = [];
    
    // Split the description into paragraphs
    $: descriptionParagraphs = description.split('\n\n').filter(p => p.trim() !== '');
  </script>
  
  <section class="service-panel">
    <div class="panel-content" class:reverse>
      <div class="panel-left">
        <h2>{title}</h2>
        
        {#if highlightText}
          <p class="highlight-text">{highlightText}</p>
        {/if}
        
        <div class="divider"></div>
        
        <div class="service-description">
          {#each descriptionParagraphs as paragraph}
            <p>{paragraph}</p>
          {/each}
        </div>
      </div>
      
      <div class="panel-right">
        {#if instructions.length > 0}
          <div class="instructions-container">
            {#each instructions as instruction}
              <p class="instruction-text">{instruction}</p>
            {/each}
          </div>
        {/if}
        
        <div class="buy-section">
          <button class="buy-button">BUY NOW</button>
          <p class="price">{price}</p>
        </div>
      </div>
    </div>
  </section>
  
  <style>
    .service-panel {
      width: 100%;
      margin-bottom: 30px;
    }
    
    .panel-content {
      display: flex;
      width: 100%;
    }
    
    .panel-content.reverse {
      flex-direction: row-reverse;
    }
    
    .panel-left {
      flex: 1;
      background-color: #60C3F0;
      padding: 30px;
      color: white;
      position: relative;
    }
    
    .panel-right {
      width: 350px;
      background-color: #13475D;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 30px;
      position: relative;
    }
    
    h2 {
      font-size: 30px;
      color: white;
      margin-top: 0;
      margin-bottom: 20px;
      font-family: 'TheBoLDFont', sans-serif;
      text-transform: uppercase;
      font-weight: bold;
      text-align: center;
    }
    
    .highlight-text {
      color: #13475D;
      font-size: 20px;
      font-weight: bold;
      margin: 15px 0;
      text-transform: uppercase;
      font-family: 'TheBoLDFont', sans-serif;
      line-height: 1.3;
      text-align: center;
    }
    
    .divider {
      height: 1px;
      background-color: white;
      margin: 15px auto;
      width: 100%;
    }
    
    .service-description {
      margin-top: 20px;
    }
    
    .service-description p {
      font-size: 16px;
      line-height: 1.5;
      margin-bottom: 20px;
      color: white;
      text-align: center;
    }
    
    .instructions-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-bottom: 40px;
    }
    
    .instruction-text {
      color: white;
      font-size: 15px;
      font-weight: bold;
      text-align: center;
      margin: 15px 0;
      text-transform: uppercase;
    }
    
    .buy-section {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: auto;
    }
    
    .buy-button {
      background-color: #C70D48;
      color: white;
      border: none;
      border-radius: 25px;
      padding: 12px 40px;
      font-size: 16px;
      font-weight: bold;
      cursor: pointer;
      transition: background-color 0.3s;
      text-transform: uppercase;
      font-family: 'TheBoLDFont', sans-serif;
    }
    
    .buy-button:hover {
      background-color: #A00A37;
    }
    
    .price {
      color: white;
      font-size: 30px;
      font-weight: bold;
      margin-top: 15px;
      font-family: 'TheBoLDFont', sans-serif;
    }
    
    /* Responsive styles */
    @media (max-width: 768px) {
      .panel-content, .panel-content.reverse {
        flex-direction: column;
      }
      
      .panel-right {
        width: 100%;
      }
      
      h2 {
        font-size: 24px;
      }
      
      .highlight-text {
        font-size: 16px;
      }
      
      .service-description p {
        font-size: 15px;
      }
      
      .buy-section {
        margin-top: 20px;
      }
    }
  </style>