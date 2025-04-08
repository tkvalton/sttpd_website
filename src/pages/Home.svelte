<!-- 
  Home page component with improved responsive layout
-->
<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import Hero from '../components/home/Hero.svelte';
  import ReviewBox from '../components/general/ReviewBox.svelte';
  import PageWidget from '../components/home/PageWidet.svelte';
  import YoutubeStats from '../components/home/YoutubeStats.svelte';

  // Optional prop to receive the navigation handler from App.svelte
  export let onNavigate: (path: string) => void = () => {};

  // Type for widgets
  interface Widget {
      name: string;
      description: string;
      image: string;
      link: string;
      external?: boolean;
  }

  // Type for testimonials
  interface Testimonial {
      text: string;
      name: string;
  }

  // Sample data for widgets
  const widgets: Widget[] = [
      {
          name: 'Darts Coaching',
          description: 'With our exclusive Darts Coaching services, we can help you improve your game.',
          image: '/assets/images/coaching/web_sessions.jpg',
          link: '/coaching',
          external: false
      },
      {
          name: 'My Darts',
          description: 'Handmade by CustomMade Darts, these premium darts are designed to be very front weighted to help the dart travel to the board with little effort.',
          image: '/assets/images/darts/darts1-1.png',
          link: '/mydarts',
          external: false
      }
  ];
      
  // Sample testimonials from PDC pros
  const testimonials: Testimonial[] = [
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
  
  // Auto-scroll testimonials
  let scrollInterval: number | null = null;
  let testimonialsElement: HTMLDivElement | null = null;

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
    if (scrollInterval) {
      clearInterval(scrollInterval);
      scrollInterval = null;
    }
  }

  // Start/stop auto-scroll based on interaction
  function handleTestimonialsMouseEnter() {
    stopAutoScroll();
  }

  function handleTestimonialsMouseLeave() {
    startAutoScroll();
  }
  
  onMount(() => {
    startAutoScroll();
  });
  
  onDestroy(() => {
    stopAutoScroll();
  });
</script>
  
<div class="home-container">
  <main class="home-page">
    <Hero />
    
    <section class="widgets" aria-label="Featured services">
      <div class="widgets-container">
        {#each widgets as widget}
          <PageWidget 
            name={widget.name} 
            description={widget.description} 
            image={widget.image}
            link={widget.link}
            external={widget.external || false}
            onNavigate={onNavigate}
          />
        {/each}
      </div>
    </section>
    
    <section class="youtube-stats">
      <YoutubeStats />
    </section>
    
    <!-- Testimonials Section -->
    <section class="testimonials">
      <h2 class="testimonial-heading">What the professionals say</h2>
      <div 
        class="testimonials-scroll" 
        role="region" 
        aria-label="Testimonials from darts professionals"
        bind:this={testimonialsElement}
        on:mouseenter={handleTestimonialsMouseEnter}
        on:mouseleave={handleTestimonialsMouseLeave}
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
</div>
  
<style>
  .home-container {
    width: 100%;
    box-sizing: border-box;
    padding: 0 60px; /* Default padding for larger screens */
  }

  .home-page {
    width: 100%;
    max-width: 1400px; /* Add a max-width to control content width */
    margin: 0 auto; /* Center the content */
    font-family: 'Arial', sans-serif;
  }
  
  .testimonial-heading {
    font-family: 'TheBoLDFont', sans-serif;
    color: #13475D;
    text-align: center;
    font-size: 32px;
    margin-bottom: 20px;
  }
    
  .widgets-container {
    display: flex;
    justify-content: center;
    gap: 30px;
    margin: 40px 0;
    flex-wrap: wrap; /* Allow widgets to wrap on smaller screens */
  }
  
  .testimonials {
    margin: 60px 0;
    overflow: hidden;
  }
  
  .testimonials-scroll {
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE and Edge */
    padding: 10px 0;
    gap: 20px; /* Add gap between testimonials */
  }
  
  .testimonials-scroll::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
  
  footer {
    text-align: center;
    color: black;
    padding: 50px 0;
    margin-top: 40px;
    border-top: 1px solid #eee;
  }
  
  /* Focus styles for keyboard navigation */
  .testimonials-scroll:focus {
    outline: 3px solid #60C3F0;
    outline-offset: 2px;
  }
  
  /* Responsive design - adjust padding and layout based on screen size */
  @media (max-width: 1200px) {
    .home-container {
      padding: 0 40px; /* Reduce padding on medium screens */
    }
    
    .widgets-container {
      gap: 20px;
    }
  }
  
  @media (max-width: 900px) {
    .home-container {
      padding: 0 30px;
    }
    
    .testimonial-heading {
      font-size: 28px;
    }
  }
  
  @media (max-width: 768px) {
    .home-container {
      padding: 0 20px; /* Minimal padding on mobile */
    }
    
    .widgets-container {
      flex-direction: column;
      align-items: center;
      gap: 40px;
    }
    
    .testimonial-heading {
      font-size: 24px;
    }
    
    footer {
      padding: 30px 0;
    }
  }
  
  @media (max-width: 480px) {
    .home-container {
      padding: 0 15px;
    }
    
    .testimonial-heading {
      font-size: 22px;
    }
  }
</style>