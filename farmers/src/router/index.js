import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/registration',
    name: 'registration',
    component: () => import('../views/RegistrationView.vue')
  },
  {
    path: '/main',
    name: 'Main',
    component: () => import('../views/MainView.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  
  {
    path: '/about',
    name: 'about',
    
    component: () => import( '../views/AboutView.vue')
  },
  {
    path: '/comp',
    name: 'computer',
    
    component: () => import('../views/ComputerView.vue')
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
