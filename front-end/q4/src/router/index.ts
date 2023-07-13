import { createRouter, createWebHistory } from 'vue-router'
import BookList from '../views/book-list.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'list',
      component: BookList
    },
    {
      path: '/:slug',
      name: 'book',
      props: true,
      component: () => import('../views/book.vue')
    }
  ]
})

export default router
