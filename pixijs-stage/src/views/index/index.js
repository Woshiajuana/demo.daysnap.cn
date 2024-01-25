import * as PIXI from 'pixi.js'
import atlasData from './home.json'

import './index.scss'

// 元素盒子
const $el = $('#app')

// 加载资源
PIXI.Assets.addBundle('assets', {
  bg: 'img/bg0.jpg',
  spritesheet: 'img/home.png',
})
const assets = await PIXI.Assets.loadBundle('assets', (progress) => {
  $el.html(`加载中...${progress * 100}%`)
  if (progress === 1) {
    $el.html('')
  }
})

// 初始化
const { innerWidth: width, innerHeight: height, devicePixelRatio } = window
const app = new PIXI.Application({
  width, //
  height, // 舞台的高度
  antialias: true, // 是否开启抗锯齿
  resolution: 2 || 1, // 渲染器的分辨率/设备像素比。这个值越高，画面越清晰，但是性能越低。
  resizeTo: window, // 舞台是否应自动调整大小以匹配渲染器视图的大小。
  autoDensity: true, // 渲染器视图的 CSS 尺寸是否应自动调整大小。
})
$el.append(app.view)

// 加载背景
const bg = PIXI.Sprite.from(assets.bg)
bg.height = height
bg.width = bg.height * (bg.texture.width / bg.texture.height)

console.log(bg.texture.width, bg.texture.height)
const r = bg.width / bg.texture.width
const j = (x) => x * r
bg.x = 0
bg.y = 0
app.stage.addChild(bg)

// 加载图片精灵
const spritesheet = new PIXI.Spritesheet(
  PIXI.BaseTexture.from(atlasData.meta.image),
  atlasData,
)
// 加载资源
await spritesheet.parse()
const tv = new PIXI.AnimatedSprite(spritesheet.animations.tv)
tv.x = j(100)
tv.scale.set(0.5)
tv.animationSpeed = 0.1
tv.play()
app.stage.addChild(tv)
