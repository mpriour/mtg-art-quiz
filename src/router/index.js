import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/user',
    name: 'User',
    component: () => import(/* webpackChunkName: "user" */ '../views/User.vue')
  },
  {
    path: '/standard',
    name: 'Standard',
    props: { format: 'standard' },
    component: () => import(/* webpackChunkName: "quiz" */ '../views/Quiz.vue')
  },
  {
    path: '/pioneer',
    name: 'Pioneer',
    props: { format: 'pioneer' },
    component: () => import(/* webpackChunkName: "quiz" */ '../views/Quiz.vue')
  },
  {
    path: '/modern',
    name: 'Modern',
    props: { format: 'modern' },
    component: () => import(/* webpackChunkName: "quiz" */ '../views/Quiz.vue')
  },
  {
    path: '/pauper',
    name: 'Pauper',
    props: { format: 'pauper' },
    component: () => import(/* webpackChunkName: "quiz" */ '../views/Quiz.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
