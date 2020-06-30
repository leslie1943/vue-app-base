import { $import } from '@/utils/basic'
import frameIn from 'layout/frame-in'
export default [
  {
    path: '/user',
    name: 'Users',
    component: frameIn,
    icon: 'test',
    redirect: '/user/list',
    children: [
      {
        path: '/user/list',
        name: 'User list',
        component: $import('user/index')
      },
      {
        path: '/user/detail/:userid',
        name: 'User detail',
        props: true,
        component: $import('user/detail')
      }
    ]
  }
]
