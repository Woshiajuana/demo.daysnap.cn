<template>
  <div id="viewer" style="width: 100vw; height: 100vh"></div>
</template>

<script setup lang="ts">
  import { AutorotatePlugin } from '@photo-sphere-viewer/autorotate-plugin'
  import { Viewer } from '@photo-sphere-viewer/core'
  import { GalleryPlugin } from '@photo-sphere-viewer/gallery-plugin'
  import { MarkersPlugin } from '@photo-sphere-viewer/markers-plugin'

  const images = [
    new URL('@/assets/images/scene.jpeg', import.meta.url).href,
    new URL('@/assets/images/screen-3.awebp', import.meta.url).href,
    new URL('@/assets/images/screen-2.awebp', import.meta.url).href,
    new URL('@/assets/images/screen-1.awebp', import.meta.url).href,
  ]

  onMounted(() => {
    const viewer = new Viewer({
      container: 'viewer',
      size: {
        width: '100%',
        height: '100%',
      },
      panorama: images[0],
      loadingImg: new URL('@/assets/images/loader.gif', import.meta.url).href,
      caption: '测试案例',
      defaultZoomLvl: 0,
      // navbar: undefined,
      plugins: [
        [
          GalleryPlugin,
          {
            // visibleOnLoad: true,
            items: [
              {
                id: 'pano-1',
                name: 'Panorama 1',
                panorama: images[0],
                thumbnail: images[0],
              },
              {
                id: 'pano-2',
                name: 'Panorama 2',
                panorama: images[1],
                thumbnail: images[1],
              },
            ],
          },
        ],
        [
          AutorotatePlugin,
          {
            autostartDelay: 1000,
            autorotatePitch: '5deg',
            autorotateSpeed: '0.5rpm',
          },
        ],
        // [
        //   MarkersPlugin,
        //   {
        //     markers: [
        //       {
        //         id: 'circle',
        //         tooltip: 'A circle of radius 30',
        //         circle: 30,
        //         svgStyle: {
        //           fill: 'rgba(255,255,0,0.3)',
        //           stroke: 'yellow',
        //           strokeWidth: '2px',
        //         },
        //         longitude: -1.5,
        //         latitude: -0.28,
        //         anchor: 'center right',
        //       },
        //     ],
        //   },
        // ],
      ],
    })
  })
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/define.scss';
</style>
