import Vue from 'vue'

import Router from 'vue-router'
const mode = 'hash'
const hashbang = true

Vue.use(Router)

export default new Router({
  hashbang,
  mode,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import('./pages/Home.vue')
    }
  ]
})

