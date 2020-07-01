const common = require('./webpack.common')
const merge = require('webpack-merge')
const webpack = require('webpack')
const config = require('../env/dev')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config,
      BASE_PUBLIC_URL: config.BASE_URL
    })
  ]
})
