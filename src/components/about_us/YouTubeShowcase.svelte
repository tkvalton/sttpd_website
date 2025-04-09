<!-- src/components/general/YouTubeShowcase.svelte -->
<script lang="ts">
    // Props for customization
    export let videoId: string; // YouTube video ID
    export let title: string = "Featured on YouTube";
    export let description: string = "Our YouTube channel continues to grow, with over 20,700 subscribers and more than 4.5 million views. Check out some of our popular videos and subscribe to stay updated with our latest content.";
    export let buttonText: string = "Visit Our Channel";
    export let channelUrl: string = "https://www.youtube.com/channel/UCrQBHCy0uX0IeK2LbrRK2WA";
    export let startColor: string = "#FF0000";
    export let endColor: string = "#990000";
  </script>
  
  <div class="youtube-section">
    <div 
      class="youtube-container" 
      style="background: linear-gradient(135deg, {startColor} 0%, {endColor} 100%);"
    >
      <div class="youtube-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <a 
          href={channelUrl} 
          class="youtube-button" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          {buttonText}
        </a>
      </div>
      <div class="youtube-video">
        <div class="video-responsive">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/{videoId}" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </div>
  
  <style>
    /* YouTube Section */
    .youtube-section {
      margin-bottom: 60px;
    }
    
    .youtube-container {
      display: flex;
      gap: 40px;
      align-items: center;
      border-radius: 10px;
      padding: 40px;
      color: white;
    }
    
    .youtube-content {
      flex: 1;
    }
    
    .youtube-content h2 {
      color: white;
      font-family: 'TheBoLDFont', sans-serif;
      font-size: 28px;
      margin-bottom: 20px;
    }
    
    .youtube-content p {
      font-family: 'Montserrat', sans-serif;
      font-size: 16px;
      line-height: 1.6;
      margin-bottom: 25px;
    }
    
    .youtube-button {
      display: inline-block;
      background-color: white;
      color: #FF0000;
      font-family: 'TheBoLDFont', sans-serif;
      padding: 12px 25px;
      border-radius: 30px;
      text-decoration: none;
      transition: all 0.3s ease;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
    
    .youtube-button:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
      background-color: #f7f7f7;
    }
    
    .youtube-video {
      flex: 1;
    }
    
    .video-responsive {
      position: relative;
      overflow: hidden;
      width: 100%;
      padding-top: 56.25%; /* 16:9 Aspect Ratio */
      border-radius: 10px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }
    
    .video-responsive iframe {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 100%;
      border: none;
    }
    
    /* Responsive styles */
    @media (max-width: 1200px) {
      .youtube-container {
        flex-direction: column;
        gap: 30px;
      }
      
      .youtube-video {
        width: 100%;
      }
    }
    
    @media (max-width: 768px) {
      .youtube-container {
        padding: 25px;
      }
      
      .youtube-content h2 {
        font-size: 24px;
      }
      
      .youtube-content p {
        font-size: 15px;
      }
      
      .youtube-button {
        font-size: 14px;
        padding: 10px 20px;
      }
    }
  </style>