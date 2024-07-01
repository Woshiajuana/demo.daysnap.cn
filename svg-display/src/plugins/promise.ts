import { formatMessage, isFunction } from '@daysnap/utils'
import { showToast } from 'vant'

import { excludeMessage } from '@/utils'

type ToastCallback = ((err: unknown, message: string) => boolean | void) | boolean

declare global {
  interface Promise<T> {
    toast(cb?: ToastCallback): Promise<T>
    null(): Promise<T>
    fix(): Promise<T>
  }
}

// toast
Promise.prototype.toast = async function (cb) {
  try {
    return await this
  } catch (err) {
    const message = formatMessage(err)

    if (isFunction(cb) && !cb(err, message)) {
      return
    }

    if (cb !== false && !excludeMessage(message)) {
      showToast(message)
    }
  }
}

// null only log err
Promise.prototype.null = async function () {
  try {
    return await this
  } catch (err) {
    return console.log(err)
  }
}
