<!-- 
  Hero section component - preserved exactly as in original code
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
      padding: 10px 25px;
      margin: 20px 0px;
    }
    
    .hero-content {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    
    .hero-text {
      flex: 1;
      padding-right: 25px;
    }
    
    .hero-description {
      font-family: 'TheBoLDFont', sans-serif;
      font-size: 32px;
      text-align: left;
      color: white;
      max-width: 700px;
      line-height: 1.0;
    }
    
    .hero-slogan {
      font-family: 'TheBoLDFont', sans-serif;
      font-size: 45px;
      font-weight: bold;
      text-align: center;
      color: white;
      margin: 30px 0;
      max-width: 700px;
      line-height: 1.0;
    }
    
    .divider {
      height: 1px;
      width: 75%;
      background-color: white;
      margin: 20px 0;
      align-self: flex-start;
      margin-left: -25px;
    }
    
    .credentials {
      font-family: 'TheBoLDFont', sans-serif;
      font-size: 23px;
      color: #13475D;
      font-weight: bold;
      text-align: left;
    }
    
    .hero-image {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      overflow: visible; /* Changed from hidden to allow image to extend */
      height: 200px;
    }
  
    .hero-image img {
      position: absolute;
      max-width: none;
      width: 550px; /* Increased from 350px to make it larger */
      height: auto;
      top: 100%;
      right: -150px; /* Position it more to the right */
      transform: translateY(-50%); /* Fix syntax and simplify transform */
    }
    
    /* Responsive design */
    @media (max-width: 768px) {
      .hero {
        margin: 20px 0;
        padding: 30px 15px;
      }
      
      .hero-content {
        flex-direction: column;
      }
      
      .hero-text {
        padding-right: 0;
        text-align: center;
      }
      
      .hero-slogan {
        font-size: 32px;
      }
      
      .credentials {
        font-size: 18px;
      }
    }
  </style>