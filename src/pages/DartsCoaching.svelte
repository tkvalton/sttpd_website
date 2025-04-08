<!-- 
  Conversion of the Darts Coaching page from your Godot project
  Features the three service panels: Throw Analysis, Web Sessions, and Block of Sessions
-->
<script>
    import ReviewBox from '../components/general/ReviewBox.svelte';
    
    // Testimonials - same as on home page for consistency
    const testimonials = [
      {
        text: "Anything this man dosnt know about darts isn't worth knowing, a real credit to the sport!",
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
  </script>
  
  <div class="coaching-page">
    <!-- Throw Analysis Service Panel -->
    <section class="service-panel">
      <div class="panel-content">
        <div class="panel-left">
          <h2>Throw Analysis Service</h2>
          <p class="highlight-text">The turn around time is currently 28 days from receiving your footage due to high demand.</p>
          <div class="divider"></div>
          <p class="service-description">
            As used by 10 current and former PDC Professionals.
            <br /><br />
            Throw analysis and custom video service could be just what you need help get you to the next step. This provides multiple examples of how your throw can be improved and examples of multiple professionals implementing the feedback, so you know it works.
            <br /><br />
            After hours of deliberation I will then create your own straight to the point darts instructional video. This video will detail any areas of improvement needed in slow motion and show you ways to correct these faults.
            <br /><br />
            The instructions for filming the Analysis is below. If you can film the front on shot in slow-motion it can better, but its not essential.
            <br /><br />
            You can send the footage via email using Google drive, Dropbox box, WeTransfer or something similar. If you're using an android device the app "Filemail" is free and works well. If easier I also accept footage via social media or WhatsApp to 07522 386993. Please email me directly once sent so I can confirm the footage has been recived.
          </p>
        </div>
        
        <div class="panel-right">
          <div class="instructions">
            <p class="instruction-text">Film 9 darts throw at T20 from side-on.</p>
            <p class="instruction-text">Film 9 darts throw at T20 front on. It can also be useful to send a clip in slow-motion from this position as well but not essential.</p>
            <p class="instruction-text">Including a photograph of your grip can also be helpful.</p>
          </div>
          
          <div class="buy-section">
            <button class="buy-button">Buy Now</button>
            <p class="price">£89.99</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Web Sessions Panel -->
    <section class="service-panel">
      <div class="panel-content reverse">
        <div class="panel-right">
          <div class="buy-section">
            <button class="buy-button">Buy Now</button>
            <p class="price">£69.99</p>
          </div>
        </div>
        
        <div class="panel-left">
          <h2>Web Session</h2>
          <p class="highlight-text">45 Minutes Online Session</p>
          <div class="divider"></div>
          <p class="service-description">
            Please contact me to check what time slots are available before the payment is made via email or telephone.
            <br /><br />
            straighttothepointdarts@gmail.com<br />
            07522386993
            <br /><br />
            During the session we can record your throw and play it back to you in slow-motion explaining errors made and provide feedback on how to correct them.
            <br /><br />
            During this session I recommend you bring something to make notes with.
            <br /><br />
            The web session will be held on zoom, Skype or Facebook Messenger with the webcam facing you on the oche for my observation.
          </p>
        </div>
      </div>
    </section>
    
    <!-- Block of Sessions Panel -->
    <section class="service-panel">
      <div class="panel-content">
        <div class="panel-left">
          <h2>Block of Sessions</h2>
          <p class="highlight-text">please contact me to arrange your regular time slot in advance</p>
          <div class="divider"></div>
          <p class="service-description">
            We recommend you start with a throw analysis before start sessions in most cases.
            <br /><br />
            This sales is for a block of six sessions at £250. All sessions are 45 minutes long.
            <br /><br />
            I work every weekend and weekday but please contact me to arrange a regular time slot as available is low due to demand.
            <br /><br />
            A personal practice routine will be created for you as well.
            <br /><br />
            During the session we can record your throw and play it back to you in slow-motion explaining errors made and provide feedback on how to correct them.
          </p>
        </div>
        
        <div class="panel-right">
          <div class="buy-section">
            <button class="buy-button">Buy Now</button>
            <p class="price">£350.00</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Testimonials Section -->
    <section class="testimonials">
      <div class="testimonials-scroll">
        {#each testimonials as testimonial}
          <ReviewBox 
            reviewText={testimonial.text} 
            reviewName={testimonial.name} 
          />
        {/each}
      </div>
    </section>
    
    <footer>
      <p>Copyright © 2025 Straight To The Point Darts</p>
    </footer>
  </div>
  
  <style>
    .coaching-page {
      width: 100%;
      font-family: 'Arial', sans-serif;
      padding: 20px 0;
    }
    
    .service-panel {
      background-color: #60C3F0;
      border-radius: 25px;
      margin: 20px 50px;
      padding: 25px;
    }
    
    .panel-content {
      display: flex;
      gap: 25px;
    }
    
    .panel-content.reverse {
      flex-direction: row-reverse;
    }
    
    .panel-left {
      flex: 3;
    }
    
    .panel-right {
      flex: 1;
      min-width: 300px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    
    h2 {
      font-size: 30px;
      color: white;
      margin-bottom: 12px;
    }
    
    .highlight-text {
      color: #13475D;
      font-weight: bold;
      font-size: 22px;
      text-align: center;
      margin-bottom: 12px;
    }
    
    .divider {
      height: 1px;
      background-color: white;
      margin: 12px 0;
    }
    
    .service-description {
      color: white;
      font-size: 16px;
      line-height: 1.5;
    }
    
    .instructions {
      background-color: #13475D;
      border-radius: 25px;
      padding: 20px;
      margin-bottom: 20px;
      flex-grow: 1;
    }
    
    .instruction-text {
      color: white;
      font-size: 15px;
      font-weight: bold;
      text-align: center;
      margin: 15px 0;
    }
    
    .buy-section {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 20px;
    }
    
    .buy-button {
      background-color: #C70D48;
      color: white;
      border: none;
      border-radius: 25px;
      padding: 10px 30px;
      font-size: 16px;
      font-weight: bold;
      cursor: pointer;
      transition: background-color 0.3s;
    }
    
    .buy-button:hover {
      background-color: #A00A37;
    }
    
    .price {
      color: white;
      font-size: 30px;
      font-weight: bold;
      margin-top: 10px;
    }
    
    .testimonials {
      margin: 40px 50px;
      overflow: hidden;
    }
    
    .testimonials-scroll {
      display: flex;
      overflow-x: auto;
      scroll-behavior: smooth;
      padding: 10px 0;
    }
    
    footer {
      text-align: center;
      color: black;
      padding: 50px 0;
    }
    
    /* Responsive styles */
    @media (max-width: 768px) {
      .service-panel {
        margin: 20px;
        padding: 15px;
      }
      
      .panel-content, .panel-content.reverse {
        flex-direction: column;
      }
      
      .panel-right {
        width: 100%;
      }
    }
  </style>