let cheese = 0

function getCheese() {

  cheese += 1
  update()
}











function update() {
  document.getElementById('cheese').innerText = cheese
}

update()