---
layout: default
title: Search
permalink: /search/
---

<h3 style="text-align: center;">Search</h3>

<input type="text" id="search-input" placeholder="Type to search..." />

<ul id="results-container"></ul>

<style>
  #results-container,
  #results-container * {
    all: unset;
  }

  /* Container styles */
  #search-input, 
  #results-container {
    display: block;
    margin: 0.5rem auto 1rem;  /* centers both */
    width: 90%;
    max-width: 600px;          /* same max width */
  }

  #results-container {
    display: flex;
    flex-direction: column;
    gap: 0;
    padding: 0;
  }

  #results-container li {
    background-color: #f5f5f5;
    border-radius: 6px;
    padding: 0.5rem 0.8rem;
    margin: 0 0 0.1rem 0;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
    font-size: 0.95rem;
    line-height: 1.3;
  }

  #results-container li:last-child {
    margin-bottom: 0;
  }

  #results-container li a {
    display: block;
    text-decoration: none;
    color: #222;
  }

  #results-container li:hover {
    background-color: #eaeaea;
  }
</style>

<script src="https://unpkg.com/simple-jekyll-search/dest/simple-jekyll-search.min.js"></script>
<script>
  SimpleJekyllSearch({
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('results-container'),
    json: '/search.json',
    searchResultTemplate: '<li><a href="{url}">{title}</a></li>',
    noResultsText: '<li>No results found</li>',
    limit: 7,
    fuzzy: false,
  });
</script>
