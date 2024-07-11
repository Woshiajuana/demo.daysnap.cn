<template>
  <div id="viewer" style="width: 100vw; height: 100vh"></div>
</template>

<script setup lang="ts">
  import { Viewer } from '@photo-sphere-viewer/core'

  onMounted(() => {
    const viewer = new Viewer({
      container: 'viewer',
      panorama: '/img/sphere.jpeg',
      loadingImg: '/img/loader.gif',
      caption: 'Parc national du Mercantour <b>&copy; Damien Sorel</b>',
    })
  })
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/define.scss';
</style>
