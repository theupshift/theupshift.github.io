---
layout: post
date: 2025-09-17
title: Health Resource Allocation Game
categories: [education, health, simulation]
tags: [game, health systems, Tanzania, learning, board game]
description: "A simple interactive card game to simulate health resource allocation in rural communities."
featured_image: "https://s3.amazonaws.com/production.scholastica/public/attachments/54701328-1026-4e09-ad51-2fa8d6a51335/large/figure_1._good_health_nepal_bajrabarahi_integrated_health_clinic__makwanpur_nepal.png"
image: "https://s3.amazonaws.com/production.scholastica/public/attachments/54701328-1026-4e09-ad51-2fa8d6a51335/large/figure_1._good_health_nepal_bajrabarahi_integrated_health_clinic__makwanpur_nepal.png"
og_image: "https://s3.amazonaws.com/production.scholastica/public/attachments/54701328-1026-4e09-ad51-2fa8d6a51335/large/figure_1._good_health_nepal_bajrabarahi_integrated_health_clinic__makwanpur_nepal.png"
twitter_image: "https://s3.amazonaws.com/production.scholastica/public/attachments/54701328-1026-4e09-ad51-2fa8d6a51335/large/figure_1._good_health_nepal_bajrabarahi_integrated_health_clinic__makwanpur_nepal.png"
---
<p style="text-align: center;">Got bored, so I made a boardgame. Yup, vibecoding is real 😎.
<br>
<br>
You’re the health manager of a rural community. For each 💵 funding round, allocate limited staff, medicine, and transport to treat arriving patients wisely. Victory: after 2 rounds,⭐ score ≥ 20 & ⚖️ equity ≥ 2.</p>

<div id="health-game">

  <!-- Dashboard -->
  <div class="card dashboard-card">
    <div class="dashboard-header">
      <div>
        <h2>📊 Dashboard</h2>
        <span class="dashboard-subtitle">Your health system at a glance</span>
      </div>
      <span class="round-badge">ROUND <span id="round">1</span>/2</span>
    </div>
    <div class="stats-grid">
      <div class="stat"><span class="stat-label">💰 Budget</span><strong id="budget">100</strong><div class="progress"><div id="budget-bar" class="progress-fill green"></div></div></div>
      <div class="stat"><span class="stat-label">⭐ Score</span><strong id="score">0</strong><div class="progress"><div id="score-bar" class="progress-fill blue"></div></div></div>
      <div class="stat"><span class="stat-label">⚖️ Equity</span><strong id="equity">0</strong><span class="stat-note">Access across patients</span></div>
    </div>
  </div>

  <!-- Resources -->
  <div class="card">
    <div class="section-heading"><h2>🏥 Resources</h2><span>12 per additional unit</span></div>
    <div class="grid resource-grid">
      <div class="resource-item"><span class="resource-icon">👨‍⚕️</span><span class="resource-name">Doctors</span><strong id="doctors">1</strong><button onclick="addResource('doctor')" aria-label="Add doctor">+</button></div>
      <div class="resource-item"><span class="resource-icon">👩‍⚕️</span><span class="resource-name">Nurses</span><strong id="nurses">2</strong><button onclick="addResource('nurse')" aria-label="Add nurse">+</button></div>
      <div class="resource-item"><span class="resource-icon">🏡</span><span class="resource-name">CHWs</span><strong id="chws">2</strong><button onclick="addResource('chw')" aria-label="Add community health worker">+</button></div>
      <div class="resource-item"><span class="resource-icon">💊</span><span class="resource-name">Medicine</span><strong id="medicine">3</strong><button onclick="addResource('medicine')" aria-label="Add medicine">+</button></div>
      <div class="resource-item"><span class="resource-icon">🚑</span><span class="resource-name">Transport</span><strong id="transport">1</strong><button onclick="addResource('transport')" aria-label="Add transport">+</button></div>
      <div class="resource-item"><span class="resource-icon">🔬</span><span class="resource-name">Diagnostics</span><strong id="beds">1</strong><button onclick="addResource('beds')" aria-label="Add diagnostics">+</button></div>
    </div>
  </div>

  <!-- Patients -->
  <div class="card patients-card">
    <div class="section-heading"><h2>🧍 Incoming Patients</h2><span>Choose who to treat</span></div>
    <div id="patients-list" class="flex center"></div>
    <button class="action-btn" onclick="drawPatients()">🎲 Draw Patients</button>
  </div>

  <!-- Funding Rounds -->
  <div class="card round-card">
    <h3>💵 Funding Round</h3>
    <button class="next-btn" onclick="nextRound()">➡️ Next Funding</button>
  </div>

  <!-- Results -->
  <div id="results" class="card results-card hidden"></div>

</div>

