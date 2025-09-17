---
layout: post
date: 2025-09-13
title: The System We Eat From
categories: [inspiration, growth]
tags: [food, environment, health, sustainability]
description: "Food isn’t just about calories or nutrients. It’s about water, forests, culture, and the world we leave behind. Plant-forward diets benefit both personal and planetary health."
featured_image: https://scrapsfromtheloft.com/wp-content/uploads/2019/04/cowspiracy_cow-e1611838379301.jpeg
image: https://scrapsfromtheloft.com/wp-content/uploads/2019/04/cowspiracy_cow-e1611838379301.jpeg
og_image: https://scrapsfromtheloft.com/wp-content/uploads/2019/04/cowspiracy_cow-e1611838379301.jpeg
twitter_image: https://scrapsfromtheloft.com/wp-content/uploads/2019/04/cowspiracy_cow-e1611838379301.jpeg
---

As doctors, we tend to frame diet in the language of individual risk: weight, blood pressure, cholesterol. The usual script goes; warn against soda, recommend oats, prescribe DASH or Mediterranean diets. It’s all measurable, and we like things we can measure.

But what if we widened the lens? What if food wasn’t just about health markers, but also about water, forests, and the kind of world we leave behind?

I’ll admit, I watched *Cowspiracy* on my phone expecting little more than a distraction. Instead, it reframed something I thought I knew. Food isn’t just calories and nutrients. It’s land use, carbon, water, and culture. It’s health—not just for the individual, but for the environment that individual depends on.

<!-- Featured image with smaller Apple-style clickable play overlay -->
<div style="position: relative; display: inline-block; width: 100%; max-width: 800px; margin: 1em auto;">
  <a href="https://www.youtube.com/watch?v=nV04zyfLyN4" target="_blank" style="display: block;">
    <img src="https://raw.githubusercontent.com/theupshift/theupshift.github.io/master/images/cowspiracy_cow-e1611838379301.jpeg" 
         alt="Cowspiracy" style="width:100%; height:auto; display:block; border-radius: 12px;">

    <!-- Smaller translucent red play button -->
    <div style="
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 60px;
      height: 60px;
      background-color: rgba(255, 0, 0, 0.75);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-shadow: 0 4px 15px rgba(0,0,0,0.25);
      transition: transform 0.2s ease, background-color 0.2s ease;
    " onmouseover="this.style.transform='translate(-50%, -50%) scale(1.1)'; this.style.backgroundColor='rgba(255,0,0,0.85)';" onmouseout="this.style.transform='translate(-50%, -50%) scale(1)'; this.style.backgroundColor='rgba(255,0,0,0.75)';">
      
      <!-- Proportional white triangle play icon -->
      <div style="
        width: 0;
        height: 0;
        border-left: 20px solid white;
        border-top: 12px solid transparent;
        border-bottom: 12px solid transparent;
      "></div>
    </div>
  </a>
</div>

<div style="border-left: 4px solid #4CAF50; padding-left: 1em; margin: 1em 0; color: #555;">
“Livestock and their byproducts account for at least 32,000 million tons of carbon dioxide per year, or 51% of all worldwide greenhouse gas emissions.” - <strong>Cowspiracy</strong>
</div>
<br>
Though the film leans bit more on over-provocation, the numbers are stark. Food production contributes roughly a quarter of global greenhouse gas emissions.  

Plant-forward diets already have clear clinical benefits: lower cardiovascular risk, better glycemic control, reduced cancer incidence. But their impact doesn’t end at the clinic door. They also reduce methane emissions, conserve water, and protect soil. In other words, they make people healthier and the systems they live in more sustainable.<sup style="color:red;"><a href="https://ourworldindata.org/environmental-impacts-of-food" target="_blank">1</a></sup>

<!-- Single GitHub image -->
<div style="text-align:center; margin: 1em 0;">
  <img src="https://raw.githubusercontent.com/theupshift/theupshift.github.io/master/images/ghg-per-kg-poore.jpg" style="max-width:100%; height:auto;" alt="Environmental impacts of agriculture">
</div>
<!-- more -->
Of course, this gets complicated in places like where I am. Livestock here isn’t just food, it’s culture, wealth, and survival. These people have managed grazing lands for generations. Suggesting they rely less on livestock isn’t simple, Yet maybe there’s a path forward: blending traditional wisdom with modern tools like diversifying crops, integrating agroforestry, and maybe gently shifting diets where it makes sense.

So where does that leave clinicians? I’m not suggesting vegan pamphlets in every waiting room. But I do think we can:

<div style="margin: 1em 0; color: #333;">
<ul>
  <li>Frame diet as part of both personal health and planetary health.</li>
  <li>Encourage plant-based eating where it aligns with local food systems and goals.</li>
  <li>And of course, reflect on our own food choices..</li>
</ul>

<h3>Comments</h3>

<form id="commentForm">
  <input type="text" id="nameInput" placeholder="Your name" required><br>
  <textarea id="commentInput" placeholder="Your comment" required></textarea><br>
  <button type="submit">Post Comment</button>
</form>

<div id="commentsList">Loading comments...</div>

<script>
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxkcuGWon_SVJsYVuo9h8_ZpEnHeJpl0DoqNzDFbjLdeE6ZgWW3COaZtRoNAFhHBy2t/exec"; // replace with your Apps Script URL
const postId = "{{ page.url }}";
const commentsList = document.getElementById("commentsList");

async function loadComments(){
  try {
    const res = await fetch(`${SCRIPT_URL}?post_id=${encodeURIComponent(postId)}`);
    const comments = await res.json();
    if(!comments.length) commentsList.innerHTML = "<p>No comments yet.</p>";
    else commentsList.innerHTML = comments.map(c=>
      `<p><strong>${c.name}</strong><br>${c.comment}</p>`
    ).join("");
  } catch(err){
    commentsList.textContent = "Failed to load comments.";
    console.error(err);
  }
}

document.getElementById("commentForm").addEventListener("submit", async (e)=>{
  e.preventDefault();
  const name = document.getElementById("nameInput").value.trim();
  const comment = document.getElementById("commentInput").value.trim();
  if(!name || !comment) return;
  try {
    await fetch(SCRIPT_URL, {
      method:"POST",
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({post_id:postId,name,comment})
    });
    document.getElementById("commentForm").reset();
    loadComments();
  } catch(err){
    alert("Failed to post comment.");
    console.error(err);
  }
});

// Load comments on page load
loadComments();
</script>
