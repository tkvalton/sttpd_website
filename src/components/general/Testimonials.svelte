<!-- 
  Reusable Testimonials component with auto-scrolling functionality and expanded review list
-->
<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    import ReviewBox from './ReviewBox.svelte';
    
    // Export testimonials array for dynamic data
    export let testimonials = [
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
      },
      {
        text: "Had a great practice, happy with the consistency and felt more controlled which was nice.",
        name: "Jarrad Cole – ADC World Champion and Modus Pro."
      },
      {
        text: "Fantastic analysis and I think you solved my problem.",
        name: "Dan Blacksher"
      },
      {
        text: "It's a really good analysis and I'm sure it will help me immensely I will work over all the points you made in the coming weeks.",
        name: "Robert Mothersole"
      },
      {
        text: "Daniel is a awesome coach 2nd time with him and he has found out what I needed to change. 10 mins later 2 180s honestly can't praise his knowledge enough.",
        name: "Dave Williams"
      },
      {
        text: "Daniel is an amazing coach. He really takes the time to communicate with you and follow up after your session. He picked out 3 things in our first session and it changed my game!",
        name: "Megaton Migalski"
      },
      {
        text: "I was stuck with things that needed to be fixed regarding my throw. Daniel helped me change aspects that both helped me feel more confident and allowed me to see a way forward to improve technically.",
        name: "Pétur Rúðrik Guðmundsson – PDC World Cup Player"
      }
    ];
    
    // Auto-scroll functionality
    let scrollInterval: number | null = null;
    let testimonialsElement: HTMLDivElement | null = null;
    export let autoScroll = true; // Option to enable/disable auto-scroll
  
    function startAutoScroll() {
      if (!testimonialsElement || !autoScroll) return;
      
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
      if (autoScroll) {
        startAutoScroll();
      }
    }
    
    onMount(() => {
      if (autoScroll) {
        startAutoScroll();
      }
    });
    
    onDestroy(() => {
      stopAutoScroll();
    });
  </script>
  
  <section class="testimonials-section">
    <div class="testimonials-container">
      <h2 class="testimonials-heading">TESTIMONIALS</h2>
      <div 
        class="testimonials-scroll" 
        bind:this={testimonialsElement}
        on:mouseenter={handleTestimonialsMouseEnter}
        on:mouseleave={handleTestimonialsMouseLeave}
        role="region"
        aria-label="Testimonials carousel"
      >
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
  
  <style>
    .testimonials-section {
      background-color: white;
      padding: 60px 0;
      width: 100%;
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
    
    /* Focus styles for keyboard navigation */
    .testimonials-scroll:focus {
      outline: 3px solid #60C3F0;
      outline-offset: 2px;
    }
    
    /* Responsive styles */
    @media (max-width: 1200px) {
      .testimonials-container {
        padding: 0 40px;
      }
      
      .testimonials-heading {
        font-size: 28px;
      }
    }
    
    @media (max-width: 768px) {
      .testimonials-section {
        padding: 40px 0;
      }
      
      .testimonials-container {
        padding: 0 15px;
      }
      
      .testimonials-heading {
        font-size: 26px;
        margin-bottom: 30px;
      }
      
      .testimonial-item {
        min-width: 260px;
      }
      
      .testimonials-scroll {
        -webkit-overflow-scrolling: touch; /* Smoother scrolling on iOS */
      }
    }
  </style>