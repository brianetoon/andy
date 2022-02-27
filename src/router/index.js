import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ProjectDetails from '../views/ProjectDetails.vue'
import store from '../store.js'

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
    props: true,
    beforeEnter: (to, from, next) => {
      const exists = store.projects.find(project => {
        return project.slug === to.params.slug
      })
      if (exists) {
        next()
      } else {
        next({ name: 'Home' })
      }
    }
  },
  {
    path: '/:NotFound(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ top: 0 })
      }, 200)
    })
  }
})

export default router
