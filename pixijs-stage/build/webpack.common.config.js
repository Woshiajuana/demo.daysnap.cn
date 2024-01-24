const { parseDir, resolve } = require('./utils')
const { entry, arrHtmlWebpackPlugin } = parseDir(resolve('src/views'))
const resolveFilename = require('art-template/lib/compile/adapter/resolve-filename.js')

// webpack5
// https://webpack.docschina.org/
module.exports = {
  // 模式
  // development / production / none 默认 production
  mode: 'development',

  // 入口
  entry,

  // 输出
  output: {
    // hash、 chunkhash 、 contenthash
    filename: 'assets/js/[name].[contenthash:10].js',
    path: resolve('dist'),
    // publicPath: './',
  },

  // 别名
  resolve: {
    alias: {
      '@': resolve('src'),
      src: resolve('src'),
    },
  },

  // loader
  module: {
    rules: [
      // html
      {
        test: /\.html/,
        loader: resolve('build/art-template-loader'),
        options: {
          // https://aui.github.io/art-template/zh-cn/docs/options.html
          // https://github.com/aui/art-template/issues/550
          resolveFilename(path, context) {
            ;/^src/.test(path) && (path = path.replace(/^src/, resolve('src')))
            return resolveFilename(path, context)
          },
          // 扩展出来，排除一些不需要的 js 资源引入
          htmlResourceRules: [/\bsrc="([~|^"](.*?))"/],
          filter: () => true,
        },
      },
      // js
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        // include: [/[/\\]node_modules[/\\][@\\]daysnap[/\\]/, resolve('src')],
      },
      // 图片
      {
        test: /\.(png|jpe?g|gif)$/,
        type: 'asset',
        exclude: /node_modules/,
        generator: {
          filename: 'assets/img/[name].[contenthash:10][ext]',
        },
        parser: {
          dataUrlCondition: {
            maxSize: 1 * 1024,
          },
        },
      },
      // 视频、音频文件
      {
        test: /\.(mp4|mp3)$/,
        type: 'asset/resource',
        exclude: /node_modules/,
        generator: {
          filename: 'assets/medias/[name].[contenthash:10][ext]',
        },
      },
      // 字体
      {
        test: /\.(ttf|woff2?)$/,
        type: 'asset/resource',
        exclude: /node_modules/,
        generator: {
          filename: 'assets/fonts/[name].[contenthash:10][ext]',
        },
      },
    ],
  },

  // 插件
  plugins: [...arrHtmlWebpackPlugin],
}
