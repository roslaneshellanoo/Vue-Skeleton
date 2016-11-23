import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '../pages/Home.vue'
import Javascript from '../pages/Javascript.vue'
import Vuejs from '../pages/Vuejs.vue'
import Quiz from '../pages/Quiz.vue'




export default new VueRouter({
    mode: 'history',
    linkActiveClass: 'active',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/javascript',
            component: Javascript
        },
        {
            path: '/vuejs',
            component: Vuejs
        },
        {
            path: '/quiz',
            component: Quiz
        }
    ]
})



