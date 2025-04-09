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
</script>

<div class="coaching-page">
  <PageTransition let:isVisible let:stagger>
    <div class="content-wrapper">
      <!-- Throw Analysis Service Panel - Blue Theme -->
      <AnimatedSection {isVisible} index={0} className="service-panel-container">
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
      <AnimatedSection {isVisible} index={1} className="service-panel-container">
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
      <AnimatedSection {isVisible} index={2} className="service-panel-container">
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
    </div>
    
    <!-- Using the reusable Testimonials component -->
    <AnimatedSection {isVisible} index={3}>
      <Testimonials autoScroll={true} />
    </AnimatedSection>
    
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
  .coaching-page {
    width: 100%;
    background-color: white;
  }

  .content-wrapper {
    padding: 30px 60px;
    max-width: 1300px;
    margin: 0 auto;
  }
  
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
    
    .footer-container {
      padding: 0 15px;
    }
  }
</style>