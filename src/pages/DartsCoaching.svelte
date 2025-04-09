<!-- src/pages/DartsCoaching.svelte -->
<script lang="ts">
  import ServicePanel from '../components/darts_coaching/ServicePanel.svelte';
  import Testimonials from '../components/general/Testimonials.svelte';
  import PageTransition from '../components/general/PageTransition.svelte';
  import AnimatedSection from '../components/general/AnimatedSection.svelte';

  // Instructions for the Throw Analysis service
  const throwAnalysisInstructions = [
    "FILM 9 DARTS THROW AT T20 FROM SIDE-ON.",
    "FILM 9 DARTS THROW AT T20 FRONT ON.",
    "INCLUDING A PHOTOGRAPH OF YOUR GRIP IS HELPFUL."
  ];

  // Key benefits for each service
  const throwAnalysisBenefits = [
    "Professional analysis used by 10 PDC pros",
    "Custom video breakdown of your technique",
    "Detailed slow-motion correction guide",
    "Proven techniques that get results"
  ];

  const webSessionBenefits = [
    "Real-time feedback on your technique",
    "Live slow-motion video analysis",
    "Direct coaching from a professional",
    "Immediate improvement strategies"
  ];

  const blockSessionsBenefits = [
    "Progressive improvement over six sessions",
    "Custom practice routine created just for you",
    "Consistent schedule to build skills",
    "Comprehensive technical development"
  ];

  // Condensed service descriptions
  const throwAnalysisDescription = `Throw analysis could be just what you need to take your game to the next level. I'll analyze your technique in detail and create a custom instructional video made specifically for you.

After hours of deliberation, I'll identify key improvement areas and demonstrate correction techniques through clear, slow-motion video instructions.

You can send footage via Google Drive, Dropbox, WeTransfer, or WhatsApp (07522 386993). The "Filemail" app works well for Android users. Please email me once sent to confirm receipt.`;

  const webSessionDescription = `Live online coaching session where we can record your throw and analyze it in real-time. I'll provide immediate feedback on technique corrections.

Sessions are held via Zoom, Skype or Facebook Messenger with your webcam positioned to show your stance and throw at the oche.

Contact me before payment to check available time slots: straighttothepointdarts@gmail.com or 07522386993.`;

  const blockSessionsDescription = `A complete package of six 45-minute coaching sessions for £250 (saving £170 compared to individual sessions).

We recommend starting with a throw analysis before beginning regular sessions for best results.

Each session includes video recording and playback with detailed correction feedback. You'll also receive a personalized practice routine designed specifically for your development needs.`;

  // Buy links for each service
  const throwAnalysisBuyLink = "https://straight-to-the-point-darts.square.site/product/throw-analysis-service/3?cs=true&cst=custom";
  const webSessionBuyLink = "https://straight-to-the-point-darts.square.site/product/web-cam-tuition/4?cp=true&sa=false&sbp=false&q=false&category_id=2";
  const blockSessionsBuyLink = "https://straight-to-the-point-darts.square.site/product/block-of-six-sessions-/5?cp=true&sa=false&sbp=false&q=false&category_id=2";
  
  // Success stats
  const successStats = [
    { number: "100+", text: "Amateur players improved" },
    { number: "21+", text: "Professional players coached" },
    { number: "80%", text: "Players see improvement after first session" },
    { number: "4.9/5", text: "Average satisfaction rating" }
  ];
</script>

