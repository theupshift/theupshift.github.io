---
layout: default
title: Search
permalink: /search/
---

<header class="page-intro">
  <h1 style="text-align:left">Search the writing</h1>
  <p>Find an essay, note, or idea from The Upshift archive.</p>
</header>

<label for="search-input">Search articles and notes</label>
<input type="search" id="search-input" placeholder="Try a topic or title…" autocomplete="off" aria-describedby="search-help" />
<p id="search-help" class="page-intro">Results appear below as you type.</p>
<ul id="results-container" aria-label="Search results" aria-live="polite"></ul>

<script src="https://unpkg.com/simple-jekyll-search/dest/simple-jekyll-search.min.js"></script>
<script>
  SimpleJekyllSearch({
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('results-container'),
    json: '/search.json',
    searchResultTemplate: '<li><a href="{url}">{title}</a></li>',
    noResultsText: '<li>No results found. Try a different word or browse the <a href="/archive/">archive</a>.</li>',
    limit: 10,
    fuzzy: false
  });
</script>
<p style="text-align:center"><small>Answers are easy, but perspective transforms.</small></p>
