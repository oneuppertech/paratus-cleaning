import { createRouter, createWebHistory } from 'vue-router'
import CleaningPage from '@/views/CleaningPage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: CleaningPage
    },
    
   
  ],
  scrollBehavior(to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition
  }

  return {
    top: 0,
    left: 0,
    behavior: 'smooth'
  }
}
})


export default router
