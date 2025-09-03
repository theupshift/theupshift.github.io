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

<!-- Inline Round Play Button -->
<button id="play-btn" style="
    border: none;
    background-color: red;
    color: white;
    font-size: 1em;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2em;
    height: 2em;
    border-radius: 50%;
    padding: 0;
    margin-left: 0.3em;
">
  <i class="fas fa-play"></i>
</button>

<audio id="bg-audio" src="/assets/audio/still-the-one.mp3"></audio>

**P.S.** How long will you put off what you are capable of doing just to continue what you are comfortable doing?

<script>
  const playBtn = document.getElementById("play-btn");
  const audio = document.getElementById("bg-audio");
  let isPlaying = false;

  playBtn.addEventListener("click", () => {
    if (!isPlaying) {
      audio.play();
      playBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
      audio.pause();
      playBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
    isPlaying = !isPlaying;
  });
</script>
