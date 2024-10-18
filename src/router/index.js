import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/base2',
      name: 'base2',
      description: '为了满足这个业务需求，我们可以开发一个商品列表组件。该组件将允许用户选择多个商品， 并且可以多个商品进行拖拽排序。基于element-plus作为基础组件开发，如果不能满足，可以自行开发',
      component: () => import('../views/BaseTwo.vue')
    }
  ]
})

export default router
