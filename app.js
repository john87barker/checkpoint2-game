let cheese = 0
let click = 1
let cheeseKnife = 0
let cheeseWheel = 0
let cheeseBoard = 0


let clickUp = {
  cheeseknife: {
    price: 20,
    quantity: 0,
    multiplier: 1
  },
  cheesewheel: {
    price: 50,
    quantity: 0,
    multiplier: 5
  }
}
let autoUp = {
  cheeseboard: {
    price: 750,
    quantity: 0,
    multiplier: 12
  }
}



function getCheese() {

  cheese += click
  update()
}

function buyCheeseKnife() {

  if (cheese >= 20) {
    cheese -= 20
    cheeseKnife = + 1
  }
  modifier('cheeseknife')
  update()
}

function buyCheeseWheel() {

  if (cheese >= 50) {
    cheese -= 50
    cheeseKnife = + 1
  }
  modifier()
  update()
}

function modifier(banana) {

  click += click * clickUp[banana].multiplier

}

function collectAutoUpgrades() {

}


function update() {
  if (cheese <= 0) {
    cheese = 0
  }

  document.getElementById('cheese').innerText = cheese
  document.getElementById('cheeseknife').innerText = cheeseKnife
  document.getElementById('cheeseWheel').innerText = cheeseWheel
  document.getElementById('cheeseboard').innerText = cheeseBoard
}


update()