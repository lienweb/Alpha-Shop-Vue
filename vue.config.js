module.exports = {
  configureWebpack: {
    devtool: 'source-map'
  },
  // css: {
  //   loaderOptions: {
  //     scss: {
  //       data: '@import "@/styles/main.scss";'
  //     }
  //   }
  // }
}
// vue.config.js
const path = require('path')

module.exports = {
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('stylus').oneOf(type)))
  },
}

function addStyleResource(rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/styles/imports.styl'),
      ],
    })
}

loaderOptions: {
  // pass options to sass-loader
  // @/ is an alias to src/
  // so this assumes you have a file named `src/variables.sass`
  // Note: this option is named as "prependData" in sass-loader v8
  sass: {
    additionalData: `@import "~@/variables.sass"`
  },
  // by default the `sass` option will apply to both syntaxes
  // because `scss` syntax is also processed by sass-loader underlyingly
  // but when configuring the `prependData` option
  // `scss` syntax requires an semicolon at the end of a statement, while `sass` syntax requires none
  // in that case, we can target the `scss` syntax separately using the `scss` option
  scss: {
    additionalData: `@import "~@/variables.scss";`
  }
}