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
      path: '/emergencies',
      name: 'emergencies',
      component: () => import(/* webpackChunkName: "about" */ './views/Emergencia.vue'),
      children: [
        {
          path: '/emergencies/:id',
          name: 'emergency-details',
          component: () => import(/* webpackChunkName: "about" */ './components/EmergenciaUnica.vue'),
          props: true
        }
      ]
    },
    {
      path: '/tareas',
      name: 'tareas',
      component: () => import(/* webpackChunkName: "about" */ './views/Tarea.vue'),
      children: [
        {
          path: '/tareas/:id',
          name: 'task-details',
          component: () => import(/* webpackChunkName: "about" */ './components/Task/TareaUnica.vue'),
          props: true,
          children: [{
            path: '/tasks/:id/voluntary',
            name: 'task-voluntary',
            component: () => import(/* webpackChunkName: "about" */ './components/listaVoluntarios.vue'),
            props: true
          }]
        }
      ]
    }
  ]
})
