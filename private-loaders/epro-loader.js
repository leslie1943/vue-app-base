const marked = require('marked')
module.exports = source => {
  // 加载到的文件 # About \n\nthis is a markdown file
  // console.info(' 原始的 ####【markdown-loader】print load content start ####')
  // console.info(source)
  // console.info(' 原始的 ####【markdown-loader】print load content finish ####')
  // console.info(' ')
  // console.info('------------------------------------------------------------')

  // 1.将markdown文件转成html字符串
  const html = marked(source)
  // console.info(' marked ####【markdown-loader】print load content start ####')
  // console.info(html)
  // console.info(' marked ####【markdown-loader】print load content finish ####')
  // console.info('------------------------------------------------------------')
  return html
}
