let cheese = 0
let click = 1
let cheeseKnife = 0
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
/*REVIEW add when player has been created*/
function buyCheeseKnife() {

  if (cheese >= 20) {
    cheese -= 20
    cheeseKnife = + 1
  }
  modifier('cheeseknife')
  update()
}

function modifier(cheeseknife) {

  click += click * clickUp[cheeseknife].multiplier

}
function onClick() {

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