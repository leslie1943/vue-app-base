import Vue from 'vue'
import Router from 'vue-router'
import staticRoutes from './modules/constant'
import businessRoutes from './modules/business'

Vue.use(Router)

const router = new Router({
  // mode: 'hash',
  mode: 'history',
  scrollBehavior: () => ({
    y: 0
  }),
  routes: [
    ...staticRoutes,
    ...businessRoutes
  ]
})

// router.beforeEach((to, from, next) => {

// })

export const allRoutes = [
  ...staticRoutes,
  ...businessRoutes
]

export default router
