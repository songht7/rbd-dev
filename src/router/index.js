import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//component: () => import(/* webpackChunkName: "about" */ './views/About.vue') 按需引入写法

import Login from './modules/login'
import auit from './modules/auit'

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/home/index'),
    },
    {
      path: '/services',
      name: 'Services',
      component: () => import('@/views/services/index'),
    },
    Login,
    ...auit
  ]
})