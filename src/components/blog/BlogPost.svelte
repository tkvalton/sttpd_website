<!-- src/components/blog/BlogPost.svelte -->
<script lang="ts">
    // Props for the blog post
    export let title: string;
    export let date: string;
    export let content: string = "";
    export let imageUrl: string = "";
    export let downloadUrl: string = "";
    export let downloadText: string = "Download";
    export let category: string = "Darts";
  </script>
  
  <article class="blog-post">
    <div class="post-header">
      <div class="post-meta">
        <span class="post-category">{category}</span>
        <span class="post-date">{date}</span>
      </div>
      <h2 class="post-title">{title}</h2>
    </div>
    
    {#if imageUrl}
      <div class="post-image-container">
        <img src={imageUrl} alt={title} class="post-image" />
      </div>
    {/if}
    
    <div class="post-content">
      {#if content}
        <p>{@html content}</p>
      {/if}
      <slot></slot>
    </div>
    
    {#if downloadUrl}
      <div class="post-actions">
        <a href={downloadUrl} class="download-button" download>
          {downloadText}
        </a>
      </div>
    {/if}
  </article>
  
  <style>
    .blog-post {
      background-color: white;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
      margin-bottom: 40px;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .blog-post:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    }
    
    .post-header {
      padding: 25px 30px 15px;
    }
    
    .post-meta {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
      font-family: 'Montserrat', sans-serif;
      font-size: 14px;
    }
    
    .post-category {
      color: #60C3F0;
      font-weight: bold;
    }
    
    .post-date {
      color: #777;
    }
    
    .post-title {
      font-family: 'TheBoLDFont', sans-serif;
      font-size: 26px;
      color: #13475D;
      margin: 0 0 15px;
      line-height: 1.3;
    }
    
    .post-image-container {
      background-color: #000;
      border-radius: 8px;
      margin: 0 30px 20px;
      overflow: hidden;
    }
    
    .post-image {
      width: 100%;
      height: auto;
      display: block;
      border-radius: 8px;
    }
    
    .post-content {
      padding: 0 30px 20px;
      font-family: 'Montserrat', sans-serif;
      font-size: 16px;
      line-height: 1.6;
      color: #333;
    }
    
    .post-content p {
      margin-bottom: 15px;
    }
    
    .post-actions {
      padding: 0 30px 30px;
      display: flex;
      justify-content: center;
    }
    
    .download-button {
      display: inline-block;
      background-color: #FF6B00;
      color: white;
      font-family: 'TheBoLDFont', sans-serif;
      padding: 12px 30px;
      border-radius: 30px;
      text-decoration: none;
      transition: all 0.3s ease;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      text-align: center;
    }
    
    .download-button:hover {
      background-color: #E05A00;
      transform: translateY(-3px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
    }
    
    /* Responsive styles */
    @media (max-width: 768px) {
      .post-header,
      .post-content,
      .post-actions {
        padding-left: 20px;
        padding-right: 20px;
      }
      
      .post-image-container {
        margin-left: 20px;
        margin-right: 20px;
      }
      
      .post-title {
        font-size: 22px;
      }
      
      .post-content {
        font-size: 15px;
      }
    }
  </style>