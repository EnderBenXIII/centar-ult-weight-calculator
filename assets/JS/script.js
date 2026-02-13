// --------------------------
// CentAR Smash Ultimate Tournament Weight Calculator
// --------------------------

// 1. Grab elements from the page
const top10Checkboxes = document.querySelectorAll("#top10 input[type='checkbox']");
const totalPlayersInput = document.getElementById("total-players");
const calculateBtn = document.getElementById("calculate");
const weightOutput = document.getElementById("weight-output");

// 2. Function to calculate tournament weight
function calculateWeight() {
    // 2a. Sum attendance points from Top 10 checkboxes
    let attendancePoints = 0;
    top10Checkboxes.forEach(cb => {
        if (cb.checked) {
            attendancePoints += parseInt(cb.value);
        }
    });

    // 2b. Map total entrants to points
    const totalPlayers = parseInt(totalPlayersInput.value) || 0;
    let entrantPoints = 0;

    if (totalPlayers <= 8) entrantPoints = 5;
    else if (totalPlayers <= 12) entrantPoints = 10;
    else if (totalPlayers <= 16) entrantPoints = 20;
    else if (totalPlayers <= 20) entrantPoints = 30;
    else if (totalPlayers <= 24) entrantPoints = 40;
    else entrantPoints = 50;

    // 2c. Total weight
    const totalWeight = attendancePoints + entrantPoints;

    // 2d. Update the output span
    weightOutput.innerText = totalWeight + "%";
}

// 3. Live updates: listen for changes on checkboxes
top10Checkboxes.forEach(cb => {
    cb.addEventListener("change", calculateWeight);
});

// 4. Live updates: listen for input changes on total entrants
totalPlayersInput.addEventListener("input", calculateWeight);

// 5. Optional: keep the Calculate button functional
calculateBtn.addEventListener("click", calculateWeight);
