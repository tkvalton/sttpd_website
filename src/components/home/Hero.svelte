<!-- 
  Improved Hero section component with better responsive design
-->
<script lang="ts">
  // Optional props for customization if needed
  export let showImage: boolean = true;
</script>
  
<section class="hero" aria-labelledby="hero-heading">
  <div class="hero-content">
    <div class="hero-text">
      <p class="hero-description">
        Straight To The Point Darts offers various online darts tuition services dedicated to helping darts players improve and develop their game.
      </p>
      <p class="hero-slogan">WE ARE ALL ABOUT IMPROVEMENT!</p>
      <div class="divider" aria-hidden="true"></div>
      <p class="credentials">PROFESSIONAL DARTS PLAYERS ASSOCIATION OFFICIAL DARTS COACH</p>
    </div>
    {#if showImage}
      <div class="hero-image">
        <img src="/assets/logos/professional_darts_players_association_offical_darts_coach_no_text.png" alt="Badge" />
      </div>
    {/if}
  </div>
</section>
  
<style>
  .hero {
    background-color: #60C3F0;
    border-radius: 25px;
    padding: 30px;
    margin: 20px 0;
    overflow: hidden; /* Contain the badge image */
    position: relative;
  }
  
  .hero-content {
    display: flex;
    position: relative;
  }
  
  .hero-text {
    flex: 1;
    padding-right: 180px; /* Space for the badge image */
    z-index: 2; /* Keep text above image */
  }
  
  .hero-description {
    font-family: 'TheBoLDFont', sans-serif;
    font-size: 32px;
    text-align: left;
    max-width: 690px;
    color: white;
    line-height: 1.1;
    margin-bottom: 30px;
  }
  
  .hero-slogan {
    font-family: 'TheBoLDFont', sans-serif;
    font-size: 45px;
    font-weight: bold;
    text-align: center;
    max-width: 690px;
    color: white;
    margin: 30px 0;
    line-height: 1.1;
  }
  
  .divider {
    height: 1px;
    width: 75%;
    background-color: white;
    margin: 20px 0;
  }
  
  .credentials {
    font-family: 'TheBoLDFont', sans-serif;
    font-size: 23px;
    color: #13475D;
    font-weight: bold;
    text-align: left;
  }
  
  .hero-image {
    position: absolute;
    top: 50%;
    right: -30px;
    transform: translateY(-50%);
    z-index: 1;
  }
  
  .hero-image img {
    width: 400px;
    height: auto;
  }
  
  /* Responsive design */
  @media (max-width: 1024px) {
    .hero-text {
      padding-right: 140px;
    }
    
    .hero-description {
      font-size: 28px;
    }
    
    .hero-slogan {
      font-size: 36px;
    }
    
    .credentials {
      font-size: 20px;
    }
    
    .hero-image img {
      width: 300px;
    }
  }
  
  @media (max-width: 768px) {
    .hero {
      padding: 20px;
    }
    
    .hero-content {
      flex-direction: column;
    }
    
    .hero-text {
      padding-right: 0;
      text-align: center;
    }
    
    .hero-description {
      font-size: 24px;
      text-align: center;
      margin-bottom: 20px;
    }
    
    .hero-slogan {
      font-size: 32px;
      margin: 20px 0;
    }
    
    .divider {
      width: 100%;
      margin: 15px auto;
    }
    
    .credentials {
      font-size: 18px;
      text-align: center;
      margin-bottom: 150px; /* Space for the badge below */
    }
    
    .hero-image {
      position: relative;
      top: auto;
      right: auto;
      transform: none;
      display: flex;
      justify-content: center;
      margin-top: -150px; /* Overlap with text section */
    }
    
    .hero-image img {
      width: 250px;
    }
  }
  
  @media (max-width: 480px) {
    .hero-description {
      font-size: 20px;
    }
    
    .hero-slogan {
      font-size: 26px;
    }
    
    .credentials {
      font-size: 16px;
      margin-bottom: 120px;
    }
    
    .hero-image {
      margin-top: -120px;
    }
    
    .hero-image img {
      width: 200px;
    }
  }
</style>