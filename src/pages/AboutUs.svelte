<!-- src/pages/AboutUs.svelte -->
<script lang="ts">
    import PageTransition from '../components/general/PageTransition.svelte';
    import AnimatedSection from '../components/general/AnimatedSection.svelte';
    import Testimonials from '../components/general/Testimonials.svelte';
    import YouTubeShowcase from '../components/about_us/YouTubeShowcase.svelte';
  </script>
  
  <div class="about-page">
    <PageTransition let:isVisible let:stagger>
      <div class="content-wrapper">
        <!-- Hero Section -->
        <AnimatedSection {isVisible} index={0} className="hero-section">
          <h1>About Us</h1>
          <div class="divider"></div>
        </AnimatedSection>
  
        <!-- Main Content Section -->
        <AnimatedSection {isVisible} index={1} className="main-content-section">
          <div class="about-intro">
            <p class="intro-text">Straight To The Point Darts offers various online darts tuition services dedicated to helping darts players improve and develop their game.</p>
          </div>
          
          <div class="about-story">
            <h2>Our Story</h2>
            <div class="story-section">
              <div class="story-text">
                <p>Starting off as a <a href="https://www.youtube.com/channel/UCrQBHCy0uX0IeK2LbrRK2WA" target="_blank" rel="noopener noreferrer">YouTube channel</a> dedicated to helping darts players improve and develop their game, Straight to the Point Darts quickly expanded to offering private tuition to meet the requests and demands of our audience.</p>
                
                <p>Working with over 21 professional players at internal level to PDC and hundreds of amateurs world wide, I still work as a darts technique analyst for Glen Durrant darts coaching and have started to create content on behalf of Darts Conor to help launch the darts player emoji quiz.</p>
                
                <p>With a passion for technique analysis and a commitment to player development, I've dedicated myself to providing clear, actionable coaching that delivers real results. My approach focuses on identifying the specific adjustments that will make the biggest difference to your game.</p>
              </div>
              <div class="story-image">
                <img src="assets\images\glen_durrant_coaching_team.jpg" alt="Darts coaching session" />
              </div>
            </div>
          </div>
          
          <div class="credentials-section">
            <h2>Professional Credentials</h2>
            <div class="credentials-container">
              <div class="credential-item">
                <div class="credential-icon">🏆</div>
                <div class="credential-text">
                  <h3>PDPA Official Darts Coach</h3>
                  <p>Recognized by the Professional Darts Players Association as an official darts coach</p>
                </div>
              </div>
              
              <div class="credential-item">
                <div class="credential-icon">📊</div>
                <div class="credential-text">
                  <h3>Technical Analysis Expert</h3>
                  <p>Specialized in detailed throw analysis and technique correction</p>
                </div>
              </div>
              
              <div class="credential-item">
                <div class="credential-icon">👨‍🏫</div>
                <div class="credential-text">
                  <h3>Professional Experience</h3>
                  <p>Worked with 21+ professional players and hundreds of amateurs worldwide</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="philosophy-section">
            <h2>Our Philosophy</h2>
            <div class="philosophy-content">
              <blockquote class="philosophy-quote">
                "We are all about improvement!"
              </blockquote>
              <p>At Straight To The Point Darts, we believe that every player has the potential to improve, regardless of their current skill level. Our coaching methods are built around identifying the specific technical adjustments that will make the biggest impact on your game.</p>
              <p>We focus on clear communication, personalized feedback, and practical exercises that transfer directly to your performance at the oche. Our goal isn't just to make you better today, but to give you the tools to continue improving long after our sessions together.</p>
            </div>
          </div>
        </AnimatedSection>
        
        <!-- YouTube Showcase Section using the component -->
        <AnimatedSection {isVisible} index={2}>
          <YouTubeShowcase 
            videoId="b3SGNhH8kO8" 
            title="Featured on YouTube" 
            description="Our YouTube channel continues to grow, with over 20,700 subscribers and more than 4.5 million views. Check out some of our popular videos and subscribe to stay updated with our latest content."
          />
        </AnimatedSection>
      </div>
      
      <!-- Testimonials Section -->
      <AnimatedSection {isVisible} index={3}>
        <Testimonials autoScroll={true} />
      </AnimatedSection>
      
      <!-- Footer -->
      <AnimatedSection {isVisible} index={4}>
        <footer>
          <div class="footer-container">
            <p>Copyright © 2025 Straight To The Point Darts</p>
          </div>
        </footer>
      </AnimatedSection>
    </PageTransition>
  </div>
  
  <style>
    .about-page {
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
      margin-bottom: 40px;
    }
    
    h1 {
      font-family: 'TheBoLDFont', sans-serif;
      font-size: 38px;
      color: #13475D;
      margin-bottom: 15px;
    }
    
    .divider {
      height: 3px;
      width: 150px;
      background-color: #13475D;
      margin: 0 auto 30px;
    }
    
    /* Main Content Section */
    .main-content-section {
      margin-bottom: 60px;
    }
    
    .about-intro {
      text-align: center;
      margin-bottom: 50px;
    }
    
    .intro-text {
      font-family: 'Montserrat', sans-serif;
      font-size: 24px;
      color: #60C3F0;
      max-width: 900px;
      margin: 0 auto;
      line-height: 1.5;
    }
    
    h2 {
      font-family: 'TheBoLDFont', sans-serif;
      font-size: 28px;
      color: #13475D;
      margin-bottom: 25px;
    }
    
    /* Story Section */
    .about-story {
      margin-bottom: 60px;
    }
    
    .story-section {
      display: flex;
      gap: 40px;
      align-items: center;
    }
    
    .story-text {
      flex: 3;
    }
    
    .story-text p {
      font-family: 'Montserrat', sans-serif;
      font-size: 16px;
      color: #333;
      line-height: 1.6;
      margin-bottom: 20px;
    }
    
    .story-text a {
      color: #60C3F0;
      text-decoration: none;
      transition: color 0.3s;
    }
    
    .story-text a:hover {
      color: #13475D;
      text-decoration: underline;
    }
    
    .story-image {
      flex: 2;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }
    
    .story-image img {
      width: 100%;
      height: auto;
      display: block;
      transition: transform 0.5s ease;
    }
    
    .story-image:hover img {
      transform: scale(1.03);
    }
    
    /* Credentials Section */
    .credentials-section {
      margin-bottom: 60px;
    }
    
    .credentials-container {
      display: flex;
      justify-content: space-between;
      gap: 30px;
      flex-wrap: wrap;
    }
    
    .credential-item {
      flex: 1;
      min-width: 300px;
      background-color: #F5F9FC;
      padding: 30px;
      border-radius: 10px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .credential-item:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    }
    
    .credential-icon {
      font-size: 40px;
      margin-bottom: 15px;
      text-align: center;
    }
    
    .credential-text h3 {
      font-family: 'TheBoLDFont', sans-serif;
      font-size: 20px;
      color: #13475D;
      margin-bottom: 10px;
      text-align: center;
    }
    
    .credential-text p {
      font-family: 'Montserrat', sans-serif;
      font-size: 15px;
      color: #444;
      text-align: center;
      line-height: 1.5;
    }
    
    /* Philosophy Section */
    .philosophy-section {
      margin-bottom: 60px;
    }
    
    .philosophy-content {
      background-color: #F5F9FC;
      padding: 40px;
      border-radius: 10px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    }
    
    .philosophy-quote {
      font-family: 'TheBoLDFont', sans-serif;
      font-size: 28px;
      color: #60C3F0;
      text-align: center;
      margin: 0 0 30px;
      padding: 0;
      border-left: none;
      position: relative;
    }
    
    .philosophy-quote::before,
    .philosophy-quote::after {
      content: '"';
      font-size: 50px;
      color: rgba(96, 195, 240, 0.2);
      position: absolute;
    }
    
    .philosophy-quote::before {
      left: -20px;
      top: -20px;
    }
    
    .philosophy-quote::after {
      right: -20px;
      bottom: -40px;
    }
    
    .philosophy-content p {
      font-family: 'Montserrat', sans-serif;
      font-size: 16px;
      color: #333;
      line-height: 1.6;
      margin-bottom: 20px;
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
      
      .story-section {
        flex-direction: column;
        gap: 30px;
      }
      
      .story-image {
        width: 100%;
        max-width: 600px;
        margin: 0 auto;
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
      
      h2 {
        font-size: 24px;
      }
      
      .intro-text {
        font-size: 20px;
      }
      
      .credentials-container {
        flex-direction: column;
      }
      
      .credential-item {
        width: 100%;
        min-width: auto;
      }
      
      .philosophy-quote {
        font-size: 22px;
      }
      
      .philosophy-content {
        padding: 25px;
      }
      
      .footer-container {
        padding: 0 15px;
      }
    }
  </style>