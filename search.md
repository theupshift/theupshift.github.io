---
layout: default
title: Search
permalink: /search/
---

<h3 style="text-align: center;">Search</h3>

<input type="text" id="search-input" placeholder="Type to search..." />

<ul id="results-container"></ul>

<style>
  /* Reset default styling */
  #results-container,
  #results-container * {
    all: unset;
  }

  /* Compact search results container */
  #results-container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem; /* Tighter space between items */
    margin: 1rem auto;
    max-width: 700px;
    padding: 0;
  }

  /* Compact and clean list item box */
  #results-container li {
    background-color: #f5f5f5;
    border-radius: 8px;
    padding: 0.7rem 1rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
    font-size: 0.95rem;
    line-height: 1.3;
  }

  #results-container li a {
    display: block;
    text-decoration: none;
    color: #222;
  }

  #results-container li:hover {
    background-color: #eaeaea;
  }

  /* Tighter input box */
  #search-input {
    display: block;
    margin: 0.5rem auto 1rem;
    padding: 0.5rem 0.8rem;
    border-radius: 6px;
    border: 1px solid #ccc;
    width: 90%;
    max-width: 600px;
    font-size: 0.95rem;
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
``
