import * as PIXI from 'pixi.js'

import './index.scss'

// 初始化
const app = new PIXI.Application({
  width: window.innerWidth,
  height: window.innerHeight,
  antialias: true,
  // backgroundAlpha: false,
  resolution: window.devicePixelRatio || 1,
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

// 创建一个矩形
const rectangle = new PIXI.Graphics()
rectangle.beginFill(0x66ccff) // 填充颜色
rectangle.drawRect(0, 0, 164, 64)
rectangle.endFill()

rectangle.interactive = true
rectangle.on('click', () => {
  console.log('rectangle')
})

// 将矩形添加到舞台
app.stage.addChild(rectangle)

// 加载图片
// const texture = await PIXI.Assets.load('assets/img/bg0.jpeg')
// const bunny = new PIXI.Sprite(texture)
// app.stage.addChild(bunny)

// 多个图片资源加载 分场景
PIXI.Assets.addBundle('scree-1', {
  bg: 'assets/img/bg0.jpeg',
})
// 加载
const assets = await PIXI.Assets.loadBundle('scree-1', (progress) => {
  console.log('progress', progress)
})

// 显示文字

// 监听 ticker
// app.ticker.add(() => {
//   // each frame we spin the bunny around a bit
//   // bunny.rotation += 0.01
// })
