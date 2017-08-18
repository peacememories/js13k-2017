
const canvas = document.getElementById("canvas")

const ctx = canvas.getContext("2d")

const image = new Image()
image.src = require("../sprites/person.png")

const map = new Image()
map.src = require("../sprites/map.png")

const LEFT = {}
const RIGHT = {}
const UP = {}
const DOWN = {}
const STANDING = {}

const speed = 50

let posX = 160, posY = 120
let direction = STANDING
let lastTime = 0

document.addEventListener("keydown", (event) => {
  if(event.keyCode == 37) //LEFT
    direction = LEFT
  if(event.keyCode == 38) //UP
    direction = UP
  if(event.keyCode == 39) //RIGHT
    direction = RIGHT
  if(event.keyCode == 40) //DOWN
    direction = DOWN
})

document.addEventListener("keyup", (event) => {
  if(event.keyCode >= 37 && event.keyCode <= 40)
    direction = STANDING
})

function render() {
  ctx.fillStyle = "black"
  ctx.fillRect(0, 0, 320, 240)
  ctx.drawImage(image, Math.round(posX)-16, Math.round(posY)-16)
}

function step(timestamp) {
  const delta = (lastTime == 0 ? 0 : timestamp - lastTime) / 1000
  lastTime = timestamp

  switch(direction) {
    case LEFT:
      posX -= delta*speed
      break
    case RIGHT:
      posX += delta*speed
      break
    case UP:
      posY -= delta*speed
      break
    case DOWN:
      posY += delta*speed
      break
  }

  render()
  window.requestAnimationFrame(step)
}

window.requestAnimationFrame(step)
