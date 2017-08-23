import GA from "./ga.js"

import person_url from "../sprites/person.png"


function loadImage(fn, ga, name, data) {
  const img = new Image()

  img.src = data

  img.addEventListener("load", () => {
    ga.assets[name] = {
      source: img,
      frame: {
        x: 0,
        y: 0,
        w: img.width,
        h: img.height
      }
    }
    fn()
  })
}

let gameScene

function step() {
}

function setup() {
  gameScene = ga.group()
  const personSprite = ga.sprite("person.png")
  //gameScene.addChild(personSprite)

  ga.state = step
}

const ga = GA.create(320, 240, setup
)

loadImage(() => {
  ga.start()
}, ga, "person.png", person_url)
