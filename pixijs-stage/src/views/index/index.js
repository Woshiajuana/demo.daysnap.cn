import * as PIXI from 'pixi.js'

import './index.scss'

// 初始化
const app = new PIXI.Application({
  antialias: true,
  // backgroundAlpha: false,
  resolution: 2,
})
$('#app').append(app.view)

// 监听
const onResize = function onResize() {
  app.renderer.resize(window.innerWidth, window.innerHeight)
}
app.view.style = `width: 100vw; height: 100vh;`
app.renderer.autoResize = true
onResize()
window.addEventListener('resize', onResize)

// 加载图片
const texture = await PIXI.Assets.load('assets/img/bg0.jpeg')
const bunny = new PIXI.Sprite(texture)

// // Setup the position of the bunny
// bunny.x = app.renderer.width / 2
// bunny.y = app.renderer.height / 2

// // Rotate around the center
// bunny.anchor.x = 0
// bunny.anchor.y = 0

// // Add the bunny to the scene we are building
// app.stage.addChild(bunny)

// // Listen for frame updates
// app.ticker.add(() => {
//   // each frame we spin the bunny around a bit
//   // bunny.rotation += 0.01
// })
