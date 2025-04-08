<!-- 
  ReviewBox component with accessibility fixes
  Displays testimonials with proper semantic markup
-->
<script lang="ts">
  // Define props with explicit types
  export let reviewText: string = '';
  export let reviewName: string = '';

  // Validation
  $: hasValidText = reviewText && reviewText.trim().length > 0;
  $: hasValidName = reviewName && reviewName.trim().length > 0;
</script>

{#if hasValidText || hasValidName}
<article class="review-box">
  {#if hasValidText}
    <div class="review-text-box">
      <div class="panel" aria-hidden="true"></div>
      <blockquote class="content">
        <p class="review-text">{reviewText}</p>
      </blockquote>
    </div>
  {/if}
  
  {#if hasValidName}
    <div class="name-container">
      <div class="panel" aria-hidden="true"></div>
      <div class="title">
        <span class="review-name">{reviewName}</span>
      </div>
    </div>
  {/if}
</article>
{:else}
<div class="error-message">
  No valid review text or name provided
</div>
{/if}

<style>
.review-box {
  margin: 20px;
  position: relative;
  font-family: 'Arial', sans-serif;
  width: 350px; /* Fixed width to ensure consistency */
  min-height: 250px;
  display: flex;
  flex-direction: column;
  background-color: rgb(243, 243, 243);
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  border-radius: 8px;
  overflow: hidden;
}

.error-message {
  color: red;
  text-align: center;
  padding: 20px;
  background-color: #ffeeee;
}

.review-text-box {
  position: relative;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  min-height: 180px; /* Ensure consistent text box height */
}

.panel {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 1px solid #13475D;
  pointer-events: none;
}

.content {
  position: relative;
  margin: 0;
  width: 100%;
  text-align: center;
}

.review-text {
  color: #60C3F0;
  font-style: italic;
  font-family: 'MontserratItalic', sans-serif;
  font-size: 16px;
  line-height: 1.4;
  max-width: 100%;
}

.name-container {
  position: relative;
  background-color: #13475D;
  color: white;
  padding: 15px;
  text-align: center;
  min-height: 100px; /* Fixed height for name container */
  display: flex;
  align-items: center;
  justify-content: center;
}

.title {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.review-name {
  font-size: 14px;
  font-weight: bold;
  font-family: 'TheBoLDFont', sans-serif;
  display: block;
  text-align: center;
  max-width: 100%;
  word-wrap: break-word;
  line-height: 1.3;
}
</style>