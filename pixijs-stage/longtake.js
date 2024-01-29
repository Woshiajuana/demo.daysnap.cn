import * as PIXI from 'pixi'
import { TweenMax, TimelineMax } from 'gsap/TweenMax'
import AlloyTouch from 'alloytouch'

class LongTake {
  // ────────────────────────────────────────────────────────────────────────────────
  // 初始化
  // ────────────────────────────────────────────────────────────────────────────────
  constructor(options) {
    // 库
    this.lib = { PIXI, TweenMax, TimelineMax, AlloyTouch }
    // 事件监听
    this.callbacks = {
      loadProgress: [],
    }
    // 参数
    this.options = options
    this.container = options.container || document.body // 场景容器
    this.width = options.width || window.innerWidth // 场景宽
    this.height = options.height || window.innerHeight // 场景高
    this.resource = options.resource || { sprites: [] } // 要加载的资源
    this.spritesAnimations = this.options.spritesAnimations || {} // 精灵动画集合
    this.textsAnimations = this.options.textsAnimations || {} // 文本动画集合
    this.autoLoad =
      typeof options.autoLoad === 'undefined' ? true : options.autoLoad // 自动加载
    // 精灵图集合
    this.sprites = {}
    // 文本集合
    this.texts = {}
    // 动画定时器
    this.aniIntervals = []
    // 创建场景
    this.app = new PIXI.Application({
      resolution: 2,
      transparent: true,
      width: this.width,
      height: this.height,
    })
    // 加入场景
    this.container.appendChild(this.app.view)
    // 开始加载
    if (this.autoLoad) this.load()
  }

  destroy() {
    this.aniIntervals.forEach((interval) => {
      clearInterval(interval)
    })
    this.app.destroy(true)
  }

  // ────────────────────────────────────────────────────────────────────────────────
  // 加载
  // ────────────────────────────────────────────────────────────────────────────────
  load() {
    PIXI.loader
      .add(this.resource.sprites)
      .on('progress', this.loadProgress.bind(this))
      .load(this.loadDone.bind(this))
  }

  loadProgress(loader) {
    this.trigger('loadProgress', loader.progress)
  }

  loadDone() {
    this.initBg()
    this.initTexts()
    this.initSprites()
    this.initTimeline()
    this.initTouch()
    this.trigger('loadDone')
  }

  // ────────────────────────────────────────────────────────────────────────────────
  // 事件
  // ────────────────────────────────────────────────────────────────────────────────
  on(name, callback) {
    this.callbacks[name] = this.callbacks[name] || []
    this.callbacks[name].push(callback)
  }

  off(name, callback) {
    const callbacks = this.callbacks[name]
    if (callbacks && callbacks instanceof Array) {
      const index = callbacks.indexOf(callback)
      if (index !== -1) callbacks.splice(index, 1)
    }
  }

  trigger(name, params) {
    const callbacks = this.callbacks[name]
    if (callbacks && callbacks instanceof Array) {
      callbacks.forEach((cb) => {
        cb(params)
      })
    }
  }

  // ────────────────────────────────────────────────────────────────────────────────
  // 背景相关
  // ────────────────────────────────────────────────────────────────────────────────
  // initBg () {
  //   // 创建背景
  //   this.bg = new PIXI.Container()
  //   // 拼接背景
  //   let bgHeight = 0
  //   this.options.bgSprites.forEach((key) => {
  //     const bg = new PIXI.Sprite(PIXI.loader.resources[key].texture)
  //     const scale = this.app.screen.width / bg.width
  //     bg.scale.x = scale
  //     bg.scale.y = scale
  //     bg.x = 0
  //     bg.y = bgHeight
  //     bgHeight += bg.height
  //     this.bg.addChild(bg)
  //   })
  //   // 加入场景
  //   this.app.stage.addChild(this.bg)
  //   // 设置滚动高度
  //   this.scrollHeight = this.bg.height - this.height
  // }

  initBg() {
    // 创建背景
    this.bg = new PIXI.Graphics()
    this.bg.beginFill(0xfdfbe2)
    this.bg.drawRect(0, 0, this.app.screen.width, this.app.screen.height * 3)
    this.bg.endFill()
    this.bg.x = 0
    this.bg.y = 0
    this.app.stage.addChild(this.bg)
    // 设置滚动高度
    this.scrollHeight = this.bg.height - this.height
  }

  // ────────────────────────────────────────────────────────────────────────────────
  // 文字相关
  // ────────────────────────────────────────────────────────────────────────────────
  initTexts() {
    if (typeof this.options.texts === 'object') {
      Object.keys(this.options.texts).forEach((key) => {
        // 创建
        const options = this.options.texts[key]
        const text = new PIXI.Text(options.text, options.options)
        // 设置属性
        this.setAnchor(text, options.anchor)
        this.setPosition(text, options.position)
        // 设置点击事件
        if (options.link) {
          text.interactive = true
          text.on('tap', (e) => {
            location.href = options.link
          })
        }
        // 加入场景
        this.app.stage.addChild(text)
        this.texts[key] = text
      })
    }
  }

  // ────────────────────────────────────────────────────────────────────────────────
  // 精灵相关
  // ────────────────────────────────────────────────────────────────────────────────
  initSprites() {
    if (typeof this.options.sprites === 'object') {
      Object.keys(this.options.sprites).forEach((key) => {
        // 创建
        const options = this.options.sprites[key]
        const sprite = new PIXI.Sprite(
          PIXI.loader.resources[options.key].texture,
        )
        // 设置属性
        this.setSize(sprite, options.size)
        this.setAnchor(sprite, options.anchor)
        this.setPosition(sprite, options.position)
        // 加入场景
        this.app.stage.addChild(sprite)
        this.sprites[key] = sprite
      })
    }
  }

