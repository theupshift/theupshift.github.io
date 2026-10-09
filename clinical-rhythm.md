---
layout: default
title: Clinical Rhythm
id_attribute: clinical-rhythm
---

<style>
#clinical-rhythm .cr-wrap{width:100%}
#clinical-rhythm .cr-intro{margin:0 0 1.25rem;text-align:left}
#clinical-rhythm .cr-title{margin:0;font-size:clamp(1.8rem,4vw,2.25rem);line-height:1.12;letter-spacing:-.03em}
#clinical-rhythm .cr-section-heading{margin:1.4rem 0 .25rem;font-size:1.05rem;line-height:1.3}
#clinical-rhythm .cr-section-note{margin:0 0 .8rem;color:rgb(var(--color-muted));font-size:.84rem;line-height:1.5}
#clinical-rhythm .cr-specialty-tab:disabled{opacity:.48;cursor:not-allowed}
#clinical-rhythm .cr-specialty-tab:disabled:hover{border-color:var(--color-rule);color:rgb(var(--color-muted))}
#clinical-rhythm .cr-search-wrap{position:relative;margin:0 0 .8rem}
#clinical-rhythm .cr-search-wrap:before{content:'⌕';position:absolute;left:calc(50% - 9.8rem);top:50%;transform:translateY(-52%);font-size:1.25rem;color:rgb(var(--color-muted));pointer-events:none}
#clinical-rhythm .cr-search{margin:0}
#clinical-rhythm .cr-search input{text-align:center;padding-left:2.35rem;padding-right:2.35rem}
#clinical-rhythm .cr-search input:focus{text-align:left;padding-left:2.35rem}
#clinical-rhythm .cr-search-wrap:has(input:not(:placeholder-shown)):before{left:.8rem;transform:translateY(-52%)}
#clinical-rhythm .cr-search input::placeholder{text-align:center;padding-left:1.7rem}
#clinical-rhythm .cr-results-label{margin:-.55rem 0 1rem;color:rgb(var(--color-muted));font-size:.78rem}
#clinical-rhythm .cr-resource-type{padding:.15rem .35rem;border:1px solid var(--color-rule);border-radius:3px}
#clinical-rhythm .cr-kicker{margin:0 0 .45rem;color:rgb(var(--color-accent));font-size:1rem;letter-spacing:.06em;text-align:center;text-transform:none}
#clinical-rhythm .cr-lead{max-width:620px;margin:.65rem auto 0;color:rgb(var(--color-muted));font-size:.94rem;line-height:1.6;text-align:center;hyphens:none;overflow-wrap:normal;word-break:normal}
#clinical-rhythm .cr-meta{margin:.7rem 0 0;color:rgb(var(--color-muted));font-family:var(--font-small-caps);font-size:.76rem;line-height:1.5;text-align:center}
#clinical-rhythm .cr-specialty-nav{position:relative;margin:0 0 1.25rem;max-width:520px}
#clinical-rhythm .cr-specialty-select{display:block;width:100%;min-height:46px;padding:.65rem 2.5rem .65rem .8rem;border:1px solid var(--color-rule);border-radius:4px;color:rgb(var(--color-text));background:rgb(var(--color-background));font:inherit;font-size:.9rem;cursor:pointer;box-sizing:border-box}
#clinical-rhythm .cr-specialty-select:focus{outline:2px solid rgb(var(--color-accent));outline-offset:2px}
#clinical-rhythm .cr-search{margin:0 0 .8rem}
#clinical-rhythm .cr-search input{display:block;width:100%;height:46px;padding:.65rem 2.35rem;border:1px solid var(--color-rule);border-radius:3px;color:rgb(var(--color-text));background:rgb(var(--color-background));font:inherit;font-size:.9rem;box-sizing:border-box}
#clinical-rhythm .cr-search input::placeholder{color:rgb(var(--color-muted))}
#clinical-rhythm .cr-filters{display:flex;flex-wrap:wrap;gap:.4rem;margin:0 0 1.5rem}
#clinical-rhythm .cr-filter{padding:.38rem .65rem;border:1px solid var(--color-rule);border-radius:999px;color:rgb(var(--color-text));background:transparent;font:inherit;font-family:var(--font-small-caps);font-size:.72rem;line-height:1;cursor:pointer}
#clinical-rhythm .cr-filter:hover,#clinical-rhythm .cr-filter.is-active{border-color:rgb(var(--color-accent));color:rgb(var(--color-accent))}
#clinical-rhythm .cr-topics{display:grid;gap:.65rem}
#clinical-rhythm .cr-topic{margin:0;scroll-margin-top:1.5rem}
#clinical-rhythm .cr-topic-card{width:100%;min-height:68px;padding:.85rem 1rem;border:1px solid var(--color-rule);border-radius:6px;color:rgb(var(--color-text));background:rgb(var(--color-background));text-align:left;font:inherit;cursor:pointer;display:flex;align-items:center;gap:.85rem;box-sizing:border-box;box-shadow:0 1px 0 rgba(0,0,0,.025);transition:border-color .18s ease,box-shadow .18s ease,transform .18s ease}
#clinical-rhythm .cr-topic-card:hover{border-color:rgb(var(--color-accent));box-shadow:0 4px 14px rgba(0,0,0,.06);transform:translateY(-1px)}
#clinical-rhythm .cr-topic.is-open .cr-topic-card{border-color:rgb(var(--color-accent));border-radius:6px 6px 0 0;box-shadow:none}
#clinical-rhythm .cr-topic-number{display:grid;place-items:center;flex:0 0 34px;width:34px;height:34px;border-radius:50%;color:rgb(var(--color-accent));background:rgba(179,83,82,.08);font-family:var(--font-small-caps);font-size:.7rem}
#clinical-rhythm .cr-topic-name{flex:1 1 auto;min-width:0;font-size:1rem;line-height:1.25;font-weight:600}
#clinical-rhythm .cr-topic-count{flex:0 0 auto;color:rgb(var(--color-muted));font-family:var(--font-small-caps);font-size:.7rem;white-space:nowrap}
#clinical-rhythm .cr-topic-chevron{display:grid;place-items:center;flex:0 0 28px;width:28px;height:28px;border:1px solid var(--color-rule);border-radius:50%;color:rgb(var(--color-muted));font-size:.85rem;transition:transform .18s ease,border-color .18s ease,color .18s ease}
#clinical-rhythm .cr-topic.is-open .cr-topic-chevron{transform:rotate(180deg);border-color:rgb(var(--color-accent));color:rgb(var(--color-accent))}
#clinical-rhythm .cr-topic-body{display:none;padding:1rem 1.05rem 1.05rem;border:1px solid rgb(var(--color-accent));border-top:0;border-radius:0 0 6px 6px;background:rgba(179,83,82,.025)}
#clinical-rhythm .cr-topic.is-open .cr-topic-body{display:block}
#clinical-rhythm .cr-topic-blurb{margin:0 0 .9rem;color:rgb(var(--color-muted));font-size:.82rem;line-height:1.5}
#clinical-rhythm .cr-resource-list{border-top:1px solid var(--color-rule)}
#clinical-rhythm .cr-resource{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:1rem;align-items:baseline;padding:.7rem 0;border-bottom:1px solid var(--color-rule);background:none;text-shadow:none}
#clinical-rhythm .cr-resource:hover{color:rgb(var(--color-accent))}
#clinical-rhythm .cr-resource-title{min-width:0;line-height:1.42;overflow-wrap:anywhere}
#clinical-rhythm .cr-resource-type{color:rgb(var(--color-muted));font-family:var(--font-small-caps);font-size:.68rem;white-space:nowrap}
#clinical-rhythm .cr-empty{color:rgb(var(--color-muted));font-size:.9rem}
@media(max-width:600px){
#clinical-rhythm .cr-intro{margin-bottom:1rem}
#clinical-rhythm .cr-title{font-size:1.7rem}
#clinical-rhythm .cr-lead{font-size:.9rem}
#clinical-rhythm .cr-topic-card{min-height:62px;padding:.75rem}
#clinical-rhythm .cr-topic-number{flex-basis:30px;width:30px;height:30px}
#clinical-rhythm .cr-topic-body{padding:.8rem .75rem}
#clinical-rhythm .cr-resource{grid-template-columns:1fr;gap:.2rem;padding:.65rem 0}
#clinical-rhythm .cr-resource-type{white-space:normal}
}
</style>

