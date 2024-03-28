/** @type {import('webpack').Configuration} */
module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  resolve: {
    extensions: ['.js', '.ts'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)$/,
        loader: 'babel-loader',
        options: {
          sourceType: 'unambiguous',
          // cacheDirectory: true, // 开启 babel 缓存
          // cacheCompression: false, // 关闭缓存文件压缩
        },
      },
    ]
  }
}