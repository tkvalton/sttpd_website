<!-- src/components/home/DuzzaBanner.svelte -->
<script lang="ts">
    // You can add any necessary props or functionality here
    export let logoPath = "/assets/logos/duzza_logo.png";
    export let altText = "Duzza Logo";
  </script>
  
  <div class="duzza-banner">
    <div class="banner-container">
      <div class="banner-content">
        <h2 class="banner-text">PART OF THE GLEN DURRANT COACHING TEAM</h2>
        <div class="banner-logo">
          <img src={logoPath} alt={altText} />
        </div>
      </div>
    </div>
  </div>
  
  <style>
    .duzza-banner {
      width: 100%;
      background-color: #001235; /* Dark blue to match your site theme */
      border-radius: 0 0 10px 10px; /* Only bottom corners are rounded */
      overflow: hidden;
      margin-bottom: 20px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
  
    .banner-container {
      padding: 20px;
    }
  
    .banner-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 15px;
    }
  
    .banner-text {
      color: white;
      font-family: 'TheBoLDFont', sans-serif;
      font-size: 24px;
      font-weight: bold;
      text-align: center;
      margin: 0;
    }
  
    .banner-logo {
      display: flex;
      justify-content: center;
      padding: 10px 0;
    }
  
    .banner-logo img {
      max-width: 240px;
      height: auto;
    }
  
    /* Responsive adjustments */
    @media (min-width: 768px) {
      .banner-content {
        flex-direction: row;
        justify-content: space-between;
      }
      
      .banner-text {
        font-size: 28px;
        margin-right: 20px;
      }
    }
  
    @media (max-width: 767px) {
      .banner-text {
        margin-bottom: 15px;
      }
    }
  </style>