<!-- Styles -->
<style>
#health-game { max-width: 900px; margin: 1.5em auto; font-family: inherit; color: #191213; }
#health-game h2, #health-game h3 { margin: 0; font-family: inherit; text-align: left; font-size: 1rem; letter-spacing: 0.02em; }
#health-game .card { border: 1px solid rgba(25,18,19,.14); border-radius: 10px; padding: 1.1em; margin-bottom: 1em; background: #fff; box-shadow: 0 2px 8px rgba(25,18,19,.05); }
#health-game .dashboard-card { padding: 1em 1.1em; }
#health-game .dashboard-header, #health-game .section-heading { display: flex; align-items: baseline; justify-content: space-between; gap: 1em; margin-bottom: .9em; }
#health-game .dashboard-subtitle, #health-game .section-heading > span { color: rgba(25,18,19,.58); font-size: .78em; }
#health-game .round-badge { color: #b35352; font-size: .72em; letter-spacing: .08em; white-space: nowrap; }
#health-game .stats-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: .7em; }
#health-game .stat { padding: .75em .8em; border: 1px solid rgba(25,18,19,.09); border-radius: 8px; background: #faf9f8; }
#health-game .stat-label { display: block; font-size: .75em; color: rgba(25,18,19,.62); margin-bottom: .15em; }
#health-game .stat strong { display: block; font-size: 1.35em; font-weight: 600; }
#health-game .stat-note { display: block; margin-top: .5em; font-size: .72em; color: rgba(25,18,19,.5); }
#health-game .progress { background: #e9e6e4; border-radius: 999px; height: 5px; width: 100%; margin-top: .45em; overflow: hidden; }
#health-game .progress-fill { height: 100%; width: 0%; transition: width .35s ease; }
#health-game .green { background: #6f8d63; }
#health-game .blue { background: #b35352; }
#health-game .grid { display: grid; grid-template-columns: repeat(3,1fr); gap: .7em; }
#health-game .resource-item { position: relative; display: grid; grid-template-columns: auto 1fr auto; grid-template-rows: auto auto; align-items: center; column-gap: .55em; row-gap: .15em; padding: .75em; border: 1px solid rgba(25,18,19,.1); border-radius: 8px; background: #fff; }
#health-game .resource-icon { grid-row: 1 / 3; font-size: 1.45em; }
#health-game .resource-name { font-size: .78em; color: rgba(25,18,19,.65); }
#health-game .resource-item strong { font-size: 1.05em; }
#health-game .resource-item button { grid-column: 3; grid-row: 2; width: 25px; height: 25px; padding: 0; border: 1px solid #b35352; border-radius: 50%; background: transparent; color: #b35352; font-size: 1em; line-height: 1; }
#health-game .resource-item button:hover { background: #b35352; color: #fff; transform: none; }
#health-game .flex { display: flex; flex-wrap: wrap; gap: .8em; }
#health-game .center { justify-content: center; }
#health-game button { border: none; border-radius: 7px; padding: .45em .75em; cursor: pointer; font-size: .9em; transition: background .2s ease, color .2s ease, transform .2s ease; }
#health-game .action-btn { display: block; margin: .9em auto .1em; background: #b35352; color: #fff; font-weight: 600; }
#health-game .action-btn:hover { background: #8c2d2d; transform: none; }
#health-game .patient-card { border: 1px solid rgba(25,18,19,.13); border-radius: 9px; padding: .9em; width: 100%; max-width: 220px; font-size: .86em; box-shadow: 0 2px 6px rgba(25,18,19,.04); }
#health-game .patient-card.remote { background: #f4f7fa; border-color: #cbd7e0; }
#health-game .patient-card.local { background: #f7f7f3; border-color: #d8ddd0; }
#health-game .patient-card strong { display: block; margin-bottom: .35em; }
#health-game .patient-card button { margin-top: .7em; width: 100%; background: #191213; color: #fff; font-weight: 600; }
#health-game .patient-card button:hover { background: #b35352; transform: none; }
#health-game .round-card { text-align: center; padding: 1em; }
#health-game .round-card h3 { text-align: center; margin-bottom: .55em; }
#health-game .next-btn { background: #b35352; color: #fff; font-weight: 600; padding: .6em 1em; border-radius: 7px; margin: .2em auto 0; display: block; }
#health-game .next-btn:hover { background: #8c2d2d; transform: none; }
#health-game .results-card { border-color: rgba(179,83,82,.35); background: #fbf8f7; text-align: center; }
#health-game .hidden { display: none; }
@media (max-width: 600px) {
  #health-game { margin-top: 1em; }
  #health-game .stats-grid { grid-template-columns: 1fr; }
  #health-game .grid { grid-template-columns: repeat(2,1fr); }
  #health-game .dashboard-header, #health-game .section-heading { align-items: flex-start; }
  #health-game .section-heading { flex-direction: column; gap: .2em; }
  #health-game .patient-card { max-width: none; }
}
</style>

<!-- Script -->
<script>
let resources = { budget: 100, doctor: 1, nurse: 2, chw: 2, medicine: 3, transport: 1, beds:1 };
let score = 0, equity = 0, round = 1;
const maxRounds = 2;
let currentPatients = [];
let eventTriggered = false;

