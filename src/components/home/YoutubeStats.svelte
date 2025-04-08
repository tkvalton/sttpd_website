<!-- 
  YoutubeStats component with accessibility fixes
  Shows YouTube channel stats with visual appeal
-->
<script>
    import { onMount } from 'svelte';
    
    // YouTube channel statistics
    const stats = {
      videos: '180+',
      views: '4,548,515',
      subscribers: '20,700+'
    };
    
    // Animation for numbers
    let visible = false;
    
    onMount(() => {
      // Trigger animation when component is mounted
      setTimeout(() => {
        visible = true;
      }, 300);
    });
  </script>
  
  <section class="youtube-stats" aria-labelledby="youtube-heading">
    <div class="stats-container">
      <div class="left-column">
        <div class="youtube-logo">
          <img src="/assets/socials/icons8-youtube-96.png" alt="YouTube logo" />
        </div>
        <h2 id="youtube-heading">Check our YouTube channel</h2>
        <p class="subtitle">Since we started our YouTube channel in March 2021 our following continues to grow</p>
      </div>
      
      <div class="stats" aria-label="YouTube channel statistics">
        <div class="stat-item" class:visible>
          <div class="stat-number">{stats.videos}</div>
          <div class="stat-label">Videos</div>
        </div>
        
        <div class="stat-item" class:visible>
          <div class="stat-number">{stats.views}</div>
          <div class="stat-label">Views</div>
        </div>
        
        <div class="stat-item" class:visible>
          <div class="stat-number">{stats.subscribers}</div>
          <div class="stat-label">Subscribers</div>
        </div>
      </div>
    </div>
  </section>
  
  <style>
    .youtube-stats {
      background-color: #FF0000; /* YouTube red */
      border-radius: 25px;
      margin: 20px 50px;
      padding: 50px 25px;
      color: white;
    }
    
    .stats-container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    
    .left-column {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 40px;
    }
    
    .youtube-logo {
      background-color: white;
      width: 175px;
      height: 175px;
      border-radius: 25px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 20px;
    }
    
    h2 {
      font-family: 'TheBoLDFont', sans-serif;
      font-size: 38px;
      margin: 0 0 10px;
      text-align: center;
    }
    
    .subtitle {
      font-family: 'TheBoLDFont', sans-serif;
      font-size: 18px;
      text-align: center;
      max-width: 450px;
      margin-bottom: 20px;
    }
    
    .stats {
      font-family: 'TheBoLDFont', sans-serif;
      display: flex;
      justify-content: space-around;
      width: 100%;
      max-width: 1000px;
    }
    
    .stat-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      min-width: 250px;
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.8s, transform 0.8s;
    }
    
    .stat-item.visible {
      opacity: 1;
      transform: translateY(0);
    }
    
    .stat-number {
      font-size: 30px;
      font-weight: bold;
      margin-bottom: 12px;
    }
    
    .stat-label {
      font-size: 45px;
      font-weight: bold;
    }
    
    /* Responsive styles */
    @media (max-width: 768px) {
      .youtube-stats {
        margin: 20px;
      }
      
      .stats {
        flex-direction: column;
        gap: 30px;
      }
      
      .stat-item {
        min-width: auto;
      }
      
      h2 {
        font-size: 30px;
      }
      
      .stat-label {
        font-size: 36px;
      }
    }
  </style>