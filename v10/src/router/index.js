import AboutView from '@/components/AboutView.vue'
import HomeView from '@/components/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "HomeView",
      component: HomeView
    },
    {
      path: "/about",
      name: "AboutVuew",
      component: AboutView
    }
  ],
})

export default router
