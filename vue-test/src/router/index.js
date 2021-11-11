import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      isAuth: false
    },
    component: () => import('@/views/Home.vue')
  },
  {
    path: '*',
    redirect: '/404',
  },
  {
    path: '/404',
    name: '404',
    meta: {
      isAuth: false
    },
    component: () => import('@/components/error-page/404')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router