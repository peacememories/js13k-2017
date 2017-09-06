import GA from "./ga.js"

import person_url from "../sprites/person.png"
import fourKeyController from "./plugins/fourKeyController.js"
import moveSprite from "./plugins/move.js"

let gameScene, person

function step() {
  moveSprite(person)
  const deltaX = (person.centerX+gameScene.x) - ga.canvas.width/2
  const deltaY = (person.centerY+gameScene.y) - ga.canvas.height/2
  gameScene.x -= deltaX
  gameScene.y -= deltaY
}

function setup() {
  gameScene = ga.group()
  person = ga.sprite(person_url)
  fourKeyController(ga)(person, 2, 38, 39, 40, 37)
  gameScene.addChild(person)
  ga.state = step
}

const ga = GA.create(320, 240, setup,
  [
    person_url
  ]
)

ga.start()
