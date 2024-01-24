const { requireContext } = require('@daysnap/require-context')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const fs = require('fs')

const resolve = (...args) => path.join(__dirname, '..', ...args)

const getTemplateFile = (dirname) => {
  return ['html.ts', 'html.js', 'index.html']
    .map((filename) => path.join(dirname, filename))
    .find((filepath) => {
      let stat
      try {
        stat = fs.statSync(filepath)
      } catch {
        /* empty */
      }
      return !!stat
    })
}

const parseDir = (dir) => {
  return requireContext(dir, /index\.[jt]s$/)
    .keys()
    .filter((item) => !item.includes('components'))
    .reduce(
      (res, filepath) => {
        const { entry, arrHtmlWebpackPlugin } = res
        const dirname = path.dirname(filepath)
        const name = dirname.slice(dir.length + 1).replaceAll(path.sep, '-')

        entry[name] = filepath

        arrHtmlWebpackPlugin.push(
          new HtmlWebpackPlugin({
            filename: `${name}.html`,
            template: getTemplateFile(dirname),
            minify: {
              removeAttributeQuotes: false, // 移除属性的引号
              removeComments: false, // 移除注释
              collapseWhitespace: false, // 折叠空白区域
            },
            chunks: [name],
            inject: 'body',
          }),
        )

        return res
      },
      { entry: {}, arrHtmlWebpackPlugin: [] },
    )
}

module.exports = {
  parseDir,
  resolve,
}
