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
#med .cr-install-button{min-height:34px;padding:.4rem .75rem;border:1px solid rgb(var(--color-accent));border-radius:8px;color:rgb(var(--color-background));background:rgb(var(--color-accent));font:inherit;font-size:.78rem;font-weight:600;cursor:pointer}
#med .cr-install-button:hover{filter:brightness(.94)}
#med .cr-app-status{max-width:100%;color:rgb(var(--color-muted));font-size:.74rem;line-height:1.45;text-align:center}
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

<div class="cr-browse-panel">
<div class="cr-specialty-nav" role="group" aria-label="Browse specialties">
<button class="cr-specialty-arrow" id="cr-specialty-prev" type="button" aria-label="Previous specialty">‹</button>
<div class="cr-specialty-current" id="cr-specialty-current" aria-live="polite">Infectious Diseases</div>
<button class="cr-specialty-arrow" id="cr-specialty-next" type="button" aria-label="Next specialty">›</button>
</div>

<p class="cr-results-label" id="cr-results-label" aria-live="polite"></p>
<main id="cr-topics"><p class="cr-empty">Loading resources…</p></main>
</div>

<div class="cr-app-actions">
  <button class="cr-install-button" id="cr-install" type="button">Install MedED</button>
  <span class="cr-app-status" id="cr-app-status" role="status" aria-live="polite">Save MedED to your device as an app for quick access.</span>
</div>

</div></div>

<script>
(function(){
var api='https://theupshift.github.io/clinical-rhythm-index.json';
var base='https://clinicalrythm.github.io/';
var casesUrl='https://theupshift.github.io/medical/interactivecases/';
var caseFiles=[{title:'Chronic Diarrhoea — Is It IBD',path:'medical/interactivecases/chronicdiarrhea/',url:'https://theupshift.github.io/medical/interactivecases/chronicdiarrhea/',typeLabel:'Cases'},{title:'Cirrhosis — Longitudinal Clinical Case',path:'medical/interactivecases/cirrhosis/',url:'https://theupshift.github.io/medical/interactivecases/cirrhosis/',typeLabel:'Cases'}];
var activeType='all',query='',openTopic=null,selectedSpecialty='Infectious Diseases',allFiles=[];
var specialties=['Infectious Diseases','Cardiology','Nephrology','Gastroenterology','Respiratory Medicine','Neurology','Endocrinology','Haematology'];

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
function titleFromPath(path){return path.split('/').pop().replace(/\.[^.]+$/,'').replace(/[_-]+/g,' ').replace(/\s+/g,' ').trim()}
function typeFor(path){var p=path.toLowerCase();if(/interactivecases|interactive-cases|interactive_cases/.test(p))return'cases';if(/\.pptx?$/.test(p))return'slides';if(/harrison|textbook/.test(p))return'textbook';if(/guideline|guidelines|who\d|cdc\d/.test(p))return'guidelines';if(/\.pdf$|\.docx?$/.test(p))return'readings';return'other'}
function pathUrl(path){return base+path.split('/').map(encodeURIComponent).join('/')}

function renderNav(){
var current=document.getElementById('cr-specialty-current');
var prev=document.getElementById('cr-specialty-prev');
var next=document.getElementById('cr-specialty-next');
function updateSpecialty(step){
var index=specialties.indexOf(selectedSpecialty);
selectedSpecialty=specialties[(index+step+specialties.length)%specialties.length];
current.textContent=selectedSpecialty;
openTopic=null;query='';
document.getElementById('cr-search').value='';
activeType='all';
document.querySelectorAll('.cr-filter').forEach(function(x){x.classList.toggle('is-active',x.dataset.type==='all')});
render();
}
current.textContent=selectedSpecialty;
prev.addEventListener('click',function(){updateSpecialty(-1)});
next.addEventListener('click',function(){updateSpecialty(1)});
}

function render(){
var main=document.getElementById('cr-topics'),meta=document.getElementById('cr-meta');
var specialtyCurrent=document.getElementById('cr-specialty-current');
var specialtyPrev=document.getElementById('cr-specialty-prev');
var specialtyNext=document.getElementById('cr-specialty-next');
var showingCases=activeType==='cases';
specialtyCurrent.textContent=showingCases?'Common Cases':selectedSpecialty;
specialtyPrev.style.visibility=showingCases?'hidden':'visible';
specialtyNext.style.visibility=showingCases?'hidden':'visible';
if(activeType==='cases'){
var matchingCases=caseFiles.filter(function(f){return !query||f.title.toLowerCase().indexOf(query)!==-1||f.path.toLowerCase().indexOf(query)!==-1||f.typeLabel.toLowerCase().indexOf(query)!==-1});
document.getElementById('cr-results-label').textContent=matchingCases.length+' interactive case'+(matchingCases.length===1?'':'s')+' found'+(query?' for “'+query+'”':'')+'.';
main.innerHTML=matchingCases.length?'<div class="cr-resource-list">'+matchingCases.map(function(f){return '<a class="cr-resource" href="'+f.url+'" target="_blank" rel="noopener"><span class="cr-resource-title">'+esc(f.title)+'</span></a>'}).join('')+'</div>':'<p class="cr-empty">No interactive cases match this search.</p>';
meta.textContent=caseFiles.length+' interactive cases · sourced from Medical / Interactive Cases';
return;
}
if(selectedSpecialty!=='Infectious Diseases'){
main.innerHTML='<section class="cr-coming-soon" aria-labelledby="cr-coming-title"><div class="cr-coming-icon" aria-hidden="true">✳</div><h2 id="cr-coming-title">Coming soon to '+esc(selectedSpecialty)+'</h2><p>We’re building this collection of trusted lectures, essential readings, clinical guidelines and learning resources. Check back soon as this specialty takes shape.</p><span class="cr-coming-note">More resources are on the way.</span></section>';
meta.textContent=selectedSpecialty+' · curated resources coming soon';
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
files.sort(function(a,b){return a.title.localeCompare(b.title)}).forEach(function(f){var ext=f.path.split('.').pop().toLowerCase(),format=ext==='pdf'?'PDF document':(ext==='ppt'||ext==='pptx'?'PowerPoint presentation':(ext==='doc'||ext==='docx'?'Word document':ext.toUpperCase()+' document'));html+='<a class="cr-resource" href="'+pathUrl(f.path)+'" target="_blank" rel="noopener"><span class="cr-resource-title">'+esc(f.title)+'</span><span class="cr-resource-meta"><span class="cr-resource-type">'+esc(f.typeLabel)+'</span><span class="cr-resource-format">'+esc(format)+'</span></span></a>'});
html+='</div></div>';
}
html+='</section>';
});
main.innerHTML=html||'<p class="cr-empty">No resources match these filters. Try a different search term or choose “All”.</p>';
meta.textContent=allFiles.length+' resources currently available · '+order.length+' topics · '+selectedSpecialty;
main.querySelectorAll('.cr-topic-card').forEach(function(btn){btn.addEventListener('click',function(){var section=btn.closest('.cr-topic'),folder=section.getAttribute('data-topic');openTopic=openTopic===folder?null:folder;render();if(openTopic)setTimeout(function(){var target=document.querySelector('[data-topic="'+CSS.escape(folder)+'"]');if(target)target.scrollIntoView({behavior:'smooth',block:'start'})},0)})});
}

