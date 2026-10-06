---
layout: default
title: Clinical Rhythm
id_attribute: clinical-rhythm
---

<style>
#clinical-rhythm .cr-wrap { width:100%; }
#clinical-rhythm .cr-intro { margin:0 0 2rem; text-align:center; }
#clinical-rhythm .cr-kicker { margin:0 0 .45rem; color:rgb(var(--color-accent)); font-family:var(--font-small-caps); font-size:.78rem; letter-spacing:.06em; text-transform:uppercase; }
#clinical-rhythm .cr-title { margin:0; font-size:1.9rem; line-height:1.12; letter-spacing:-.025em; }
#clinical-rhythm .cr-lead { max-width:590px; margin:.8rem auto 0; color:rgb(var(--color-muted)); font-size:.94rem; line-height:1.6; }
#clinical-rhythm .cr-meta { margin:.7rem 0 0; color:rgb(var(--color-muted)); font-family:var(--font-small-caps); font-size:.74rem; }

#clinical-rhythm .cr-specialties { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:.75rem; }
#clinical-rhythm .cr-specialty { min-width:0; }
#clinical-rhythm .cr-card {
  width:100%; min-height:122px; padding:1rem 1.05rem; box-sizing:border-box;
  border:1px solid var(--color-rule); border-radius:7px;
  color:rgb(var(--color-text)); background:rgb(var(--color-background));
  text-align:left; font:inherit; cursor:pointer;
  display:flex; flex-direction:column; justify-content:space-between; gap:.8rem;
  box-shadow:0 1px 0 rgba(0,0,0,.025);
  transition:border-color .18s ease,box-shadow .18s ease,transform .18s ease;
}
#clinical-rhythm .cr-card:hover { border-color:rgb(var(--color-accent)); box-shadow:0 5px 16px rgba(0,0,0,.06); transform:translateY(-1px); }
#clinical-rhythm .cr-specialty.is-open .cr-card { border-color:rgb(var(--color-accent)); border-radius:7px 7px 0 0; box-shadow:none; }

#clinical-rhythm .cr-card-top { display:flex; align-items:center; gap:.7rem; }
#clinical-rhythm .cr-number {
  display:grid; place-items:center; flex:0 0 34px; width:34px; height:34px;
  border-radius:50%; color:rgb(var(--color-accent)); background:rgba(179,83,82,.08);
  font-family:var(--font-small-caps); font-size:.7rem;
}
#clinical-rhythm .cr-name { min-width:0; flex:1; font-size:1.02rem; line-height:1.25; font-weight:600; }
#clinical-rhythm .cr-chevron {
  display:grid; place-items:center; flex:0 0 27px; width:27px; height:27px;
  border:1px solid var(--color-rule); border-radius:50%; color:rgb(var(--color-muted));
  font-size:.82rem; transition:transform .18s ease,border-color .18s ease,color .18s ease;
}
#clinical-rhythm .cr-specialty.is-open .cr-chevron { transform:rotate(180deg); border-color:rgb(var(--color-accent)); color:rgb(var(--color-accent)); }
#clinical-rhythm .cr-summary { margin:0; color:rgb(var(--color-muted)); font-size:.79rem; line-height:1.45; }
#clinical-rhythm .cr-status { color:rgb(var(--color-muted)); font-family:var(--font-small-caps); font-size:.68rem; }

#clinical-rhythm .cr-detail {
  display:none; padding:1rem 1.05rem 1.05rem;
  border:1px solid rgb(var(--color-accent)); border-top:0; border-radius:0 0 7px 7px;
  background:rgba(179,83,82,.025);
}
#clinical-rhythm .cr-specialty.is-open .cr-detail { display:block; }
#clinical-rhythm .cr-detail-lead { margin:0 0 .85rem; color:rgb(var(--color-muted)); font-size:.82rem; line-height:1.5; }
#clinical-rhythm .cr-topics { display:grid; gap:.4rem; }
#clinical-rhythm .cr-topic {
  display:flex; align-items:center; justify-content:space-between; gap:1rem;
  padding:.58rem .65rem; border:1px solid var(--color-rule); border-radius:4px;
  font-size:.8rem;
}
#clinical-rhythm .cr-topic-count { color:rgb(var(--color-muted)); font-family:var(--font-small-caps); font-size:.66rem; white-space:nowrap; }
#clinical-rhythm .cr-note {
  margin:.85rem 0 0; padding-top:.75rem; border-top:1px solid var(--color-rule);
  color:rgb(var(--color-muted)); font-size:.72rem; line-height:1.45;
}

@media (max-width:700px) {
  #clinical-rhythm .cr-specialties { grid-template-columns:1fr; }
  #clinical-rhythm .cr-title { font-size:1.65rem; }
}
</style>

<div class="clinical-rhythm-page" id="clinical-rhythm">
  <div class="cr-wrap">
    <header class="cr-intro">
      <p class="cr-kicker">Clinical Rhythm</p>
      <h1 class="cr-title">Clinical medicine, organised.</h1>
      <p class="cr-lead">
        A structured collection of learning resources across medical specialties.
        Choose a specialty to see the topics inside it.
      </p>
      <p class="cr-meta">8 specialties · semester resources · files remain hosted on Clinical Rhythm</p>
    </header>

    <main class="cr-specialties" id="cr-specialties"></main>
  </div>
