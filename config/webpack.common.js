const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CheckSensitivePlugin = require('../private-plugins/check-sensitive-plugin')

// console.info("path.resolve('src') >>>>>> ", path.resolve('src'))

// 导出 webpack 配置对象
module.exports = {
  mode: 'none', // 根据运行环境可被merge重写覆盖
  entry: './src/main.js', // webpack打包的入口文件
  output: {
    // filename: 'bundle.js',
    filename: '[name]-[hash].bundle.js',
    path: path.join(__dirname, '../dist')
  },
  // 配置开发服务器
  devServer: {
    /** 💛 contentBase: 为开发服务器指定查找资源目录
     * 如果引用了 配置内的 图片,文件那么项目启动后可以使用
     * 可以使用 http://locahost:8080/public.txt
     * 可以使用 http://locahost:8080/favicon.ico 查看是否可以访问到相关的资源
     */
    contentBase: ['./public'],
    proxy: {
      '/api': {
        target: 'https://api.github.com',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    },
    // hot: true, // 如果热替换失败就自动刷新
    hotOnly: true // 不会自动刷新
  },
  // 配置loader
  module: {
    rules: [
      // 🔴 eslint loader: 为了对编译钱的ES6语法进行检查,所以要在babel-loader前配置 🔴
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre', // 🔴 预处理
        include: [path.resolve('src')],
        options: {
          // eslint-friendly-formatter指定错误报告的格式规范在控制台输出
          formatter: require('eslint-friendly-formatter')
        }
      },
      // ---------------------- loader js file ----------------------
      {
        test: /\.js$/,
        exclude: /node_modules/, // 排除 /node_modules/
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      // ---------------------- loader css file ----------------------
      // 不加这个配置会因为 vue文件里的css样式编译错误
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' }, // step_3: create style node from js strings
          { loader: 'css-loader' } // step_2 => translates CSS into CommonJS
        ]
      },
      // ---------------------- loader less file ----------------------
      {
        test: /\.less$/,
        use: [
          // 🚀 可参照 https://www.webpackjs.com/loaders/less-loader/
          { loader: 'style-loader' }, // step_3: create style node from js strings
          { loader: 'css-loader' }, // step_2 => translates CSS into CommonJS
          { loader: 'less-loader' } // step_1 => compiles Less to CSS
        ]
      },
      // ---------------------- vue file ----------------------
      // 🚀 可参照 https://vue-loader.vuejs.org/guide/#manual-setup
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      // ---------------------- image file ----------------------
      {
        test: /\.(png|jpg|jpeg|gif|ttf|woff)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10 * 1024,
              fallback: 'file-loader'
            }
          }
        ]
      },
      //
      // ---------------------- 自定义的资源类型  ----------------------
      {
        test: /\.epro$/,
        use: ['html-loader', './private-loaders/epro-loader']
      }
    ]
  },
  // ----------------------------- 配置插件 -----------------------------
  plugins: [
    new CheckSensitivePlugin({
      path: 'src'
    }),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: 'Webpack quick start',
      meta: {
        viewport: 'width=device-width'
      },
      template: './public/index.html'
    })

  ],
  // ----------------------------- 寻找模块对应的文件 -----------------------------
  resolve: {
    extensions: ['.js', '.json', '.vue'],
    alias: {
      '@': path.join(__dirname, '../src'),
      conponents: path.join(__dirname, '../src/components'),
      pages: path.join(__dirname, '../src/pages'),
      router: path.join(__dirname, '../src/router'),
      store: path.join(__dirname, '../src/store'),
      utils: path.join(__dirname, '../src/utils'),
      layout: path.join(__dirname, '../src/layout'),
      static: path.join(__dirname, '../static')
    }
  },
  performance: {
    // hints: false // 关闭错误提示
    maxAssetSize: 3000000, // 整数类型
    maxEntrypointSize: 5000000, // 整数类型
    // 只关注某一类文件的大小
    assetFilter: function (assetFilename) {
      return assetFilename.endsWith('.js')
    }
  }
}
