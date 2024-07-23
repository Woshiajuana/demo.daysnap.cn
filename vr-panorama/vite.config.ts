import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import postCssPxToRem from 'postcss-pxtorem'
import AutoImport from 'unplugin-auto-import/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.__BASE__ || '/',

  plugins: [
    vue(),
    vueJsx(),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: ['vue', 'vue-router'],
      dts: 'typings/auto-imports.d.ts',
      resolvers: [VantResolver()],
    }),

    Components({
      dts: 'typings/components.d.ts',
      resolvers: [VantResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    devSourcemap: true,
    // postcss: {
    //   plugins: [
    //     // https://www.npmjs.com/package/postcss-pxtorem
    //     postCssPxToRem({
    //       rootValue: 37.5, // 1rem的大小
    //       propList: ['*'], // 需要转换的属性，这里选择全部都进行转换
    //     }),
    //   ],
    // },
  },
})
