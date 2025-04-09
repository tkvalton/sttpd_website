<!-- 
  Reusable Testimonials component with sequential fade transition
-->
<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { fade } from 'svelte/transition';
  
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
  
  // Testimonial rotation
  let currentTestimonialIndex = 0;
  let testimonialInterval: number | null = null;
  let isTransitioning = false;
  export let autoRotate = true;
  export let rotationInterval = 5000; // 5 seconds per testimonial

  function startRotation() {
    if (!autoRotate) return;
    
    testimonialInterval = setInterval(() => {
      if (!isTransitioning) {
        goToNextTestimonial();
      }
    }, rotationInterval);
  }

  function stopRotation() {
    if (testimonialInterval) {
      clearInterval(testimonialInterval);
      testimonialInterval = null;
    }
  }

  function handleMouseEnter() {
    stopRotation();
  }

  function handleMouseLeave() {
    startRotation();
  }

  function goToNextTestimonial() {
    currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
  }

  function goToTestimonial(index: number) {
    if (!isTransitioning) {
      currentTestimonialIndex = index;
    }
  }

  onMount(() => {
    startRotation();
  });

  onDestroy(() => {
    stopRotation();
  });
</script>

<section 
  class="testimonials-section"
  on:mouseenter={handleMouseEnter}
  on:mouseleave={handleMouseLeave}
  aria-label="Customer Testimonials"
>
  <div class="testimonials-container">
    <h2 class="testimonials-heading">
      <span class="testimonials-preheading">Real Stories, Real Impact</span>
      What People Say
    </h2>
    
    <div class="testimonial-dots">
      {#each testimonials as _, index}
        <button 
          class="dot" 
          class:active={index === currentTestimonialIndex}
          on:click={() => goToTestimonial(index)}
          aria-label={`View testimonial ${index + 1}`}
        ></button>
      {/each}
    </div>
    
    {#key currentTestimonialIndex}
      <div 
        class="testimonial-content"
        in:fade="{{ duration: 300, delay: 300 }}"
        out:fade="{{ duration: 300 }}"
        on:introstart={() => { isTransitioning = true; }}
        on:outroend={() => { isTransitioning = false; }}
      >
        <blockquote class="testimonial-quote">
          "{testimonials[currentTestimonialIndex].text}"
        </blockquote>
        <cite class="testimonial-author">
          {testimonials[currentTestimonialIndex].name}
        </cite>
      </div>
    {/key}
  </div>
</section>

<style>
  @font-face {
    font-family: 'TheBoLDFont';
    src: url('/assets/fonts/THEBOLDFONT-FREEVERSION.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url('/assets/fonts/Montserrat-SemiBold.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  .testimonials-section {
    background-color: #f4f7f9;
    padding: 80px 0;
    width: 100%;
  }

  .testimonials-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 20px;
    text-align: center;
    position: relative;
    min-height: 350px; /* Increased to accommodate dots and content */
  }

  .testimonials-heading {
    color: #13475D;
    font-family: 'TheBoLDFont', sans-serif;
    font-size: 2.5rem;
    margin-bottom: 40px;
    font-weight: 700;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .testimonials-preheading {
    font-size: 1.2rem;
    color: #60C3F0;
    margin-bottom: 10px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  .testimonial-content {
    max-width: 700px;
    margin: 0 auto;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    padding: 0 20px;
  }

  .testimonial-quote {
    font-size: 1.4rem;
    line-height: 1.6;
    color: #2c3e50;
    font-style: italic;
    margin-bottom: 20px;
    display: block;
    font-family: 'Montserrat', sans-serif;
  }

  .testimonial-author {
    font-size: 1rem;
    color: #13475D;
    font-weight: 600;
    font-style: normal;
    font-family: 'Montserrat', sans-serif;
  }

  .testimonial-dots {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    gap: 15px;
  }

  .dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #a0b4c1;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .dot.active {
    background-color: #13475D;
    width: 20px;
    border-radius: 10px;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .testimonials-section {
      padding: 50px 0;
    }
    
    .testimonials-heading {
      font-size: 2rem;
      margin-bottom: 30px;
    }

    .testimonials-preheading {
      font-size: 1rem;
    }
    
    .testimonial-quote {
      font-size: 1.2rem;
    }
    
    .testimonial-author {
      font-size: 0.9rem;
    }
  }
</style>