import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style/index.css'
/*Fontawesome*/
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
/*---Bootstrap-CSS---*/
import '../node_modules/bootstrap/dist/css/bootstrap.css';
/*--Bootstarp-JS----*/
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
/*---Bootstarp - icons-------*/


createApp(App).use(store).use(router).mount('#app')
