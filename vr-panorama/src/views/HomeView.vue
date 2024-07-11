<template>
  <div id="viewer" style="width: 100vw; height: 100vh"></div>
</template>

<script setup lang="ts">
  import { AutorotatePlugin } from '@photo-sphere-viewer/autorotate-plugin'
  import { Viewer } from '@photo-sphere-viewer/core'
  import { GalleryPlugin } from '@photo-sphere-viewer/gallery-plugin'
  import { MarkersPlugin } from '@photo-sphere-viewer/markers-plugin'

  let { scenes, current } = {
    current: 0,
    scenes: [
      {
        id: 1,
        name: '客厅',
        panorama: new URL('@/assets/images/1.jpg', import.meta.url).href,
        // panorama: new URL('@/assets/images/scene.jpeg', import.meta.url).href,
        thumbnail: new URL('@/assets/images/scene.jpeg', import.meta.url).href,
        markers: [
          {
            // image marker that opens the panel when clicked
            id: 'image',
            position: { yaw: 0.9458277120328095, pitch: -0.24882520482509585 },
            image: new URL('@/assets/images/go.png', import.meta.url).href,
            size: { width: 32, height: 32 },
            anchor: 'bottom center',
            zoomLvl: 100,
            tooltip: '进入',
            data: { go: true },
            // content: document.getElementById('lorem-content').innerHTML,
          },
          {
            // image marker that opens the panel when clicked
            id: 'image1',
            position: { yaw: 0.006896442388348371, pitch: -0.15192015687366944 },
            image: new URL('@/assets/images/pin-blue.png', import.meta.url).href,
            size: { width: 32, height: 32 },
            anchor: 'bottom center',
            zoomLvl: 100,
            tooltip: '打开门',
            data: { go: true },
            // content: document.getElementById('lorem-content').innerHTML,
          },
          {
            // image marker rendered in the 3D scene
            id: 'imageLayer',
            imageLayer: new URL('@/assets/images/tent.png', import.meta.url).href,
            size: { width: 120, height: 94 },
            position: { yaw: 1.400195137059031, pitch: -1.0746167433547926 },
            tooltip: '这是一个帐篷',
          },
          {
            // html marker with custom style
            id: 'text',
            position: { yaw: 5.938545675370713, pitch: -0.21877344626362438 },
            html: 'HTML <b>marker</b> &hearts;',
            anchor: 'center center',
            scale: [0.5, 1.5],
            style: {
              maxWidth: '100px',
              color: 'white',
              fontSize: '20px',
              fontFamily: 'Helvetica, sans-serif',
              textAlign: 'center',
            },
            tooltip: {
              content: 'HTML标记',
              position: 'top',
            },
          },
        ],
      },
      {
        id: 2,
        name: '主卧',
        panorama: new URL('@/assets/images/screen-3.awebp', import.meta.url).href,
        thumbnail: new URL('@/assets/images/screen-3.awebp', import.meta.url).href,
        markers: [
          {
            // image marker that opens the panel when clicked
            id: 'image',
            position: { yaw: 4.7037299358302205, pitch: -0.3834682567015497 },
            image: new URL('@/assets/images/go.png', import.meta.url).href,
            size: { width: 32, height: 32 },
            anchor: 'bottom center',
            zoomLvl: 100,
            tooltip: '返回客厅',
            data: { go: true },
          },
        ],
      },
    ],
  }

  onMounted(() => {
    const viewer = new Viewer({
      container: 'viewer',
      size: {
        width: '100%',
        height: '100%',
      },
      panorama: scenes[0].panorama,
      loadingImg: new URL('@/assets/images/loader.gif', import.meta.url).href,
      caption: '测试案例',
      defaultZoomLvl: 0,
      // navbar: undefined,
      plugins: [
        [
          GalleryPlugin,
          {
            items: scenes,
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
        [
          MarkersPlugin,
          {
            markers: scenes[current].markers,
          },
        ],
      ],
    })

    const markersPlugin = viewer.getPlugin<MarkersPlugin>(MarkersPlugin)

    viewer.addEventListener('click', ({ data }: any) => {
      if (!data.rightclick) {
        console.log('data => ', data)
        markersPlugin.addMarker({
          id: '#' + Math.random(),
          position: { yaw: data.yaw, pitch: data.pitch },
          image: new URL('@/assets/images/go.png', import.meta.url).href,
          size: { width: 32, height: 32 },
          anchor: 'center center',
          tooltip: '点击进入',
          data: {
            go: true,
          },
        })
      }
    })

    markersPlugin.addEventListener('select-marker', ({ marker, doubleClick, rightClick }) => {
      if (marker.data?.go) {
        viewer
          .animate({
            zoom: 20,
            speed: '-10rpm',
          })
          .then(() => {
            markersPlugin.clearMarkers()
            current++
            const scene = scenes[current % scenes.length]
            viewer.setPanorama(scene.panorama).then(() => {
              viewer.animate({
                zoom: 0,
                speed: '-10rpm',
              })
              markersPlugin.setMarkers(scene.markers as any)
            })
          })
      }
    })
  })
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/define.scss';
</style>
