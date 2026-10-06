---
layout: default
title: Clinical Rhythm
id_attribute: clinical-rhythm
---

<style>
  .clinical-rhythm-page {
    width: 100%;
  }

  .clinical-rhythm-intro {
    margin-bottom: 28px;
  }

  .clinical-rhythm-kicker {
    margin: 0 0 8px;
    font-family: var(--font-small-caps);
    font-size: 12px;
    letter-spacing: .08em;
    text-transform: uppercase;
  }

  .clinical-rhythm-title {
    margin: 0;
    font-size: clamp(30px, 5vw, 48px);
    line-height: 1.05;
  }

  .clinical-rhythm-lead {
    max-width: 720px;
    margin: 14px 0 0;
    font-size: 18px;
    line-height: 1.55;
  }

  .clinical-rhythm-meta {
    margin: 12px 0 0;
    font-size: 13px;
    opacity: .7;
  }

  .cr-search {
    display: flex;
    gap: 10px;
    align-items: center;
    margin: 28px 0 18px;
  }

  .cr-search input {
    width: 100%;
    min-height: 44px;
    padding: 10px 14px;
    border: 1px solid currentColor;
    border-radius: 0;
    background: transparent;
    color: inherit;
    font: inherit;
    box-sizing: border-box;
  }

  .cr-search input:focus {
    outline: 2px solid currentColor;
    outline-offset: 2px;
  }

  .cr-filters {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 34px;
  }

  .cr-filter {
    border: 1px solid currentColor;
    background: transparent;
    color: inherit;
    padding: 6px 11px;
    border-radius: 999px;
    font: inherit;
    font-size: 12px;
    cursor: pointer;
  }

  .cr-filter.is-active,
  .cr-filter:hover {
    background: currentColor;
    color: Canvas;
  }

  .cr-topic-nav {
    display: flex;
    flex-wrap: wrap;
    gap: 7px 16px;
    margin: 24px 0 34px;
    padding: 16px 0;
    border-top: 1px solid currentColor;
    border-bottom: 1px solid currentColor;
  }

  .cr-topic-nav a {
    font-size: 13px;
    text-decoration: none;
  }

  .cr-topic {
    margin: 0 0 44px;
    scroll-margin-top: 24px;
  }

  .cr-topic-header {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    align-items: baseline;
    margin-bottom: 10px;
  }

  .cr-topic-number {
    font-family: var(--font-small-caps);
    font-size: 12px;
    opacity: .65;
    margin-right: 9px;
  }

  .cr-topic h2 {
    display: inline;
    margin: 0;
    font-size: 25px;
  }

  .cr-topic-count {
    font-size: 12px;
    opacity: .6;
    white-space: nowrap;
  }

  .cr-topic-blurb {
    max-width: 760px;
    margin: 0 0 16px;
    line-height: 1.55;
    font-size: 15px;
  }

  .cr-resource-list {
    border-top: 1px solid currentColor;
  }

  .cr-resource {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 18px;
    align-items: baseline;
    padding: 13px 0;
    border-bottom: 1px solid currentColor;
    text-decoration: none;
  }

  .cr-resource:hover .cr-resource-title {
    text-decoration: underline;
    text-underline-offset: 3px;
  }

  .cr-resource-title {
    line-height: 1.4;
  }

  .cr-resource-type {
    font-family: var(--font-small-caps);
    font-size: 11px;
    opacity: .6;
    text-align: right;
    white-space: nowrap;
  }

  .cr-empty {
    margin: 30px 0;
    opacity: .65;
  }

  .cr-loading {
    padding: 25px 0;
  }

  @media (max-width: 600px) {
    .cr-resource {
      grid-template-columns: 1fr;
      gap: 4px;
    }

    .cr-resource-type {
      text-align: left;
    }

    .cr-topic-header {
      display: block;
    }

    .cr-topic-count {
      display: block;
      margin-top: 4px;
    }
  }
</style>

