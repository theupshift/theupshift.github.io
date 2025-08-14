---
layout: default
title: VO2 Max Calculator
---

# VO2 Max Calculator

Use this simple tool to estimate your VO2 max based on your age and resting heart rate.

<div class="container">
    <h2>VO2 Max Calculator</h2>
    <label for="age">Age (years):</label>
    <input type="number" id="age" placeholder="Enter your age">

    <label for="rhr">Resting Heart Rate (bpm):</label>
    <input type="number" id="rhr" placeholder="Enter your resting heart rate">

    <button onclick="calculateVO2Max()">Calculate VO2 Max</button>

    <div class="result" id="result"></div>
</div>

<script>
    function calculateVO2Max() {
        // Get user input
        var age = document.getElementById('age').value;
        var rhr = document.getElementById('rhr').value;

        // Validate input
        if (!age || !rhr || age <= 0 || rhr <= 0) {
            alert("Please enter valid age and resting heart rate values.");
            return;
        }

        // Calculate Max Heart Rate
        var maxHeartRate = 220 - age;

        // Apply the VO2 Max formula
        var vo2Max = 15 * (maxHeartRate / rhr);

        // Display result
        document.getElementById('result').innerText = "Estimated VO2 Max: " + vo2Max.toFixed(2) + " ml/kg/min";
    }
</script>

