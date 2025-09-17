---
layout: default
title: Health Resource Allocation Game
---

<div id="health-game">

  <div class="card intro">
    <p>
      🌍 You are the <strong>health manager</strong> of a rural community in Tanzania.  
      Each 💵 <strong>Funding Round</strong>, you get new budget to hire staff, buy medicine, and prepare for incoming patients.  
      Treat patients, handle events, and balance resources.  
      <br><br>
      🎯 <strong>Victory:</strong> By the end of 3 funding rounds, achieve ⭐ <b>Score ≥ 20</b> and ⚖️ <b>Equity ≥ 2</b>.
    </p>
  </div>

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
    <p>👨‍⚕️ Doctors: <span id="doctors">1</span> <button onclick="addResource('doctor')">➕👨‍⚕️</button></p>
    <p>👩‍⚕️ Nurses: <span id="nurses">2</span> <button onclick="addResource('nurse')">➕👩‍⚕️</button></p>
    <p>🏡 CHWs: <span id="chws">2</span> <button onclick="addResource('chw')">➕🏡</button></p>
    <p>💊 Medicine: <span id="medicine">3</span> <button onclick="addResource('medicine')">➕💊</button></p>
    <p>🚑 Transport: <span id="transport">1</span> <button onclick="addResource('transport')">➕🚑</button></p>
  </div>

  <!-- Patients -->
  <div class="card">
    <h2>🧍 Incoming Patients</h2>
    <div id="patients-list" class="flex"></div>
    <button class="action-btn" onclick="drawPatients()">🎲 Draw Patients</button>
  </div>

  <!-- Events -->
  <div class="card">
    <h2>⚡ Events</h2>
    <div id="events-list" class="flex"></div>
    <button class="action-btn" onclick="drawEvent()">⚡ Trigger Event</button>
  </div>

  <!-- Funding Rounds -->
  <div class="card">
    <h3>💵 Funding Round: <span id="round">1</span>/3</h3>
    <button class="next-btn" onclick="nextRound()">➡️ Next Funding Round</button>
  </div>

  <!-- Results -->
  <div id="results" class="card hidden"></div>

</div>

<!-- Scoped Styles -->
<style>
#health-game {
  max-width: 900px;
  margin: auto;
  font-family: "Segoe UI", Arial, sans-serif;
  color: #333;
}
#health-game h2, #health-game h3 {
  font-family: "Segoe UI Emoji", "Segoe UI", sans-serif;
}
#health-game .card {
  border: 2px solid #ccc;
  border-radius: 12px;
  padding: 1em;
  margin-bottom: 1.5em;
  background: white;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}
#health-game .flex {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8em;
}
#health-game button {
  border: none;
  border-radius: 8px;
  padding: 0.4em 0.7em;
  cursor: pointer;
  font-size: 1em;
  transition: 0.2s ease-in-out;
}
#health-game button:hover { transform: scale(1.1); }
#health-game .action-btn {
  background: #007bff;
  color: white;
  font-weight: bold;
}
#health-game .action-btn:hover { background: #0056b3; }
#health-game .next-btn {
  background: #28a745;
  color: white;
  font-weight: bold;
  padding: 0.6em 1em;
}
#health-game .next-btn:hover { background: #1e7e34; }
#health-game .patient-card, 
#health-game .event-card {
  border: 2px solid #aaa;
  border-radius: 10px;
  padding: 0.7em;
  width: 100%;
  max-width: 220px;
  font-size: 0.9em;
  box-shadow: 0 3px 6px rgba(0,0,0,0.1);
}
#health-game .patient-card.remote { background: #cce5ff; } /* Blue = remote */
#health-game .patient-card.local { background: #e2f0d9; }  /* Green = local */
#health-game .event-card { background: #fff3cd; }          /* Yellow = event */
#health-game .patient-card button {
  margin-top: 0.5em;
  width: 100%;
  border-radius: 6px;
  background: #17a2b8;
  color: white;
  font-weight: bold;
}
#health-game .patient-card button:hover { background: #117a8b; }

