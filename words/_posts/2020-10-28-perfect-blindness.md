---
description: In a perfect world, everyone is blind... and other rumblings about October.
image: https://raw.githubusercontent.com/upmusings/upshift/master/images/restyo.png
date: 2020-10-29 15:42:47 +0300
---

<center>One aphorism I've been pondering lately:</center>

<center><b>... In a perfect world, everyone is blind.</b>
<br>Perfect. Blindness? Really, Everyone?</center>

<br>
❗️It's just Brosh's new book, [Solutions and Other Problems](https://www.amazon.com/Untitled-AB-Be-Confirmed-Gallery/dp/1982156945). After the thrilling *Hyperbole and a Half*, it took 7 years for her to write a new book. 
<div style="text-align: center"><img src="https://raw.githubusercontent.com/upmusings/upshift/master/images/solns.jpeg" alt="table1" width="100%"/>pg 376</div>
The new book is Hysterical. Sad. Poignant & Worth the wait!

Other stuffs:
1. This 👉🏾 [tweet](https://twitter.com/idrissultan/status/1321699238980603904?s=21) by Idris
2. You can workout and eat healthy, but if you don't deal with the stuff going on in your head and heart you will still be unhealthy.
3. This is really [*"Still the One"*](https://www.youtube.com/watch?v=KNZH-emehxA) — one of the songs that moves me. T.Swims's rendition is so good!

<!-- Inline Audio Player -->
<div id="audio-player" style="
    display: flex;
    align-items: center;
    background-color: red;
    color: white;
    border-radius: 1em;
    padding: 0.2em 0.5em;
    font-size: 1em;
    overflow: hidden;
    min-width: 100%;
    max-width: 100%;
    position: relative;
">

  <!-- Play/Pause Circle Button -->
  <button id="play-btn" style="
      width: 2em;
      height: 2em;
      border-radius: 50%;
      border: none;
      background-color: white;
      color: red;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      margin-right: 0.5em;
      position: relative;
  ">
    <div id="triangle" style="
        width: 0;
        height: 0;
        border-left: 0.8em solid red;
        border-top: 0.5em solid transparent;
        border-bottom: 0.5em solid transparent;
    "></div>
  </button>

  <!-- Song Title Container with fade -->
  <div style="
      flex: 1;
      overflow: hidden;
      position: relative;
      white-space: nowrap;
      mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
      -webkit-mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
  ">
    <div id="song-title-inner" style="
        display: inline-block;
        white-space: nowrap;
        transform: translateX(0);
    ">Still the One — Teddy Swims</div>
  </div>

  <!-- Track Position -->
  <span id="current-time" style="flex-shrink:0; margin-left:0.5em;">0:00</span> / 
  <span id="duration" style="flex-shrink:0; margin-left:0.2em;">0:00</span>

  <!-- Scrubbable Seek Bar -->
  <input id="seek-bar" type="range" value="0" min="0" max="100" style="
      margin-left:0.5em;
      cursor:pointer;
      flex-shrink:1;
      width: 6em;
  ">
</div>

<audio id="bg-audio" src="https://raw.githubusercontent.com/theupshift/theupshift.github.io/master/assets/audio/teddy-swims_teddy-swims-you-re-still-the-one-shania-twain-cover.mp3"></audio>

<style>
@media (max-width: 480px) {
  #audio-player {
    font-size: 0.8em;
    padding: 0.15em 0.3em;
  }
  #audio-player #seek-bar {
    width: 4em;
  }
  #audio-player #play-btn {
    width: 1.5em;
    height: 1.5em;
  }
}

/* Scroll animation class */
#audio-player .scrolling {
  animation-name: scroll-title;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
</style>

<script>
const audio = document.getElementById("bg-audio");
const playBtn = document.getElementById("play-btn");
const triangle = document.getElementById("triangle");
const seekBar = document.getElementById("seek-bar");
const currentTimeElem = document.getElementById("current-time");
const durationElem = document.getElementById("duration");
const songTitleInner = document.getElementById("song-title-inner");

let isPlaying = false;
let styleEl = null;

function formatTime(sec) {
  const minutes = Math.floor(sec / 60);
  const seconds = Math.floor(sec % 60);
  return minutes + ":" + (seconds < 10 ? "0" + seconds : seconds);
}

audio.addEventListener('loadedmetadata', () => {
  durationElem.textContent = formatTime(audio.duration);
});

function startScrolling() {
  const containerWidth = songTitleInner.parentElement.offsetWidth;
  const textWidth = songTitleInner.scrollWidth;

  if (textWidth <= containerWidth) return;

  const duration = (textWidth / containerWidth) * 10; // base 10s

  if (styleEl) styleEl.remove();

  styleEl = document.createElement('style');
  styleEl.innerHTML = `
    @keyframes scroll-title {
      0% { transform: translateX(0); }
      100% { transform: translateX(-${textWidth - containerWidth}px); }
    }
    #audio-player .scrolling {
      animation-duration: ${duration}s;
    }
  `;
  document.head.appendChild(styleEl);

  setTimeout(() => {
    songTitleInner.classList.add('scrolling');
  }, 50);
}

function stopScrolling() {
  songTitleInner.classList.remove('scrolling');
  songTitleInner.style.transform = 'translateX(0)';
}

playBtn.addEventListener("click", () => {
  if (!isPlaying) {
    audio.play();

    // Triangle -> pause bars
    triangle.innerHTML = '<div style="background:red; width:0.2em; height:100%; margin-right:0.1em"></div><div style="background:red; width:0.2em; height:100%"></div>';
    triangle.style.width = '0.6em';
    triangle.style.height = '1em';
    triangle.style.border = 'none';
    triangle.style.display = 'flex';
    triangle.style.justifyContent = 'space-between';
    triangle.style.padding = '0';

    startScrolling();
  } else {
    audio.pause();

    // Pause -> triangle
    triangle.style.width = '0';
    triangle.style.height = '0';
    triangle.style.borderLeft = '0.8em solid red';
    triangle.style.borderTop = '0.5em solid transparent';
    triangle.style.borderBottom = '0.5em solid transparent';
    triangle.innerHTML = '';

    stopScrolling();
  }
  isPlaying = !isPlaying;
});

audio.addEventListener('timeupdate', () => {
  const progress = (audio.currentTime / audio.duration) * 100;
  seekBar.value = progress;
  currentTimeElem.textContent = formatTime(audio.currentTime);
});

seekBar.addEventListener('input', () => {
  const seekTo = (seekBar.value / 100) * audio.duration;
  audio.currentTime = seekTo;
});
</script>

**P.S.** How long will you put off what you are capable of doing just to continue what you are comfortable doing?
