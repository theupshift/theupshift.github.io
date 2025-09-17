---
layout: default
title: Health Resource Allocation Game
---

<h1>Health Resource Allocation Game — Tanzania RHMT/RRH</h1>

<div id="game">

  <!-- Player Board -->
  <div id="player-board" style="border:2px solid #ccc;padding:1em;margin-bottom:1em;border-radius:8px;">
    <h2>Player Board</h2>
    <p>Budget: <span id="budget">100</span></p>
    <p>Doctors: <span id="doctors">2</span> <button onclick="addResource('doctor')">+1</button></p>
    <p>Nurses: <span id="nurses">4</span> <button onclick="addResource('nurse')">+1</button></p>
    <p>CHWs: <span id="chws">3</span> <button onclick="addResource('chw')">+1</button></p>
    <p>Medicine: <span id="medicine">5</span> <button onclick="addResource('medicine')">+1</button></p>
    <p>Transport: <span id="transport">2</span> <button onclick="addResource('transport')">+1</button></p>
  </div>

  <!-- Patients -->
  <div id="patients-section" style="border:2px solid #ccc;padding:1em;margin-bottom:1em;border-radius:8px;">
    <h2>Incoming Patients</h2>
    <div id="patients-list" style="display:flex;flex-wrap:wrap;gap:0.5em;"></div>
    <button onclick="drawPatients()">Draw Patients</button>
  </div>

  <!-- Events -->
  <div id="events-section" style="border:2px solid #ccc;padding:1em;margin-bottom:1em;border-radius:8px;">
    <h2>Events</h2>
    <div id="events-list" style="display:flex;flex-wrap:wrap;gap:0.5em;"></div>
    <button onclick="drawEvent()">Draw Event</button>
  </div>

  <!-- Rounds and Score -->
  <div id="round-section" style="border:2px solid #ccc;padding:1em;margin-bottom:1em;border-radius:8px;">
    <h3>Round: <span id="round">1</span>/5</h3>
    <h3>Total Score: <span id="score">0</span></h3>
    <h3>Equity Score (Remote Patients Treated): <span id="equity">0</span></h3>
    <button onclick="nextRound()">Next Round</button>
  </div>

</div>

<!-- Styles -->
<style>
button { padding:0.3em 0.6em; margin-left:0.3em; cursor:pointer; }
.patient-card, .event-card { border:1px solid #aaa; padding:0.5em; border-radius:5px; width:220px; margin-bottom:0.3em; }
.patient-card.remote { background:#cce5ff; } /* blue for remote */
.patient-card.local { background:#e2f0d9; }  /* green for local */
.event-card { background:#fff3cd; } /* yellow for events */
</style>

<!-- Script -->
<script>
let resources = { budget: 100, doctor: 2, nurse: 4, chw: 3, medicine: 5, transport: 2 };
let score = 0;
let equity = 0;
let round = 1;
const maxRounds = 5;
let currentPatients = [];

const patients = [
  { name:"Child with Malaria", severity:"severe", requires:{nurse:1, medicine:1}, points:5, remote:true },
  { name:"Pregnant Woman with Complication", severity:"severe", requires:{doctor:1, medicine:1, transport:1}, points:8, remote:false },
  { name:"Adult with Hypertension", severity:"moderate", requires:{nurse:1, medicine:1}, points:3, remote:false },
  { name:"Malnourished Child", severity:"moderate", requires:{chw:1, medicine:1}, points:4, remote:true }
];

const events = [
  { event:"Malaria Outbreak", effect:{extra_patients:2} },
  { event:"Vaccine Shortage", effect:{block_program:"vaccination"} },
  { event:"Flood / Road Block", effect:{extra_transport_needed:1} },
  { event:"Staff Strike", effect:{lose_doctor:1, lose_nurse:2} }
];

function updateUI(){
  document.getElementById("budget").innerText = resources.budget;
  document.getElementById("doctors").innerText = resources.doctor;
  document.getElementById("nurses").innerText = resources.nurse;
  document.getElementById("chws").innerText = resources.chw;
  document.getElementById("medicine").innerText = resources.medicine;
  document.getElementById("transport").innerText = resources.transport;
  document.getElementById("score").innerText = score;
  document.getElementById("equity").innerText = equity;
  document.getElementById("round").innerText = round;
}

function addResource(type){
  const cost = 10;
  if(resources.budget >= cost){
    resources[type]++;
    resources.budget -= cost;
    updateUI();
  } else { alert("Not enough budget!"); }
}

function drawPatients(){
  const newPatients = [];
  for(let i=0;i<3;i++){
    const patient = patients[Math.floor(Math.random()*patients.length)];
    newPatients.push(patient);
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
    card.innerHTML = `<strong>${p.name}</strong><br>Severity: ${p.severity}<br>Points: ${p.points} <button onclick='treatPatient(${i})'>Treat</button>`;
    list.appendChild(card);
  });
}

function treatPatient(index){
  const patient = currentPatients[index];
  let canTreat = true;
  for(let key in patient.requires){
    if(resources[key] < patient.requires[key]){
      canTreat = false; break;
    }
  }
  if(canTreat){
    for(let key in patient.requires) resources[key] -= patient.requires[key];
    score += patient.points;
    if(patient.remote) equity += 1;
    alert("Patient successfully treated!");
    currentPatients.splice(index,1);
    renderPatients();
  } else {
    alert("Not enough resources to treat this patient.");
  }
  updateUI();
}

function drawEvent(){
  const evt = events[Math.floor(Math.random()*events.length)];
  const list = document.getElementById("events-list");
  const card = document.createElement("div");
  card.className = "event-card";
  card.innerHTML = `<strong>${evt.event}</strong>`;
  list.appendChild(card);

  if(evt.effect.lose_doctor) resources.doctor = Math.max(0,resources.doctor-evt.effect.lose_doctor);
  if(evt.effect.lose_nurse) resources.nurse = Math.max(0,resources.nurse-evt.effect.lose_nurse);
  updateUI();
}

function nextRound(){
  if(round < maxRounds){
    round++;
    resources.budget += 20;
    drawPatients();
    updateUI();
  } else {
    alert(`Game Over! Total Score: ${score}, Equity: ${equity}`);
  }
}

updateUI();
</script>
