<template>
  <div class="home"></div>
</template>

<script>
import LongTake from '@/LongTake'

export default {
name: 'home',
methods: {
  init () {
    this.longTake = new LongTake({
      container: this.$el, // DOM容器
      resource: this.getResource(), // 加载的资源
      touchOptions: {
        touch: '.home', // 反馈触摸的dom
        initialValue: 0, // 起始位置
        sensitivity: 0.5, // 不必需,触摸区域的灵敏度，默认值为1，可以为负数
        maxSpeed: 0.5 // 不必需，触摸反馈的最大速度限制
      },
      sprites: this.getSprites(), // 精灵图
      spritesAnimations: this.getSpritesAnimations(), // 精灵动画
      texts: this.getTexts(), // 文本
      textsAnimations: this.getTextsAnimations() // 文本动画
      // bgSprites: this.getBgSprites(), // 背景图片
    })
    // this.longTake.on('loadProgress', (progress) => {
    //   console.log(`加载进度: ${progress}`)
    // })
    // this.longTake.on('loadDone', () => {
    //   console.log('加载完毕')
    // })
    // this.longTake.on('progress', (progress) => {
    //   console.log(`当前进度: ${progress}`)
    // })
  },

  // 加载资源
  getResource () {
    const host = location.host.match(/cdn.shikehuyu.com/ig) ? '.' : ''
    const resource = { sprites: [] }
    // for (let i = 1; i <= 5; i += 1) {
    //   resource.sprites.push({
    //     name: `bg${i}`,
    //     url: `${host}/static/imgs/bg/${i}.jpg`
    //   })
    // }
    for (let i = 0; i < 50; i += 1) {
      resource.sprites.push({
        name: `ani${i}`,
        url: `${host}/static/imgs/ani/${701 + i}.png`
      })
    }
    for (let i = 0; i < 62; i += 1) {
      resource.sprites.push({
        name: `girl${i}`,
        url: `${host}/static/imgs/girl/${160 + i}.png`
      })
    }
    for (let i = 1; i < 8; i += 1) {
      resource.sprites.push({
        name: `item${i}`,
        url: `${host}/static/imgs/items/${i}.png`
      })
    }
    for (let i = 0; i < 25; i += 1) {
      resource.sprites.push({
        name: `plane${i}`,
        url: `${host}/static/imgs/plane/${408 + i}.png`
      })
    }
    return resource
  },

  // 背景
  getBgSprites () {
    const bgSprites = []
    for (let i = 1; i <= 5; i += 1) {
      bgSprites.push(`bg${i}`)
    }
    return bgSprites
  },

  // 精灵
  getSprites () {
    const sprites = {
      ani: {
        key: 'ani0',
        size: { mode: 'widthFit', width: 1 },
        position: 'center',
        anchor: 'center'
      },
      girl: {
        key: 'girl0',
        size: { mode: 'widthFit', width: 1 },
        position: 'center',
        anchor: 'center'
      },
      plane: {
        key: 'plane0',
        size: { mode: 'widthFit', width: 0.5 },
        position: {
          x: 0.5, y: 0.4
        },
        anchor: 'center'
      }
    }
    for (let i = 1; i < 8; i += 1) {
      const x = i % 2 === 0 ? 1.1 : -0.1
      sprites[`item${i}`] = {
        key: `item${i}`,
        size: { mode: 'widthFit', width: 0.8 },
        position: { x, y: 1.4 },
        anchor: 'center'
      }
    }
    return sprites
  },

  // 精灵动画
  getSpritesAnimations () {
    const animations = {
      // 旋涡
      ani: [{
        delay: 0.1,
        duration: 0.6,
        from: { alpha: 0 },
        to: { alpha: 1 }
      }, {
        delay: 0.1,
        duration: 0.6,
        frames: this.getFrames('ani', 50)
      }, {
        delay: 0.7,
        duration: 0.2,
        to: { alpha: 0 }
      }, {
        delay: 0.7,
        duration: 0.2,
        frames: this.getFrames('ani', 50).reverse()
      }],
      // 女孩
      girl: [{
        delay: 0,
        duration: 1,
        frames: this.getFrames('girl', 62)
      }, {
        delay: 0,
        duration: 0.2,
        from: { y: -window.innerHeight },
        to: { y: window.innerHeight * 0.5 }
      }, {
        delay: 0.7,
        duration: 0.3,
        to: { y: window.innerHeight * 1.2 }
      }],
      // 飞机
      plane: [{
        duration: 2,
        frames: this.getFrames('plane', 25),
        infinite: true,
        frameRate: 25
      }, {
        delay: 0.8,
        duration: 0.2,
        from: { width: 0, height: 0, alpha: 0 }
      }]
    }
    // 物品
    for (let i = 1; i < 8; i += 1) {
      const delay = 0.25 + (i / 7 * 0.2)
      const x = i % 2 === 0 ? window.innerWidth * 0.65 : window.innerWidth * 0.35
      animations[`item${i}`] = [{
        delay,
        duration: 0.2,
        to: { x, y: -window.innerHeight * 0.2, width: 0, height: 0 }
      }, {
        duration: 0.5 + Math.random(),
        to: { yoyo: true, repeat: -1, rotation: 0.1 }
      }]
    }
    return animations
  },

  // 动画帧
  getFrames (key, n, start = 0) {
    const frames = []
    for (let i = start; i < n + start; i += 1) {
      frames.push(`${key}${i}`)
    }
    return frames
  },

  // 文本
  getTexts () {
    const texts = {
      guide: {
        text: '向上滑动，找回童年',
        position: { x: 0.5, y: 0.5 },
        anchor: 'center',
        options: {
          fontFamily: 'Arial',
          fontSize: window.innerWidth / 375 * 18,
          fill: 0xfb833f,
          align: 'center'
        }
      },
      ad: {
        text: '《从零到一：实现通用一镜到底H5》',
        link: 'https://segmentfault.com/a/1190000017848401',
        position: { x: 0.5, y: 0.88 },
        anchor: 'center',
        options: {
          fontFamily: 'Arial',
          fontSize: window.innerWidth / 375 * 12,
          fill: 0xfb833f,
          align: 'center'
        }
      },
      ad2: {
        text: 'Powerd by: Pixi.js AlloyTouch TweenMax',
        position: { x: 0.5, y: 0.92 },
        anchor: 'center',
        options: {
          fontFamily: 'Arial',
          fontSize: window.innerWidth / 375 * 12,
          fill: 0xfb833f,
          align: 'center'
        }
      },
      ad3: {
        text: 'Produced by VincentPat',
        position: { x: 0.5, y: 0.58 },
        anchor: 'center',
        options: {
          fontFamily: 'Arial',
          fontSize: window.innerWidth / 375 * 14,
          fill: 0xfb833f,
          align: 'center'
        }
      },
      ad4: {
        text: '素材源自互联网，仅供学习交流，请勿商用！',
        position: { x: 0.5, y: 0.62 },
        anchor: 'center',
        options: {
          fontFamily: 'Arial',
          fontSize: window.innerWidth / 375 * 12,
          fill: 0xfb833f,
          align: 'center'
        }
      }
    }
    return texts
  },

  // 文本动画
  getTextsAnimations () {
    const animations = {
      guide: [{
        delay: 0,
        duration: 1,
        from: { y: window.innerHeight * 0.5 },
        to: { yoyo: true, repeat: -1, ease: 'easeOut', y: window.innerHeight * 0.48 }
      }, {
        delay: 0,
        duration: 0.1,
        to: { alpha: 0 }
      }],
      ad: [{
        delay: 0,
        duration: 0.1,
        to: { alpha: 0 }
      }],
      ad2: [{
        delay: 0,
        duration: 0.1,
        to: { alpha: 0 }
      }],
      ad3: [{
        delay: 0.9,
        duration: 0.1,
        from: { alpha: 0, y: window.innerHeight * 0.53 }
      }],
      ad4: [{
        delay: 0.9,
        duration: 0.1,
        from: { alpha: 0, y: window.innerHeight * 0.57 }
      }]
    }
    return animations
  }
},
mounted () {
  this.init()
}
}
</script>

<style lang="scss">
@import '../style/mixin.scss';
@import '../style/color.scss';

.home {
  @include fullscreen;
  font-size: 0;
  canvas {
    width: 100%;
    height: 100%;
  }
}
</style>