</div>

<script>
(function () {
  var specialties = [
    {
      name:'Infectious Diseases',
      blurb:'Fever, malaria, tuberculosis, HIV, pneumonia, CNS infections and sexually transmitted infections.',
      status:'Available',
      topics:[
        ['Test bank','Practice questions'],
        ['Principles','Core principles'],
        ['Malaria','Diagnosis & treatment'],
        ['Tuberculosis','Diagnosis & treatment'],
        ['HIV','ART & complications'],
        ['Pneumonia','CAP & HAP'],
        ['CNS infections','Meningitis & encephalitis'],
        ['STIs','Diagnosis & management']
      ]
    },
    {
      name:'Cardiology',
      blurb:'A focused collection covering cardiovascular assessment, common disease and acute presentations.',
      status:'Coming next',
      topics:[
        ['Heart failure','Assessment & management'],
        ['Acute coronary syndromes','Emergency care'],
        ['Arrhythmias','ECG & treatment'],
        ['Hypertension','Diagnosis & management']
      ]
    },
    {
      name:'Nephrology',
      blurb:'Kidney disease, fluid and electrolyte disorders, renal emergencies and dialysis.',
      status:'Coming next',
      topics:[
        ['Acute kidney injury','Recognition & management'],
        ['Chronic kidney disease','Staging & care'],
        ['Electrolytes','Sodium & potassium'],
        ['Dialysis','Principles & practice']
      ]
    },
    {
      name:'Gastroenterology',
      blurb:'Digestive and hepatobiliary medicine from common symptoms to major acute presentations.',
      status:'Coming next',
      topics:[
        ['Liver disease','Assessment & management'],
        ['GI bleeding','Acute care'],
        ['Inflammatory bowel disease','Diagnosis & treatment'],
        ['Pancreatic disease','Clinical approach']
      ]
    },
    {
      name:'Respiratory Medicine',
      blurb:'Airway, lung and pleural disease with practical approaches to diagnosis and treatment.',
      status:'Coming next',
      topics:[
        ['Asthma','Assessment & treatment'],
        ['COPD','Diagnosis & management'],
        ['Pleural disease','Clinical approach'],
        ['Respiratory failure','Acute care']
      ]
    },
    {
      name:'Neurology',
      blurb:'A practical collection for neurological assessment, common disorders and emergencies.',
      status:'Coming next',
      topics:[
        ['Neurological examination','Clinical skills'],
        ['Stroke','Acute management'],
        ['Seizures','Diagnosis & treatment'],
        ['Neuropathy','Clinical approach']
      ]
    },
    {
      name:'Endocrinology',
      blurb:'Metabolic and hormonal disorders, with emphasis on practical diagnosis and management.',
      status:'Coming next',
      topics:[
        ['Diabetes','Diagnosis & management'],
        ['Thyroid disease','Assessment & treatment'],
        ['Adrenal disorders','Clinical approach'],
        ['Calcium disorders','Hypo- & hypercalcaemia']
      ]
    },
    {
      name:'Haematology',
      blurb:'Anaemia, bleeding, thrombosis and common haematological disorders.',
      status:'Coming next',
      topics:[
        ['Anaemia','Diagnosis & investigation'],
        ['Bleeding disorders','Clinical approach'],
        ['Thrombosis','Assessment & treatment'],
        ['Transfusion','Principles & practice']
      ]
    }
  ];

  var open = null;
  var root = document.getElementById('cr-specialties');

  function render() {
    root.innerHTML = specialties.map(function (s, i) {
      var isOpen = open === i;
      var topics = s.topics.map(function (t) {
        return '<div class="cr-topic"><span>' + t[0] + '</span><span class="cr-topic-count">' + t[1] + '</span></div>';
      }).join('');

      return '<section class="cr-specialty' + (isOpen ? ' is-open' : '') + '">' +
        '<button class="cr-card" type="button" aria-expanded="' + isOpen + '">' +
          '<span class="cr-card-top">' +
            '<span class="cr-number">' + String(i + 1).padStart(2,'0') + '</span>' +
            '<span class="cr-name">' + s.name + '</span>' +
            '<span class="cr-chevron" aria-hidden="true">⌄</span>' +
          '</span>' +
          '<span class="cr-summary">' + s.blurb + '</span>' +
          '<span class="cr-status">' + s.status + ' · ' + s.topics.length + ' topics</span>' +
        '</button>' +
        '<div class="cr-detail">' +
          '<p class="cr-detail-lead">' + s.blurb + '</p>' +
          '<div class="cr-topics">' + topics + '</div>' +
          '<p class="cr-note">' +
            (s.status === 'Available'
              ? 'This section is the first live collection. Its resources remain hosted on Clinical Rhythm.'
              : 'Placeholder content for the Clinical Rhythm specialty structure. Resources can be added here without changing the page design.') +
          '</p>' +
        '</div>' +
      '</section>';
    }).join('');

    root.querySelectorAll('.cr-card').forEach(function (button, i) {
      button.addEventListener('click', function () {
        open = open === i ? null : i;
        render();
        if (open !== null) {
          var card = root.children[open];
          if (card) card.scrollIntoView({behavior:'smooth', block:'start'});
        }
      });
    });
  }

  render();
})();
</script>
