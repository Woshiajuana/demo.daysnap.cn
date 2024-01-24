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

/**
 * 快速排序
 */

// 快速排序

// 快速排序

/** 快速排序 */

// 快速排序

/** 快速排序 */

//快速排序

// 快速排序

// 冒泡排序

//快速排序

// 快速排序

//快速排序

//冒泡排序

// 计算两个数想加
function add(x, y) {
  return x + y
}

// 计算两个数相减
function minus(x, y) {
  return x - y
}

// 计算两个数相乘
function multiply(x, y) {
  return x * y
}

// 计算两个数相除
function divide(x, y) {
  return x / y
}
