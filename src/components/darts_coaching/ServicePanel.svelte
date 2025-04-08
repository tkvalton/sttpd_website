<!--
  ServicePanel.svelte - Updated with customizable colors, benefits section, and image support
-->
<script lang="ts">
    // Service information props
    export let title = "Service Title";
    export let highlightText = "";
    export let description = "";
    export let price = "";
    export let reverse = false;
    export let buyLink = "";
    export let buttonText = "TRANSFORM MY GAME"; // Customizable button text
    
    // New color customization
    export let leftPanelColor = "#60C3F0";
    export let rightPanelColor = "#13475D";
    export let highlightTextColor = "#13475D"; // Add this line for customizable highlight text color
    export let buttonColor = "#FF6B00"; // Changed to orange
    export let buttonHoverColor = "#E05A00";
    
    // Image support
    export let rightPanelImage = ""; // Path to the image for the right panel
    export let imageOpacity = 0.15; // Default opacity for the background image
    export let imagePosition = "top right"; // Image position (top left, top right, etc.)
    
    // Optional information for the right panel
    export let instructions: string[] = [];
    
    // New key benefits section
    export let keyBenefits: string[] = [];
    export let benefitsTitleColor = "#FFDE59"; // Gold color for benefits title
    export let benefitsTextColor = "#FFFFFF"; // Default white for benefit text
    
    // Split the description into paragraphs
    $: descriptionParagraphs = description.split('\n\n').filter(p => p.trim() !== '');
</script>
  
<section class="service-panel">
  <div class="panel-content" class:reverse>
    <div class="panel-left" style="background-color: {leftPanelColor}">
      <h2>{title}</h2>
      
      {#if highlightText}
        <p class="highlight-text" style="color: {highlightTextColor};">{highlightText}</p>
      {/if}
      
      <div class="divider"></div>
      
      {#if keyBenefits.length > 0}
        <h3 class="benefits-title" style="color: {benefitsTitleColor}">KEY BENEFITS</h3>
        <ul class="benefits-list">
          {#each keyBenefits as benefit}
            <li style="color: {benefitsTextColor};">{benefit}</li>
          {/each}
        </ul>
        <div class="mini-divider"></div>
      {/if}
      
      <div class="service-description">
        {#each descriptionParagraphs as paragraph}
          <p>{paragraph}</p>
        {/each}
      </div>
    </div>
    
    <div 
      class="panel-right" 
      style="background-color: {rightPanelColor};"
    >
      {#if rightPanelImage}
        <div class="image-overlay" style="background-image: url('{rightPanelImage}'); background-position: {imagePosition}; opacity: {imageOpacity};"></div>
      {/if}
      
      {#if instructions.length > 0}
        <div class="instructions-container">
          {#each instructions as instruction}
            <p class="instruction-text">{instruction}</p>
          {/each}
        </div>
      {/if}
      
      <div class="buy-section">
        <a 
          href={buyLink} 
          class="buy-button-link"
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="{buttonText} - opens in a new tab"
        >
          <button class="buy-button" style="background-color: {buttonColor}; --hover-color: {buttonHoverColor}">
            {buttonText}
          </button>
        </a>
        <p class="price">
          <span class="price-value">£{price}</span>
        </p>
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
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
  
  .panel-content.reverse {
    flex-direction: row-reverse;
  }
  
  .panel-left {
    flex: 1;
    padding: 35px;
    color: white;
    position: relative;
  }
  
  .panel-right {
    width: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 35px;
    position: relative;
    overflow: hidden;
  }
  
  .image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-size: contain;
    background-repeat: no-repeat;
    z-index: 1;
    pointer-events: none;
  }
  
  .instructions-container, .buy-section {
    position: relative;
    z-index: 2;
  }
  
  h2 {
    font-size: 32px;
    color: white;
    margin-top: 0;
    margin-bottom: 20px;
    font-family: 'TheBoLDFont', sans-serif;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
  }
  
  .highlight-text {
    font-size: 22px;
    font-weight: bold;
    margin: 15px 0;
    text-transform: uppercase;
    font-family: 'TheBoLDFont', sans-serif;
    line-height: 1.3;
    text-align: center;
  }
  
  .divider {
    height: 2px;
    width: 100%;
    background-color: white;
    margin: 20px 0;
  }
  
  .mini-divider {
    height: 1px;
    width: 70%;
    background-color: rgba(255, 255, 255, 0.5);
    margin: 20px auto;
  }
  
  .benefits-title {
    font-size: 22px;
    font-family: 'TheBoLDFont', sans-serif;
    text-align: center;
    margin: 20px 0 15px;
    text-transform: uppercase;
    font-weight: bold;
  }
  
  .benefits-list {
    list-style-type: none;
    padding: 0;
    margin: 0 0 15px;
  }
  
  .benefits-list li {
    position: relative;
    padding-left: 25px;
    margin-bottom: 12px;
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
    line-height: 1.4;
  }
  
  .benefits-list li:before {
    content: "✓";
    position: absolute;
    left: 0;
    color: #FFDE59; /* Gold color for checkmarks, matching benefits title */
  }
  
  .service-description {
    margin-top: 20px;
  }
  
  .service-description p {
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
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
    font-family: 'TheBoLDFont', sans-serif;
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
  
  .buy-button-link {
    text-decoration: none;
    display: inline-block;
  }
  
  .buy-button {
    color: white;
    border: none;
    border-radius: 25px;
    padding: 14px 40px;
    font-size: 17px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s, box-shadow 0.3s;
    text-transform: uppercase;
    font-family: 'TheBoLDFont', sans-serif;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  .buy-button:hover {
    background-color: var(--hover-color) !important;
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }
  
  .buy-button:active {
    transform: translateY(-1px);
  }
  
  .price {
    color: white;
    font-size: 32px;
    font-weight: bold;
    margin-top: 18px;
    font-family: 'TheBoLDFont', sans-serif;
    text-align: center;
  }
  
  .price-value {
    background: linear-gradient(to bottom, #FFFFFF, #FFDE59);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3));
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
      font-size: 26px;
    }
    
    .benefits-title {
      font-size: 20px;
    }
    
    .highlight-text {
      font-size: 18px;
    }
    
    .service-description p {
      font-size: 15px;
    }
    
    .buy-section {
      margin-top: 20px;
    }
  }
</style>