const { merge } = require('webpack-merge')
const webpackCommonConfig = require('./webpack.common.config')
const { resolve } = require('./utils')

module.exports = merge(webpackCommonConfig, {
  // 模式
  mode: 'development',

  // loader
  module: {
    rules: [
      // css
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      // sass 样式
      {
        test: /\.s[ca]ss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },

  // devServer
  devServer: {
    // 运行目录
    static: {
      // publicPath: '/',
      directory: resolve('public'),
    },
    host: '0.0.0.0',
    // 启动 gzip 压缩
    compress: true,
    // 服务端口
    port: 9527,
    // 自动打开浏览器
    open: false,
    // hot
    hot: false,

    // 代理
    // proxy: {
    //   //定义一个标记，如以后api开头的请求都走代理的设置
    //   '/api': {
    //     // 要请求的真实服务端基地址 相当于被/api替代了
    //     target: 'https://...',
    //     //把api重写为空，因为别人没有 /api
    //     pathRewrite: { '^/api': '' },
    //     //发送请求头中host会设置成target
    //     changeOrigin: true,
    //   },
    // },
  },
})
