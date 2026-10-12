---
layout: default
title: MedED Resources
id_attribute: med
---

<style>
#med .cr-wrap{width:100%}
#med .cr-intro{margin:0 0 1.25rem;text-align:left}
#med .cr-title{margin:0;font-family:var(--font-serif);font-size:1.55em;font-weight:400;line-height:1.2;letter-spacing:-.025em;color:rgb(var(--color-text))}
#med .cr-section-heading{margin:1.4rem 0 .25rem;font-size:1.05rem;line-height:1.3}
#med .cr-section-note{margin:0 0 .8rem;color:rgb(var(--color-muted));font-size:.84rem;line-height:1.5}
#med .cr-specialty-tab:disabled{opacity:.48;cursor:not-allowed}
#med .cr-specialty-tab:disabled:hover{border-color:var(--color-rule);color:rgb(var(--color-muted))}
#med .cr-search-wrap{position:relative;margin:0 0 .8rem}
#med .cr-search-wrap:before{content:'⌕';position:absolute;left:calc(50% - 9.8rem);top:50%;transform:translateY(-52%);font-size:1.25rem;color:rgb(var(--color-muted));pointer-events:none}
#med .cr-search{margin:0}
#med .cr-search input{text-align:center;padding-left:2.35rem;padding-right:2.35rem}
#med .cr-search input:focus{text-align:left;padding-left:2.35rem}
#med .cr-search-wrap:has(input:not(:placeholder-shown)):before{left:.8rem;transform:translateY(-52%)}
#med .cr-search input::placeholder{text-align:center;padding-left:1.7rem}
#med .cr-results-label{display:none}
#med .cr-resource-type{padding:.15rem .35rem;border:1px solid var(--color-rule);border-radius:3px}
#med .cr-kicker{margin:0 0 .45rem;color:rgb(var(--color-accent));font-size:1rem;letter-spacing:.06em;text-align:center;text-transform:none}
#med .cr-lead{max-width:540px;margin:.65rem auto 0;color:rgba(var(--color-text),.72);font-family:var(--font-serif);font-size:1rem;line-height:1.55;text-align:center;hyphens:none;overflow-wrap:normal;word-break:normal}
#med .cr-meta{margin:.7rem 0 0;color:rgba(var(--color-text),.52);font-family:var(--font-small-caps);font-size:.7rem;line-height:1.5;text-align:center;letter-spacing:.015em}
#med .cr-specialty-nav{display:flex;align-items:center;justify-content:space-between;gap:.8rem;width:100%;margin:0 0 1.1rem;padding:.55rem .65rem;border:1px solid var(--color-rule);border-radius:10px;box-sizing:border-box;background:rgba(179,83,82,.035);box-shadow:0 2px 8px rgba(0,0,0,.035)}
#med .cr-specialty-current{flex:1;min-width:0;text-align:center;font-size:1rem;font-weight:600;line-height:1.3;letter-spacing:.01em;padding:.2rem .35rem}
#med .cr-specialty-arrow{display:grid;place-items:center;flex:0 0 36px;width:36px;height:36px;padding:0;border:1px solid var(--color-rule);border-radius:50%;color:rgb(var(--color-accent));background:rgb(var(--color-background));font:inherit;font-size:1.4rem;line-height:1;cursor:pointer;box-shadow:0 1px 3px rgba(0,0,0,.04);transition:border-color .18s ease,color .18s ease,background .18s ease,transform .18s ease}
#med .cr-specialty-arrow:hover{border-color:rgb(var(--color-accent));color:rgb(var(--color-background));background:rgb(var(--color-accent));transform:scale(1.04)}
#med .cr-search{margin:0 0 .8rem}
#med .cr-search input{display:block;width:100%;height:48px;padding:.7rem 2.35rem;border:1px solid var(--color-rule);border-radius:10px;color:rgb(var(--color-text));background:rgb(var(--color-background));font:inherit;font-size:.9rem;box-sizing:border-box;box-shadow:0 2px 7px rgba(0,0,0,.035);transition:border-color .18s ease,box-shadow .18s ease,background .18s ease;outline:none}
#med .cr-search input:focus{border-color:rgb(var(--color-accent));box-shadow:0 0 0 3px rgba(179,83,82,.12),0 3px 10px rgba(0,0,0,.045)}
#med .cr-search input::-webkit-search-cancel-button{cursor:pointer}
#med .cr-search input::placeholder{color:rgb(var(--color-muted))}
#med .cr-filters{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));justify-content:stretch;align-items:center;gap:clamp(.15rem,.7vw,.45rem);margin:0 0 1.5rem;width:100%;box-sizing:border-box}
#med .cr-filter{display:flex;align-items:center;justify-content:center;min-width:0;width:100%;min-height:34px;box-sizing:border-box;padding:.42rem clamp(.08rem,.35vw,.25rem);border:1px solid var(--color-rule);border-radius:8px;color:rgb(var(--color-text));background:transparent;font:inherit;font-family:var(--font-small-caps);font-size:clamp(.48rem,1.05vw,.72rem);line-height:1.1;text-align:center;white-space:nowrap;cursor:pointer}
#med .cr-filter:hover,#med .cr-filter.is-active{border-color:rgb(var(--color-accent));color:rgb(var(--color-accent))}
#med .cr-browse-panel{width:100%;box-sizing:border-box;margin:0 0 1.25rem;padding:1rem;border:1px solid var(--color-rule);border-radius:12px;background:rgb(var(--color-background));box-shadow:0 3px 12px rgba(0,0,0,.035)}
#med .cr-topics{display:grid;gap:1.5rem}
#med .cr-topic{margin:0;scroll-margin-top:1.5rem;border:1px solid var(--color-rule);border-radius:10px;overflow:hidden;background:rgb(var(--color-background));box-shadow:0 2px 8px rgba(0,0,0,.035);transition:border-color .18s ease,box-shadow .18s ease}
#med .cr-topic-card{width:100%;min-height:62px;padding:.75rem 1.1rem;border:0;border-radius:0;color:rgb(var(--color-text));background:transparent;text-align:left;font:inherit;cursor:pointer;display:flex;align-items:center;gap:.85rem;box-sizing:border-box;box-shadow:none;transition:background .18s ease}
#med .cr-topic-card:hover{background:rgba(179,83,82,.045)}
#med .cr-topic:hover{border-color:rgb(var(--color-accent));box-shadow:0 4px 14px rgba(0,0,0,.055)}
#med .cr-topic.is-open{border-color:rgb(var(--color-accent));box-shadow:0 4px 14px rgba(0,0,0,.055)}
#med .cr-topic.is-open .cr-topic-card{background:rgba(179,83,82,.045)}
#med .cr-topic-number{display:grid;place-items:center;flex:0 0 34px;width:34px;height:34px;border-radius:50%;color:rgb(var(--color-accent));background:rgba(179,83,82,.08);font-family:var(--font-small-caps);font-size:.7rem}
#med .cr-topic-name{flex:1 1 auto;min-width:0;font-size:1rem;line-height:1.25;font-weight:600}
#med .cr-topic-count{flex:0 0 auto;color:rgb(var(--color-muted));font-family:var(--font-small-caps);font-size:.7rem;white-space:nowrap}
#med .cr-topic-chevron{display:grid;place-items:center;flex:0 0 28px;width:28px;height:28px;border:1px solid var(--color-rule);border-radius:50%;color:rgb(var(--color-muted));font-size:.85rem;transition:transform .18s ease,border-color .18s ease,color .18s ease}
#med .cr-topic.is-open .cr-topic-chevron{transform:rotate(180deg);border-color:rgb(var(--color-accent));color:rgb(var(--color-accent))}
#med .cr-topic-body{display:none;padding:1rem 1.05rem 1.05rem;border-top:1px solid var(--color-rule);background:rgba(179,83,82,.025)}
#med .cr-topic.is-open .cr-topic-body{display:block}
#med .cr-topic-blurb{margin:0 0 .9rem;color:rgb(var(--color-muted));font-size:.82rem;line-height:1.5}
#med .cr-resource-list{border-top:1px solid var(--color-rule)}
#med .cr-resource{display:grid;grid-template-columns:minmax(0,1fr);gap:.25rem;align-items:start;padding:.65rem 0;border-bottom:1px solid var(--color-rule);border-radius:0;background:transparent;text-shadow:none;text-decoration:none}
#med .cr-resource-title{display:block;min-width:0;font-size:.88rem;font-weight:400;line-height:1.45;overflow-wrap:anywhere;color:rgb(var(--color-text));filter:brightness(.82)}
#med .cr-resource{transition:background-color .16s ease,color .16s ease}
#med .cr-resource:hover{background:rgba(179,83,82,.035);color:rgb(var(--color-accent))}
#med .cr-resource:focus-visible{outline:2px solid rgba(179,83,82,.35);outline-offset:2px;background:rgba(179,83,82,.035)}
#med .cr-resource-meta{display:flex;align-items:center;gap:.45rem;flex-wrap:wrap}
#med .cr-resource-type{justify-self:start;display:inline-flex;align-items:center;padding:0;border:0;border-radius:0;color:rgb(var(--color-muted));font-family:var(--font-small-caps);font-size:.64rem;font-weight:400;line-height:1.25;white-space:normal;letter-spacing:.025em}
#med .cr-resource-format{color:rgb(var(--color-muted));font-size:.68rem;line-height:1.3}
#med .cr-empty{color:rgb(var(--color-muted));font-size:.9rem}
#med .cr-coming-soon{max-width:520px;margin:1.5rem auto 1rem;padding:2rem 1.25rem;text-align:center;border:1px solid var(--color-rule);border-radius:12px;background:linear-gradient(145deg,rgba(179,83,82,.055),transparent 75%)}
#med .cr-coming-icon{display:grid;place-items:center;width:42px;height:42px;margin:0 auto .9rem;border:1px solid rgba(179,83,82,.22);border-radius:50%;color:rgb(var(--color-accent));font-size:1.25rem}
#med .cr-coming-soon h2{margin:0 0 .65rem;font-size:1.1rem;font-weight:500;line-height:1.35}
#med .cr-coming-soon p{max-width:400px;margin:0 auto;color:rgb(var(--color-muted));font-size:.88rem;line-height:1.65}
#med .cr-coming-note{display:inline-block;margin-top:1rem;color:rgb(var(--color-accent));font-family:var(--font-small-caps);font-size:.72rem;letter-spacing:.035em}
@media(max-width:600px){
#med .cr-intro{margin-bottom:1rem}
#med .cr-title{font-size:1.7rem}
#med .cr-lead{font-size:.9rem}
#med .cr-topic-card{min-height:56px;padding:.7rem .9rem}
#med .cr-topic-number{flex-basis:30px;width:30px;height:30px}
#med .cr-topic-body{padding:.8rem .75rem}
#med .cr-browse-panel{padding:.65rem;border-radius:10px}
#med .cr-resource{grid-template-columns:1fr;gap:.2rem;padding:.6rem 0}
#med .cr-resource-type{white-space:normal}
}

