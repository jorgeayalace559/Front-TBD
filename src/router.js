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
    },
    {
      path: '/mistareas',
      name: 'mistareas',
      component: () => import(/* webpackChunkName: "about" */ './views/MisTareas.vue')
    },
    {
      path: '/creartarea',
      name: 'crear',
      component: () => import(/* webpackChunkName: "about" */ './views/CrearTarea.vue')
      component: () => import(/* webpackChunkName: "about" */ './views/Tarea.vue'),
      children: [
        {
          path: '/tareas/:id',
          name: 'task-details',
          component: () => import(/* webpackChunkName: "about" */ './components/TareaUnica.vue'),
          props: true
        }
      ]
    }
  ]
})
