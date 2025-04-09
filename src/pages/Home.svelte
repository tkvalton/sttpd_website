<!-- src/pages/Home.svelte -->
<script lang="ts">
  import Hero from '../components/home/Hero.svelte';
  import PageWidget from '../components/home/PageWidet.svelte';
  import YoutubeStats from '../components/home/YoutubeStats.svelte';
  import Testimonials from '../components/general/Testimonials.svelte';
  import PageTransition from '../components/general/PageTransition.svelte';
  import AnimatedSection from '../components/general/AnimatedSection.svelte';

  // Type for widgets
  interface Widget {
    name: string;
    description: string;
    image: string;
    link: string;
  }

  // Sample data for widgets
  const widgets: Widget[] = [
    {
      name: 'Darts Coaching',
      description: 'With our exclusive Darts Coaching services, we can help you improve your game.',
      image: '/assets/images/coaching/web_sessions.jpg',
      link: '/coaching'
    },
    {
      name: 'My Darts',
      description: 'Handmade by CustomMade Darts, these premium darts are designed to be very front weighted to help the dart travel to the board with little effort.',
      image: '/assets/images/darts/darts1-1.png',
      link: '/mydarts'
    }
  ];
</script>
  
<div class="home-container">
  <PageTransition let:isVisible let:stagger>
    <main class="home-page">
      <AnimatedSection {isVisible} index={0} className="hero-section">
        <Hero />
      </AnimatedSection>
      
      <!-- Move the aria-label to the div inside instead of on the AnimatedSection -->
      <AnimatedSection {isVisible} index={1} className="widgets">
        <div class="widgets-container" aria-label="Featured services">
          {#each widgets as widget, i}
            <div class="widget-item" style="transition-delay: {300 + (i * 100)}ms;">
              <PageWidget 
                name={widget.name} 
                description={widget.description} 
                image={widget.image}
                link={widget.link}
              />
            </div>
          {/each}
        </div>
      </AnimatedSection>
      
      <AnimatedSection {isVisible} index={2} className="youtube-stats">
        <YoutubeStats />
      </AnimatedSection>
      
      <AnimatedSection {isVisible} index={3}>
        <!-- Using the reusable Testimonials component -->
        
      </AnimatedSection>
      
      <AnimatedSection {isVisible} index={4}>
        <footer>
          <p>Copyright © 2025 Straight To The Point Darts</p>
        </footer>
      </AnimatedSection>
    </main>
  </PageTransition>
</div>
  
<style>
  .home-container {
    width: 100%;
    box-sizing: border-box;
    padding: 0 60px; /* Desktop padding */
  }

  .home-page {
    width: 100%;
    font-family: 'Arial', sans-serif;
  }
    
  .widgets-container {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin: 40px 0;
    flex-wrap: wrap; /* Allow wrapping on smaller screens */
  }
  
  .widget-item {
    flex: 1;
    min-width: 300px; /* Minimum width before wrapping */
    max-width: 500px; /* Maximum width to maintain design */
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.8s ease, transform 0.8s ease;
  }
  
  :global(.visible .widget-item) {
    opacity: 1;
    transform: translateY(0);
  }
  
  footer {
    text-align: center;
    color: black;
    padding: 50px 0;
  }
  
  /* Responsive design */
  @media (max-width: 1200px) {
    .home-container {
      padding: 0 40px; /* Tablet padding */
    }
    
    .widgets-container {
      justify-content: space-around;
    }
  }
  
  @media (max-width: 768px) {
    .home-container {
      padding: 0 20px; /* Mobile padding */
    }
    
    .widgets-container {
      flex-direction: column;
      align-items: center;
    }
    
    .widget-item {
      width: 100%;
      max-width: 100%;
    }
  }
</style>