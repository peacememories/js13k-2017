export default function(ga, name, payload) {
  return new Promise((resolve, reject) => {
    const img = new Image()

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

      resolve(name)
    })

    img.addEventListener("error", (e) => {
      reject(e)
    })

    img.src = payload
  })
}
