---
layout: default
title: Work
description: Selected projects, publications, tools, and things made by Silas Gamba.
permalink: /work/
---

<header class="work-intro">
  <p class="work-kicker">Selected work</p>
  <h1>Things I've built,<br>studied, and made.</h1>
  <p class="work-lede">Tools, research, writing, and experiments across health, technology, learning, and ideas.</p>
</header>

<section class="work-showcase" aria-label="Selected work">
  <article class="work-tile" data-work-card>
    <button class="work-tile-trigger" type="button" aria-expanded="false">
      <span class="work-icon" aria-hidden="true">⌁</span>
      <span class="work-tile-label">Tools</span>
      <span class="work-tile-heading">Nile AGI</span>
      <span class="work-tile-summary">Local-first AI tools and experiments built for useful intelligence on ordinary devices.</span>
      <span class="work-tile-link">Explore <span aria-hidden="true">↗</span></span>
      <span class="work-expand-mark" aria-hidden="true">+</span>
    </button>
    <div class="work-tile-details" hidden>
      <p>Tools and experiments exploring practical, accessible AI.</p>
      <div class="work-links"><a href="https://github.com/nile-agi" target="_blank" rel="noopener noreferrer">Explore Nile AGI on GitHub ↗</a></div>
    </div>
  </article>

  <article class="work-tile" data-work-card>
    <button class="work-tile-trigger" type="button" aria-expanded="false">
      <span class="work-icon" aria-hidden="true">✦</span>
      <span class="work-tile-label">Research</span>
      <span class="work-tile-heading">Publications</span>
      <span class="work-tile-summary">Research on health systems, rare diseases, digital health, and technology.</span>
      <span class="work-tile-link">Read <span aria-hidden="true">↗</span></span>
      <span class="work-expand-mark" aria-hidden="true">+</span>
    </button>
    <div class="work-tile-details" hidden>
      <p class="publication-meta">PLOS Digital Health · 2025</p>
      <h3>Integrating rare diseases into Africa's digital health strategies</h3>
      <p>Silas Frank Gamba · Martha Magili</p>
      <p>A paper on how digital health strategies can better account for rare diseases across African health systems.</p>
      <div class="work-links">
        <a href="https://doi.org/10.1371/journal.pdig.0001073" target="_blank" rel="noopener noreferrer">Read the paper ↗</a>
        <a href="https://orcid.org/0009-0003-2450-4174" target="_blank" rel="noopener noreferrer">ORCID ↗</a>
      </div>
    </div>
  </article>

  <article class="work-tile" data-work-card>
    <button class="work-tile-trigger" type="button" aria-expanded="false">
      <span class="work-icon" aria-hidden="true">▱</span>
      <span class="work-tile-label">Book</span>
      <span class="work-tile-heading">A short book</span>
      <span class="work-tile-summary">A compact book-length project with room for one idea to unfold.</span>
      <span class="work-tile-link">Discover <span aria-hidden="true">↗</span></span>
      <span class="work-expand-mark" aria-hidden="true">+</span>
    </button>
    <div class="work-tile-details" hidden>
      <p>A book-length project is in progress. Details and a reading link will appear here when it is ready to share.</p>
    </div>
  </article>

  <article class="work-tile" data-work-card>
    <button class="work-tile-trigger" type="button" aria-expanded="false">
      <span class="work-icon" aria-hidden="true">+</span>
      <span class="work-tile-label">Health</span>
      <span class="work-tile-heading">AfyaKongwe</span>
      <span class="work-tile-summary">Health ideas made more accessible beyond conventional academic spaces.</span>
      <span class="work-tile-link">Explore <span aria-hidden="true">↗</span></span>
      <span class="work-expand-mark" aria-hidden="true">+</span>
    </button>
    <div class="work-tile-details" hidden>
      <p>A health project focused on making useful health knowledge easier to discover and engage with.</p>
    </div>
  </article>

  <article class="work-tile work-tile-wide" data-work-card>
    <button class="work-tile-trigger" type="button" aria-expanded="false">
      <span class="work-icon" aria-hidden="true">◇</span>
      <span class="work-tile-label">Learning</span>
      <span class="work-tile-heading">Health Resource Allocation Game</span>
      <span class="work-tile-summary">A simulation game about difficult choices when allocating limited health resources in rural communities.</span>
      <span class="work-tile-link">Play <span aria-hidden="true">↗</span></span>
      <span class="work-expand-mark" aria-hidden="true">+</span>
    </button>
    <div class="work-tile-details" hidden>
      <p>An interactive learning activity that simulates health resource allocation and the trade-offs faced by rural communities.</p>
      <div class="work-links"><a href="/words/education/health/simulation/2025/09/17/healthsystems/">Open the game and its guide →</a></div>
    </div>
  </article>
</section>

<script>
(function () {
  var cards = Array.prototype.slice.call(document.querySelectorAll('[data-work-card]'));
  if (!cards.length) return;

  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function closeCard(card) {
    var trigger = card.querySelector('.work-tile-trigger');
    var details = card.querySelector('.work-tile-details');
    if (!trigger || !details) return;
    card.classList.remove('is-expanded');
    trigger.setAttribute('aria-expanded', 'false');
    details.hidden = true;
  }

  function openCard(card) {
    cards.forEach(function (other) {
      if (other !== card) closeCard(other);
    });
    var trigger = card.querySelector('.work-tile-trigger');
    var details = card.querySelector('.work-tile-details');
    card.classList.add('is-expanded');
    trigger.setAttribute('aria-expanded', 'true');
    details.hidden = false;
  }

  cards.forEach(function (card) {
    var trigger = card.querySelector('.work-tile-trigger');
    trigger.addEventListener('click', function () {
      if (card.classList.contains('is-expanded')) closeCard(card);
      else openCard(card);
    });

    card.addEventListener('pointermove', function (event) {
      if (reduced) return;
      var rect = card.getBoundingClientRect();
      card.style.setProperty('--mouse-x', ((event.clientX - rect.left) / rect.width * 100) + '%');
      card.style.setProperty('--mouse-y', ((event.clientY - rect.top) / rect.height * 100) + '%');
    });
  });

  document.addEventListener('click', function (event) {
    if (!event.target.closest('[data-work-card]')) {
      cards.forEach(closeCard);
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') cards.forEach(closeCard);
  });

  if (!reduced && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    cards.forEach(function (card) { observer.observe(card); });
  } else {
    cards.forEach(function (card) { card.classList.add('is-visible'); });
  }
}());
</script>
