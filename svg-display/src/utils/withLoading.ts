import { createWithLoading, isBoolean } from '@daysnap/utils'
import { showLoadingToast, type ToastOptions } from 'vant'

export type WithLoadingOptions = boolean | string | ToastOptions

// 让一个异步函数具有 loading 的效果
export const withLoading = createWithLoading<WithLoadingOptions>((options) => {
  if (isBoolean(options)) {
    options = { duration: 0 }
  }
  return showLoadingToast(options)
}, true)
