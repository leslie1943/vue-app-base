const common = require('./webpack.common')
const merge = require('webpack-merge')
const webpack = require('webpack')
const devEnv = require('../env/dev')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': devEnv,
      BASE_URL: devEnv.BASE_URL,
      BASE_PUBLIC_URL: devEnv.BASE_URL
    })
  ]
})
