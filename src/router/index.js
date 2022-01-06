import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ProjectDetails from '../views/ProjectDetails.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/projects/:slug',
    name: 'ProjectDetails',
    component: ProjectDetails,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