<div class="clinical-rhythm-page">
  <header class="clinical-rhythm-intro">
    <p class="clinical-rhythm-kicker">Clinical Rhythm</p>
    <h1 class="clinical-rhythm-title">Semester 2 resources</h1>
    <p class="clinical-rhythm-lead">
      Lecture slides, textbook chapters, guidelines, journal articles and practice questions,
      organised by topic. The files remain hosted on Clinical Rhythm.
    </p>
    <p class="clinical-rhythm-meta" id="cr-meta">Loading resource index…</p>
  </header>

  <div class="cr-search">
    <input id="cr-search" type="search" placeholder="Search resources…" aria-label="Search Clinical Rhythm resources">
  </div>

  <div class="cr-filters" role="group" aria-label="Filter resources">
    <button class="cr-filter is-active" data-type="all" type="button">Everything</button>
    <button class="cr-filter" data-type="slides" type="button">Slides</button>
    <button class="cr-filter" data-type="textbook" type="button">Textbook</button>
    <button class="cr-filter" data-type="guidelines" type="button">Guidelines</button>
    <button class="cr-filter" data-type="readings" type="button">Readings</button>
    <button class="cr-filter" data-type="other" type="button">Other</button>
  </div>

  <nav class="cr-topic-nav" id="cr-topic-nav" aria-label="Clinical Rhythm topics"></nav>
  <main id="cr-topics"><p class="cr-loading">Loading resources…</p></main>
</div>

