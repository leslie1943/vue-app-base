// 导出 vue 文件, 动态加载路由
export function $import(view) {
  return () => import(`@/views/${view}`)
}
