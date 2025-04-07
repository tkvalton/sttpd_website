<!-- 
  ReviewBox component with accessibility fixes
  Displays testimonials with proper semantic markup
-->
<script>
    // Define props similar to the @export variables in the Godot script
    export let reviewText = '';
    export let reviewName = '';
  </script>
  
  <article class="review-box">
    <div class="review-text-box">
      <div class="panel" aria-hidden="true"></div>
      <blockquote class="content">
        <p class="review-text">{reviewText}</p>
      </blockquote>
    </div>
    <footer class="name-container">
      <div class="panel" aria-hidden="true"></div>
      <div class="title">
        <cite class="review-name">{reviewName}</cite>
      </div>
    </footer>
  </article>
  
  <style>
    .review-box {
      margin: 50px 20px;
      position: relative;
      font-family: 'Arial', sans-serif;
    }
    
    .review-text-box {
      position: relative;
      min-height: 150px;
    }
    
    .panel {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border: 2px solid #13475D; /* Dark blue color from your Godot project */
      border-radius: 5px;
    }
    
    .content {
      padding: 15px 2px 55px 2px;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0;
    }
    
    .review-text {
      color: #60C3F0; /* Light blue from your project */
      font-style: italic;
      font-size: 21px;
      text-align: center;
      max-width: 300px;
      padding: 0 10px;
    }
    
    .name-container {
      position: relative;
      height: 50px;
      display: flex;
      justify-content: flex-end;
    }
    
    .title {
      min-width: 250px;
      height: 50px;
      padding: 0 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .review-name {
      color: white;
      font-size: 12px;
      text-align: center;
      max-width: 300px;
      font-style: normal;
    }
    
    .name-container .panel {
      background-color: #13475D; /* Dark blue color */
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  </style>