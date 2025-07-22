---
layout: default
title: Search
permalink: /search/
---
<h3 style="text-align: center;">Search</h3>
<input type="text" id="search-input" placeholder="Type to search..." />
<ul id="results-container"></ul>

<script src="https://unpkg.com/simple-jekyll-search/dest/simple-jekyll-search.min.js"></script>
<style>
#results-container {
  list-style: none;
  padding: 0;
  margin: 2rem auto;
  max-width: 700px;
}

#results-container li {
  background-color: #f9f9f9;
  margin-bottom: 1rem;
  padding: 1rem 1.2rem;
  border-radius: 12px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.08);
  font-size: 1rem;
  line-height: 1.4;
  transition: background-color 0.2s;
}

#results-container li:hover {
  background-color: #f0f0f0;
}

#results-container li a {
  text-decoration: none;
  color: inherit;
  display: block;
}
</style>

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
