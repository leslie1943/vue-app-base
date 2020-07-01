module.exports = {
  NODE_ENV: JSON.stringify('development'),
  BASE_API_URL: JSON.stringify('http://localhost:1943/api'), // BASE_API_URL: 配置开发环境的接口地址, 后缀是'api'是为了 devServer 的 代理
  BASE_URL: JSON.stringify('http://localhost:1943/') // 配置 index.html 的模板语法图标
}