<div class="coaching-page">
  <PageTransition let:isVisible let:stagger>
    <div class="content-wrapper">
      <!-- Hero Section -->
      <AnimatedSection {isVisible} index={0} className="hero-section">
        <h1>DARTS COACHING</h1>
        <div class="divider"></div>
        <div class="hero-content">
          <p class="hero-tagline">Transform your game with professional, personalized coaching</p>
          <p class="hero-description">
            Whether you're struggling with consistency, looking to fine-tune your technique, or wanting to take your game to competition level, our specialized coaching services are designed to help players at every skill level achieve real, measurable improvement.
          </p>
        </div>
      </AnimatedSection>
      
      <!-- Success Stats Section -->
      <AnimatedSection {isVisible} index={1} className="stats-section">
        <div class="stats-container">
          {#each successStats as stat, i}
            <div class="stat-item" style="animation-delay: {300 + (i * 100)}ms;">
              <div class="stat-number">{stat.number}</div>
              <div class="stat-text">{stat.text}</div>
            </div>
          {/each}
        </div>
      </AnimatedSection>
      
      <!-- Coaching Approach Section -->
      <AnimatedSection {isVisible} index={2} className="approach-section">
        <div class="approach-container">
          <div class="approach-content">
            <h2>OUR COACHING APPROACH</h2>
            <p>At Straight To The Point Darts, we take a technical, data-driven approach to coaching. By analyzing every aspect of your throw - from grip and stance to release and follow-through - we identify the specific adjustments that will make the biggest impact on your performance.</p>
            
            <div class="approach-features">
              <div class="approach-feature">
                <div class="feature-icon">🎯</div>
                <div class="feature-text">
                  <h3>Targeted Analysis</h3>
                  <p>We focus on the specific elements of your technique that will yield the greatest improvements.</p>
                </div>
              </div>
              
              <div class="approach-feature">
                <div class="feature-icon">🔍</div>
                <div class="feature-text">
                  <h3>Frame-by-Frame Video</h3>
                  <p>High-definition slow-motion analysis reveals details invisible to the naked eye.</p>
                </div>
              </div>
              
              <div class="approach-feature">
                <div class="feature-icon">📊</div>
                <div class="feature-text">
                  <h3>Proven Methods</h3>
                  <p>The same coaching techniques used by PDC professionals to reach their peak performance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
      
      <!-- Service Introduction -->
      <AnimatedSection {isVisible} index={3} className="services-intro">
        <h2>COACHING SERVICES</h2>
        <p class="services-description">
          Choose from our range of specialized coaching services tailored to your needs, schedule, and development goals.
        </p>
      </AnimatedSection>

      <!-- Throw Analysis Service Panel - Blue Theme -->
      <AnimatedSection {isVisible} index={4} className="service-panel-container">
        <ServicePanel 
          title="THROW ANALYSIS SERVICE" 
          highlightText="THE TURN AROUND TIME IS CURRENTLY 28 DAYS FROM RECEIVING YOUR FOOTAGE DUE TO HIGH DEMAND."
          description={throwAnalysisDescription}
          price="89.99"
          instructions={throwAnalysisInstructions}
          keyBenefits={throwAnalysisBenefits}
          buttonText="TRANSFORM MY THROW"
          leftPanelColor="#2BB0E9"
          rightPanelColor="#0D3349"
          highlightTextColor="#0D3349"
          buttonColor="#FF6B00"
          buttonHoverColor="#E05A00"
          benefitsTitleColor="#FFE066"
          benefitsTextColor="#E0FFF9"
          buyLink={throwAnalysisBuyLink}
        />
      </AnimatedSection>
      
      <!-- Web Sessions Panel - Teal/Green Theme -->
      <AnimatedSection {isVisible} index={5} className="service-panel-container">
        <ServicePanel 
          title="WEB SESSION" 
          highlightText="45 MINUTES ONLINE SESSION"
          description={webSessionDescription}
          price="69.99"
          keyBenefits={webSessionBenefits}
          buttonText="BOOK MY SESSION"
          leftPanelColor="#00C2A8"
          rightPanelColor="#025159"
          highlightTextColor="#025159"
          rightPanelImage="/assets/images/coaching/web_sessions.jpg"
          imageOpacity={0.25}
          imagePosition="top left"
          buttonColor="#FF6B00"
          buttonHoverColor="#E05A00"
          benefitsTitleColor="#FFE066"
          reverse={true}
          buyLink={webSessionBuyLink}
        />
      </AnimatedSection>
      
      <!-- Block of Sessions Panel - Purple Theme -->
      <AnimatedSection {isVisible} index={6} className="service-panel-container">
        <ServicePanel 
          title="BLOCK OF SESSIONS" 
          highlightText="PLEASE CONTACT ME TO ARRANGE YOUR REGULAR TIME SLOT IN ADVANCE"
          description={blockSessionsDescription}
          price="350.00"
          keyBenefits={blockSessionsBenefits}
          buttonText="START MY JOURNEY"
          leftPanelColor="#8E79DC"
          rightPanelColor="#2D2359"
          highlightTextColor="#2D2359"
          rightPanelImage="/assets/images/coaching/6 web sessions.png"
          imageOpacity={0.2}
          imagePosition="top right"
          buttonColor="#FF6B00"
          buttonHoverColor="#E05A00"
          benefitsTitleColor="#FFE066"
          buyLink={blockSessionsBuyLink}
        />
      </AnimatedSection>
      
      <!-- FAQ Section -->
      <AnimatedSection {isVisible} index={7} className="faq-section">
        <div class="faq-container">
          <h2>FREQUENTLY ASKED QUESTIONS</h2>
          
          <div class="faq-grid">
            <div class="faq-item">
              <h3>What skill level do I need to benefit from coaching?</h3>
              <p>Our coaching services benefit players at all skill levels, from beginners looking to establish good technique to experienced players trying to break through plateaus.</p>
            </div>
            
            <div class="faq-item">
              <h3>How long until I see results?</h3>
              <p>Most players notice improvement immediately after implementing the recommended changes. Significant improvement typically comes with 2-3 weeks of practice using the new techniques.</p>
            </div>
            
            <div class="faq-item">
              <h3>Do I need any special equipment for online sessions?</h3>
              <p>Just a webcam, internet connection, your dartboard, and enough space to show your full throw from the side and front angles. We'll help you set up the optimal camera position.</p>
            </div>
            
            <div class="faq-item">
              <h3>What makes your coaching different?</h3>
              <p>Our coaching combines deep technical knowledge with clear, actionable guidance. We focus on the specific adjustments that will make the biggest difference to your game.</p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
    
    <!-- Using the reusable Testimonials component -->
    <AnimatedSection {isVisible} index={8}>
      <Testimonials autoScroll={true} />
    </AnimatedSection>
    
    <AnimatedSection {isVisible} index={9}>
      <footer>
        <div class="footer-container">
          <p>Copyright © 2025 Straight To The Point Darts</p>
        </div>
      </footer>
    </AnimatedSection>
  </PageTransition>
</div>

<style>
  .coaching-page {
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
    max-width: 900px;
    margin: 0 auto;
  }
  
  .hero-tagline {
    font-family: 'TheBoLDFont', sans-serif;
    font-size: 26px;
    color: #60C3F0;
    margin-bottom: 20px;
  }
  
  .hero-description {
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    color: #333;
    line-height: 1.6;
  }
  
  
  .stats-container {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    background: linear-gradient(135deg, #13475D 0%, #60C3F0 100%);
    padding: 40px;
    border-radius: 10px;
    color: white;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  
  .stat-item {
    text-align: center;
    padding: 20px;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.8s ease, transform 0.8s ease;
  }
  
  :global(.visible .stat-item) {
    opacity: 1;
    transform: translateY(0);
  }
  
  .stat-number {
    font-family: 'TheBoLDFont', sans-serif;
    font-size: 42px;
    margin-bottom: 10px;
    background: linear-gradient(to bottom, #FFFFFF, #FFDE59);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(0 2px 3px rgba(0, 0, 0, 0.3));
  }
  
  .stat-text {
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
  }
  
  
  .approach-container {
    background-color: #F5F9FC;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  }
  
  .approach-content h2 {
    font-family: 'TheBoLDFont', sans-serif;
    font-size: 28px;
    color: #13475D;
    margin-bottom: 20px;
    text-align: center;
  }
  
  .approach-content > p {
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    color: #333;
    line-height: 1.6;
    text-align: center;
    max-width: 900px;
    margin: 0 auto 30px;
  }
  
  .approach-features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    margin-top: 20px;
  }
  
  .approach-feature {
    display: flex;
    align-items: flex-start;
    gap: 15px;
  }
  
  .feature-icon {
    font-size: 32px;
    color: #60C3F0;
    flex-shrink: 0;
  }
  
  .feature-text h3 {
    font-family: 'TheBoLDFont', sans-serif;
    font-size: 20px;
    color: #13475D;
    margin-bottom: 10px;
  }
  
  .feature-text p {
    font-family: 'Montserrat', sans-serif;
    font-size: 15px;
    color: #333;
    line-height: 1.5;
  }
  
  .services-description {
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    color: #444;
    max-width: 800px;
    margin: 0 auto;
  }
  
  .faq-container {
    background-color: #F5F9FC;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  }
  
  .faq-container h2 {
    font-family: 'TheBoLDFont', sans-serif;
    font-size: 28px;
    color: #13475D;
    margin-bottom: 30px;
    text-align: center;
  }
  
  .faq-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
  }
  
  .faq-item {
    background-color: white;
    padding: 25px;
    border-radius: 8px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .faq-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  }
  
  .faq-item h3 {
    font-family: 'TheBoLDFont', sans-serif;
    font-size: 18px;
    color: #13475D;
    margin-bottom: 15px;
  }
  
  .faq-item p {
    font-family: 'Montserrat', sans-serif;
    font-size: 15px;
    color: #444;
    line-height: 1.5;
  }
  
  /* Footer Styles */
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
    
    .hero-tagline {
      font-size: 22px;
    }
    
    .hero-description {
      font-size: 16px;
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
    
    .hero-tagline {
      font-size: 20px;
    }
    
    .hero-description {
      font-size: 15px;
    }
    
    .stats-container {
      flex-direction: column;
      gap: 10px;
      padding: 30px 20px;
    }
    
    .stat-item {
      padding: 10px;
    }
    
    .stat-number {
      font-size: 36px;
    }
    
    .approach-container,
    .faq-container {
      padding: 25px 15px;
    }
    
    .approach-content h2,
    .faq-container h2 {
      font-size: 24px;
    }
    
    .feature-text h3,
    .faq-item h3 {
      font-size: 17px;
    }
    
    .feature-text p,
    .faq-item p {
      font-size: 14px;
    }
    
    .footer-container {
      padding: 0 15px;
    }
  }
</style>