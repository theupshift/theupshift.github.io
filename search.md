---
layout: default
title: Search
permalink: /search/
---

<section class="search-page" aria-labelledby="search-page-title">
  <h1 id="search-page-title" class="visually-hidden">Search</h1>

  <p id="search-help" class="search-note">Answers are easy, but perspective transforms.</p>

  <div class="search-field">
    <label class="visually-hidden" for="search-input">Search</label>
    <input type="search" id="search-input" placeholder="Try a topic or title…" autocomplete="off" aria-describedby="search-help" />
  </div>


  <ul id="results-container" aria-label="Search results" aria-live="polite"></ul>
</section>

<script src="https://unpkg.com/simple-jekyll-search/dest/simple-jekyll-search.min.js"></script>
<script>
  SimpleJekyllSearch({
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('results-container'),
    json: '/search.json',
    searchResultTemplate: '<li class="search-result"><a href="{url}"><span class="search-result-image" style="background-image: url(\'{image}\')"></span><span class="search-result-copy"><span class="search-result-title">{title}</span><span class="search-result-description">{description}</span></span></a></li>',
    noResultsText: '<li>No results found.</li>',
    limit: 10,
    fuzzy: false
  });
</script>
