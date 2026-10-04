---
layout: default
title: Search
description: Search essays and notes published on The Upshift.
permalink: /search/
---
<div class="search-page">
  <header class="page-intro">
    <h1>Search</h1>
    <p>Find an idea, subject, or essay from the archive.</p>
  </header>

  <label for="search-input">Search The Upshift</label>
  <input type="search" id="search-input" placeholder="Try “public health” or “risk”" autocomplete="off" aria-describedby="search-hint" />
  <p id="search-hint" class="search-hint">Search titles and article text. Results update as you type.</p>
  <ul id="results-container" aria-live="polite" aria-label="Search results"></ul>
</div>

<script src="https://unpkg.com/simple-jekyll-search/dest/simple-jekyll-search.min.js"></script>
<script>
  SimpleJekyllSearch({
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('results-container'),
    json: '/search.json',
    searchResultTemplate: '<li><a href="{url}">{title}</a></li>',
    noResultsText: 'No matching essays found. Try another search.',
    limit: 10,
    fuzzy: false
  });
</script>
