let cheese = 0
let click = 1
let cheeseKnife = 0
let cheeseWheel = 0
let cheeseBoard = 0
let bottleOfWine = 0

/**Dictionaries */
let clickUp = {
  cheeseknife: {
    price: 120,
    quantity: 0,
    multiplier: 1
  },
  cheesewheel: {
    price: 500,
    quantity: 0,
    multiplier: 3
  },
  bottleOfWine: {
    price: 1000,
    quantity: 1,
    multiplier: (cheese * 2)
    //doubles
  }
}
let autoUp = {
  cheeseboard: {
    price: 5000,
    quantity: 1,
    multiplier: 5
    //starts interval
  }
}
/***SECTION functions*/
function getCheese() {
  cheese += click
  update()
}

function buyCheeseKnife() {

  if (cheese >= 120) {

    cheeseKnife += 1
    cheese -= 120
    modifier('cheeseknife')
  }
  update()
}

function buyCheeseWheel() {

  if (cheese >= 500) {
    cheese -= 500
    cheeseWheel += 1
    modifier('cheesewheel')
  }
  update()
}

function buyWine() {

  if (cheese >= 2000) {
    cheese *= 2
    cheese -= 1000
    bottleOfWine += 1
  }

  update()
}

function buyCheeseBoard() {

  if (cheese >= 1000) {
    cheese -= 1000
    cheeseBoard += 1

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

  if (cheese >= 1000) {
    cheese += (quantity * multiplier)
    // console.log('[upgrades]', upgrades)
    startInterval()
  }

  update()
}

function startInterval() {
  collectionInterval = setInterval(collectAutoUpgrades, 2500)
  // console.log('[interval] It started')
  update()
}

function disableBtn() {
  if (cheese < 120) {
    document.getElementById('knife').disabled = true;
  } else
    document.getElementById('knife').disabled = false;
  if (cheese < 500) {
    document.getElementById('wheel').disabled = true;
  } else
    document.getElementById('wheel').disabled = false;
  if (cheese < 2000) {
    document.getElementById('wine').disabled = true;
  } else
    document.getElementById('wine').disabled = false;
  if (cheese < 5000) {
    document.getElementById('board').disabled = true;
  } else
    document.getElementById('board').disabled = false;
}

function update() {
  if (cheese <= 0) {
    cheese = 0
  }
  disableBtn()

  document.getElementById('cheese').innerText = cheese
  document.getElementById('cheeseknife').innerText = cheeseKnife
  document.getElementById('cheesewheel').innerText = cheeseWheel
  document.getElementById('cheeseboard').innerText = cheeseBoard
  document.getElementById('bottleofwine').innerText = bottleOfWine
}


update()