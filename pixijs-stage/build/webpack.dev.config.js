const { merge } = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { resolve } = require('path')
const webpackCommonConfig = require('./webpack.common.config')

module.exports = merge(webpackCommonConfig, {
  // 模式
  mode: 'development',

  // loader
  module: {
    rules: [
      // css 样式
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              // https://webpack.docschina.org/loaders/css-loader#importloaders
              // https://stackoverflow.com/questions/52544620/what-is-exactly-the-importloaders-option-of-css-loader-in-webpack-4
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
      },
      // sass 样式
      {
        test: /\.s[ca]ss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },

  // 插件
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'assets/css/[name].[contenthash:10].css',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          // 定义要拷贝的源目录
          from: resolve(__dirname, '../public'),
          // 定义要拷贝到的目标目录
          to: resolve(__dirname, '../dist'),
        },
      ],
    }),
  ],

  // 拆分 分包
  optimization: {
    // splitChunks: {
    //   chunks: 'all',
    //   minSize: 1 * 1, // 分割 chunk 最小为 kb
    //   maxSize: 0, // 最大没有限制
    //   minChunks: 1, // 要提取的 chunk 最少被引用一次
    //   maxAsyncRequests: 5, // 按需加载时并行加载的文件最大数
    //   maxInitialRequests: 3, // 入口 js 文件最大并行数量
    //   automaticNameDelimiter: '~', // 名称连接符
    //   name: true,
    //   cacheGroups: {
    //     // 分割 chunk 的组
    //     // node_modules 文件会被打包到 vendors 组的 chunk 中 `vendors~xxx.js`
    //     // 需要满足上面的规则
    //     vendors: {
    //       name: 'vendors',
    //       test: /[\\/]node_modules[\\/]/,
    //       priority: -10, // 优先级
    //     },
    //     commons: {
    //       // 要提取的 chunk 最少被引用 2次
    //       name: 'commons',
    //       minChunks: 2,
    //       priority: -10, // 优先级
    //       // 如果当前要打包的模块，和之前已经被提取的模块是同一个，就会被复用
    //       reuseExistingChunk: true,
    //     },
    //   },
    // },
  },
})
