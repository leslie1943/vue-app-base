import { $import } from '@/utils/basic'

export default [
  {
    path: '/test',
    name: 'test',
    hidden: true,
    component: $import('test')
  },
  {
    path: '/200',
    name: '200',
    hidden: true,
    component: $import('200')
  },
  {
    path: '/404',
    name: '404',
    hidden: true,
    component: $import('404')
  },
  {
    path: '/500',
    name: '500',
    hidden: true,
    component: $import('500')
  }
]
