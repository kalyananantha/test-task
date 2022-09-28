import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import UserDetails from '@/components/UserDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/:username',
      name: 'UserDetails',
      component: UserDetails
    }
  ]
})
