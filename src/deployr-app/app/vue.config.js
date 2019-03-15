const path = require('path');

module.exports = {
  lintOnSave: 'error',
  productionSourceMap: true,
  configureWebpack: {
    resolve: {
        symlinks: true,
        alias: {
            '@': path.resolve(__dirname, 'src'),
            vue$: 'vue/dist/vue.esm.js'
        }
        },
    }
}
