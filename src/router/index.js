import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue')
  },
  {
    path: '/quize',
    name: 'Quize',
    redirect: { name: 'Dashboard' },
    component: () => import('../views/TheQuize.vue'),
    children: [
      {
        path: 'id',
        components: {
          helper: () => import('../components/quize/QuestionsList.vue')
        }
      },
      {
      name:"result",
      path: 'id/result',
      components: {
        helper: () => import('../components/quize/Result.vue')
      }
    },
     
  ],
    
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
