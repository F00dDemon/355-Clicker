let score = 0;
let pointsPerClick = 1;
let upgradeArray = [{
    id: 1,
    name: "Hire worker",
    cost: 10,
    bonus: 1
}, {
    id: 2,
    name: "Better Tools",
    cost: 25,
    bonus: 2
}, {
    id: 3,
    name: "Cement Mixer",
    cost: 50,
    bonus: 2
}, {
    id: 4,
    name: "Construction Crew",
    cost: 100,
    bonus: 3
}]

const scoreDisplay = document.getElementById("score-display");
const rateDisplay = document.getElementById("rate-display");
const upgradesDiv = document.getElementById("upgrades")

function updateDisplay() {
    scoreDisplay.innerText = `Bricks: ${score}`;
    rateDisplay.innerText = `Bricks per click: ${pointsPerClick}`;
}

function renderUpgrades() {
    upgradesDiv.innerHTML = ""
    upgradeArray.forEach((el) => {
        const upgradeSection = document.createElement("div");

        // Like we discussed in class, everytime it reloads the upgrades section
        // it will check if the specific upgrade is buyable and will just use
        // either one of these HTML blocks to stop the user from buying it.
        // Its not a proper implement but it works.
        if (score >= el.cost) {
            //Can afford upgrade
            upgradeSection.innerHTML = `
            <strong>${el.name}</strong> \n Cost: ${el.cost} \n ${el.bonus} bricks per click
            <button onclick="buyUpgrade(${el.id})" class="buybtn">Buy</button>`;
            upgradesDiv.appendChild(upgradeSection);
        } else {
            //Can't afford upgrade
            upgradeSection.innerHTML = `
            <strong>${el.name}</strong> \n Cost: ${el.cost} \n ${el.bonus} bricks per click
            <button onclick="buyUpgrade(${el.id})" class="buybtn" disabled>Buy</button>`;
            upgradesDiv.appendChild(upgradeSection);
        }
    })
    updateDisplay();
    updateMilestones();
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

//milestone function 
function updateMilestones() {
    const title = document.querySelector("h1");
    const winMessage = document.getElementById("win");

    if (score >= 200) {
        document.body.style.backgroundColor = "#aec7a5";
        title.textContent = "Building Completed!";
        winMessage.style.display = "block";
    }
    else if (score >= 100) {
        document.body.style.backgroundColor = "#c97b63"; 
        title.textContent = "Building Taking Shape"
    } else if (score >= 50) {
        document.body.style.backgroundColor = "#e8c27d";
        title.textContent = "Walls Going Up"
    } else if (score >= 25) {
        document.body.style.backgroundColor = "#b7c9a8";
        title.textContent = "Foundation Started"
    }
    
}
