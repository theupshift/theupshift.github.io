layout: default
title: 
---

<style>
  .quote-container {
    position: relative;
    max-width: 700px;
    margin: 12px auto;
    border-radius: 4px;
    overflow: hidden;
  }

  .background-image {
    width: 100%;
    height: auto;
    display: block;
  }

  .quote-text {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 33.33%;
    font-size: 16px;
    line-height: 23px;
    font-weight: 400;
    color: #000000;
    padding: 15px 20px;
    margin: 0;
    font-family: Georgia, serif;
    text-align: center; /* Center the text */
    letter-spacing: 0.2px;

    background-color: rgba(255, 255, 255, 0.6); /* lighter, more transparent */
    border-radius: 4px;

    text-shadow: none;
    -webkit-font-smoothing: antialiased;
  }

  .artist-overlay {
    position: absolute;
    bottom: 20px;
    left: 20px;
    font-family: Arial, sans-serif;
    font-style: italic;
    font-size: 1rem;
    color: #000000;
    padding: 0;
    margin: 0;

    text-shadow: 0 1px 3px rgba(255, 255, 255, 0.85);
  }

  .artist-overlay a {
    color: inherit;
    text-decoration: underline;
    font-weight: normal;
  }

  /* Play Button Style */
  .play-button {
    position: absolute;
    bottom: 20px;
    left: 20px;  /* Move the button to the left */
    background-color: #fff;
    border-radius: 50%;
    padding: 15px;  /* Smaller padding */
    cursor: pointer;
    font-size: 20px;  /* Smaller font size */
    color: #ff0000;  /* Red play icon */
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.3s ease, transform 0.3s ease;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  .play-button.playing {
    background-color: #ff0000; /* Red circle when playing */
    color: #fff; /* White icon when playing */
  }

  .play-button:hover {
    background-color: rgba(255, 255, 255, 0.8);
    transform: scale(1.1); /* Slightly enlarge on hover */
  }

  .play-button i {
    font-size: 18px;  /* Smaller icon size */
  }

  /* Tablet */
  @media (max-width: 768px) {
    .quote-text {
      width: 40%;
      font-size: 14px;
      line-height: 16px;
      top: 15px;
      right: 15px;
      text-align: center;
    }

    .artist-overlay {
      font-size: 0.9rem;
      bottom: 15px;
      left: 15px;
    }

    .play-button {
      bottom: 15px;
      left: 15px;
    }
  }

  /* Phone */
  @media (max-width: 480px) {
    .quote-text {
      width: 45%;
      font-size: 13px;
      line-height: 16px;
      top: 10px;
      right: 10px;
      text-align: center;
    }

    .artist-overlay {
      font-size: 0.85rem;
      bottom: 10px;
      left: 10px;
    }

    .play-button {
      bottom: 10px;
      left: 10px;
    }
  }
</style>

<div class="quote-container">
  <img 
    src="https://www.densediscovery.com/archive/354/head.jpg" 
    alt="Artwork by Janusz Jurek" 
    class="background-image" 
  />
  <p class="quote-text">
    The love that you withhold is the pain that you carry.<br><br>
    – Ralph Waldo Emerson
  </p>
  <div class="artist-overlay">
    Featured artist: <a href="https://www.instagram.com/januszjurek.info/" target="_blank" rel="noopener noreferrer">Janusz Jurek</a>
  </div>

  <!-- Play Button -->
  <div class="play-button" id="playButton">
    <i class="fas fa-play"></i>
  </div>

  <!-- Audio Element -->
  <audio id="backgroundAudio" preload="auto">
    <source src="your-audio-file.mp3" type="audio/mp3">
    Your browser does not support the audio element.
  </audio>
</div>

<!-- Include Font Awesome for Play Button Icon -->
<script src="https://kit.fontawesome.com/a076d05399.js"></script>

<script>
  const playButton = document.getElementById("playButton");
  const audio = document.getElementById("backgroundAudio");

  playButton.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      playButton.innerHTML = '<i class="fas fa-pause"></i>'; // Change to pause icon
      playButton.classList.add('playing'); // Add 'playing' class for red circle
    } else {
      audio.pause();
      playButton.innerHTML = '<i class="fas fa-play"></i>'; // Change to play icon
      playButton.classList.remove('playing'); // Remove 'playing' class for default circle
    }
  });
</script>
