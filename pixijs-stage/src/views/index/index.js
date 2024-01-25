import * as PIXI from 'pixi.js'
import atlasData from './data.json'

import './index.scss'

// 初始化
const app = new PIXI.Application({
  width: window.innerWidth, //
  height: window.innerHeight, // 舞台的高度
  antialias: true, // 是否开启抗锯齿
  resolution: window.devicePixelRatio || 1, // 渲染器的分辨率/设备像素比。这个值越高，画面越清晰，但是性能越低。
  resizeTo: window, // 舞台是否应自动调整大小以匹配渲染器视图的大小。
  autoDensity: true, // 渲染器视图的 CSS 尺寸是否应自动调整大小。
})
$('#app').append(app.view)

// 加载图片资源
const spritesheet = new PIXI.Spritesheet(
  PIXI.BaseTexture.from(atlasData.meta.image),
  atlasData,
)
// 加载资源
await spritesheet.parse()
const anim = new PIXI.AnimatedSprite(spritesheet.animations.tv)

// set the animation speed
anim.animationSpeed = 0.1
// play the animation on a loop
anim.play()
// add it to the stage to render
app.stage.addChild(anim)

// // 加载图片资源
// PIXI.Assets.addBundle('assets', {
//   bg: 'assets/img/bg0.jpeg',
// })
// // 加载资源
// const assets = await PIXI.Assets.loadBundle('assets', (progress) => {
//   console.log('progress', progress)
// })