<script>
(function () {
  var repo = 'clinicalrythm/clinicalrythm.github.io';
  var api = 'https://api.github.com/repos/' + repo + '/git/trees/main?recursive=1';
  var base = 'https://clinicalrythm.github.io/';
  var activeType = 'all';
  var query = '';
  var allFiles = [];

  var topics = {
    '00. testbank': {
      title: 'Test bank',
      blurb: 'Practice questions and self-assessment material covering the whole semester.'
    },
    '01. principles': {
      title: 'Principles',
      blurb: 'Fever and its evaluation, antimicrobial stewardship and resistance, vaccination, prescribing in older adults, and haematological changes that accompany infection.'
    },
    '02. malaria': {
      title: 'Malaria',
      blurb: 'Diagnosis, treatment, antimalarial drug resistance in Tanzania, severe malaria and anaemia, and national and WHO guidelines.'
    },
    '03. tuberculosis': {
      title: 'Tuberculosis',
      blurb: 'Diagnosis, treatment, preventive treatment, TB with HIV and renal disease, extrapulmonary disease, and WHO guidance.'
    },
    '04. hiv': {
      title: 'HIV',
      blurb: 'Natural history, antiretroviral therapy and resistance, U=U, advanced HIV disease, cryptococcal meningitis, primary care, and guidelines.'
    },
    '05. pneumonia': {
      title: 'Pneumonia',
      blurb: 'Community-acquired pneumonia, hospital-acquired and ventilator-associated pneumonia, glucocorticoids, haemoptysis, and ATS/IDSA guidance.'
    },
    '06. cns infections': {
      title: 'CNS infections',
      blurb: 'Bacterial meningitis, encephalitis, cryptococcal meningoencephalitis, neurocysticercosis, meningococcal disease, imaging, and WHO guidance.'
    },
    '07. sti': {
      title: 'STIs',
      blurb: 'Syphilis, gonococcal infections, non-gonococcal urethritis, herpes simplex, bacterial vaginosis, doxycycline PEP, and national/CDC/WHO guidance.'
    }
  };

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];
    });
  }

  function titleFromPath(path) {
    var name = path.split('/').pop().replace(/\.[^.]+$/, '');
    return name
      .replace(/[_-]+/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
      .replace(/\b\w/g, function (c) { return c.toUpperCase(); });
  }

  function typeFor(path) {
    var p = path.toLowerCase();
    if (/\.pptx?$/.test(p)) return 'slides';
    if (/harrison|textbook/.test(p)) return 'textbook';
    if (/guideline|guidelines|who\d|cdc\d/.test(p)) return 'guidelines';
    if (/\.pdf$|\.docx?$/.test(p)) return 'readings';
    return 'other';
  }

  function pathUrl(path) {
    return base + path.split('/').map(encodeURIComponent).join('/');
  }

  function render() {
    var nav = document.getElementById('cr-topic-nav');
    var main = document.getElementById('cr-topics');
    var meta = document.getElementById('cr-meta');

    var visible = allFiles.filter(function (f) {
      var matchesQuery = !query ||
        f.title.toLowerCase().indexOf(query) !== -1 ||
        f.path.toLowerCase().indexOf(query) !== -1;
      var matchesType = activeType === 'all' || f.type === activeType;
      return matchesQuery && matchesType;
    });

    var groups = {};
    allFiles.forEach(function (f) {
      var folder = f.path.split('/')[0];
      if (!groups[folder]) groups[folder] = [];
    });
    visible.forEach(function (f) {
      var folder = f.path.split('/')[0];
      if (!groups[folder]) groups[folder] = [];
      groups[folder].push(f);
    });

    var order = Object.keys(groups).sort(function(a,b) {
      return a.localeCompare(b, undefined, {numeric:true});
    });

    nav.innerHTML = order.map(function(folder, i) {
      var m = topics[folder] || {title: folder.replace(/^\d+\.\s*/, '')};
      return '<a href="#cr-' + i + '">' + esc(m.title) + '</a>';
    }).join('');

    var html = '';
    var shown = 0;

    order.forEach(function(folder, i) {
      var files = groups[folder];
      if (!files.length) return;
      shown += files.length;
      var m = topics[folder] || {title: folder.replace(/^\d+\.\s*/, ''), blurb:''};

      html += '<section class="cr-topic" id="cr-' + i + '">';
      html += '<div class="cr-topic-header"><div><span class="cr-topic-number">' +
        String(i + 1).padStart(2, '0') + '</span><h2>' + esc(m.title) +
        '</h2></div><span class="cr-topic-count">' + files.length + ' resource' +
        (files.length === 1 ? '' : 's') + '</span></div>';
      if (m.blurb) html += '<p class="cr-topic-blurb">' + esc(m.blurb) + '</p>';
      html += '<div class="cr-resource-list">';
      files.sort(function(a,b){ return a.title.localeCompare(b.title); }).forEach(function(f) {
        html += '<a class="cr-resource" href="' + pathUrl(f.path) + '" target="_blank" rel="noopener">';
        html += '<span class="cr-resource-title">' + esc(f.title) + '</span>';
        html += '<span class="cr-resource-type">' + esc(f.typeLabel) + '</span>';
        html += '</a>';
      });
      html += '</div></section>';
    });

    main.innerHTML = html || '<p class="cr-empty">No resources match your search.</p>';
    meta.textContent = order.length + ' topics · ' + allFiles.length + ' resources · files remain hosted on Clinical Rhythm';
  }

  fetch(api)
    .then(function(r) { return r.json(); })
    .then(function(data) {
      if (!data.tree) throw new Error('Unable to read resource tree');
      allFiles = data.tree
        .filter(function(x) {
          return x.type === 'blob' &&
            x.path.indexOf('/') !== -1 &&
            !/(^|\/)\.DS_Store$/.test(x.path) &&
            !/(^|\/)(~\$)/.test(x.path);
        })
        .map(function(x) {
          var type = typeFor(x.path);
          return {
            path: x.path,
            title: titleFromPath(x.path),
            type: type,
            typeLabel: type === 'slides' ? 'Slides' :
              type === 'textbook' ? 'Textbook' :
              type === 'guidelines' ? 'Guidelines' :
              type === 'readings' ? 'Reading' : 'Other'
          };
        });
      render();
    })
    .catch(function() {
      document.getElementById('cr-meta').textContent = 'Resource index temporarily unavailable.';
      document.getElementById('cr-topics').innerHTML =
        '<p class="cr-empty">Clinical Rhythm could not be reached right now. <a href="https://clinicalrythm.github.io/" target="_blank" rel="noopener">Open Clinical Rhythm directly →</a></p>';
    });

  document.getElementById('cr-search').addEventListener('input', function(e) {
    query = e.target.value.toLowerCase().trim();
    render();
  });

  document.querySelectorAll('.cr-filter').forEach(function(btn) {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.cr-filter').forEach(function(b) {
        b.classList.remove('is-active');
      });
      btn.classList.add('is-active');
      activeType = btn.dataset.type;
      render();
    });
  });
})();
</script>
