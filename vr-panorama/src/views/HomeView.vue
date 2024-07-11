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
        [
          MarkersPlugin,
          {
            markers: [
              {
                // image marker that opens the panel when clicked
                id: 'image',
                position: { yaw: 0.32, pitch: 0.11 },
                image: new URL('@/assets/images/pin-blue.png', import.meta.url).href,
                size: { width: 32, height: 32 },
                anchor: 'bottom center',
                zoomLvl: 100,
                tooltip: 'A image marker. <b>Click me!</b>',
                // content: document.getElementById('lorem-content').innerHTML,
              },
              {
                // image marker rendered in the 3D scene
                id: 'imageLayer',
                imageLayer: new URL('@/assets/images/tent.png', import.meta.url).href,
                size: { width: 120, height: 94 },
                position: { yaw: -0.45, pitch: -0.1 },
                tooltip: 'Image embedded in the scene',
              },
              {
                // html marker with custom style
                id: 'text',
                position: { yaw: 0, pitch: 0 },
                html: 'HTML <b>marker</b> &hearts;',
                anchor: 'bottom right',
                scale: [0.5, 1.5],
                style: {
                  maxWidth: '100px',
                  color: 'white',
                  fontSize: '20px',
                  fontFamily: 'Helvetica, sans-serif',
                  textAlign: 'center',
                },
                tooltip: {
                  content: 'An HTML marker',
                  position: 'right',
                },
              },
              {
                // polygon marker
                id: 'polygon',
                polygon: [
                  [6.2208, 0.0906],
                  [0.0443, 0.1028],
                  [0.2322, 0.0849],
                  [0.4531, 0.0387],
                  [0.5022, -0.0056],
                  [0.4587, -0.0396],
                  [0.252, -0.0453],
                  [0.0434, -0.0575],
                  [6.1302, -0.0623],
                  [6.0094, -0.0169],
                  [6.0471, 0.032],
                  [6.2208, 0.0906],
                ],
                svgStyle: {
                  fill: 'rgba(200, 0, 0, 0.2)',
                  stroke: 'rgba(200, 0, 50, 0.8)',
                  strokeWidth: '2px',
                },
                tooltip: {
                  content: 'A dynamic polygon marker',
                  position: 'bottom right',
                },
              },
              {
                // polyline marker
                id: 'polyline',
                polylinePixels: [
                  [2478, 1635],
                  [2184, 1747],
                  [1674, 1953],
                  [1166, 1852],
                  [709, 1669],
                  [301, 1519],
                  [94, 1399],
                  [34, 1356],
                ],
                svgStyle: {
                  stroke: 'rgba(140, 190, 10, 0.8)',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeWidth: '10px',
                },
                tooltip: 'A dynamic polyline marker',
              },
              {
                // circle marker
                id: 'circle',
                circle: 20,
                position: { textureX: 2500, textureY: 1200 },
                tooltip: 'A circle marker',
              },
            ],
          },
        ],
      ],
    })
  })
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/define.scss';
</style>
