const { merge } = require('webpack-merge')
const webpackDevConfig = require('./webpack.dev.config')

module.exports = merge(webpackDevConfig, {
  // 模式
  mode: 'production',
})
