// const path = require('path')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production',
  // configureWebpack: {
  //   plugins: [
  //     new BundleAnalyzerPlugin()
  //   ]
  // },
  css: {
    loaderOptions: {
      // 開幾個分頁就注入幾次？？？？
      // 给 sass-loader 传递选项
      // @/ is an alias to src/
      // so this assumes you have a file named `src/variables.sass`
      // Note: this option is named as "prependData" in sass-loader v8
      // 默认情况下 `sass` 选项会同时对 `sass` 和 `scss` 语法同时生效
      // 因为 `scss` 语法在内部也是由 sass-loader 处理的
      // 但是在配置 `prependData` 选项的时候
      // `scss` 语法会要求语句结尾必须有分号，`sass` 则要求必须没有分号
      // 在这种情况下，我们可以使用 `scss` 选项，对 `scss` 语法进行单独配置
      scss: {
        prependData: '@import "~@/assets/scss/global.scss";'
      }
    }
  }
}
