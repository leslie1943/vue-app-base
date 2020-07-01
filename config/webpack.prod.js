const path = require('path')
const common = require('./webpack.common')
const merge = require('webpack-merge')
const webpack = require('webpack')
const config = require('../env/prod')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  devtool: 'nosources-source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, '../static'), to: 'static' },
        { from: path.resolve(__dirname, '../public'), to: 'public' }
      ]
    }),
    new webpack.DefinePlugin({
      'process.env': config,
      BASE_PUBLIC_URL: config.BASE_PUBLIC_URL
    })
  ],
  optimization: {
    minimizer: [
      new OptimizeCssAssetsWebpackPlugin(),
      new TerserWebpackPlugin()
    ]
  }
})