const patients = [
  { name:"👶 Child with Malaria", requires:{nurse:1, medicine:2}, points:8, remote:true },
  { name:"🤰 Pregnant Woman", requires:{doctor:1, medicine:1, beds:1}, points:10, remote:false },
  { name:"👨 Adult with Hypertension", requires:{nurse:2}, points:6, remote:false },
  { name:"🍚 Malnourished Child", requires:{chw:2}, points:7, remote:true },
  { name:"🧓 Elder with Diabetes", requires:{doctor:1}, points:9, remote:false }
];

const events = [
  { event:"🦟 Malaria Outbreak → +1 extra patient", effect:{extra_patients:1} },
  { event:"💉 Stock Delay → Lose 1 medicine", effect:{lose_medicine:1} },
  { event:"🌦️ Heavy Rains → Transport reduced by 1", effect:{lose_transport:1} }
];

function updateUI(){
  document.getElementById("budget").innerText = resources.budget;
  document.getElementById("doctors").innerText = resources.doctor;
  document.getElementById("nurses").innerText = resources.nurse;
  document.getElementById("chws").innerText = resources.chw;
  document.getElementById("medicine").innerText = resources.medicine;
  document.getElementById("transport").innerText = resources.transport;
  document.getElementById("beds").innerText = resources.beds;
  document.getElementById("score").innerText = score;
  document.getElementById("equity").innerText = equity;
  document.getElementById("round").innerText = round;
  document.getElementById("budget-bar").style.width = Math.min(resources.budget,100) + "%";
  document.getElementById("budget-bar").innerText = resources.budget;
  document.getElementById("score-bar").style.width = Math.min(score*5,100) + "%";
  document.getElementById("score-bar").innerText = score;
}

function addResource(type){
  const cost = 12;
  if(resources.budget >= cost){ 
    resources[type]++; 
    resources.budget -= cost; 
    updateUI(); 
  } else {
    alert("⚠️ Not enough budget to add this resource!");
  }
}

function drawPatients(){
  if(currentPatients.length >= 4) return; // max 4 patients
  const newPatients = [];
  for(let i=0;i<2;i++){
    if(currentPatients.length + newPatients.length >= 4) break;
    newPatients.push(patients[Math.floor(Math.random()*patients.length)]);
  }
  currentPatients = newPatients.concat(currentPatients);
  renderPatients();
}

function renderPatients(){
  const list = document.getElementById("patients-list");
  list.innerHTML = "";
  currentPatients.forEach((p,i)=>{
    const card = document.createElement("div");
    card.className = "patient-card " + (p.remote ? "remote":"local");
    card.innerHTML = `<strong>${p.name}</strong><br>⭐ ${p.points} points <br>
      <button onclick='treatPatient(${i})'>✅ Treat</button>`;
    list.appendChild(card);
  });
}

function treatPatient(index){
  const patient = currentPatients[index];
  let canTreat = true;
  for(let key in patient.requires) {
    if(resources[key] < patient.requires[key]) canTreat=false;
  }
  if(canTreat){
    for(let key in patient.requires) resources[key]-=patient.requires[key];
    score+=patient.points;
    if(patient.remote) equity+=2;
    currentPatients.splice(index,1);
    renderPatients(); updateUI();
  } else {
    alert("⚠️ Not enough resources to treat this patient!");
  }
}

function maybeTriggerEvent(){
  if(eventTriggered || round !== 2) return;
  if(Math.random() < 0.5){
    const evt = events[Math.floor(Math.random()*events.length)];
    alert(`⚡ Event: ${evt.event}`);
    if(evt.effect.lose_medicine) resources.medicine = Math.max(0, resources.medicine-1);
    if(evt.effect.extra_patients) drawPatients();
    if(evt.effect.lose_transport) resources.transport = Math.max(0, resources.transport-1);
    eventTriggered = true;
  }
}

function nextRound(){
  if(round < maxRounds){
    round++; 
    resources.budget += 75;
    maybeTriggerEvent(); // event alert happens here
    drawPatients(); 
    updateUI();
    
    // If this is now the last round, change button text
    if(round === maxRounds){
      const btn = document.querySelector(".next-btn");
      btn.innerText = "📊 Show Results";
    }
  } else {
    endGame();
  }
}



function endGame(){
  document.getElementById("results").classList.remove("hidden");
  const msg = (score>=20 && equity>=2) ?
    `🏆 <strong>You Win!</strong><br>⭐ Score: ${score}<br>⚖️ Equity: ${equity}<br>💵 Funding Rounds Completed: ${round}` :
    `❌ <strong>Game Over</strong><br>⭐ Score: ${score}<br>⚖️ Equity: ${equity}<br>💵 Funding Rounds Completed: ${round}`;
  document.getElementById("results").innerHTML = msg;
}

updateUI();
</script>

<div class="card intro-card">
    <p style="text-align: center;">
       ( still pretty raw; rules & architecture will improve later on 😜)
    </p>
  </div>
