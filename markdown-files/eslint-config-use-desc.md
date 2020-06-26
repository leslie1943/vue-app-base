# eslint 使用步骤
1. 要使`webpack` 支持 `eslint`, 先安装`yarn add eslint-loader`
```js
  {
    test: /\.js$/,
    loader: 'eslint-loader',
    enforce: "pre", // 预处理
    include: [path.resolve(__dirname, 'src')], // 指定检查的目录
    options: { // 这里的options选项会被传递到 eslint的 CLI Engine (命令行引擎)
        // formatter: 指定错误报告的格式规范
        // 默认是`stylish`,可以通过插件使用 eslint-friendly-formatter
        formatter: require('eslint-friendly-formatter') 
    }
  }
```
2. 要是 `webpack` 具备 `eslint`的能力,安装`yarn add eslint --dev`
3. 使用 `eslint --init` 生成 `eslint`配置文件
```js
module.exports = {
    root: true, 
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true,
    },
    rules: {
        "indent": ["error", 2],
        "quotes": ["error", "double"],
        "semi": ["error", "always"],
        "no-console": "error",
        "arrow-parens": 0
    }
}
```

# eslint 配置项
- root 限定配置文件的使用范围
- parser 指定eslint的解析器
- parserOptions 设置解析器选项
- extends 指定eslint规范
- plugins 引用第三方的插件
- env 指定代码运行的宿主环境
- rules 启用额外的规则或覆盖默认的规则
- globals 声明在代码中的自定义全局变量