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

3. This is really *"Still the One"* — one of the songs that moves me.

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

  <!-- Song Title with fade effect -->
  <div style="
      flex: 1;
      overflow: hidden;
      position: relative;
      white-space: nowrap;
      mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
      -webkit-mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
  ">
    <div id="song-title" style="
        display: inline-block;
        white-space: nowrap;
        padding-left: 0;
        animation: none;
    ">Still the One — one of the songs that moves me</div>
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

<audio id="bg-audio" src="/assets/audio/still-the-one.mp3"></audio>

<style>
  @media (max-width: 480px) {
    #audio-player {
      font-size: 0.8em;
      padding: 0.15em 0.3em;
    }
    #seek-bar {
      width: 4em;
    }
    #play-btn {
      width: 1.5em;
      height: 1.5em;
    }
  }
</style>

<script>
  const audio = document.getElementById("bg-audio");
  const playBtn = document.getElementById("play-btn");
  const triangle = document.getElementById("triangle");
  const seekBar = document.getElementById("seek-bar");
  const currentTimeElem = document.getElementById("current-time");
  const durationElem = document.getElementById("duration");
  const songTitle = document.getElementById("song-title");

  let isPlaying = false;

  function formatTime(sec) {
    const minutes = Math.floor(sec / 60);
    const seconds = Math.floor(sec % 60);
    return minutes + ":" + (seconds < 10 ? "0" + seconds : seconds);
  }

  audio.addEventListener('loadedmetadata', () => {
    durationElem.textContent = formatTime(audio.duration);
  });

  playBtn.addEventListener("click", () => {
    if (!isPlaying) {
      audio.play();

      // Change triangle to pause bars
      triangle.innerHTML = '<div style="background:red; width:0.2em; height:100%; margin-right:0.1em"></div><div style="background:red; width:0.2em; height:100%"></div>';
      triangle.style.width = '0.6em';
      triangle.style.height = '1em';
      triangle.style.border = 'none';
      triangle.style.borderLeft = 'none';
      triangle.style.borderTop = 'none';
      triangle.style.borderBottom = 'none';
      triangle.style.background = 'none';
      triangle.style.display = 'flex';
      triangle.style.justifyContent = 'space-between';
      triangle.style.padding = '0';

      // Adaptive scrolling for song title
      const containerWidth = songTitle.parentElement.offsetWidth;
      const textWidth = songTitle.scrollWidth;
      if (textWidth > containerWidth) {
        const duration = (textWidth / containerWidth) * 10; // base 10s for container width
        songTitle.style.paddingLeft = containerWidth + 'px';
        songTitle.style.animation = `scroll-title ${duration}s linear infinite`;
        // Create dynamic keyframes
        const styleSheet = document.styleSheets[0];
        const ruleName = 'scroll-title';
        try { styleSheet.deleteRule(0); } catch(e){}
        styleSheet.insertRule(`
          @keyframes ${ruleName} {
            0% { transform: translateX(0); }
            100% { transform: translateX(-${textWidth}px); }
          }
        `, styleSheet.cssRules.length);
      }

    } else {
      audio.pause();
      // Revert back to triangle
      triangle.style.width = '0';
      triangle.style.height = '0';
      triangle.style.borderLeft = '0.8em solid red';
      triangle.style.borderTop = '0.5em solid transparent';
      triangle.style.borderBottom = '0.5em solid transparent';
      triangle.innerHTML = '';
      // Stop scrolling
      songTitle.style.animation = 'none';
      songTitle.style.paddingLeft = '0';
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

