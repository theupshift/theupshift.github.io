---
layout: default
title: Search
permalink: /search/
---
<h3 style="text-align: center;">Search</h3>
<input type="text" id="search-input" placeholder="Type to search..." />
<ul id="results-container"></ul>

<script src="https://unpkg.com/simple-jekyll-search/dest/simple-jekyll-search.min.js"></script>
<script>
  SimpleJekyllSearch({
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('results-container'),
    json: '/search.json',
    searchResultTemplate: '<li><a href="{url}">{title}</a></li>',
    noResultsText: 'No results found',
    limit: 7,
    fuzzy: false,
  });
</script>
