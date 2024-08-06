import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import SimDetail from '@/views/SimDetail.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/sim-detail/:slug', component: SimDetail }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
