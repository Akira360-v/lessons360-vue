import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {layout: 'main'},
    component: () => import('@/views/Home')
  },
  {
    path: '/history',
    name: 'history',
    meta: {layout: 'main'},
    component: () => import('@/views/History')
  },
  {
    path: '/planning',
    name: 'planning',
    meta: {layout: 'main'},
    component: () => import('@/views/Planning')
  },
  {
    path: '/record',
    name: 'record',
    meta: {layout: 'main'},
    component: () => import('@/views/Record')
  },
  {
    path: '/login',
    name: 'login',
    meta: {layout: 'empty'},
    component: () => import('@/views/Login')
  },
  {
    path: '/categories',
    name: 'categories',
    meta: {layout: 'main'},
    component: () => import('@/views/Categories')
  },
  {
    path: '/profile',
    name: 'profile',
    meta: {layout: 'main'},
    component: () => import('@/views/Profile')
  },
  {
    path: '/register',
    name: 'register',
    meta: {layout: 'empty'},
    component: () => import('@/views/Register')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
