<!-- src/components/general/Footer.svelte -->
<script lang="ts">
    // You can add props here if needed
    export let showPrivacyText = true; // Option to hide the privacy text if needed
  </script>
  
  <footer>
    <div class="footer-container">
      <p class="copyright">Copyright © 2025 Straight To The Point Darts</p>
      
      {#if showPrivacyText}
        <p class="privacy-text">
          We respect your privacy. This website doesn't collect personal information. 
          All transactions are processed securely through our third-party partners.
        </p>
      {/if}
    </div>
  </footer>
  
  <style>
    footer {
      text-align: center;
      color: black;
      padding: 40px 0;
      border-top: 1px solid #eaeaea;
    }
    
    .footer-container {
      max-width: 1160px;
      margin: 0 auto;
      padding: 0 20px;
    }
    
    .copyright {
      margin-bottom: 10px;
      font-family: 'Montserrat', sans-serif;
    }
    
    .privacy-text {
      font-size: 0.85rem;
      color: #666;
      max-width: 800px;
      margin: 0 auto;
      font-family: 'Montserrat', sans-serif;
    }
    
    /* Responsive styles */
    @media (max-width: 768px) {
      .footer-container {
        padding: 0 15px;
      }
      
      .privacy-text {
        font-size: 0.8rem;
      }
    }
  </style>