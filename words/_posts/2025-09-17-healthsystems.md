---
layout: default
title: Health Resource Allocation Game
---

<!-- Intro Card -->
<div class="card intro-card">
  <p>
    Got bored, made a card game. Yup vibecoding is a thing.</p>
    <p>So, you are the health manager 😎 of a rural community in 🌍 Tanzania. Each 💵 Funding Round, you receive a limited budget to allocate staff, medicine, and transport. Patients will arrive with health needs — treat them wisely!
  </p>
  <p>
    🎯 Victory Condition: By the end of 2 funding rounds, achieve ⭐ Score ≥ 20 and ⚖️ Equity ≥ 2.
  </p>
</div>
<!-- CSS -->
<style>
.intro-card { 
  text-align:center; 
  font-size:0.8em;
  color: #333; /* default text color */
  padding: 1em;
}

/* Dark/Night mode */
@media (prefers-color-scheme: dark) {
  .intro-card { 
    color: white; /* only change text color in night mode */
  }
}
</style>


<div id="health-game">

  <!-- Dashboard -->
  <div class="card">
    <h2>📊 Dashboard</h2>
    <p>💰 Budget: <span id="budget">100</span></p>
    <div class="progress"><div id="budget-bar" class="progress-fill green"></div></div>

    <p>⭐ Score: <span id="score">0</span></p>
    <div class="progress"><div id="score-bar" class="progress-fill blue"></div></div>

    <p>⚖️ Equity (Remote Patients Treated): <span id="equity">0</span></p>
  </div>

  <!-- Resources -->
  <div class="card">
    <h2>🏥 Resources</h2>
    <div class="grid">
      <div>👨‍⚕️ Doctors: <span id="doctors">1</span><br><button onclick="addResource('doctor')">➕</button></div>
      <div>👩‍⚕️ Nurses: <span id="nurses">2</span><br><button onclick="addResource('nurse')">➕</button></div>
      <div>🏡 CHWs: <span id="chws">2</span><br><button onclick="addResource('chw')">➕</button></div>
      <div>💊 Medicine: <span id="medicine">3</span><br><button onclick="addResource('medicine')">➕</button></div>
      <div>🚑 Transport: <span id="transport">1</span><br><button onclick="addResource('transport')">➕</button></div>
      <div>🛏️ Clinic Beds: <span id="beds">1</span><br><button onclick="addResource('beds')">➕</button></div>
    </div>
  </div>

  <!-- Patients -->
  <div class="card">
    <h2>🧍 Incoming Patients</h2>
    <div id="patients-list" class="flex center"></div>
    <button class="action-btn" onclick="drawPatients()">🎲 Draw Patients</button>
  </div>

  <!-- Funding Rounds -->
  <div class="card">
    <h3>💵 Funding Round: <span id="round">1</span>/2</h3>
    <button class="next-btn" onclick="nextRound()">➡️ Next Funding Round</button>
  </div>

  <!-- Results -->
  <div id="results" class="card hidden"></div>

</div>

<!-- Styles -->
<style>
#health-game { max-width: 900px; margin: auto; font-family: "Segoe UI", Arial, sans-serif; color: #333; }
#health-game h2, #health-game h3 { font-family: "Segoe UI Emoji", "Segoe UI", sans-serif; text-align: center; font-size: 0.9em; }
.intro-small { font-size: 0.75em; line-height: 1.1em; text-align: center; margin-bottom: 1em; }
#health-game .card { border: 2px solid #ccc; border-radius: 12px; padding: 1em; margin-bottom: 1.5em; background: white; box-shadow: 0 4px 8px rgba(0,0,0,0.1); }
#health-game .flex { display: flex; flex-wrap: wrap; gap: 0.8em; }
#health-game .center { justify-content: center; }
#health-game button { border: none; border-radius: 8px; padding: 0.4em 0.7em; cursor: pointer; font-size: 1em; transition: 0.2s ease-in-out; }
#health-game button:hover { transform: scale(1.1); }
#health-game .action-btn, #health-game .-btn { display: block; margin: 0.5em auto; text-align: center; }
#health-game .action-btn { background: #007bff; color: white; font-weight: bold; font-size: 0.9em; }
#health-game .action-btn:hover { background: #0056b3; }
#health-game .-btn { background: #28a745; color: white; font-weight: bold; font-size: 0.9em; padding: 0.6em 1em; }
#health-game .-btn:hover { background: #1e7e34; }
#health-game .patient-card { border: 2px solid #aaa; border-radius: 10px; padding: 0.7em; width: 100%; max-width: 220px; font-size: 0.9em; box-shadow: 0 3px 6px rgba(0,0,0,0.1); }
#health-game .patient-card.remote { background: #cce5ff; }
#health-game .patient-card.local { background: #e2f0d9; }
#health-game .patient-card button { margin-top: 0.5em; width: 100%; border-radius: 6px; background: #17a2b8; color: white; font-weight: bold; }
#health-game .patient-card button:hover { background: #117a8b; }
#health-game .progress { background: #ddd; border-radius: 8px; height: 20px; width: 100%; margin-bottom: 1em; overflow: hidden; }
#health-game .progress-fill { height: 100%; width: 0%; color: white; text-align: center; font-size: 0.8em; line-height: 20px; transition: width 0.4s ease-in-out; }
#health-game .green { background: #28a745; }
#health-game .blue { background: #007bff; }
#health-game .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1em; text-align: center; }
#health-game .hidden { display: none; }
@media (max-width: 600px) { #health-game .grid { grid-template-columns: repeat(2, 1fr); } #health-game .flex { flex-direction: column; align-items: center; } }
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
    resources.budget += 25;
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
    <p>
       ( i know, its still pretty raw. will improve on the rules, instructutions and overall  architecture later on once i finish the health system module. maybe and methods too 😜)
    </p>
  </div>
