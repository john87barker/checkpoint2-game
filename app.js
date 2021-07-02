let cheese = 0

function getCheese() {
  for (let i = 0; i <= 999999999999999999999999999999999999999999999; i++) {
    cheese += 1
    console.log("Cheese collected")
    return 'cheese +1'
  }
  update()
}

function update() {
  document.getElementById('cheese').innerText = 'cheese'
}
