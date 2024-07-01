<template>
  <main class="home-wrap">
    <van-tabs class="home-content" v-model:active="current">
      <van-tab v-for="(item, index) in maps" :key="index" :title="item.title">
        <div v-for="(it, i) in item.list" :key="i">
          <img v-if="it.base64" :src="it.base64" alt="base64" />
        </div>
      </van-tab>
    </van-tabs>

    <van-checkbox-group class="level-section" v-model="levels" shape="square">
      <van-checkbox name="0" :checked-color="levelColors[0]">普通损伤</van-checkbox>
      <van-checkbox name="1" :checked-color="levelColors[1]">中度损伤</van-checkbox>
      <van-checkbox name="2" :checked-color="levelColors[2]">严重损伤</van-checkbox>
    </van-checkbox-group>
  </main>
</template>

<script setup lang="ts">
  import { useAsyncTask } from '@daysnap/vue-use'

  import { withLoading } from '@/utils'

  import { getImageInfo, getImageInfoBySvgUrl } from './utils'

  const current = ref(0)
  const levels = ref<string[]>(['0', '1', '2'])

  const levelColors = ['rgba(251, 227, 51, .5)', 'rgba(230, 95, 33, .3)', 'rgba(255, 0, 0, .5)']

  const maps = reactive([
    {
      title: '骨架',
      list: [
        {
          width: 720,
          height: 514,
          name: '骨架左前45度',
          bg: new URL('@/assets/images/tree_skeleton_q.jpg', import.meta.url).href,
          dir: 'three/skeleton/left45',
          level0: [1, 2, 3, 4],
          level1: [10, 11, 12],
          level2: [17, 18],
          base64: '',
        },
        {
          width: 720,
          height: 514,
          name: '骨架右后45度',
          bg: new URL('@/assets/images/tree_skeleton_h.jpg', import.meta.url).href,
          dir: 'three/skeleton/right45',
          level0: [21, 22, 23, 24],
          level1: [30, 32, 33],
          level2: [38, 39],
          base64: '',
        },
      ],
    },
    {
      title: '外观',
      list: [
        {
          width: 720,
          height: 883,
          name: '外观',
          bg: new URL('@/assets/images/tree_outshape_rotate.jpg', import.meta.url).href,
          dir: 'three/exterior',
          level0: [51, 52, 56, 59, 63],
          level1: [79, 81, 82],
          level2: [66, 154, 156],
          base64: '',
        },
      ],
    },
  ])

  const svgs = import.meta.glob<{ default: string }>('@/assets/svg/**/*.svg')

  const handleTask = async () => {
    const { list } = maps[current.value]
    for (let index = 0; index < list.length; index++) {
      const { width, height, bg, dir, level0, level1, level2 } = list[index]
      const canvas = document.createElement('canvas')!
      const ctx = canvas.getContext('2d')!
      canvas.width = width
      canvas.height = height
      const dots: { id: number; color: string }[] = []
      if (levels.value.includes('0')) {
        dots.push(...level0.map((id) => ({ id, color: levelColors[0] })))
      }
      if (levels.value.includes('1')) {
        dots.push(...level1.map((id) => ({ id, color: levelColors[1] })))
      }
      if (levels.value.includes('2')) {
        dots.push(...level2.map((id) => ({ id, color: levelColors[2] })))
      }
      const images = await Promise.all([
        getImageInfo(bg),
        ...Object.values(dots).map(async ({ id, color }) => {
          const url = (await svgs[`/src/assets/svg/${dir}/svg-${id}.svg`]()).default
          return getImageInfoBySvgUrl(url, color)
        }),
      ])
      images.forEach((img) => {
        ctx.drawImage(img, 0, 0, width, height)
      })
      list[index].base64 = canvas.toDataURL('image/jpeg')
    }
  }
  const { trigger } = useAsyncTask(withLoading(handleTask, '渲染中...'), {
    immediate: true,
    throwError: true,
  })

  watch([current, levels], () => trigger())
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/define.scss';
  .home-wrap {
    @extend %df;
    @extend %fdc;
    min-height: 100vh;
    img {
      @extend %db;
      @extend %w100;
      height: auto;
    }
  }
  .home-content {
    @extend %df1;
  }
  .level-section {
    @extend %df;
    @extend %aic;
    @extend %jcs;
    padding: j(24) j(16);
  }
</style>
