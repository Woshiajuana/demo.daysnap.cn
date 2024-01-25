import * as PIXI from 'pixi.js'
import { clamp } from '@daysnap/utils'
import AlloyTouch from 'alloytouch'
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
const { innerWidth: width, innerHeight: height } = window
const app = new PIXI.Application({
  width, //
  height, // 舞台的高度
  antialias: true, // 是否开启抗锯齿
  resolution: 2, // 渲染器的分辨率/设备像素比。这个值越高，画面越清晰，但是性能越低。
  resizeTo: window, // 舞台是否应自动调整大小以匹配渲染器视图的大小。
  autoDensity: true, // 渲染器视图的 CSS 尺寸是否应自动调整大小。
})
$el.append(app.view)

// 主容器
const scene = new PIXI.Container()
app.stage.addChild(scene)
const bg = PIXI.Sprite.from(assets.bg) // 加载背景
scene.addChild(bg)
function onResize() {
  const { innerWidth, innerHeight } = window
  const r = innerHeight / bg.texture.height // 缩放比例
  scene.scale.set(r)
  if (innerWidth > scene.width) {
    scene.x = (innerWidth - scene.width) / 2
  } else {
    scene.x = (innerWidth - scene.width) / 2 + 80
  }
}
onResize()
window.addEventListener('resize', onResize)

// 加载图片精灵
const spritesheet = new PIXI.Spritesheet(
  PIXI.BaseTexture.from(atlasData.meta.image),
  atlasData,
)
// 加载资源
await spritesheet.parse()
const tv = new PIXI.AnimatedSprite(spritesheet.animations.tv)
tv.x = 167
tv.y = 37
tv.animationSpeed = 0.1
tv.play()
scene.addChild(tv)

const b = new PIXI.AnimatedSprite(spritesheet.animations.b)
b.x = 1424
b.y = 728
b.animationSpeed = 0.02
b.play()
scene.addChild(b)

const line = new PIXI.AnimatedSprite(spritesheet.animations.line)
line.x = 1807
line.y = 785
line.animationSpeed = 0.02
line.play()
scene.addChild(line)

// 滑动
const min = (scene.width - width) * -1
const max = 0
// eslint-disable-next-line no-new
new AlloyTouch({
  touch: 'body',
  vertical: false, // 不必需，默认是true代表监听竖直方向touch
  min, // 不必需,运动属性的最小值
  max,
  sensitivity: 0.2, // 不必需,触摸区域的灵敏度，默认值为1，可以为负数
  factor: 1, // 不必需,表示触摸位移运动位移与被运动属性映射关系，默认值是1
  moveFactor: 1, // 不必需,表示touchmove位移与被运动属性映射关系，默认值是1
  bindSelf: false,
  maxSpeed: 2, // 不必需，触摸反馈的最大速度限制
  value: scene.x,
  change(value) {
    scene.x = clamp(min, value, max)
  },
})
