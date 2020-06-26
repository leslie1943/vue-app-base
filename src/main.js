import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './style.less'

Vue.config.productionTip = false

Vue.use(ElementUI)

const $vue = new Vue({
  render: h => h(App)
})

// 将Vue实例放到window对象上,方便调用($vue)
window.$vue = $vue
$vue.$mount('#app')
