let cheese = 0
let click = 1
let cheeseKnife = 0
let cheeseWheel = 0
let cheeseBoard = 0
let bottleOfWine = 0


let clickUp = {
  cheeseknife: {
    price: 20,
    quantity: 0,
    multiplier: 1
  },
  cheesewheel: {
    price: 50,
    quantity: 0,
    multiplier: 4
  }
}
let autoUp = {
  cheeseboard: {
    price: 75,
    quantity: 1,
    multiplier: 10
    //starts interval
  },
  bottleOfWine: {
    price: 100,
    quantity: 1,
    multiplier: (cheese * 2)
    //doubles
  }
}
/***SECTION functions*/
function getCheese() {
  cheese += click
  update()
}

function buyCheeseKnife() {

  if (cheese >= 20) {

    cheeseKnife += 1
    cheese -= 20
    modifier('cheeseknife')
  }
  update()
}

function buyCheeseWheel() {

  if (cheese >= 50) {
    cheese -= 50
    cheeseWheel += 1
    modifier('cheesewheel')
  }
  update()
}

function buyCheeseBoard() {

  if (cheese >= 100) {
    cheese -= 100
    cheeseBoard += 1

  }

  update()
}

function buyWine() {

  if (cheese >= 150) {
    // cheese -= 150
    cheese *= 2
    bottleOfWine += 1
  }

  update()
}

function modifier(banana) {
  click += click * clickUp[banana].multiplier
}

function collectAutoUpgrades(cheeseboard) {
  let quantity = autoUp['cheeseboard'].quantity
  let multiplier = autoUp['cheeseboard'].multiplier
  // console.log(quantity, multiplier)

  if (cheese >= 100) {
    cheese += (quantity * multiplier)
    // console.log('[upgrades]', upgrades)
    startInterval()
  }

  update()
}

function startInterval() {
  collectionInterval = setInterval(collectAutoUpgrades, 3000)
  // console.log('[interval] It started')
  update()
}


function update() {
  if (cheese <= 0) {
    cheese = 0
  }

  document.getElementById('cheese').innerText = cheese
  document.getElementById('cheeseknife').innerText = cheeseKnife
  document.getElementById('cheesewheel').innerText = cheeseWheel
  document.getElementById('cheeseboard').innerText = cheeseBoard
  document.getElementById('bottleofwine').innerText = bottleOfWine
}


update()