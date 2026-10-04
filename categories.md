---
title: Categories
description: Explore The Upshift by topic.
image: https://raw.githubusercontent.com/upmusings/upshift/master/images/samemistakes.png
permalink: /categories/
date: 2020-04-07 14:30:47 +0300
---

<header class="page-intro">
  <h1 style="text-align:left">Explore by topic</h1>
  <p>Follow a thread through the writing, from medicine and public health to systems, ideas, and everyday observations.</p>
  <p class="archive-shortcuts"><a href="/archive/">Browse all writing →</a><a href="/search/">Search the writing →</a></p>
</header>

<div id="archives">
{% for category in site.categories %}
  {% capture category_name %}{{ category | first }}{% endcapture %}
  <section class="archive-group" aria-labelledby="category-{{ category_name | slugify }}">
    <h2 class="category-head" id="category-{{ category_name | slugify }}">{{ category_name }}</h2>
    <div class="archive-items">
      {% for post in site.categories[category_name] %}
        <article class="archive-item">
          <p><a href="{{ post.url }}">{% if post.title != "" %}{{ post.title }}{% else %}Untitled note{% endif %}</a></p>
        </article>
      {% endfor %}
    </div>
  </section>
{% endfor %}
</div>