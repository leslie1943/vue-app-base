const chalk = require('chalk')
// const { compilation } = require('webpack')

class CheckSensitivePlugin {
  constructor(options) {
    this.options = options
  }

  // compiler是 webpack插件的最重要的对象
  apply(complier) {
    // compilation => 理解为此次打包的上下文
    complier.hooks.afterCompile.tap('CheckSensitivePlugin', compilation => {
      console.info('this.options', this.options)
      for (const name in compilation.assets) {
        console.info('file name:', name)
        if (name.endsWith('.js') || name.endsWith('.md') || name.endsWith('.html') || name.endsWith('.ejs')) {
          const contents = compilation.assets[name].source() // 通过source方法获取内容
          if (contents.toLowerCase && typeof contents.toLowerCase === 'function') {
            if (contents.toLowerCase().includes('fuck')) {
              console.log(chalk.bgRed(chalk.yellow(`<<<<<<<< Found sensitive words in ${name} >>>>>>>>`)))
            }
            // if (contents.toLowerCase().includes('style=')) {
            //   console.log(chalk.bgRed(chalk.yellow('<<<<<<<< Found inline style >>>>>>>>')))
            // }
          } else {
            console.info('nothing in CheckSensitivePlugin')
          }
        }
      }
    })
  }
}

module.exports = CheckSensitivePlugin
