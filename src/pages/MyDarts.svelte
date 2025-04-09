<!-- src/pages/MyDarts.svelte -->
<script lang="ts">
    import Testimonials from '../components/general/Testimonials.svelte';
    import DartsGallery from '../components/my_darts/DartsGallery.svelte';
    import Footer from '../components/general/Footer.svelte';
    import { onMount } from 'svelte';
    
    // Define the type for the gallery change event detail
    interface GalleryChangeEvent {
      detail: {
        index: number;
      }
    }
    
    // Images for the gallery
    const images = [
      '/assets/images/darts/1000013129-1024x577.png', // Main image with descriptions
      '/assets/images/darts/1000013122-1024x577.jpg',
      '/assets/images/darts/1000013126-1024x577.jpg',
      '/assets/images/darts/1000013128-1024x577.png'
    ];
  
    // Technical specifications with icons
    const specifications = [
      { spec: '43mm long', icon: '📏' },
      { spec: '7.1mm wide', icon: '⚙️' },
      { spec: '90% Tungsten', icon: '🔧' },
      { spec: 'Laser etched logo', icon: '✨' },
      { spec: 'Wide double ring grip', icon: '👌' },
      { spec: 'Front weighted design', icon: '🎯' }
    ];
    
    // For animating in the elements
    let isVisible = false;
    
    onMount(() => {
      // Trigger animation when component is mounted
      setTimeout(() => {
        isVisible = true;
      }, 300);
    });
    
    // Handle gallery image change event with proper typing
    function handleGalleryChange(event: CustomEvent<{index: number}>) {
      console.log('Gallery image changed:', event.detail.index);
      // You could use this to update other parts of the UI based on which image is shown
    }
  </script>
  
  <div class="mydarts-page">
    <div class="content-wrapper">
      <!-- Hero Section -->
      <section class="hero-section" class:visible={isVisible}>
        <h1>MY DARTS</h1>
        <div class="signature-line">Daniel Poole Signature Darts</div>
        <div class="divider"></div>
        <p class="hero-description">
          Handmade by CustomMade Darts, these premium darts are designed to be very front weighted to help the dart travel to the board with little effort.
        </p>
      </section>
  
      <!-- Gallery Section - Using our enhanced DartsGallery component -->
      <section class="gallery-section" class:visible={isVisible}>
        <DartsGallery {images} startIndex={0} on:change={handleGalleryChange} />
      </section>
  
      <!-- Specifications Section -->
      <section class="specs-section" class:visible={isVisible}>
        <h2>TECHNICAL SPECIFICATIONS</h2>
        <div class="specs-container">
          {#each specifications as spec, index}
            <div 
              class="spec-item" 
              style="animation-delay: {index * 100}ms"
              class:visible={isVisible}
            >
              <div class="spec-icon">{spec.icon}</div>
              <div class="spec-text">{spec.spec}</div>
            </div>
          {/each}
        </div>
      </section>
  
      <!-- Purchase Section - Updated version with highlighted email instead of button -->
      <section class="purchase-section" class:visible={isVisible}>
        <div class="purchase-card">
          <div class="price-container">
            <div class="price-tag">£40</div>
            <div class="price-details">
              <p>Free UK wide postage</p>
              <p>Additional £6 applies for international postage</p>
            </div>
          </div>
          
          <div class="purchase-details">
            <h3>HOW TO ORDER</h3>
            <p>To purchase these premium darts, please email:</p>
            <a 
              href="mailto:straighttothepointdarts@gmail.com?subject=Darts%20Purchase%20Inquiry&body=Hello,%0A%0AI'm%20interested%20in%20purchasing%20your%20signature%20darts.%20Please%20provide%20me%20with%20payment%20details.%0A%0AThank%20you!" 
              class="email-link highlighted"
            >
              straighttothepointdarts@gmail.com
            </a>
          </div>
        </div>
      </section>
      
      <!-- Features List Section -->
      <section class="features-section" class:visible={isVisible}>
        <h2>WHY CHOOSE THESE DARTS?</h2>
        
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🎯</div>
            <h3>Professional Quality</h3>
            <p>Used by professional players for their precision and consistency</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">⚡</div>
            <h3>Premium Performance</h3>
            <p>90% tungsten provides optimal weight distribution and durability</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">👌</div>
            <h3>Comfort Grip</h3>
            <p>Wide double ring grip provides perfect control for any throw style</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">🛠️</div>
            <h3>Custom Made</h3>
            <p>Handcrafted to precision specifications by CustomMade Darts</p>
          </div>
        </div>
      </section>
    </div>
    
    <!-- Using the reusable Testimonials component -->
    <Testimonials/>
    
    <Footer />
  </div>
  
  <style>
    .mydarts-page {
      width: 100%;
      background-color: white;
    }
  
    .content-wrapper {
      padding: 30px 60px;
      max-width: 1300px;
      margin: 0 auto;
    }
    
    /* Shared animation for sections */
    .hero-section, .gallery-section, .specs-section, .purchase-section, .features-section {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.8s ease, transform 0.8s ease;
    }
    
    .hero-section.visible, .gallery-section.visible, .specs-section.visible, .purchase-section.visible, .features-section.visible {
      opacity: 1;
      transform: translateY(0);
    }
    
    /* Hero Section Styles */
    .hero-section {
      text-align: center;
      margin-bottom: 40px;
    }
    
    h1 {
      font-family: 'TheBoLDFont', sans-serif;
      font-size: 38px;
      color: #13475D;
      margin-bottom: 10px;
    }
    
    .signature-line {
      font-family: 'TheBoLDFont', sans-serif;
      font-size: 24px;
      color: #60C3F0;
      margin-bottom: 15px;
    }
    
    .divider {
      height: 3px;
      width: 150px;
      background-color: #13475D;
      margin: 0 auto 20px;
    }
    
    .hero-description {
      font-family: 'Montserrat', sans-serif;
      font-size: 18px;
      color: #333;
      max-width: 800px;
      margin: 0 auto;
      line-height: 1.6;
    }
    
    /* Gallery Styles */
    .gallery-section {
      margin-bottom: 60px;
    }
    
    /* Specifications Styles */
    .specs-section {
      background-color: #F5F9FC;
      padding: 40px;
      border-radius: 12px;
      margin-bottom: 60px;
    }
    
    .specs-section h2 {
      text-align: center;
      font-family: 'TheBoLDFont', sans-serif;
      font-size: 28px;
      color: #13475D;
      margin-bottom: 30px;
    }
    
    .specs-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 30px;
    }
    
    .spec-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 160px;
      text-align: center;
      opacity: 0;
      transform: translateY(15px);
      transition: opacity 0.5s ease, transform 0.5s ease;
    }
    
    .spec-item.visible {
      opacity: 1;
      transform: translateY(0);
    }
    
    .spec-icon {
      font-size: 32px;
      margin-bottom: 10px;
    }
    
    .spec-text {
      font-family: 'Montserrat', sans-serif;
      font-weight: 600;
      color: #333;
    }
    
    /* Purchase Section Styles */
    .purchase-section {
      margin-bottom: 60px;
    }
    
    .purchase-card {
      display: flex;
      background: linear-gradient(to right, #13475D, #60C3F0);
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
    }
    
    .price-container {
      flex: 1;
      background-color: #13475D;
      padding: 40px;
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    
    .price-tag {
      font-family: 'TheBoLDFont', sans-serif;
      font-size: 48px;
      margin-bottom: 20px;
      position: relative;
      background: linear-gradient(to bottom, #FFFFFF, #FFDE59);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      filter: drop-shadow(0 2px 3px rgba(0, 0, 0, 0.3));
    }
    
    .price-details {
      text-align: center;
      font-family: 'Montserrat', sans-serif;
      font-size: 14px;
    }
    
    .purchase-details {
      flex: 2;
      padding: 40px;
      background-color: #60C3F0;
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    
    .purchase-details h3 {
      font-family: 'TheBoLDFont', sans-serif;
      font-size: 24px;
      margin-bottom: 15px;
    }
    
    .purchase-details p {
      font-family: 'Montserrat', sans-serif;
      margin-bottom: 10px;
      text-align: center;
    }
    
    .email-link {
      color: white;
      font-weight: bold;
      text-decoration: underline;
      margin-bottom: 5px;
      font-size: 20px;
      transition: all 0.3s ease;
      padding: 10px 20px;
      border-radius: 30px;
    }
    
    .email-link.highlighted {
      background-color: #FF6B00;
      color: white;
      text-decoration: none;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
    
    .email-link.highlighted:hover {
      background-color: #FF8533;
      transform: translateY(-3px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
    }
    
    /* Feature Section Styles (NEW) */
    .features-section {
      margin-bottom: 60px;
    }
    
    .features-section h2 {
      text-align: center;
      font-family: 'TheBoLDFont', sans-serif;
      font-size: 28px;
      color: #13475D;
      margin-bottom: 30px;
    }
    
    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 25px;
    }
    
    .feature-card {
      background-color: #F9FBFD;
      border-radius: 10px;
      padding: 25px;
      text-align: center;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .feature-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    }
    
    .feature-icon {
      font-size: 36px;
      margin-bottom: 15px;
    }
    
    .feature-card h3 {
      font-family: 'TheBoLDFont', sans-serif;
      font-size: 20px;
      color: #13475D;
      margin-bottom: 10px;
    }
    
    .feature-card p {
      font-family: 'Montserrat', sans-serif;
      font-size: 14px;
      color: #555;
    }
    
    /* Responsive styles */
    @media (max-width: 1200px) {
      .content-wrapper {
        padding: 20px 40px;
      }
      
      .purchase-card {
        flex-direction: column;
      }
      
      .price-container, .purchase-details {
        width: 100%;
        padding: 30px;
      }
    }
    
    @media (max-width: 768px) {
      .content-wrapper {
        padding: 15px;
      }
      
      h1 {
        font-size: 32px;
      }
      
      .signature-line {
        font-size: 20px;
      }
      
      .hero-description {
        font-size: 16px;
      }
      
      .specs-section {
        padding: 20px;
      }
      
      .specs-section h2 {
        font-size: 24px;
      }
      
      .specs-container {
        gap: 15px;
      }
      
      .spec-item {
        width: 120px;
      }
      
      .price-tag {
        font-size: 36px;
      }
      
      .feature-card {
        padding: 15px;
      }
      
      .email-link {
        font-size: 18px;
        padding: 8px 16px;
      }
    }
  </style>