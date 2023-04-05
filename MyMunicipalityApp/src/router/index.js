import { createRouter, createWebHistory } from 'vue-router'
import CallbackPage from "@/pages/callback-page.vue";
import ProfilePage from "@/pages/profile-page.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'', redirect:'home'
    },
    {
      path: '/home',
      name: 'home',
      component: ()=> import('../views/HomeView.vue')
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfilePage,
    },
    {
      path: "/callback",
      name: "callback",
      component: CallbackPage,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
