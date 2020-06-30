module.exports = {
    root: true, // 限定配置文件的使用范围
    env: {
        browser: true,
        es6: true
    },
    /**
     * extends:使用 standard 需要安装相关依赖
     *  eslint-config-standard
     *  eslint-plugin-standard
     *  eslint-plugin-promise
     *  eslint-plugin-import
     *  eslint-plugin-node
     */
    // "eslint:recommended"
    extends: ['standard', 'plugin:vue/essential'], // 使用哪种规则去执行代码检查
    // extends: ['standard', 'plugin:vue/vue3-recommended'], // 使用哪种规则去执行代码检查
    globals: {
        // 🔴 在main.js里挂载了$vue对象,如果想在其他的页面使用就可以使用了,不会出现 no-undefined的问题
        $vue: true,
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    // parser是 eslint的语法解析器
    /**
     * 使用 babel-eslint 需要安装 babel并提供 babel配置文件
     * babel-eslit
     * eslint-plugin-babel
     * 并将 'babel' 配置在 plugins 里
     */
    parser: 'vue-eslint-parser',
    // parser: 'babel-eslint',
    // 设置解析器选项
    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    rules: {
        indent: ['off', 2],
        'space-before-function-paren': 'off'
    },
    plugins: [
        /**
         * 安装了 eslint-plugin-vue ,安装命名规则,可以省掉前缀 `eslint-plugin-`
         */
        'vue',
        /**
         *安装了 eslint-plugin-html ,安装命名规则,可以省掉前缀 `eslint-plugin-`
         配置了 `html` 选项后,`.html`类型文件中的错误信息
         `Newline required at end of file but not found.eslint(eol-last)`也会修复
         */
        'html'
    ]
}

/**
 * eslint-plugin-vue 中的很多规则都需要 vue-eslint-parser 检查<template>,
 * vue-eslint-parser 和 babel-parser 二者有冲突
 */
