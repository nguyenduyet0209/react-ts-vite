import { lazy } from 'react'

export const routeConfig = [
  {
    id: 'HomePage',
    path: '/',
    component: lazy(() => import('../pages/home/HomePage')),
    isProtected: true,
  },
  {
    id: 'LoginPage',
    path: '/login',
    component: lazy(() => import('../pages/login/LoginPage')),
  },
  {
    id: 'AboutPage',
    path: '/about-us',
    component: lazy(() => import('../pages/about/AboutPage')),
    isProtected: true,
  },
]
