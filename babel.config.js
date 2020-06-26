module.exports = {
  presets: [
    // env选项借助 @babel/preset-env, 并且设置 amd,commonjs这样的模块化文件不进行转码
    // ['@babel/preset-env', { modules: false }] // 此行代码与下面是一样的. ✅✅✅
    ['@babel/env'],
    // '@vue/cli-plugin-babel/preset' => '@vue/app' 汪磊老师给出了详细的解答
    /**
     * 💥 1: `@vue/cli-plugin-babel/preset` 位置 => `node_modules/@vue/cli-plugin-babel/presets.js`
     * 💥 2: 这个 `node_modules/@vue/cli-plugin-babel/presets.js` 只是引入了  `node_modules/@vue/babel-preset-app的index.js`文件
     * 💥 3: 如果这样的话, 根据命名原则, 直接使用 `@vue/app` 就可以
     */
    '@vue/app'
  ],
  plugins: [
    // ---- babel-plugin-component
    // [
    //   'component',
    //   {
    //     libraryName: 'element-ui',
    //     styleLibraryName: 'theme-chalk'
    //   }
    // ]
  ]
}
