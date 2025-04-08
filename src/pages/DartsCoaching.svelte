<!-- 
  Corrected Darts Coaching page that precisely matches the design mockup
-->
<script lang="ts">
  import ReviewBox from '../components/general/ReviewBox.svelte';
  import ServicePanel from '../components/darts_coaching/ServicePanel.svelte';
  
  // Testimonials - same as on home page for consistency
  const testimonials = [
    {
      text: "Anything this man doesn't know about darts isn't worth knowing, a real credit to the sport!",
      name: "Connor Scutt – PDC Professional and former Lakeside World Championship #1 seed."
    },
    {
      text: "Outstanding video as always.",
      name: "Glen Durrant – X3 BDO world champion and PDC Premier League Champion."
    },
    {
      text: "That video is mental mate thank you very much!",
      name: "PDC Pro Lewis Williams."
    },
    {
      text: "Very useful thank you",
      name: "PDC Pro Jules Van Dongen."
    }
  ];

  // Instructions for the Throw Analysis service
  const throwAnalysisInstructions = [
    "FILM 9 DARTS THROW AT T20 FROM SIDE-ON.",
    "FILM 9 DARTS THROW AT T20 FRONT ON. IT CAN ALSO BE USEFUL TO SEND A CLIP IN SLOW-MOTION FROM THIS POSITION AS WELL BUT NOT ESSENTIAL.",
    "INCLUDING A PHOTOGRAPH OF YOUR GRIP CAN ALSO BE HELPFUL."
  ];

  // Service descriptions
  const throwAnalysisDescription = `As used by 10 current and former PDC Professionals.

Throw analysis and custom video service could be just what you need help get you to the next step. This provides multiple examples of how your throw can be improved and examples of multiple professionals implementing the feedback, so you know it works.

After hours of deliberation I will then create your own straight to the point darts instructional video. This video will detail any areas of improvement needed in slow motion and show you ways to correct these faults.

The instructions for filming the Analysis is below. If you can film the front on shot in slow-motion it can better, but its not essential.

You can send the footage via email using Google drive, Dropbox box, WeTransfer or something similar. If you're using an android device the app "Filemail" is free and works well. If easier I also accept footage via social media or WhatsApp to 07522 386993. Please email me directly once sent so I can confirm the footage has been recived.`;

  const webSessionDescription = `Please contact me to check what time slots are available before the payment is made via email or telephone.

straighttothepointdarts@gmail.com
07522386993

During the session we can record your throw and play it back to you in slow-motion explaining errors made and provide feedback on how to correct them.

During this session I recommend you bring something to make notes with.

The web session will be held on zoom, Skype or Facebook Messenger with the webcam facing you on the oche for my observation.`;

  const blockSessionsDescription = `We recommend you start with a throw analysis before start sessions in most cases.

This sales is for a block of six sessions at £250. All sessions are 45 minutes long.

I work every weekend and weekday but please contact me to arrange a regular time slot as available is low due to demand.

A personal practice routine will be created for you as well.

During the session we can record your throw and play it back to you in slow-motion explaining errors made and provide feedback on how to correct them.`;
</script>

<div class="coaching-page">
  <div class="content-wrapper">
    <!-- Throw Analysis Service Panel -->
    <ServicePanel 
      title="THROW ANALYSIS SERVICE" 
      highlightText="THE TURN AROUND TIME IS CURRENTLY 28 DAYS FROM RECEIVING YOUR FOOTAGE DUE TO HIGH DEMAND."
      description={throwAnalysisDescription}
      price="£89.99"
      instructions={throwAnalysisInstructions}
    />
    
    <!-- Web Sessions Panel -->
    <ServicePanel 
      title="WEB SESSION" 
      highlightText="45 MINUTES ONLINE SESSION"
      description={webSessionDescription}
      price="£69.99"
      reverse={true}
    />
    
    <!-- Block of Sessions Panel -->
    <ServicePanel 
      title="BLOCK OF SESSIONS" 
      highlightText="PLEASE CONTACT ME TO ARRANGE YOUR REGULAR TIME SLOT IN ADVANCE"
      description={blockSessionsDescription}
      price="£350.00"
    />
  </div>
  
  <!-- Testimonials Section -->
  <section class="testimonials-section">
    <div class="testimonials-container">
      <h2 class="testimonials-heading">TESTIMONIALS</h2>
      <div class="testimonials-scroll">
        {#each testimonials as testimonial}
          <div class="testimonial-item">
            <ReviewBox 
              reviewText={testimonial.text} 
              reviewName={testimonial.name} 
            />
          </div>
        {/each}
      </div>
    </div>
  </section>
  
  <footer>
    <div class="footer-container">
      <p>Copyright © 2025 Straight To The Point Darts</p>
    </div>
  </footer>
</div>

<style>
  .coaching-page {
    width: 100%;
    background-color: white;
  }

  .content-wrapper {
    background-color: #13475D;
    padding: 20px 60px;
  }
  
  .testimonials-section {
    background-color: white;
    padding: 60px 0;
  }
  
  .testimonials-container {
    max-width: 1160px;
    margin: 0 auto;
    padding: 0 20px;
  }
  
  .testimonials-heading {
    text-align: center;
    margin-bottom: 40px;
    color: #13475D;
    font-family: 'TheBoLDFont', sans-serif;
    font-size: 32px;
  }
  
  .testimonials-scroll {
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE and Edge */
    padding: 10px 0;
    gap: 30px;
  }
  
  .testimonials-scroll::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
  
  .testimonial-item {
    flex: 0 0 auto;
    min-width: 300px;
    max-width: 350px;
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
    
    .testimonials-container,
    .footer-container {
      padding: 0 40px;
    }
  }
  
  @media (max-width: 768px) {
    .content-wrapper {
      padding: 15px;
    }
    
    .testimonials-container,
    .footer-container {
      padding: 0 15px;
    }
    
    .testimonials-section {
      padding: 40px 0;
    }
    
    .testimonials-heading {
      font-size: 26px;
      margin-bottom: 30px;
    }
    
    .testimonial-item {
      min-width: 260px;
    }
  }
</style>