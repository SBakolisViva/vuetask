const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');module.exports = {
  transpileDependencies: ['vuetify'],
  chainWebpack: (config) => {
    config.plugin('VuetifyLoaderPlugin').tap((args) => [{}]);
  },
};
