import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: () => import('../views/posts/Index.vue'), name: 'Home' },
    { path: '/teste', component: () => import('../views/Index.vue'), name: 'OutraHome' },
  ]
})

export default router
