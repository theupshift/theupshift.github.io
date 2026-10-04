---
title: Topics
description: Explore The Upshift by topic.
permalink: /categories/
---
<header class="page-intro">
  <h1>Topics</h1>
  <p>Follow a subject across essays and notes.</p>
</header>

<nav class="topic-index" aria-label="Jump to topic">
  {% for category in site.categories %}
    {% assign category_name = category | first %}
    <a href="#{{ category_name | slugify }}">{{ category_name | escape }}</a>
  {% endfor %}
</nav>

<div id="archives">
  {% for category in site.categories %}
    {% assign category_name = category | first %}
    <section class="archive-group" aria-labelledby="topic-{{ category_name | slugify }}">
      <h2 id="topic-{{ category_name | slugify }}">{{ category_name | escape }}</h2>
      {% assign category_posts = category | last %}
      {% for post in category_posts %}
        <article class="archive-item">
          <p><a href="{{ post.url | relative_url }}">{% if post.title and post.title != "" %}{{ post.title | escape }}{% else %}{{ post.content | strip_html | strip_newlines | truncatewords: 12 }}{% endif %}</a></p>
        </article>
      {% endfor %}
    </section>
  {% endfor %}
</div>
