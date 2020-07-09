let _Vue = null
export default class VueRouter {
  // ----------------------------------- ❗ install section -----------------------------------
  static install(Vue) {
    // 1.判断当前插件是否已经安装
    if (VueRouter.install.installed) {
      return
    }
    // 插件被安装了
    VueRouter.install.installed = true
    // 2.把Vue的构造函数记录到全局变量
    _Vue = Vue

    // 3.把创建Vue实例时候传入的router对象注入到Vue实例上(构造函数的原型上新增一个成员,这样所有的实例都可以访问到 $router)
    // _Vue.prototype.$router = this.$options.router // 谁调用 this 就是谁, VueRouter.install()调用, 所以不是 Vue 实例,而是VueRouter这个类
    // 混入
    _Vue.mixin({
      beforeCreate() {
        // 这个混入会导致所有的组件都会有,会被执行很多次, 我们只需要执行一次
        // 如果是组件的话就不执行了,如果是Vue实例才执行
        // 判断条件: $options.router是否存在, 只有在 Vue.$options才有这个属性,而组件中没有这个属性
        if (this.$options.router) {
          _Vue.prototype.$router = this.$options.router // 在这里就是 Vue 实例
          // 🚀 插件注册成功后执行
          this.$options.router.init()
        }
      }
    })
  }

  // ----------------------------------- ❗ constructor section  -----------------------------------
  constructor(options) {
    this.options = options
    this.routeMap = {} // 键值对对象 路由: 组件
    this.data = _Vue.observable({ // 响应式数据
      current: '/'
    })
  }

  // ----------------------------------- ❗ initRouteMap section -----------------------------------
  /**
   * 作用: 把构造函数传进来的选项中 routes 转换成键值对的形式存储到 routeMap这个对象中 键值对对象 路由: 组件
   */
  initRouteMap() {
    // 遍历 路由规则 转换成键值对的形式存储到 routeMap这个对象中
    this.options.routes.forEach(route => {
      this.routeMap[route.path] = route.component
    })
  }

  // ----------------------------------- ❗ initComponents section -----------------------------------
  /**
   * 创建 router-link:
   * 创建 router-view:
   * 参数: Vue的构造函数,可以不传递,我们有全局变量记录,为了减少外部依赖最好传递
   */
  initComponents(Vue) {
    Vue.component('router-link', {
      props: {
        to: String
      },
      // template: '<a :href="to"><slot></slot></a>'
      /**
       * h 这个函数的作用创建 虚拟DOM
       */
      render(h) {
        // 参数1: 选择器, 参数2: 属性, 参数3: 子元素
        return h('a', {
          attrs: {
            href: '#' + this.to // 不加 # 以 history模式
          },
          on: {
            click: this.clickHanlder // 注册事件,不加括号
          }
        }, [this.$slots.default])
      },
      methods: {
        clickHanlder(e) {
          if (this.$router.data.current !== this.to) {
            // data, title, url
            history.pushState({}, '', '#' + this.to)
            this.$router.data.current = this.to
            e.preventDefault()
          }
        }
      }
    })
    // 暂存 Vue对象
    const self = this
    Vue.component('router-view', {
      render(h) {
        // self.data.current // 当前路由地址
        console.info('self.data.current')
        console.info(self.data.current)
        const component = self.routeMap[self.data.current]
        return h(component)
      }
    })
  }

  // ----------------------------------- ❗ init section -----------------------------------
  // 包装 initComponents 和 initRouteMap
  init() {
    this.initRouteMap()
    this.initComponents(_Vue)
    this.initEvent()
  }

  // ----------------------------------- ❗ initEvent -----------------------------------
  // 箭头函数不会改变this的指向,initEvent的this就是VueRouter
  initEvent() {
    window.addEventListener('hashchange', () => {
      this.data.current = window.location.pathname
    })
  }
}