/* Prevent mobile Safari from zooming the page when the search field receives focus. */
#med .cr-search input{font-size:16px}
#med .cr-app-actions{display:flex;align-items:center;justify-content:center;gap:.65rem;flex-wrap:wrap;margin:.8rem 0 1.15rem}
#med .cr-install-button{min-height:28px;padding:.25rem .55rem;border:1px solid rgb(var(--color-accent));border-radius:6px;color:rgb(var(--color-background));background:rgb(var(--color-accent));font:inherit;font-size:.7rem;font-weight:600;line-height:1.1;cursor:pointer}
#med .cr-install-button:hover{filter:brightness(.94)}
#med .cr-install-button:focus-visible{outline:2px solid rgb(var(--color-accent));outline-offset:3px}
#med .cr-app-status{max-width:100%;color:rgb(var(--color-muted));font-size:.74rem;line-height:1.45;text-align:center}

#med .cr-install-toast{position:fixed;z-index:9999;left:50%;bottom:1rem;transform:translate(-50%,.6rem);display:flex;flex-direction:column;align-items:stretch;gap:.35rem;width:min(calc(100% - 2rem),320px);box-sizing:border-box;padding:.65rem .8rem;border:1px solid var(--color-rule);border-radius:12px;color:rgb(var(--color-text));background:rgb(var(--color-background));box-shadow:0 5px 18px rgba(0,0,0,.15);font-size:.76rem;line-height:1.3;opacity:0;visibility:hidden;transition:opacity .25s ease,transform .25s ease,visibility .25s ease}
#med .cr-install-toast.is-visible{opacity:1;visibility:visible;transform:translate(-50%,0)}
#med .cr-install-toast-text{display:block;min-width:0;padding-right:1.35rem}
#med .cr-install-toast .cr-install-button{align-self:center;min-width:112px}
#med .cr-install-toast-close{position:absolute;top:.25rem;right:.25rem;display:grid;place-items:center;width:24px;height:24px;padding:0;border:0;border-radius:50%;color:rgb(var(--color-muted));background:transparent;font:inherit;font-size:1.05rem;line-height:1;cursor:pointer}
#med .cr-install-toast-close:hover{background:rgba(127,127,127,.12)}
@media (display-mode:standalone){#med .cr-install-toast{display:none!important}}
</style>

<div class="meded-resources-page" id="med"><div class="cr-wrap">
<header class="cr-intro">
<h1 class="cr-title">MedED Resources</h1>
<p class="cr-lead">A growing collection of medical lectures, readings, guidelines, practice questions and clinical cases, organised by topic.</p>
<p class="cr-meta" id="cr-meta" aria-live="polite">Loading resource index…</p>
</header>

<div class="cr-search-wrap"><div class="cr-search"><input id="cr-search" type="search" placeholder="Search topics or resource types…" aria-label="Search all available resources"></div></div>
<div class="cr-filters" role="group" aria-label="Filter resources">
<button class="cr-filter is-active" data-type="all" type="button">All</button>
<button class="cr-filter" data-type="slides" type="button">Lectures</button>
<button class="cr-filter" data-type="textbook" type="button">Textbook</button>
<button class="cr-filter" data-type="guidelines" type="button">Guidelines</button>
<button class="cr-filter" data-type="readings" type="button">Articles</button>
<button class="cr-filter" data-type="cases" type="button">Cases</button>
</div>

<div class="cr-install-toast" id="cr-install-toast">
  <button class="cr-install-toast-close" id="cr-install-toast-close" type="button" aria-label="Dismiss message">×</button>
  <span class="cr-install-toast-text cr-app-status" id="cr-app-status" role="status" aria-live="polite">Save MedED as an app for quick access.</span>
  <button class="cr-install-button" id="cr-install" type="button">Install MedED</button>
</div>

<div class="cr-browse-panel">
<div class="cr-specialty-nav" role="group" aria-label="Browse specialties">
<button class="cr-specialty-arrow" id="cr-specialty-prev" type="button" aria-label="Previous specialty">‹</button>
<div class="cr-specialty-current" id="cr-specialty-current" aria-live="polite">Infectious Diseases</div>
<button class="cr-specialty-arrow" id="cr-specialty-next" type="button" aria-label="Next specialty">›</button>
</div>

<p class="cr-results-label" id="cr-results-label" aria-live="polite"></p>
<main id="cr-topics"><p class="cr-empty">Loading resources…</p></main>
</div>

</div></div>

<script>
(function(){
var api='https://theupshift.github.io/clinical-rhythm-index.json';
var base='https://clinicalrythm.github.io/';
var caseFiles=[
{title:'Chronic Diarrhoea — Is It IBD',path:'medical/interactivecases/chronicdiarrhea/',url:'https://theupshift.github.io/medical/interactivecases/chronicdiarrhea/',typeLabel:'Cases'},
{title:'Cirrhosis — Longitudinal Clinical Case',path:'medical/interactivecases/cirrhosis/',url:'https://theupshift.github.io/medical/interactivecases/cirrhosis/',typeLabel:'Cases'}
];
var activeType='all',query='',openTopic=null,selectedSpecialty='Infectious Diseases',allFiles=[];
var specialties=[
{title:'Infectious Diseases',folder:'01. infectious'},
{title:'Dermatology',folder:'02. dermatology'},
{title:'Rheumatology',folder:'03. rheumatology'},
{title:'Cardiology',folder:'04. cardiology'},
{title:'Pulmonology',folder:'05. pulmonology'},
{title:'Gastroenterology',folder:'06. gastroenterology'},
{title:'Haematology & Oncology',folder:'07. hema-oncology'},
{title:'Nephrology',folder:'08. nephrology'},
{title:'Neurology',folder:'09. neurology'},
{title:'Endocrinology',folder:'10. endocrinology'}
];
var infectiousTopicFolders=[
'01. principles','02. malaria','03. tuberculosis','04. hiv','05. pneumonia',
'06. cns infections','07. sti','08. infectious diarrhea','09. uti','10. sepsis',
'11. immunocompromised','12. deep mycoses','13. hemorrhagic fevers',
'14. relapsing fevers','15. covid'
];
var topicBlurbs={
'00. testbank':'Practice questions, OSCE revision and self-assessment. Use these to test clinical reasoning, then revisit the source material for explanations.',
'01. principles':'Approach to fever and suspected infection: assess severity first, identify the likely source, obtain appropriate specimens, apply infection prevention measures, and start timely empiric treatment when indicated.',
'02. malaria':'Malaria: recognise uncomplicated and severe disease, interpret rapid diagnostic tests and microscopy, assess complications, and select treatment according to severity and current national guidance.',
'03. tuberculosis':'Tuberculosis: pulmonary and extrapulmonary presentations, diagnostic testing, drug-susceptible and drug-resistant disease, treatment monitoring, adverse effects, infection prevention, and TB/HIV co-management.',
'04. hiv':'HIV: testing and staging, antiretroviral therapy, opportunistic infections, prevention, treatment monitoring, and important drug interactions.',
'05. pneumonia':'Pneumonia: assess severity and need for admission, distinguish likely causes, select investigations and empiric antibiotics appropriately, and review response and complications.',
'06. cns infections':'CNS infections: recognise meningitis and encephalitis as emergencies, perform investigations safely, and do not delay empiric treatment when clinically indicated.',
'07. sti':'Sexually transmitted infections: syndrome-based assessment, appropriate testing, partner management, pregnancy considerations, prevention, and treatment guided by current local recommendations.',
'08. infectious diarrhea':'Infectious diarrhoea: assess dehydration and danger signs, consider infectious and non-infectious causes, select investigations when indicated, and prioritise rehydration, infection control, and appropriate targeted treatment.',
'09. uti':'Urinary tract infections: distinguish lower UTI, pyelonephritis, and complicated infection; recognise sepsis and pregnancy-related risks; interpret urine testing and cultures; and use antibiotics guided by local resistance patterns.',
'10. sepsis':'Sepsis: recognise clinical deterioration early, assess for organ dysfunction and shock, obtain cultures when this will not delay care, give timely antimicrobials and resuscitation when indicated, and reassess response.',
'11. immunocompromised':'Infections in immunocompromised patients: assess host-specific risks, consider atypical presentations and opportunistic pathogens, choose targeted investigations, and coordinate timely empiric treatment and prevention.',
'12. deep mycoses':'Deep and systemic mycoses: recognise presentations in immunocompetent and immunocompromised patients, choose appropriate antigen, microscopy, culture, or histology tests, and review antifungal treatment and toxicity.',
'13. hemorrhagic fevers':'Viral haemorrhagic fevers: recognise compatible illness and exposure history, initiate immediate isolation and infection-prevention procedures, notify public-health teams, and arrange safe testing and supportive care.',
'14. relapsing fevers':'Relapsing fevers: assess recurrent episodes of fever and exposure risks, consider relevant bacterial and vector-borne causes, choose appropriate diagnostic tests, and tailor treatment to the suspected pathogen and local epidemiology.',
'15. covid':'COVID-19: assess severity and risk factors, use testing appropriately, provide supportive care, consider recommended treatment for eligible high-risk patients, and apply current infection-prevention and vaccination guidance.'
};

function esc(s){return String(s).replace(/[&<>"']/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
function titleFromPath(path){return path.split('/').pop().replace(/\.[^.]+$/,'').replace(/[_-]+/g,' ').replace(/\s+/g,' ').trim()}
function typeFor(path){
var p=path.toLowerCase();
if(/case|osce|clerkship/.test(p))return'cases';
if(/\.pptx?$|\.key$|\.odp$/.test(p))return'slides';
if(/harrison|textbook/.test(p))return'textbook';
if(/guideline|guidelines|recommendation|who\d|cdc\d|mohtz|nashcop|nmcp/.test(p))return'guidelines';
if(/\.pdf$|\.docx?$|\.odt$|\.txt$|\.md$/.test(p))return'readings';
return'other'
}
function pathUrl(path){return base+path.split('/').map(encodeURIComponent).join('/')}
function topicTitle(folder){
var name=folder.replace(/^\d+\.\s*/,'').trim().replace(/\s+/g,' ');
var acronyms={'hiv':'HIV','sti':'STIs','cns infections':'CNS infections','aki':'AKI','ckd':'CKD','vte':'VTE','dic':'DIC','copd':'COPD','abg':'ABG','ards':'ARDS','ecg interpretation':'ECG interpretation','gi bleeding':'GI bleeding','cad':'CAD'};
if(acronyms[name.toLowerCase()])return acronyms[name.toLowerCase()];
return name.replace(/\b[a-z]/g,function(ch){return ch.toUpperCase()})
}
function renderNav(){
var current=document.getElementById('cr-specialty-current');
var prev=document.getElementById('cr-specialty-prev');
var next=document.getElementById('cr-specialty-next');
function resetBrowse(){
openTopic=null;query='';
document.getElementById('cr-search').value='';
activeType='all';
document.querySelectorAll('.cr-filter').forEach(function(x){x.classList.toggle('is-active',x.dataset.type==='all')});
render();
}
function updateSpecialty(step){
var index=specialties.findIndex(function(x){return x.title===selectedSpecialty});
selectedSpecialty=specialties[(index+step+specialties.length)%specialties.length].title;
current.textContent=selectedSpecialty;
resetBrowse();
}
current.textContent=selectedSpecialty;
prev.addEventListener('click',function(){updateSpecialty(-1)});
next.addEventListener('click',function(){updateSpecialty(1)});
}

function render(){
var main=document.getElementById('cr-topics'),meta=document.getElementById('cr-meta');
var selected=specialties.find(function(x){return x.title===selectedSpecialty})||specialties[0];
var categoryFiles=allFiles.filter(function(f){return f.categoryFolder===selected.folder});
var visible=categoryFiles.filter(function(f){
var matchesQuery=!query||[f.title,f.path,f.typeLabel,f.topicTitle,selectedSpecialty].join(' ').toLowerCase().indexOf(query)!==-1;
return matchesQuery&&(activeType==='all'||f.type===activeType)
});
var groups={};
visible.forEach(function(f){var folder=f.topicFolder;if(!groups[folder])groups[folder]=[];groups[folder].push(f)});
// Always show the complete 15-topic Infectious Diseases curriculum, even when the
// upstream file index has not yet received resources for topics 08–15.
if(selected.folder==='01. infectious'){
infectiousTopicFolders.forEach(function(folder){
if(!query || (folder+' '+topicTitle(folder)+' '+(topicBlurbs[folder]||'')).toLowerCase().indexOf(query)!==-1){
if(!groups[folder])groups[folder]=[];
}
});
}
var order=Object.keys(groups).sort(function(a,b){return a.localeCompare(b,undefined,{numeric:true})});
var html='';
var interactiveCases=activeType==='cases'?caseFiles.filter(function(f){return !query||[f.title,f.path,f.typeLabel,'interactive clinical cases hosted on meded'].join(' ').toLowerCase().indexOf(query)!==-1}):[];
document.getElementById('cr-specialty-current').textContent=selectedSpecialty;
document.getElementById('cr-specialty-prev').style.visibility='visible';
document.getElementById('cr-specialty-next').style.visibility='visible';
document.getElementById('cr-results-label').textContent=(visible.length+interactiveCases.length)+' resource'+(visible.length+interactiveCases.length===1?'':'s')+' found'+(query?' for “'+query+'”':'')+'.';
order.forEach(function(folder,i){
var files=groups[folder].slice().sort(function(a,b){return a.title.localeCompare(b.title)});
var title=folder==='00. general'?'General resources':topicTitle(folder);
var isOpen=openTopic===folder;
var blurb=topicBlurbs[folder]||'';
html+='<section class="cr-topic'+(isOpen?' is-open':'')+'" data-topic="'+esc(folder)+'"><button class="cr-topic-card" type="button" aria-expanded="'+isOpen+'"><span class="cr-topic-number">'+String(i+1).padStart(2,'0')+'</span><span class="cr-topic-name">'+esc(title)+'</span><span class="cr-topic-count">'+files.length+' resource'+(files.length===1?'':'s')+'</span><span class="cr-topic-chevron" aria-hidden="true">⌄</span></button>';
if(isOpen){
html+='<div class="cr-topic-body">';
if(blurb)html+='<p class="cr-topic-blurb">'+esc(blurb)+'</p>';
if(!files.length)html+='<p class="cr-empty">No resources are indexed for this topic yet. The topic is included in the curriculum and resources can be added as they become available.</p>';
html+='<div class="cr-resource-list">';
files.forEach(function(f){
var ext=f.path.split('.').pop().toLowerCase();
var format=ext==='pdf'?'PDF document':(ext==='ppt'||ext==='pptx'?'PowerPoint presentation':(ext==='doc'||ext==='docx'?'Word document':(ext==='jpg'||ext==='jpeg'||ext==='png'?'Image':ext.toUpperCase()+' file')));
html+='<a class="cr-resource" href="'+pathUrl(f.path)+'" target="_blank" rel="noopener"><span class="cr-resource-title">'+esc(f.title)+'</span><span class="cr-resource-meta"><span class="cr-resource-type">'+esc(f.typeLabel)+'</span><span class="cr-resource-format">'+esc(format)+'</span></span></a>'
});
html+='</div></div>';
}
html+='</section>';
});
if(interactiveCases.length){
html+='<section class="cr-topic cr-interactive-cases"><div class="cr-topic-body" style="display:block"><h2 class="cr-topic-name" style="margin:0 0 .9rem">Interactive clinical cases hosted on MedED</h2><div class="cr-resource-list">';
interactiveCases.forEach(function(f){html+='<a class="cr-resource" href="'+f.url+'" target="_blank" rel="noopener"><span class="cr-resource-title">'+esc(f.title)+'</span><span class="cr-resource-meta"><span class="cr-resource-type">Interactive case</span></span></a>'});
html+='</div></div></section>';
}
main.innerHTML=html||'<p class="cr-empty">No resources match these filters. Try another search term or choose “All”.</p>';
meta.textContent=categoryFiles.length+' resources across '+order.length+' topics · '+selectedSpecialty;
main.querySelectorAll('.cr-topic-card').forEach(function(btn){btn.addEventListener('click',function(){var section=btn.closest('.cr-topic'),folder=section.getAttribute('data-topic');openTopic=openTopic===folder?null:folder;render();if(openTopic)setTimeout(function(){var target=document.querySelector('[data-topic="'+CSS.escape(folder)+'"]');if(target)target.scrollIntoView({behavior:'smooth',block:'start'})},0)})});
}

fetch(api).then(function(r){return r.json()}).then(function(data){
if(!data.tree)throw new Error('Unable to read resource index');
allFiles=data.tree.filter(function(x){
return x.type==='blob'&&x.path.indexOf('clinical seminars/')===0&&!/(^|\/)\.DS_Store$/.test(x.path)&&!/(^|\/)(~\$)/.test(x.path)
}).map(function(x){
var parts=x.path.split('/');
var categoryFolder=(parts[1]||'').trim();
var topicFolder=(parts.length>3?(parts[2]||'00. general'):'00. general').trim();
var type=typeFor(x.path);
var typeLabel=type==='slides'?'Lectures':type==='textbook'?'Textbook':type==='guidelines'?'Guidelines':type==='readings'?'Articles':type==='cases'?'Cases':'Other';
return{path:x.path,title:titleFromPath(x.path),type:type,typeLabel:typeLabel,categoryFolder:categoryFolder,topicFolder:topicFolder,topicTitle:topicTitle(topicFolder)}
});
renderNav();render();
}).catch(function(){
document.getElementById('cr-meta').textContent='Unable to load resources';
document.getElementById('cr-topics').innerHTML='<section class="cr-coming-soon"><div class="cr-coming-icon" aria-hidden="true">✳</div><h2>Resources could not be loaded</h2><p>Please refresh the page in a moment. The resource index may be temporarily unavailable.</p></section>'
});
document.getElementById('cr-search').addEventListener('input',function(e){query=e.target.value.toLowerCase().trim();openTopic=null;render()});
document.querySelectorAll('.cr-filter').forEach(function(btn){btn.addEventListener('click',function(){document.querySelectorAll('.cr-filter').forEach(function(b){b.classList.remove('is-active')});btn.classList.add('is-active');activeType=btn.dataset.type;openTopic=null;render()})});

var installButton=document.getElementById('cr-install');
var appStatus=document.getElementById('cr-app-status');
var installPrompt=null;
var installToast=document.getElementById('cr-install-toast');
var toastClose=document.getElementById('cr-install-toast-close');
function isRunningAsInstalledApp(){
  return (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) || window.navigator.standalone===true;
}
if(installToast && !isRunningAsInstalledApp()){
  window.setTimeout(function(){
    if(!isRunningAsInstalledApp()) installToast.classList.add('is-visible');
  },500);
  // Automatically hide the install message after 7 seconds.
  window.setTimeout(function(){
    if(installToast) installToast.classList.remove('is-visible');
  },7500);
}
if(toastClose && installToast){
  toastClose.addEventListener('click',function(){installToast.classList.remove('is-visible')});
}
window.addEventListener('beforeinstallprompt',function(event){
  event.preventDefault();
  installPrompt=event;
  if(appStatus) appStatus.textContent='MedED is ready to install in your browser.';
  if(installButton) installButton.textContent='Install MedED';
  if(installToast) installToast.classList.add('is-visible');
});
window.addEventListener('appinstalled',function(){
  installPrompt=null;
  if(appStatus) appStatus.textContent='MedED has been installed successfully.';
  if(installToast) installToast.classList.remove('is-visible');
});
installButton.addEventListener('click',async function(){
  if(installPrompt){
    installPrompt.prompt();
    var choice=await installPrompt.userChoice;
    appStatus.textContent=choice.outcome==='accepted'?'MedED installation started.':'You can install MedED later from your browser menu.';
    installPrompt=null;
    return;
  }
  var ua=navigator.userAgent||'';
  var isIOS=/iPad|iPhone|iPod/.test(ua)||(navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1);
  var isEdge=/Edg\//.test(ua);
  var isSafari=/Safari/.test(ua)&&!/Chrome|Chromium|Edg|CriOS|FxiOS/.test(ua);
  if(isIOS&&isSafari){
    appStatus.textContent='To install: tap Share in Safari, then choose “Add to Home Screen”.';
  }else if(isSafari&&/Macintosh|Mac OS X/.test(ua)){
    appStatus.textContent='To install on Mac: in Safari, choose File → Add to Dock.';
  }else if(isEdge){
    appStatus.textContent='To install in Edge: open ⋯, then choose Apps → Install this site as an app.';
  }else if(/Chrome|CriOS/.test(ua)){
    appStatus.textContent='To install in Chrome: open ⋮ and choose Install app or Add to Home screen.';
  }else{
    appStatus.textContent='Open your browser menu and look for “Install app” or “Add to Home Screen”.';
  }
});
function updateConnectionStatus(){
  if(!navigator.onLine){
    appStatus.textContent='You’re offline. Saved parts of MedED may still be available; online resources need internet.';
    return;
  }
  if(installPrompt){
    appStatus.textContent='MedED is ready to install in your browser.';
    return;
  }
  var ua=navigator.userAgent||'';
  var isIOS=/iPad|iPhone|iPod/.test(ua)||(navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1);
  var isEdge=/Edg\//.test(ua);
  var isSafari=/Safari/.test(ua)&&!/Chrome|Chromium|Edg|CriOS|FxiOS/.test(ua);
  if(isIOS && isSafari){
    appStatus.textContent='To install: tap Share in Safari, then choose “Add to Home Screen”.';
  }else if(isSafari && /Macintosh|Mac OS X/.test(ua)){
    appStatus.textContent='To install: in Safari, choose File → Add to Dock.';
  }else if(isEdge){
    appStatus.textContent='To install in Edge: open ⋯, then choose Apps → Install this site as an app.';
  }else if(/Chrome|CriOS/.test(ua)){
    appStatus.textContent='To install in Chrome: open ⋮ and choose Install app or Add to Home screen.';
  }else{
    appStatus.textContent='Open your browser menu and look for “Install app” or “Add to Home Screen”.';
  }
}
window.addEventListener('online',updateConnectionStatus);
window.addEventListener('offline',updateConnectionStatus);
updateConnectionStatus();
})(); 
</script>