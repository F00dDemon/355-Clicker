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

function renderUpgrades() {
    upgradesDiv.innerHTML=""
    upgradeArray.forEach((el) => {
        const upgradeSection = document.createElement("div");

        // Like we discussed in class, everytime it reloads the upgrades section
        // it will check if the specific upgrade is buyable and will just use
        // either one of these HTML blocks to stop the user from buying it.
        // Its not a proper implement but it works.
        if(score >= el.cost){
            //Can afford upgrade
            upgradeSection.innerHTML = `
            <strong>${el.name}</strong> \n Cost: ${el.cost} \n ${el.bonus} per click
            <button onclick="buyUpgrade(${el.id})" class="buybtn">Buy</button>`;
            upgradesDiv.appendChild(upgradeSection);
        }else{
            //Can't afford upgrade
            upgradeSection.innerHTML = `
            <strong>${el.name}</strong> \n Cost: ${el.cost} \n ${el.bonus} per click
            <button onclick="buyUpgrade(${el.id})" class="buybtn" disabled>Buy</button>`;
            upgradesDiv.appendChild(upgradeSection);
        }
    })
    updateDisplay();
}


function buyUpgrade(elementUpgrade) {
    const upgradePurchase = upgradeArray.find((el) => el.id === elementUpgrade)
    console.log(upgradePurchase)
    score -= upgradePurchase.cost;
    pointsPerClick += upgradePurchase.bonus
    renderUpgrades()
}

renderUpgrades()


document.getElementById("click-btn").addEventListener("click", (event) => {
    score += pointsPerClick;
    renderUpgrades();
    
});