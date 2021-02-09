import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import RandomPhotos from '../views/RandomPhotos.vue'
import AllPhotos from '../views/AllPhotos.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
  path: '/randomphotos',
  name: 'random-photos',
  component: RandomPhotos
  },
  
  {
    path: '/allphotos',
    name: 'all-photos',
    component: AllPhotos
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
