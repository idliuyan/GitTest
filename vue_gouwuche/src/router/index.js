import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Classify from '@/components/Classify'
import Mine from '@/components/Mine'
import Cart from '@/components/Cart'

Vue.use(Router);

//勤等着
export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
    },
    {
      path: '/classify',
      name: 'Classify',
      component: Classify
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    }
  ]
})