  // ────────────────────────────────────────────────────────────────────────────────
  // 通用属性设置
  // ────────────────────────────────────────────────────────────────────────────────
  // 设置尺寸
  setSize(obj, size) {
    if (size.mode === 'widthFit') {
      // 按宽度适应
      const scale = (this.app.screen.width * size.width) / obj.width
      obj.scale.x = scale
      obj.scale.y = scale
    } else if (size.mode === 'heightFit') {
      // 按高度适应
      const scale = (this.app.screen.height * size.height) / obj.height
      obj.scale.x = scale
      obj.scale.y = scale
    } else {
      // 自定义
      obj.width = size.width
      obj.height = size.height
    }
  }

  // 设置锚点
  setAnchor(obj, anchor) {
    if (typeof anchor === 'string') {
      const anchorMap = this.positionMap(anchor)
      obj.anchor.x = anchorMap.x
      obj.anchor.y = anchorMap.y
    } else {
      obj.anchor.x = anchor.x
      obj.anchor.y = anchor.y
    }
  }

  // 设置位置
  setPosition(obj, position) {
    if (typeof position === 'string') {
      position = this.positionMap(position)
    }
    obj.position.x = position.x * this.app.screen.width
    obj.position.y = position.y * this.app.screen.height
  }

  // 位置转换
  positionMap(type) {
    const map = {
      top: { x: 0.5, y: 0 },
      right: { x: 1, y: 0.5 },
      bottom: { x: 0.5, y: 1 },
      left: { x: 0, y: 0.5 },
      topLeft: { x: 0, y: 0 },
      topRight: { x: 1, y: 0 },
      bottomLeft: { x: 0, y: 1 },
      bottomRight: { x: 1, y: 1 },
      center: { x: 0.5, y: 0.5 },
    }
    return map[type] || { x: 0, y: 0 }
  }

  // ────────────────────────────────────────────────────────────────────────────────
  // 进度相关
  // ────────────────────────────────────────────────────────────────────────────────
  initTimeline() {
    this.timeline = new TimelineMax({
      paused: true,
    })

    // 设置精灵动画
    Object.keys(this.spritesAnimations).forEach((key) => {
      this.setAnimation(this.sprites[key], this.spritesAnimations[key])
    })

    // 设置文本动画
    Object.keys(this.textsAnimations).forEach((key) => {
      this.setAnimation(this.texts[key], this.textsAnimations[key])
    })

    // 背景动画
    const bgAction = TweenMax.fromTo(
      this.bg,
      1,
      { y: 0 },
      { y: -this.scrollHeight },
    )
    const bgTimeline = new TimelineMax()
    bgTimeline.add(bgAction, 0)
    this.timeline.add(bgTimeline, 0)
  }

  // 动画对象
  setAnimation(obj, animations) {
    if (obj && animations && animations instanceof Array) {
      animations.forEach(
        ({
          from,
          to,
          frames,
          infinite,
          frameRate,
          delay = 0,
          duration = 1,
        }) => {
          if (frames) {
            // 帧动画
            if (infinite) {
              // 无限
              obj.frames = frames
              obj.currentFrame = 0
              this.aniIntervals.push(
                setInterval(() => {
                  obj.currentFrame += 1
                  if (obj.currentFrame >= obj.frames.length)
                    obj.currentFrame = 0
                  const frame = obj.frames[obj.currentFrame]
                  obj.texture = PIXI.loader.resources[frame].texture
                }, (duration * 1000) / frameRate),
              )
            } else {
              this.on('progress', (progress) => {
                const frameProgress = (progress - delay) / duration
                let index = Math.floor(frameProgress * frames.length)
                if (index < frames.length && index >= 0) {
                  const frame = frames[index]
                  obj.texture = PIXI.loader.resources[frame].texture
                }
              })
            }
          } else if (from || to) {
            // 过渡动画
            let action
            if (from && to) {
              action = TweenMax.fromTo(obj, duration, from, to)
            } else if (to) {
              action = TweenMax.to(obj, duration, to)
            } else if (from) {
              action = TweenMax.from(obj, duration, from)
            }
            const timeline = new TimelineMax({ delay })
            timeline.add(action, 0)
            timeline.play()
            if (!(to && to.repeat === -1)) {
              this.timeline.add(timeline, 0)
            }
          }
        },
      )
    }
  }

  // ────────────────────────────────────────────────────────────────────────────────
  // 滑动相关
  // ────────────────────────────────────────────────────────────────────────────────
  initTouch() {
    const touchOptions = Object.assign(
      {
        touch: 'body',
      },
      this.options.touchOptions,
      {
        min: -this.bg.height + this.height,
        max: 0,
        value: 0,
        change: this.touchmove.bind(this),
      },
    )
    this.alloyTouch = new AlloyTouch(touchOptions)
  }

  touchmove(value) {
    // 总播放进度
    this.progress = -value / this.scrollHeight
    this.progress = this.progress < 0 ? 0 : this.progress
    this.progress = this.progress > 1 ? 1 : this.progress
    // 控制进度条
    this.timeline.seek(this.progress)
    // 触发事件
    this.trigger('progress', this.progress)
  }
}

export default LongTake
