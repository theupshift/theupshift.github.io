---
description: In a perfect world, everyone is blind... and other rumblings about October.
image: https://raw.githubusercontent.com/upmusings/upshift/master/images/restyo.png
date: 2020-10-29 15:42:47 +0300
---

One aphorism I've been pondering lately:
<br>
<center><b>... In a perfect world, everyone is blind.</b>
<br>Perfect. Blindness? Really, Everyone?</center>

<br>
❗️It's just Brosh's new book, [Solutions and Other Problems](https://www.amazon.com/Untitled-AB-Be-Confirmed-Gallery/dp/1982156945). After the thrilling *Hyperbole and a Half*, it took 7 years for her to write a new book. 
<div style="text-align: center"><img src="https://raw.githubusercontent.com/upmusings/upshift/master/images/solns.jpeg" alt="table1" width="100%"/>pg 376</div>
The new book is Hysterical. Sad. Poignant & Worth the wait!

Other stuffs:
1. This 👉🏾 [tweet](https://twitter.com/idrissultan/status/1321699238980603904?s=21) by Idris
2. You can workout and eat healthy, but if you don't deal with the stuff going on in your head and heart you will still be unhealthy.
3. This is really *"Still the One"* — one of the songs that moves me.  

<!-- Inline Audio Player -->
<div id="audio-player" style="
    display: inline-flex;
    align-items: center;
    background-color: red;
    color: white;
    border-radius: 1em;
    padding: 0.2em 0.5em;
    font-size: 1em;
">

  <!-- Play/Pause Button -->
  <button id="play-btn" style="
      width: 2em;
      height: 2em;
      border: none;
      background: none;
      color: white;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 0.5em;
      position: relative;
      font-size: 1em;
  ">
    <!-- Triangle Play Shape -->
    <div id="triangle" style="
        width: 0;
        height: 0;
        border-left: 1em solid white;
        border-top: 0.5em solid transparent;
        border-bottom: 0.5em solid transparent;
    "></div>
  </button>

  <!-- Song Title -->
  <span id="song-title" style="margin-right:0.5em;">Still the One</span>

  <!-- Track Position -->
  <span id="current-time">0:00</span> / <span id="duration">0:00</span>

  <!-- Scrubbable Seek Bar -->
  <input id="seek-bar" type="range" value="0" min="0" max="100" style="
      margin-left:0.5em;
      cursor:pointer;
  ">
</div>

<audio id="bg-audio" src="/assets/audio/still-the-one.mp3"></audio>

**P.S.** How long will you put off what you are capable of doing just to continue what you are comfortable doing?

<script>
  const audio = document.getElementById("bg-audio");
  const playBtn = document.getElementById("play-btn");
  const triangle = document.getElementById("triangle");
  const seekBar = document.getElementById("seek-bar");
  const currentTimeElem = document.getElementById("current-time");
  const durationElem = document.getElementById("duration");

  let isPlaying = false;

  // Format seconds to mm:ss
  function formatTime(sec) {
    const minutes = Math.floor(sec / 60);
    const seconds = Math.floor(sec % 60);
    return minutes + ":" + (seconds < 10 ? "0" + seconds : seconds);
  }

  // Set total duration when metadata loaded
  audio.addEventListener('loadedmetadata', () => {
    durationElem.textContent = formatTime(audio.duration);
  });

  // Play/Pause click
  playBtn.addEventListener("click", () => {
    if (!isPlaying) {
      audio.play();
      // Change triangle into pause icon (two bars)
      triangle.style.width = '0.6em';
      triangle.style.height = '1em';
      triangle.style.border = 'none';
      triangle.style.background = 'none';
      triangle.style.position = 'relative';
      triangle.innerHTML = '<div style="background:white; width:0.2em; height:100%; margin-right:0.1em"></div><div style="background:white; width:0.2em; height:100%"></div>';
      triangle.style.display = 'flex';
      triangle.style.justifyContent = 'space-between';
      triangle.style.padding = '0';
    } else {
      audio.pause();
      // Revert back to triangle
      triangle.style.width = '0';
      triangle.style.height = '0';
      triangle.style.borderLeft = '1em solid white';
      triangle.style.borderTop = '0.5em solid transparent';
      triangle.style.borderBottom = '0.5em solid transparent';
      triangle.style.background = 'none';
      triangle.innerHTML = '';
    }
    isPlaying = !isPlaying;
  });

  // Update seek bar and current time
  audio.addEventListener('timeupdate', () => {
    const progress = (audio.currentTime / audio.duration) * 100;
    seekBar.value = progress;
    currentTimeElem.textContent = formatTime(audio.currentTime);
  });

  // Scrub to new position
  seekBar.addEventListener('input', () => {
    const seekTo = (seekBar.value / 100) * audio.duration;
    audio.currentTime = seekTo;
  });
</script>
