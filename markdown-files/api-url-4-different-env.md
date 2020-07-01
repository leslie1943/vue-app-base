### 为不同环境配置 api的路径
***
* 在`env/dev.js` 配置如下
```js
module.exports = {
  // 🚀 环境
  NODE_ENV: JSON.stringify('development'),
  // 🚀 BASE_API_URL: 配置开发环境的接口地址, 后缀是'api'是为了 devServer 的 代理
  BASE_API_URL: JSON.stringify('http://localhost:1943/api'),
  // 🚀 配置 index.html 的模板语法图标
  BASE_URL: JSON.stringify('http://localhost:1943/') 
}
```
* 在`env/prod.js` 配置如下
  
```js
module.exports = {
  // 🚀 环境
  NODE_ENV: JSON.stringify('production'),
  // 🚀BASE_API_URL: 配置开发环境的接口地址
  BASE_API_URL: JSON.stringify('https://api.github.com'),
  // 🚀配置 index.html 的模板语法图标
  BASE_PUBLIC_URL: JSON.stringify('http://localhost:3309/public/') 
}
```
* 分别在 `config/webpack.dev.js`和`config/webpack.prod.js`中`merge`的时候使用`DefinePlugin`插件将变量注册

```js
new webpack.DefinePlugin({
  'process.env': config,
  BASE_PUBLIC_URL: config.BASE_PUBLIC_URL
})
```

* 在`main.js`中将`baseURL`挂载到`Vue`全局属性中

```js
Vue.prototype.baseURL = process.env.BASE_API_URL
```

* 在单独`vue`使用接口的地方 或者 封装 `axios`的时候, 可以使用 `baseURL`来作为接口的前缀

```js
  methods: {
    getData() {
      this.loading = true
      this.$http({
        method: 'get',
        url: `${this.baseURL}/users`
      }).then(res => {
        this.tableData = res.data ? res.data.slice(0, 5) : []
        this.loading = false
      })
    }
  },
```