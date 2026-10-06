---
layout: default
title: Clinical Rhythm
id_attribute: clinical-rhythm
---

<style>
#clinical-rhythm .cr-wrap {
  width: 100%;
}

#clinical-rhythm .cr-intro {
  margin: 0 0 2.2rem;
  text-align: center;
}

#clinical-rhythm .cr-kicker {
  margin: 0 0 .45rem;
  color: rgb(var(--color-accent));
  font-family: var(--font-small-caps);
  font-size: .78rem;
  letter-spacing: .06em;
  text-transform: uppercase;
}

#clinical-rhythm .cr-title {
  margin: 0;
  font-size: 1.75rem;
  line-height: 1.15;
  letter-spacing: -.02em;
}

#clinical-rhythm .cr-lead {
  max-width: 560px;
  margin: .8rem auto 0;
  color: rgb(var(--color-muted));
  font-size: .94rem;
  line-height: 1.6;
}

#clinical-rhythm .cr-meta {
  margin: .7rem 0 0;
  color: rgb(var(--color-muted));
  font-family: var(--font-small-caps);
  font-size: .76rem;
}

#clinical-rhythm .cr-search {
  margin: 0 0 .8rem;
}

#clinical-rhythm .cr-search input {
  display: block;
  width: 100%;
  height: 46px;
  padding: .65rem .8rem;
  border: 1px solid var(--color-rule);
  border-radius: 2px;
  color: rgb(var(--color-text));
  background: rgb(var(--color-background));
  font: inherit;
  font-size: .9rem;
}

#clinical-rhythm .cr-search input::placeholder {
  color: rgb(var(--color-muted));
}

#clinical-rhythm .cr-filters {
  display: flex;
  flex-wrap: wrap;
  gap: .4rem;
  margin: 0 0 1.8rem;
}

#clinical-rhythm .cr-filter {
  padding: .38rem .65rem;
  border: 1px solid var(--color-rule);
  border-radius: 999px;
  color: rgb(var(--color-text));
  background: transparent;
  font: inherit;
  font-family: var(--font-small-caps);
  font-size: .72rem;
  line-height: 1;
  cursor: pointer;
}

#clinical-rhythm .cr-filter:hover,
#clinical-rhythm .cr-filter.is-active {
  border-color: rgb(var(--color-accent));
  color: rgb(var(--color-accent));
  background: transparent;
}

#clinical-rhythm .cr-topic-nav {
  display: flex;
  flex-wrap: wrap;
  gap: .25rem 1rem;
  margin: 0 0 2.2rem;
  padding: .8rem 0;
  border-top: 1px solid var(--color-rule);
  border-bottom: 1px solid var(--color-rule);
  font-family: var(--font-small-caps);
  font-size: .78rem;
}

#clinical-rhythm .cr-topic-nav a {
  background: none;
  text-shadow: none;
}

#clinical-rhythm .cr-topic {
  margin: 0 0 2.7rem;
  scroll-margin-top: 1.5rem;
}

#clinical-rhythm .cr-topic-header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  margin: 0 0 .25rem;
}

#clinical-rhythm .cr-topic-heading {
  min-width: 0;
}

#clinical-rhythm .cr-topic-number {
  margin-right: .45rem;
  color: rgb(var(--color-accent));
  font-family: var(--font-small-caps);
  font-size: .72rem;
}

#clinical-rhythm .cr-topic h2 {
  display: inline;
  margin: 0;
  font-size: 1.15rem;
  line-height: 1.25;
}

#clinical-rhythm .cr-topic-count {
  flex: 0 0 auto;
  color: rgb(var(--color-muted));
  font-family: var(--font-small-caps);
  font-size: .72rem;
}

#clinical-rhythm .cr-topic-blurb {
  margin: 0 0 .8rem;
  color: rgb(var(--color-muted));
  font-size: .82rem;
  line-height: 1.5;
}

#clinical-rhythm .cr-resource-list {
  border-top: 1px solid var(--color-rule);
}

#clinical-rhythm .cr-resource {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 1rem;
  align-items: baseline;
  padding: .72rem 0;
  border-bottom: 1px solid var(--color-rule);
  background: none;
  text-shadow: none;
}

#clinical-rhythm .cr-resource:hover {
  color: rgb(var(--color-accent));
}

#clinical-rhythm .cr-resource-title {
  min-width: 0;
  line-height: 1.42;
  overflow-wrap: anywhere;
}

#clinical-rhythm .cr-resource-type {
  color: rgb(var(--color-muted));
  font-family: var(--font-small-caps);
  font-size: .68rem;
  white-space: nowrap;
}

#clinical-rhythm .cr-empty,
#clinical-rhythm .cr-loading {
  color: rgb(var(--color-muted));
  font-size: .9rem;
}

@media (max-width: 600px) {
  #clinical-rhythm .cr-title {
    font-size: 1.55rem;
  }

  #clinical-rhythm .cr-lead {
    font-size: .9rem;
  }

  #clinical-rhythm .cr-topic-header {
    display: block;
  }

  #clinical-rhythm .cr-topic-count {
    display: block;
    margin-top: .2rem;
  }

  #clinical-rhythm .cr-resource {
    grid-template-columns: 1fr;
    gap: .2rem;
    padding: .65rem 0;
  }

  #clinical-rhythm .cr-resource-type {
    white-space: normal;
  }
}
</style>


<div class="clinical-rhythm-page" id="clinical-rhythm"><div class="cr-wrap">
  <header class="cr-intro">
    <p class="cr-kicker">Clinical Rhythm</p>
    <h1 class="cr-title">Semester 2 resources</h1>
    <p class="cr-lead">
      Lecture slides, textbook chapters, guidelines, journal articles and practice questions,
      organised by topic. The files remain hosted on Clinical Rhythm.
    </p>
    <p class="cr-meta" id="cr-meta">Loading resource index…</p>
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
</div></div>

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
      html += '<div class="cr-topic-header"><div class="cr-topic-heading"><span class="cr-topic-number">' +
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
            !/(^|\/)(~\$)/.test(x.path) &&
            !/^(_data|_includes|_layouts|\.devcontainer)(\/|$)/i.test(x.path);
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
