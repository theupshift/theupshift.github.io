---
layout: default
title: Search
permalink: /search/
---

<section class="search-page" aria-labelledby="search-page-title">
  <h1 id="search-page-title">Search the archive</h1>

  <div class="search-field">
    <label class="visually-hidden" for="search-input">Search</label>
    <input type="search" id="search-input" placeholder="Try a topic or title…" autocomplete="off" />
  </div>

  <ul id="results-container" aria-label="Search results" aria-live="polite"></ul>
</section>

<script src="https://unpkg.com/simple-jekyll-search/dest/simple-jekyll-search.min.js"></script>
<script>
  SimpleJekyllSearch({
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('results-container'),
    json: '/search.json',
    searchResultTemplate: '<li><a href="{url}">{title}</a></li>',
    noResultsText: '<li>No results found.</li>',
    limit: 10,
    fuzzy: false
  });
</script>
