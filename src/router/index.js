import { createRouter, createWebHashHistory } from 'vue-router'
import TodoList from '../components/Todo-List.vue';
import Weather from '../components/Weather.vue'

const routes = [
  {
    path:'/',
    name:'home',
    component:()=>import(/* webpackChunkName: "Home" */ '../views/Home.vue')
  },
  {
    path: '/todo',
    name: 'App',
    component: TodoList
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/weather',
    name: 'Weather',
    component:Weather
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
