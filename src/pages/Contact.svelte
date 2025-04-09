<!-- src/pages/Contact.svelte -->
<script lang="ts">
  import PageTransition from '../components/general/PageTransition.svelte';
  import AnimatedSection from '../components/general/AnimatedSection.svelte';
  import Footer from '../components/general/Footer.svelte';
  
  // Social media links - same as in Banner.svelte
  const socialLinks = [
    { 
      name: 'Facebook', 
      url: 'https://www.facebook.com/straightdarts/', 
      icon: '/assets/socials/icons8-facebook-48.png',
      color: '#0E77F0'
    },
    { 
      name: 'Twitter', 
      url: 'https://x.com/StraightDarts', 
      icon: '/assets/socials/icons8-twitter-bird-48.png',
      color: '#1DA1F2'
    },
    { 
      name: 'YouTube', 
      url: 'https://www.youtube.com/channel/UCrQBHCy0uX0IeK2LbrRK2WA', 
      icon: '/assets/socials/icons8-youtube-48.png',
      color: '#FF0000'
    }
  ];
</script>

<div class="contact-page">
  <PageTransition let:isVisible let:stagger>
    <div class="content-wrapper">
      <!-- Hero Section -->
      <AnimatedSection {isVisible} index={0} className="hero-section">
        <h1>Contact</h1>
        <div class="divider"></div>
        <div class="hero-content">
          <div class="message-container">
            <h2>We're Ready. Let's Talk.</h2>
            <p>Whether you're interested in darts coaching, have questions about our products, or simply want to connect with a fellow darts enthusiast, I'm here to help!</p>
            <p>Feel free to reach out through any of the channels below, and I'll get back to you as soon as possible.</p>
          </div>
        </div>
      </AnimatedSection>

      <!-- Contact Information Section -->
      <AnimatedSection {isVisible} index={1} className="contact-details-section">
        <div class="contact-container">
          <!-- Left side - Contact information -->
          <div class="contact-info">
            <div class="contact-item">
              <div class="contact-icon">📱</div>
              <div class="contact-text">
                <h3>Phone</h3>
                <a href="tel:07522386993" class="contact-link">07522 386993</a>
              </div>
            </div>
            
            <div class="contact-item">
              <div class="contact-icon">📧</div>
              <div class="contact-text">
                <h3>Email</h3>
                <a href="mailto:straighttothepointdarts@gmail.com" class="contact-link highlight">
                  straighttothepointdarts@gmail.com
                </a>
              </div>
            </div>
          </div>
          
          <!-- Right side - Social media -->
          <div class="social-links-container">
            <h3>Connect With Us</h3>
            <div class="social-links">
              {#each socialLinks as link}
                <a 
                  href={link.url} 
                  class="social-link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={`Visit our ${link.name} page`}
                  style="--social-color: {link.color}"
                >
                  <div class="social-icon">
                    <img src={link.icon} alt="" aria-hidden="true" />
                  </div>
                  <span>{link.name}</span>
                </a>
              {/each}
            </div>
          </div>
        </div>
      </AnimatedSection>
      
      <!-- Call to Action Section -->
      <AnimatedSection {isVisible} index={2} className="cta-section">
        <div class="cta-container">
          <h2>Ready to improve your game?</h2>
          <p>Check out our coaching services and custom darts to take your skills to the next level.</p>
          <div class="cta-buttons">
            <a href="/coaching" class="cta-button coaching">Darts Coaching</a>
            <a href="/mydarts" class="cta-button darts">My Darts</a>
          </div>
        </div>
      </AnimatedSection>
    </div>
    
    <!-- Footer - Updated to use the Footer component -->
    <AnimatedSection {isVisible} index={3}>
      <Footer />
    </AnimatedSection>
  </PageTransition>
</div>

<style>
  .contact-page {
    width: 100%;
    background-color: white;
  }

  .content-wrapper {
    padding: 30px 60px;
    max-width: 1300px;
    margin: 0 auto;
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
  
  .hero-content {
    max-width: 800px;
    margin: 0 auto;
  }
  
  .message-container {
    text-align: center;
    margin-bottom: 50px;
  }
  
  .message-container h2 {
    font-family: 'TheBoLDFont', sans-serif;
    font-size: 28px;
    color: #60C3F0;
    margin-bottom: 20px;
  }
  
  .message-container p {
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    color: #444;
    line-height: 1.6;
    margin-bottom: 15px;
  }
  
  .contact-container {
    display: flex;
    justify-content: space-between;
    gap: 40px;
    margin-bottom: 60px;
  }
  
  .contact-info {
    flex: 1;
    background-color: #F5F9FC;
    padding: 40px;
    border-radius: 12px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  }
  
  .contact-item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 30px;
  }
  
  .contact-icon {
    font-size: 28px;
    margin-right: 15px;
    color: #13475D;
    flex-shrink: 0;
  }
  
  .contact-text {
    flex: 1;
  }
  
  .contact-text h3 {
    font-family: 'TheBoLDFont', sans-serif;
    color: #13475D;
    font-size: 20px;
    margin-bottom: 8px;
  }
  
  .contact-link {
    font-family: 'Montserrat', sans-serif;
    color: #333;
    text-decoration: none;
    font-size: 18px;
    transition: color 0.3s;
    display: inline-block;
    padding: 5px 0;
  }
  
  .contact-link:hover {
    color: #60C3F0;
  }
  
  .contact-link.highlight {
    color: #FF6B00;
    font-weight: bold;
  }
  
  .contact-link.highlight:hover {
    color: #FF8533;
  }
  
  /* Social Media Section */
  .social-links-container {
    flex: 1;
    background-color: #F5F9FC;
    padding: 40px;
    border-radius: 12px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  }
  
  .social-links-container h3 {
    font-family: 'TheBoLDFont', sans-serif;
    color: #13475D;
    font-size: 20px;
    margin-bottom: 20px;
    text-align: center;
  }
  
  .social-links {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  .social-link {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: var(--social-color, #333);
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    padding: 10px;
    border-radius: 8px;
    transition: all 0.3s ease;
    background-color: rgba(255, 255, 255, 0.8);
  }
  
  .social-link:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    background-color: white;
  }
  
  .social-icon {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 15px;
  }
  
  .social-icon img {
    width: 30px;
    height: 30px;
  }
  
  .cta-container {
    background: linear-gradient(135deg, #13475D 0%, #60C3F0 100%);
    color: white;
    padding: 50px;
    border-radius: 12px;
    text-align: center;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
  }
  
  .cta-container h2 {
    font-family: 'TheBoLDFont', sans-serif;
    font-size: 28px;
    margin-bottom: 15px;
  }
  
  .cta-container p {
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    margin-bottom: 30px;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .cta-buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  
  .cta-button {
    display: inline-block;
    padding: 12px 25px;
    border-radius: 30px;
    color: white;
    font-family: 'TheBoLDFont', sans-serif;
    font-size: 18px;
    text-decoration: none;
    transition: all 0.3s ease;
  }
  
  .cta-button.coaching {
    background-color: #FF6B00;
  }
  
  .cta-button.darts {
    background-color: #FFDE59;
    color: #13475D;
  }
  
  .cta-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  }
  
  .cta-button.coaching:hover {
    background-color: #FF8533;
  }
  
  .cta-button.darts:hover {
    background-color: #FFE680;
  }
  
  /* Responsive styles */
  @media (max-width: 1200px) {
    .content-wrapper {
      padding: 20px 40px;
    }
  }
  
  @media (max-width: 768px) {
    .content-wrapper {
      padding: 15px;
    }
    
    h1 {
      font-size: 32px;
    }
    
    .message-container h2 {
      font-size: 24px;
    }
    
    .message-container p {
      font-size: 16px;
    }
    
    .contact-container {
      flex-direction: column;
      gap: 30px;
    }
    
    .contact-info, .social-links-container {
      width: 100%;
      padding: 25px;
    }
    
    .contact-text h3, .social-links-container h3 {
      font-size: 18px;
    }
    
    .contact-link, .social-link {
      font-size: 16px;
    }
    
    .cta-container {
      padding: 30px 20px;
    }
    
    .cta-container h2 {
      font-size: 24px;
    }
    
    .cta-container p {
      font-size: 16px;
    }
    
    .cta-buttons {
      flex-direction: column;
      gap: 15px;
    }
  }
</style>