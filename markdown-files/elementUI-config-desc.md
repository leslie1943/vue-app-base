### 💛 引入 element-ui 💛
- `yarn add element-ui --save` 
- `main.js`: `import ElementUI from 'element-ui'`
- `main.js`: `import 'element-ui/lib/theme-chalk/index.css'`
- `main.js`: `Vue.use(ElementUI)`
- `webpack.common.js`: 添加 `ttf|woff`的`loader`
  ```js
    // 添加 ttf|woff 类型
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
  ```