fetch(api).then(function(r){return r.json()}).then(function(data){
if(!data.tree)throw new Error('Unable to read resource tree');
allFiles=data.tree.filter(function(x){return x.type==='blob'&&x.path.indexOf('/')!==-1&&!/(^|\/)\.DS_Store$/.test(x.path)&&!/(^|\/)(~\$)/.test(x.path)&&!/^(_data|_includes|_layouts|\.devcontainer|assets)(\/|$)/i.test(x.path)}).map(function(x){var type=typeFor(x.path);return{path:x.path,title:titleFromPath(x.path),type:type,typeLabel:type==='slides'?'Slides':type==='textbook'?'Textbook':type==='guidelines'?'Guidelines':type==='readings'?'Reading':type==='cases'?'Cases':'Other'}});renderNav();render();
}).catch(function(){document.getElementById('cr-meta').textContent='Coming soon';document.getElementById('cr-topics').innerHTML='<section class="cr-coming-soon"><div class="cr-coming-icon" aria-hidden="true">✳</div><h2>Coming soon</h2><p>We’re preparing this collection of medical learning resources. Please check back soon.</p></section>'});
document.getElementById('cr-search').addEventListener('input',function(e){query=e.target.value.toLowerCase().trim();openTopic=null;render()});
document.querySelectorAll('.cr-filter').forEach(function(btn){btn.addEventListener('click',function(){document.querySelectorAll('.cr-filter').forEach(function(b){b.classList.remove('is-active')});btn.classList.add('is-active');activeType=btn.dataset.type;openTopic=null;render()})});

var installButton=document.getElementById('cr-install');
var appStatus=document.getElementById('cr-app-status');
var installPrompt=null;
window.addEventListener('beforeinstallprompt',function(event){
  event.preventDefault();
  installPrompt=event;
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
  var isSafari=/Safari/.test(ua)&&!/Chrome|Chromium|Edg|CriOS|FxiOS/.test(ua);
  if(isIOS){
    appStatus.textContent='To install: open the Share menu in Safari, then choose “Add to Home Screen”.';
  }else if(isSafari&&/Macintosh|Mac OS X/.test(ua)){
    appStatus.textContent='To install on Mac: in Safari, choose File → Add to Dock.';
  }else{
    appStatus.textContent='If installation is available in your browser, open its menu and choose “Install app” or “Add to Home Screen”.';
  }
});
function updateConnectionStatus(){
  if(!navigator.onLine){
    appStatus.textContent='You’re offline. Saved parts of MedED may still be available; online resources need internet.';
  }else{
    appStatus.textContent='The app shell and resource index can be cached for offline use.';
  }
}
window.addEventListener('online',updateConnectionStatus);
window.addEventListener('offline',updateConnectionStatus);
updateConnectionStatus();
})(); 
</script>