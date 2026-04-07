let score = 0;
let pointsPerClick = 1;
let upgradeArray =[{
    id: 1,
    name: "help",
    cost: 10,
    bonus: 1
},{
    id: 2,
    name: "hammerUpgrade",
    cost: 25,
    bonus: 2
},{
    id: 3,
    name: "costcut",
    cost: 50,
    bonus: 2
},{
    id: 4,
    name: "promotion",
    cost: 100,
    bonus: 3
}]

const scoreDisplay = document.getElementById("score-display");
const rateDisplay = document.getElementById("rate-display");
const upgradesDiv = document.getElementById("upgrades")

function updateDisplay() {
    scoreDisplay.innerText = `Score: ${score}`;
    rateDisplay.innerText = `Points per click: ${pointsPerClick}`;
}

document.getElementById("click-btn").addEventListener("click", (event) => {
    updateDisplay();
    score += pointsPerClick;
});

window.addEventListener("load", (event) => {
    upgradeArray.forEach((el) => {
        const upgradeSection = document.createElement("div");

        upgradeSection.innerHTML = `
        <strong>${el.name}</strong> \n Cost: ${el.cost} \n ${el.bonus} per click
        <button onclick="buyUpgrade(${el.id}">Buy</button>`;
        upgradesDiv.appendChild(upgradeSection);
    })
})

function buyUpgrade(elementUpgrade) {
    score - elementUpgrade.cost;
}



updateDisplay();

