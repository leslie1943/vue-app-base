# 杂谈乱谈
- 在使用`webpack`的过程中,面对各种各样的属性, 有时候会很困惑?
- `webpack`与`babel`,`eslint`的关系是什么?
- 首先有一点要明确, `webpack`是为打包项目而出现的.
- 而`babel` 是转换JS语法的编译器(转换器),把ES6,ES7转换成ES5语法,从而在大部分浏览器运行
- `babel`工作三部曲: 分析 => 转化 => 生成


### 💛💛 配置 babel 规则 💛💛
- 方式1: 通过 `package.json` 增加 `babel`属性
```js
// package.json
{
  // 此设置告知此项目将使用 babel, 并且使用 babel-preset-env 进行转换
  "babel":{
    "presets":["env"],
    "plugins":[]
  }
}
```
- 方式2: 通过 `.babelrc` 
```js
// .babelrc文件
{
  "presets":["env"],
}
```
- 方式3: 通过 `babel.config.js`  详情见 `babel-config-use-desc.md`
  
- ❗❗❗❗❗❗❗ 但是仅仅有上面的配置是不起作用的, 虽然在 `package.json`或`.babelrc`里配置了`babel`规则,但是`webpack` 仍然不知道何时使用该规则, 这便需要 `webpack.config.js`文件进行配置.
- `webpack.config.js`是打包时的参数配置. `webpack4.x`配置文件不是必须的, 但实际上大型复杂项目要进行个性化的打包配置，仍然要使用该文件.
```js
// webpack.config.js
{
  module:{
    rules:[
      {test: /\.js$/},
      exclude: /node_modules/,
      loader: 'babel-loader'
    ]
  }
}
```
- 这就告诉 `webpack`打包时一旦遇到.js文件就使用 `babel-loader`进行处理, `babel-loader`调用`babel-core`的api使用`babel-preset-env`的规则进行转码


### 💛💛 配置 eslint 规则 💛💛
- 方式1: `.eslintrc.js`配置
- 方式2: `package.json`中配置`eslintConfig`选项
```js
// webpack.config.js
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
```
- 这就告诉 `webpack`打包时一旦遇到.js或者.vue文件就使用 `eslint-loader`进行处理, `eslint-loader`调用`eslint`的api使用`.eslintrc`的规则进行代码检查


# 总结 babel 和 eslint
- 无论是`eslint`还是`babel`都是通过在`webpack.config.js`中配置了的相关的`loader`才会在打包时去执行配置文件中的打包规则
- 在`webpack.config.js`中配置了的`babel-loader`才会在打包时去执行了`babel-config.js`中的相关配置
- 在`webpack.config.js`中配置了的`eslint-loader`才会在打包时去执行了`.eslintrc.js`和`.eslintignore`中的相关配置

