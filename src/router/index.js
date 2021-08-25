import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AllUsersPage from '../views/AllUsersPage.vue'
import UserPage from '../views/UserPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/users',
    name: 'AllUsers',
    component: AllUsersPage

  },
  {
    path: '/users/user/:id',
    name: 'User',
    component: UserPage

  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
