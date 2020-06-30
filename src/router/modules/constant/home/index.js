import { $import } from '@/utils/basic'
export default [
  {
    path: '/',
    name: '/',
    hidden: true,
    component: $import('home')
  },
  {
    path: '/home',
    name: 'home',
    hidden: true,
    component: $import('home')
  }
]