<div class="clinical-rhythm-page" id="clinical-rhythm"><div class="cr-wrap">
<header class="cr-intro">
<h1 class="cr-title" style="text-align:center;font-size:1.35rem;font-weight:300;letter-spacing:0;color:rgb(var(--color-accent))"># MEDED RESOURCES</h1>
<p class="cr-lead">A collection of medical lectures, readings, guidelines, practice questions and clinical cases, organised by topic.</p>
<p class="cr-meta" id="cr-meta" aria-live="polite">Loading resource index…</p>
</header>

<div class="cr-search-wrap"><div class="cr-search"><input id="cr-search" type="search" placeholder="Search topics, filenames or resource types…" aria-label="Search all available resources"></div></div>
<div class="cr-filters" role="group" aria-label="Filter resources">
<button class="cr-filter is-active" data-type="all" type="button">Everything</button>
<button class="cr-filter" data-type="slides" type="button">Slides</button>
<button class="cr-filter" data-type="textbook" type="button">Textbook</button>
<button class="cr-filter" data-type="guidelines" type="button">Guidelines</button>
<button class="cr-filter" data-type="readings" type="button">Readings</button>
<button class="cr-filter" data-type="other" type="button">Other</button>
</div>

<h2 class="cr-section-heading">Browse by specialty</h2>
<p class="cr-section-note">Choose an available specialty. More sections will appear as their resources are added.</p>
<div class="cr-specialty-nav"><select class="cr-specialty-select" id="cr-specialty-select" aria-label="Choose a specialty"><option value="Infectious Diseases">Infectious Diseases</option><option value="Cardiology" disabled>Cardiology · coming soon</option><option value="Nephrology" disabled>Nephrology · coming soon</option><option value="Gastroenterology" disabled>Gastroenterology · coming soon</option><option value="Respiratory Medicine" disabled>Respiratory Medicine · coming soon</option><option value="Neurology" disabled>Neurology · coming soon</option><option value="Endocrinology" disabled>Endocrinology · coming soon</option><option value="Haematology" disabled>Haematology · coming soon</option></select></div>

