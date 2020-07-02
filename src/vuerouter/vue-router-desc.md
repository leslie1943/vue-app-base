### 🚀Vue-router的 类图
#### VueRouter 类名
***
- `options`: ==> 记录构造函数中传入的对象,在 `new VueRouter`的时候传了一个对象( `routes` :路由规则)
- `data`: ==> 有个属性 `current` (记录当前路由地址的),响应式的数据(地址变化加载不同的组件),需要 `Vue.observable`方法
- `routeMap`: ==> 一个对象,记录路由地址和组件的对应关系,解析路由规则到 `routeMap` 中
***
- `Constructor(Options)`:`VueRouter`
- `_install(Vue)`:void => 静态方法,实现 `Vue` 的插件机制
- `init()`:void ==> init 方法调用下面3个方法,不同的代码分割到不同的方法中实现
- `initEvent()`:void => 注册 `popState` 方法,监听浏览器历史的变化
- `initRouteMap()`:void => 初始化 `routeMap` 属性,把构造函数中传入的路由规则转换成键值对的形式存储到 `RouteMap({key:path, value:component})`中,我们在 `router-view` 这个组件中会使用这个 `routeMap`
- `initComponents(Vue)`:void => 用来创建 `router-view` 和 `router-link` 这两个组件的


### Vue 的构建版本
- 运行时版: 不支持 `template`模板, 需要打包的时候提前编译 -`Vue-Cli` 创建时默认值, 需要手写 render函数
- 完整版: 包含运行时和编译器, 体积比运行时版大10K左右, 程序运行时把模板转换成`render`函数
  

-pushState就是改变浏览器地址