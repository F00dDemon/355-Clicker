let score = 0;
let pointsPerClick = 1;

const scoreDisplay = document.getElementById("score-display");
const rateDisplay = document.getElementById("rate-display");

function updateDisplay() {
    scoreDisplay.innerText = `Score: ${score}`;
    rateDisplay.innerText = `Points per click: ${pointsPerClick}`;
}

document.getElementById("click-btn").addEventListener("click", (event) => {
    updateDisplay();
    score += pointsPerClick;
});

updateDisplay();

