---
layout: default
title: Search
permalink: /search/
---

<h3 style="text-align: center;">Search</h3>

<input type="text" id="search-input" placeholder="Type to search..." />

<ul id="results-container"></ul>

<style>
  /* Reset styles */
  #results-container,
  #results-container * {
    all: unset;
  }

  /* Styling the container */
  #results-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 2rem auto;
    max-width: 700px;
    padding: 0;
  }

  /* Styling each search result as a clean rounded box */
  #results-container li {
    background-color: #f5f5f5;
    border-radius: 12px;
    padding: 1rem;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
    font-size: 1rem;
    line-height: 1.4;
  }

  #results-container li a {
    display: block;
    text-decoration: none;
    color: #222;
  }

  #results-container li:hover {
    background-color: #eaeaea;
  }

  /* Search input clean style */
  #search-input {
    display: block;
    margin: 1rem auto;
    padding: 0.6rem 1rem;
    border-radius: 8px;
    border: 1px solid #ccc;
    width: 90%;
    max-width: 600px;
    font-size: 1rem;
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
