import { formatMessage } from '@daysnap/utils'
import { closeToast, showToast } from 'vant'
import type { AppConfig, Plugin } from 'vue'

import { __DEV__, excludeMessage } from '@/utils'

// global error handler
const errorHandler: AppConfig['errorHandler'] = (err) => {
  // close vant toast
  closeToast()

  const message = formatMessage(err)
  if (message && !excludeMessage(message)) {
    showToast(message)
  }

  // development env 需要抛出异常 方便查看问题
  if (__DEV__) {
    console.error(err)
  }
}

export default {
  install(app) {
    app.config.errorHandler = errorHandler
  },
} as Plugin
