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
  <a class="work-tile" href="https://github.com/nile-agi">
    <span class="work-icon" aria-hidden="true">⌁</span>
    <span class="work-tile-label">Tools</span>
    <h2>Nile AGI</h2>
    <p>Local-first AI tools and experiments built for useful intelligence on ordinary devices.</p>
    <span class="work-tile-link">Explore →</span>
  </a>

  <a class="work-tile" href="#publications">
    <span class="work-icon" aria-hidden="true">✦</span>
    <span class="work-tile-label">Research</span>
    <h2>Publications</h2>
    <p>Research and writing on health systems, rare diseases, digital health, and technology.</p>
    <span class="work-tile-link">Read →</span>
  </a>

  <a class="work-tile" href="#book">
    <span class="work-icon" aria-hidden="true">▱</span>
    <span class="work-tile-label">Book</span>
    <h2>A short book</h2>
    <p>A compact book-length project with more room for one idea than an essay allows.</p>
    <span class="work-tile-link">Discover →</span>
  </a>

  <a class="work-tile" href="#afyakongwe">
    <span class="work-icon" aria-hidden="true">+</span>
    <span class="work-tile-label">Health</span>
    <h2>AfyaKongwe</h2>
    <p>A health project for sharing useful ideas beyond conventional academic spaces.</p>
    <span class="work-tile-link">Explore →</span>
  </a>

  <a class="work-tile work-tile-wide" href="/words/education/health/simulation/2025/09/17/healthsystems/">
    <span class="work-icon" aria-hidden="true">◇</span>
    <span class="work-tile-label">Learning</span>
    <h2>Health Resource Allocation Game</h2>
    <p>A simulation game about the difficult choices involved in allocating limited health resources in rural communities.</p>
    <span class="work-tile-link">Play →</span>
  </a>
</section>

<section class="work-publications" id="publications" aria-labelledby="publication-title">
  <p class="work-kicker">02 — Research</p>
  <h2 id="publication-title">Publication</h2>
  <article class="publication-card">
    <p class="publication-meta">PLOS Digital Health · 2025</p>
    <h3>Integrating rare diseases into Africa's digital health strategies</h3>
    <p>Silas Frank Gamba · Martha Magili</p>
    <p class="publication-note">A paper on how digital health strategies can better account for rare diseases across African health systems.</p>
    <div class="work-links">
      <a href="https://doi.org/10.1371/journal.pdig.0001073">Read the paper ↗</a>
      <a href="https://orcid.org/0009-0003-2450-4174">ORCID ↗</a>
    </div>
  </article>
</section>

<section class="work-detail" id="book" aria-labelledby="book-title">
  <p class="work-kicker">03 — Book</p>
  <h2 id="book-title">A short book</h2>
  <p>Book details and reading link coming soon.</p>
</section>

<section class="work-detail" id="afyakongwe" aria-labelledby="afyakongwe-title">
  <p class="work-kicker">04 — Health</p>
  <h2 id="afyakongwe-title">AfyaKongwe</h2>
  <p>Health ideas made more accessible beyond conventional academic spaces.</p>
</section>

<section class="work-end">
  <p>More work will appear here as it becomes ready to share.</p>
</section>

<script>
(function () {
  var tiles = document.querySelectorAll('.work-tile');
  if (!tiles.length) return;

  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!reduced && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14 });
    tiles.forEach(function (tile) { observer.observe(tile); });
  } else {
    tiles.forEach(function (tile) { tile.classList.add('is-visible'); });
  }

  if (reduced) return;

  tiles.forEach(function (tile) {
    tile.addEventListener('pointermove', function (event) {
      var rect = tile.getBoundingClientRect();
      tile.style.setProperty('--mouse-x', ((event.clientX - rect.left) / rect.width * 100) + '%');
      tile.style.setProperty('--mouse-y', ((event.clientY - rect.top) / rect.height * 100) + '%');
    });
  });
}());
</script>
