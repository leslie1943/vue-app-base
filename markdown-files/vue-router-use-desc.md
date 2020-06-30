### Vue router
- step-1: `yarn add vue-router --save`
- step-2: 这一步一定要注意, 首先在 `app.vue`里`template`里删除多余代码,将 `<router-view key="key"></router-view>` 加入
- step-3: 定义好自己的 `routers`文件
- step-4: 在 `main.js`里 引入 `routers`文件
- step-5: 在 `main.js`里 `Vue.use(router)`
- step-6: 在 `main.js`里 将`router`里作为 全局vue对象的一个属性 
```js
const $vue = new Vue({
  render: h => h(App),
  router
})
``` 