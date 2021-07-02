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
  console.log("purchased")
  // if(player cheese amount >= cheese){ cheese -= 120}
  cheeseKnife = + 1
  update()
}









function update() {
  document.getElementById('cheese').innerText = cheese
  document.getElementById('cheeseknife').innerText = cheeseKnife
}

update()