/* Progress Bars */
#health-game .progress {
  background: #ddd;
  border-radius: 8px;
  height: 20px;
  width: 100%;
  margin-bottom: 1em;
  overflow: hidden;
}
#health-game .progress-fill {
  height: 100%; width: 0%;
  color: white; text-align: center;
  font-size: 0.8em; line-height: 20px;
  transition: width 0.4s ease-in-out;
}
#health-game .green { background: #28a745; }
#health-game .blue { background: #007bff; }

/* Hidden */
#health-game .hidden { display: none; }

/* Responsive */
@media (max-width: 600px) {
  #health-game .flex { flex-direction: column; }
  #health-game .patient-card, #health-game .event-card {
    max-width: 100%;
  }
}
</style>

<!-- Script -->
<script>
let resources = { budget: 100, doctor: 1, nurse: 2, chw: 2, medicine: 3, transport: 1 };
let score = 0;
let equity = 0;
let round = 1;
const maxRounds = 3;
let currentPatients = [];

// Easier patients
const patients = [
  { name:"👶 Child with Malaria", requires:{nurse:1, medicine:1}, points:8, remote:true },
  { name:"🤰 Pregnant Woman", requires:{doctor:1, medicine:1}, points:10, remote:false },
  { name:"👨 Adult with Hypertension", requires:{nurse:1}, points:6, remote:false },
  { name:"🍚 Malnourished Child", requires:{chw:1}, points:7, remote:true }
];

// Light events
const events = [
  { event:"🦟 Malaria Outbreak", effect:{extra_patients:1} },
  { event:"💉 Small Stock Delay", effect:{lose_medicine:1} },
  { event:"🌦️ Rainy Season", effect:{} }
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

  // Progress bars
  document.getElementById("budget-bar").style.width = Math.min(resources.budget,100) + "%";
  document.getElementById("budget-bar").innerText = resources.budget;
  document.getElementById("score-bar").style.width = Math.min(score*5,100) + "%"; 
  document.getElementById("score-bar").innerText = score;
}

function addResource(type){
  const cost = 10; // cheap
  if(resources.budget >= cost){
    resources[type]++;
    resources.budget -= cost;
    updateUI();
  } else { alert("⚠️ Not enough budget!"); }
}

function drawPatients(){
  const newPatients = [];
  for(let i=0;i<2;i++){
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
    card.innerHTML = `<strong>${p.name}</strong><br>⭐ ${p.points} points <br>
      <button onclick='treatPatient(${i})'>✅ Treat</button>`;
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
    if(patient.remote) equity += 2; // boost equity
    currentPatients.splice(index,1);
    renderPatients();
    updateUI();
  } else {
    alert("❌ Not enough resources.");
  }
}

function drawEvent(){
  const evt = events[Math.floor(Math.random()*events.length)];
  const list = document.getElementById("events-list");
  const card = document.createElement("div");
  card.className = "event-card";
  card.innerHTML = `<strong>${evt.event}</strong>`;
  list.prepend(card);

  if(evt.effect.lose_medicine) resources.medicine = Math.max(0,resources.medicine-evt.effect.lose_medicine);
  if(evt.effect.extra_patients) drawPatients();
  updateUI();
}

function nextRound(){
  if(round < maxRounds){
    round++;
    resources.budget += 20; // new funding
    drawPatients();
    updateUI();
  } else {
    endGame();
  }
}

function endGame(){
  document.getElementById("results").classList.remove("hidden");
  let msg = "";
  if(score >= 20 && equity >= 2){
    msg = `🏆 <strong>You Win!</strong><br>⭐ Score: ${score}<br>⚖️ Equity: ${equity}<br>💵 Funding Rounds Completed: ${round}`;
  } else {
    msg = `❌ <strong>Game Over</strong><br>⭐ Score: ${score}<br>⚖️ Equity: ${equity}<br>💵 Funding Rounds Completed: ${round}<br><br>💡 Try again to reach ⭐20+ and ⚖️2+!`;
  }
  document.getElementById("results").innerHTML = msg;
}

updateUI();
</script>
