import { $import } from '@/utils/basic'
import frameInLayout from 'layout/frame-in'
export default [
  {
    path: '/film',
    name: 'Films',
    component: frameInLayout,
    icon: 'test',
    redirect: '/film/list',
    children: [
      {
        path: '/film/list',
        name: 'Film list',
        component: $import('film/index')
      }
    ]
  }
]
