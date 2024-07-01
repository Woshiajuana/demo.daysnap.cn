// 因为 vite dev 下会重复引入 样式，所以 dev 环境下，vant 样式全局导入
// import 'vant/lib/index.css'

import { setToastDefaultOptions } from 'vant'
// if (__DEV__) {
// 引入组件样式
// import('vant/lib/index.css')
// } else {
// prod 下使用 unplugin-vue-components 按需引入
// docs vant https://vant-ui.github.io/vant/#/zh-CN/home
// Toast & Dialog
// https://vant-ui.github.io/vant/#/zh-CN/quickstart#4.-yin-ru-han-shu-zu-jian-de-yang-shi
// import('vant/es/toast/style')
// import('vant/es/dialog/style')
// }

// 全局设置禁止背景点击
setToastDefaultOptions('loading', { forbidClick: true })
