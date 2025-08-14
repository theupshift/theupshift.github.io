---
layout: default
title: Search
permalink: /search/
---
<input type="text" id="search-input" placeholder="Type to search..." />

<ul id="results-container"></ul>

<style>
  #results-container,
  #results-container * {
    all: unset;
  }

  /* Align search input and results container */
  #search-input, 
  #results-container {
    display: block;
    margin: 0.5rem auto 1rem;
    width: 90%;
    max-width: 600px;
    border-radius: 6px; /* match input rounded corners */
  }

  #search-input {
    border: 1px solid #ccc;
    padding: 0.5rem 0.8rem;
    font-size: 0.95rem;
  }

  #results-container {
    display: flex;
    flex-direction: column;
    gap: 0.2rem; /* doubled spacing */
    padding: 0;
  }

  #results-container li {
    background-color: #ffffff; /* white background */
    border: 1.5px solid #ccc; /* match search box border */
    border-radius: 6px;
    padding: 0.5rem 0.8rem;
    margin: 0;
    box-shadow: none;
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
    background-color: #f9f9f9; /* subtle light gray on hover */
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
<p style="text-align: center;"><small>Answers are easy, but perspective transforms.</small></p>

