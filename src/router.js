import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/emergencias',
      name: 'emergencias',
      component: () => import(/* webpackChunkName: "about" */ './views/Emergencia.vue')
    },
    {
      path: '/tareas',
      name: 'tareas',
      component: () => import(/* webpackChunkName: "about" */ './views/Tarea.vue')
    }
  ]
})
