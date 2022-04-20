import { createRouter, createWebHistory } from 'vue-router'
import store from '../store/index.js'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Dashboard.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue'),
    // meta: { requiresAuth: true }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/quize',
    name: 'Quize',
    redirect: { name: 'Dashboard' },
    component: () => import('../views/TheQuize.vue'),
    meta: { requiresAuth: true },
    children: [
      { 
        name: 'TheQuize',
        path: ':id',
        components: {
          helper: () => import('../components/quize/QuestionsList.vue')
        },
        meta: { requiresAuth: true }
      },
      {
      name:"result",
      path: ':id/result',
      components: {
        helper: () => import('../components/quize/Result.vue')
      },
      meta: { requiresAuth: true }
    },
     
  ],
    
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})


router.beforeEach(async (to,from, next)=>{
  // console.log("to",to)
  // console.log("from",from)
  // console.log("is token available?",await !!localStorage.getItem("token"))
  // console.log("cond1",await !localStorage.getItem("token"))
  // console.log("cond2",to.meta.requiresAuth)
  // console.log("cond3",to.path !== '/login')
  const a = await !localStorage.getItem("token")
  if (a && to.meta.requiresAuth && to.path !== '/login') {
    next({ path: "/login", query: { redirectTo: to.fullPath },
  });
  }
   else if(localStorage.getItem("token")){
      next()
  }
  else {
    next();
  }
});

export default router
