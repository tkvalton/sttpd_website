<!-- src/pages/Blog.svelte -->
<script lang="ts">
    import PageTransition from '../components/general/PageTransition.svelte';
    import AnimatedSection from '../components/general/AnimatedSection.svelte';
    import BlogPost from '../components/blog/BlogPost.svelte';
    
    // Blog posts data - can be expanded in the future
    const blogPosts = [
      {
        id: 1,
        title: "Darts Players Emoji Quiz - Can You Guess Them All?",
        date: "April 3, 2025",
        content: `
          <p>Are you the ultimate darts fan? Test your knowledge with our Darts Players Emoji Quiz!</p>
          
          <p>In collaboration with Darts Corner, we've created a fun emoji quiz to challenge even the most dedicated darts enthusiasts. Try to identify famous darts players represented only by emojis.</p>
          
          <p>The quiz features a mix of current PDC stars and legends of the game. Some are straightforward, while others will really put your darts knowledge to the test.</p>
          
          <p>Download the quiz document, fill in your answers, and see how many you can get right. Share your results with fellow darts fans and challenge them to beat your score!</p>
          
          <p><strong>How to participate:</strong></p>
          <ul>
            <li>Click the "Enter Quiz" button below to download the quiz document</li>
            <li>Fill in your answers for each emoji combination</li>
            <li>Test your knowledge against friends and family</li>
          </ul>
          
          <p>Good luck, and remember - the ultimate darts champion knows their players!</p>
        `,
        imageUrl: "/assets/images/darts_players_emoji_quiz.jpg",
        downloadUrl: "/assets/quiz/Darts-Corner-are-seeking-the-ultimate-darts-champion-Straight-to-the-Point-Darts-1.docx",
        downloadText: "Enter Quiz",
        category: "Quiz"
      }
      // More blog posts can be added here in the future
    ];
  </script>
  
  <div class="blog-page">
    <PageTransition let:isVisible let:stagger>
      <div class="content-wrapper">
        <!-- Hero Section -->
        <AnimatedSection {isVisible} index={0} className="hero-section">
          <h1>BLOG</h1>
          <div class="divider"></div>
          <p class="hero-description">
            Insights, news, and updates from the world of darts coaching and technique analysis.
          </p>
        </AnimatedSection>
  
        <!-- Blog Posts Section -->
        <AnimatedSection {isVisible} index={1} className="blog-posts-section">
          <div class="blog-intro">
            <p>Since uploading my first YouTube video under the channel name Straight to the point darts, I have become the only full-time darts coach. Working with over 21 professional players at internal level to PDC and hundreds of amateurs world wide.</p>
            
            <p class="centered-text">I still work as a darts technique analyst for Glen Durrant darts coaching and have started to create content on behalf of Darts Conor to help launch the darts player emoji quiz.</p>
          </div>
          
          <div class="blog-posts-container">
            {#each blogPosts as post (post.id)}
              <BlogPost 
                title={post.title}
                date={post.date}
                content={post.content}
                imageUrl={post.imageUrl}
                downloadUrl={post.downloadUrl}
                downloadText={post.downloadText}
                category={post.category}
              />
            {/each}
            
            {#if blogPosts.length === 0}
              <div class="no-posts">
                <p>No blog posts available yet. Check back soon for updates!</p>
              </div>
            {/if}
          </div>
        </AnimatedSection>
        
        <!-- Coming Soon Section -->
        <AnimatedSection {isVisible} index={2} className="coming-soon-section">
          <div class="coming-soon-container">
            <h2>More Content Coming Soon</h2>
            <p>Stay tuned for upcoming blog posts featuring technique tips, coaching insights, and darts news. Subscribe to our <a href="https://www.youtube.com/channel/UCrQBHCy0uX0IeK2LbrRK2WA" target="_blank" rel="noopener noreferrer">YouTube channel</a> for the latest videos and updates.</p>
          </div>
        </AnimatedSection>
      </div>
      
      <!-- Footer -->
      <AnimatedSection {isVisible} index={3}>
        <footer>
          <div class="footer-container">
            <p>Copyright © 2025 Straight To The Point Darts</p>
          </div>
        </footer>
      </AnimatedSection>
    </PageTransition>
  </div>
  
  <style>
    .blog-page {
      width: 100%;
      background-color: white;
    }
  
    .content-wrapper {
      padding: 30px 60px;
      max-width: 1300px;
      margin: 0 auto;
    }
    
    /* Hero Section Styles */
    .hero-section {
      text-align: center;
      margin-bottom: 50px;
    }
    
    h1 {
      font-family: 'TheBoLDFont', sans-serif;
      font-size: 38px;
      color: #13475D;
      margin-bottom: 15px;
      text-align: center;
    }
    
    .divider {
      height: 3px;
      width: 150px;
      background-color: #13475D;
      margin: 0 auto 30px;
    }
    
    .hero-description {
      font-family: 'Montserrat', sans-serif;
      font-size: 20px;
      color: #60C3F0;
      max-width: 800px;
      margin: 0 auto;
      line-height: 1.5;
      text-align: center;
    }
    
    /* Blog Posts Section */
    .blog-posts-section {
      margin-bottom: 60px;
    }
    
    .blog-intro {
      margin-bottom: 40px;
      max-width: 900px;
      margin-left: auto;
      margin-right: auto;
    }
    
    .blog-intro p {
      font-family: 'Montserrat', sans-serif;
      font-size: 16px;
      color: #333;
      line-height: 1.6;
      margin-bottom: 20px;
      text-align: center;
    }
    
    .centered-text {
      text-align: center;
    }
    
    .blog-posts-container {
      display: flex;
      flex-direction: column;
      gap: 40px;
    }
    
    .no-posts {
      text-align: center;
      padding: 40px;
      background-color: #f5f5f5;
      border-radius: 8px;
      font-family: 'Montserrat', sans-serif;
      color: #666;
    }
    
    /* Coming Soon Section */
    .coming-soon-section {
      margin-bottom: 60px;
    }
    
    .coming-soon-container {
      background-color: #F5F9FC;
      padding: 40px;
      border-radius: 12px;
      text-align: center;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    }
    
    .coming-soon-container h2 {
      font-family: 'TheBoLDFont', sans-serif;
      font-size: 28px;
      color: #13475D;
      margin-bottom: 20px;
      text-align: center;
    }
    
    .coming-soon-container p {
      font-family: 'Montserrat', sans-serif;
      font-size: 16px;
      color: #333;
      line-height: 1.6;
      max-width: 700px;
      margin: 0 auto;
      text-align: center;
    }
    
    .coming-soon-container a {
      color: #60C3F0;
      text-decoration: none;
      transition: color 0.3s;
    }
    
    .coming-soon-container a:hover {
      color: #13475D;
      text-decoration: underline;
    }
    
    /* Footer */
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
    
    /* Responsive styles */
    @media (max-width: 1200px) {
      .content-wrapper {
        padding: 20px 40px;
      }
      
      .footer-container {
        padding: 0 40px;
      }
    }
    
    @media (max-width: 768px) {
      .content-wrapper {
        padding: 15px;
      }
      
      h1 {
        font-size: 32px;
      }
      
      .hero-description {
        font-size: 18px;
      }
      
      .blog-intro p {
        font-size: 15px;
      }
      
      .coming-soon-container {
        padding: 30px 20px;
      }
      
      .coming-soon-container h2 {
        font-size: 24px;
      }
      
      .coming-soon-container p {
        font-size: 15px;
      }
      
      .footer-container {
        padding: 0 15px;
      }
    }
  </style>