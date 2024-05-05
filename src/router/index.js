import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: () => import('../components/HomePage.vue')
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: () => import('../components/SignUp.vue')
    },
    {
      path: '/sign-in',
      name: 'LoginPage',
      component: () => import('../components/LoginPage.vue')
    },
    {
      path: '/add-res',
      name: 'AddRes',
      component: () => import('../components/AddRes.vue')
    },
    {
      path: '/update-res/:id',
      name: 'UpdateRes',
      component: () => import('../components/UpdateRes.vue')
    }

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
