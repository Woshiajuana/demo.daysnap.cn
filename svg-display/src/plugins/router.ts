import type { Plugin } from 'vue'

import { router } from '@/router'

// docs vue-router https://router.vuejs.org/zh/
export default {
  install(app) {
    app.use(router)
  },
} as Plugin
