---
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
    text-align: center;
    letter-spacing: 0.2px;
    background-color: rgba(255, 255, 255, 0.6);
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
    margin: 0;
    text-shadow: 0 1px 3px rgba(255, 255, 255, 0.85);
  }

  .artist-overlay a {
    color: inherit;
    text-decoration: underline;
    font-weight: normal;
  }

  .play-button {
    position: absolute;
    bottom: 20px;
    right: 20px;
    width: 54px;
    height: 54px;
    box-sizing: border-box;
    border: 2px solid #e60000;
    background-color: #ffffff;
    border-radius: 50%;
    padding: 0;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #e60000;
    transition: background-color 0.3s ease, transform 0.3s ease;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
    z-index: 2;
  }

  .play-button .play-icon {
    display: block;
    color: #e60000;
    font-family: Arial, sans-serif;
    font-size: 23px;
    font-weight: 900;
    line-height: 1;
    margin-left: 3px;
  }

  .play-button.playing {
    background-color: #e60000;
    color: #ffffff;
  }

  .play-button.playing .play-icon {
    color: #ffffff;
    margin-left: 0;
    font-size: 21px;
  }

  .play-button:hover {
    background-color: #ffe5e5;
    transform: scale(1.08);
  }

  .play-button.playing:hover {
    background-color: #c90000;
  }

  .play-button:focus-visible {
    outline: 3px solid #222222;
    outline-offset: 3px;
  }

  @media (max-width: 768px) {
    .quote-text {
      width: 40%;
      font-size: 14px;
      line-height: 16px;
      top: 15px;
      right: 15px;
    }

    .artist-overlay {
      font-size: 0.9rem;
      bottom: 15px;
      left: 15px;
    }

    .play-button {
      bottom: 15px;
      right: 15px;
      width: 48px;
      height: 48px;
    }
  }

  @media (max-width: 480px) {
    .quote-text {
      width: 45%;
      font-size: 13px;
      line-height: 16px;
      top: 10px;
      right: 10px;
    }

    .artist-overlay {
      font-size: 0.85rem;
      bottom: 10px;
      left: 10px;
    }

    .play-button {
      bottom: 10px;
      right: 10px;
      width: 44px;
      height: 44px;
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
    Featured artist:
    <a href="https://www.instagram.com/januszjurek.info/" target="_blank" rel="noopener noreferrer">
      Janusz Jurek
    </a>
  </div>

  <button class="play-button" id="playButton" type="button" aria-label="Play audio" aria-pressed="false">
    <span class="play-icon" aria-hidden="true">▶</span>
  </button>

  <audio id="backgroundAudio" preload="auto">
    <source src="https://raw.githubusercontent.com/theupshift/theupshift.github.io/master/assets/audio/www.villadalgarve.co.za%20-%20Bon%20Iver%20-%208%20(circle)%20-%20Official%20Video%20(320%20KBps).mp3" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>
</div>

<script>
  const playButton = document.getElementById("playButton");
  const audio = document.getElementById("backgroundAudio");

  function updatePlayButton() {
    const isPlaying = !audio.paused;
    playButton.classList.toggle("playing", isPlaying);
    playButton.setAttribute("aria-pressed", String(isPlaying));
    playButton.setAttribute("aria-label", isPlaying ? "Pause audio" : "Play audio");
    playButton.querySelector(".play-icon").textContent = isPlaying ? "Ⅱ" : "▶";
  }

  playButton.addEventListener("click", async () => {
    if (audio.paused) {
      try {
        await audio.play();
      } catch (error) {
        updatePlayButton();
      }
    } else {
      audio.pause();
    }
    updatePlayButton();
  });

  audio.addEventListener("play", updatePlayButton);
  audio.addEventListener("pause", updatePlayButton);
  audio.addEventListener("ended", updatePlayButton);
</script>
