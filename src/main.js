import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'normalize.css/normalize.css'
import './style.less'
// import { HappyScroll } from 'vue-happy-scroll'
// import 'vue-happy-scroll/docs/happy-scroll.css'
import router from './router'
const a = router

Vue.config.productionTip = false

Vue.use(ElementUI)
// Vue.component('happy-scroll', HappyScroll)
// Vue.use(router)

const $vue = new Vue({
  render: h => h(App),
  router
})

// 将Vue实例放到window对象上,方便调用($vue)
window.$vue = $vue
$vue.$mount('#app')
