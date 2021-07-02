let cheese = 0
let cheeseKnife = 0
let cheeseBoard = 0


let clickUpgrades = {
  cheeseknife: {
    price: 120,
    quantity: 0,
    multiplier: 1
  }
}
let autoUpgrades = {
  cheeseboard: {
    price: 750,
    quantity: 0,
    multiplier: 12
  }
}



function getCheese() {

  cheese += 1
  update()
}
/*REVIEW add when player has been created*/
function buyCheeseKnife() {

  if (cheese >= 120) {
    cheese -= 120
    cheeseKnife = + 1
  }

  update()
}










function update() {
  if (cheese <= 0) {
    cheese = 0
  }

  document.getElementById('cheese').innerText = cheese
  document.getElementById('cheeseknife').innerText = cheeseKnife
  document.getElementById('cheeseboard').innerText = cheeseBoard
}

update()