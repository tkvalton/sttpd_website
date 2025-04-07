<!-- 
  Home page component with accessibility fixes
-->
<script>
    import ReviewBox from '../components/ReviewBox.svelte';
    import PageWidget from '../components/PageWidget.svelte';
    import YoutubeStats from '../components/YoutubeStats.svelte';
    
    // Sample data for widgets
    const widgets = [
      {
        name: 'Darts Coaching',
        description: 'With our exclusive Darts Coaching services, we can help you improve your game.',
        image: '/images/coaching/web_sessions.jpg',
        link: '/coaching'
      },
      {
        name: 'My Darts',
        description: 'Handmade by CustomMade Darts, these premium darts are designed to be very front weighted to help the dart travel to the board with little effort.',
        image: '/images/darts/darts1-1.png',
        link: '/mydarts'
      }
    ];
    
    // Sample testimonials from PDC pros
    const testimonials = [
      {
        text: "Anything thus man dosnt know about darts isn't worth knowing, a real credit to the sport!",
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
  
    // Auto-scroll testimonials
    let scrollInterval;
    let testimonialsElement;
  
    function startAutoScroll() {
      if (!testimonialsElement) return;
      
      scrollInterval = setInterval(() => {
        if (!testimonialsElement) return;
        
        const scrollAmount = 2; // pixels per interval
        const scrollWidth = testimonialsElement.scrollWidth;
        const clientWidth = testimonialsElement.clientWidth;
        const maxScroll = scrollWidth - clientWidth;
        
        if (testimonialsElement.scrollLeft >= maxScroll) {
          testimonialsElement.scrollLeft = 0;
        } else {
          testimonialsElement.scrollLeft += scrollAmount;
        }
      }, 50);
    }
  
    function stopAutoScroll() {
      clearInterval(scrollInterval);
    }
  
    // Start/stop auto-scroll based on interaction
    function handleTestimonialsMouseEnter() {
      stopAutoScroll();
    }
  
    function handleTestimonialsMouseLeave() {
      startAutoScroll();
    }
    
    // Initialize auto-scroll when component mounts
    import { onMount, onDestroy } from 'svelte';
    
    onMount(() => {
      startAutoScroll();
    });
    
    onDestroy(() => {
      stopAutoScroll();
    });
  </script>
  
  <main class="home-page">
    <section class="hero" aria-labelledby="hero-heading">
      <div class="hero-content">
        <div class="hero-text">
          <h1 id="hero-heading">Straight To The Point Darts</h1>
          <p class="hero-description">
            Straight To The Point Darts offers various online darts tuition services dedicated to helping darts players improve and develop their game.
          </p>
          <p class="hero-slogan">WE ARE ALL ABOUT IMPROVEMENT!</p>
          <div class="divider" aria-hidden="true"></div>
          <p class="credentials">PROFESSIONAL DARTS PLAYERS ASSOCIATION OFFICIAL DARTS COACH</p>
        </div>
        <div class="hero-image">
          <img src="/images/logos/professional_darts_players_association_offical_darts_coach_no_text.png" alt="PDPA Official Coach Badge" />
        </div>
      </div>
    </section>
    
    <section class="widgets" aria-label="Featured services">
      <div class="widgets-container">
        {#each widgets as widget}
          <PageWidget 
            name={widget.name} 
            description={widget.description} 
            image={widget.image}
            link={widget.link}
          />
        {/each}
      </div>
    </section>
    
    <section class="youtube-stats">
      <YoutubeStats />
    </section>
    
    <section class="testimonials" aria-labelledby="testimonials-heading">
      <h2 id="testimonials-heading" class="visually-hidden">Testimonials</h2>
      <div 
        class="testimonials-scroll"
        bind:this={testimonialsElement}
        on:mouseenter={handleTestimonialsMouseEnter}
        on:mouseleave={handleTestimonialsMouseLeave}
        tabindex="0"
        aria-label="Scrollable testimonials from professional darts players"
      >
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
  </main>
  
  <style>
    .home-page {
      width: 100%;
      font-family: 'Arial', sans-serif;
    }
    
    .hero {
      background-color: #60C3F0;
      border-radius: 25px;
      padding: 50px 25px;
      margin: 20px 50px;
    }
    
    .hero-content {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    
    .hero-text {
      flex: 1;
      padding-right: 25px;
    }
    
    h1 {
      font-size: 30px;
      color: white;
      margin-bottom: 34px;
    }
    
    .hero-description {
      font-size: 16px;
      color: white;
      max-width: 700px;
    }
    
    .hero-slogan {
      font-size: 45px;
      font-weight: bold;
      text-align: center;
      color: white;
      margin: 30px 0;
    }
    
    .divider {
      height: 1px;
      width: 100%;
      background-color: white;
      margin: 20px 0;
    }
    
    .credentials {
      font-size: 23px;
      color: #13475D;
      font-weight: bold;
    }
    
    .hero-image {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .hero-image img {
      max-width: 250px;
    }
    
    .widgets-container {
      display: flex;
      justify-content: center;
      gap: 20px;
      margin: 40px 0;
    }
    
    .testimonials {
      margin: 40px 0;
      overflow: hidden;
    }
    
    .testimonials-scroll {
      display: flex;
      overflow-x: auto;
      scroll-behavior: smooth;
      scrollbar-width: none; /* Firefox */
      -ms-overflow-style: none; /* IE and Edge */
      padding: 10px 0;
    }
    
    .testimonials-scroll::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera */
    }
    
    footer {
      text-align: center;
      color: black;
      padding: 50px 0;
    }
    
    /* Accessibility helper */
    .visually-hidden {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }
    
    /* Focus styles for keyboard navigation */
    .testimonials-scroll:focus {
      outline: 3px solid #60C3F0;
      outline-offset: 2px;
    }
    
    /* Responsive design */
    @media (max-width: 768px) {
      .hero {
        margin: 20px;
        padding: 30px 15px;
      }
      
      .hero-content {
        flex-direction: column;
      }
      
      .hero-text {
        padding-right: 0;
        text-align: center;
      }
      
      .widgets-container {
        flex-direction: column;
        align-items: center;
      }
      
      .hero-slogan {
        font-size: 32px;
      }
      
      .credentials {
        font-size: 18px;
      }
    }
  </style>