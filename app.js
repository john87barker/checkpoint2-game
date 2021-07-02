let cheese = 0
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











function update() {
  document.getElementById('cheese').innerText = cheese
}

update()