<p class="cr-results-label" id="cr-results-label" aria-live="polite"></p>
<main id="cr-topics"><p class="cr-empty">Loading resources…</p></main>
</div></div>

<script>
(function(){
var api='https://theupshift.github.io/clinical-rhythm-index.json';
var base='https://clinicalrythm.github.io/';
var activeType='all',query='',openTopic=null,selectedSpecialty='Infectious Diseases',allFiles=[];
var specialties=[['Cardiology','Cardio'],['Infectious Diseases','ID'],['Nephrology','Nephro'],['Gastroenterology','Gastro'],['Respiratory Medicine','Resp'],['Neurology','Neuro'],['Endocrinology','Endo'],['Haematology','Haem']];

var topics={
'00. testbank':{title:'Test bank',blurb:'Practice questions and self-assessment material covering the whole semester.'},
'01. principles':{title:'Principles',blurb:'Fever and its evaluation, antimicrobial stewardship and resistance, vaccination, prescribing in older adults, and haematological changes that accompany infection.'},
'02. malaria':{title:'Malaria',blurb:'Diagnosis, treatment, antimalarial drug resistance in Tanzania, severe malaria and anaemia, and national and WHO guidelines.'},
'03. tuberculosis':{title:'Tuberculosis',blurb:'Diagnosis, treatment, preventive treatment, TB with HIV and renal disease, extrapulmonary disease, and WHO guidance.'},
'04. hiv':{title:'HIV',blurb:'Natural history, antiretroviral therapy and resistance, U=U, advanced HIV disease, cryptococcal meningitis, primary care, and guidelines.'},
'05. pneumonia':{title:'Pneumonia',blurb:'Community-acquired pneumonia, hospital-acquired and ventilator-associated pneumonia, glucocorticoids, haemoptysis, and ATS/IDSA guidance.'},
'06. cns infections':{title:'CNS infections',blurb:'Bacterial meningitis, encephalitis, cryptococcal meningoencephalitis, neurocysticercosis, meningococcal disease, imaging, and WHO guidance.'},
'07. sti':{title:'STIs',blurb:'Syphilis, gonococcal infections, non-gonococcal urethritis, herpes simplex, bacterial vaginosis, doxycycline PEP, and national/CDC/WHO guidance.'}
};

function esc(s){return String(s).replace(/[&<>"']/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
function titleFromPath(path){var n=path.split('/').pop().replace(/\.[^.]+$/,'');return n.replace(/[_-]+/g,' ').replace(/\s+/g,' ').trim().replace(/\b\w/g,function(c){return c.toUpperCase()})}
function typeFor(path){var p=path.toLowerCase();if(/\.pptx?$/.test(p))return'slides';if(/harrison|textbook/.test(p))return'textbook';if(/guideline|guidelines|who\d|cdc\d/.test(p))return'guidelines';if(/\.pdf$|\.docx?$/.test(p))return'readings';return'other'}
function pathUrl(path){return base+path.split('/').map(encodeURIComponent).join('/')}

function renderNav(){
var select=document.getElementById('cr-specialty-select');
if(select)select.value=selectedSpecialty;
select.addEventListener('change',function(){
selectedSpecialty=select.value;
openTopic=null;query='';
document.getElementById('cr-search').value='';
activeType='all';
document.querySelectorAll('.cr-filter').forEach(function(x){x.classList.toggle('is-active',x.dataset.type==='all')});
render();
});
}

function render(){
var main=document.getElementById('cr-topics'),meta=document.getElementById('cr-meta');
if(selectedSpecialty!=='Infectious Diseases'){
main.innerHTML='<p class="cr-empty">Demo content for <strong>'+esc(selectedSpecialty)+'</strong> — the specialty is ready to be populated when its Clinical Rhythm resources are available.</p>';
meta.textContent='8 specialties · '+selectedSpecialty+' · resources remain hosted on Clinical Rhythm';
return;
}
var visible=allFiles.filter(function(f){
return(!query||f.title.toLowerCase().indexOf(query)!==-1||f.path.toLowerCase().indexOf(query)!==-1||f.typeLabel.toLowerCase().indexOf(query)!==-1)&&(activeType==='all'||f.type===activeType)
});
var groups={};
visible.forEach(function(f){var folder=f.path.split('/')[0];if(!groups[folder])groups[folder]=[];groups[folder].push(f)});
var order=Object.keys(groups).sort(function(a,b){return a.localeCompare(b,undefined,{numeric:true})});
var html='';
document.getElementById('cr-results-label').textContent=visible.length+' resource'+(visible.length===1?'':'s')+' found'+(query?' for “'+query+'”':'')+'.';
order.forEach(function(folder,i){
var files=groups[folder],m=topics[folder]||{title:folder.replace(/^\d+\.\s*/,'')},isOpen=openTopic===folder;
html+='<section class="cr-topic'+(isOpen?' is-open':'')+'" data-topic="'+esc(folder)+'"><button class="cr-topic-card" type="button" aria-expanded="'+isOpen+'"><span class="cr-topic-number">'+String(i+1).padStart(2,'0')+'</span><span class="cr-topic-name">'+esc(m.title)+'</span><span class="cr-topic-count">'+files.length+' resource'+(files.length===1?'':'s')+'</span><span class="cr-topic-chevron" aria-hidden="true">⌄</span></button>';
if(isOpen){
html+='<div class="cr-topic-body">';
if(m.blurb)html+='<p class="cr-topic-blurb">'+esc(m.blurb)+'</p>';
html+='<div class="cr-resource-list">';
files.sort(function(a,b){return a.title.localeCompare(b.title)}).forEach(function(f){html+='<a class="cr-resource" href="'+pathUrl(f.path)+'" target="_blank" rel="noopener"><span class="cr-resource-title">'+esc(f.title)+'</span><span class="cr-resource-type">'+esc(f.typeLabel)+'</span></a>'});
html+='</div></div>';
}
html+='</section>';
});
main.innerHTML=html||'<p class="cr-empty">No resources match these filters. Try a different search term or choose “Everything”.</p>';
meta.textContent=allFiles.length+' resources currently available · '+order.length+' topics · '+selectedSpecialty;
main.querySelectorAll('.cr-topic-card').forEach(function(btn){btn.addEventListener('click',function(){var section=btn.closest('.cr-topic'),folder=section.getAttribute('data-topic');openTopic=openTopic===folder?null:folder;render();if(openTopic)setTimeout(function(){var target=document.querySelector('[data-topic="'+CSS.escape(folder)+'"]');if(target)target.scrollIntoView({behavior:'smooth',block:'start'})},0)})});
}

fetch(api).then(function(r){return r.json()}).then(function(data){
if(!data.tree)throw new Error('Unable to read resource tree');
allFiles=data.tree.filter(function(x){return x.type==='blob'&&x.path.indexOf('/')!==-1&&!/(^|\/)\.DS_Store$/.test(x.path)&&!/(^|\/)(~\$)/.test(x.path)&&!/^(_data|_includes|_layouts|\.devcontainer|assets)(\/|$)/i.test(x.path)}).map(function(x){var type=typeFor(x.path);return{path:x.path,title:titleFromPath(x.path),type:type,typeLabel:type==='slides'?'Slides':type==='textbook'?'Textbook':type==='guidelines'?'Guidelines':type==='readings'?'Reading':'Other'}});renderNav();render();
}).catch(function(){document.getElementById('cr-meta').textContent='Resource index temporarily unavailable.';document.getElementById('cr-topics').innerHTML='<p class="cr-empty">Clinical Rhythm could not be reached right now. <a href="https://clinicalrythm.github.io/" target="_blank" rel="noopener">Open Clinical Rhythm directly →</a></p>'});
document.getElementById('cr-search').addEventListener('input',function(e){query=e.target.value.toLowerCase().trim();openTopic=null;render()});
document.querySelectorAll('.cr-filter').forEach(function(btn){btn.addEventListener('click',function(){document.querySelectorAll('.cr-filter').forEach(function(b){b.classList.remove('is-active')});btn.classList.add('is-active');activeType=btn.dataset.type;openTopic=null;render()})});
})();
</script>