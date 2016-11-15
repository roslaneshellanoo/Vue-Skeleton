import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import home from '../pages/home.vue'
import javascript from '../pages/javascript.vue'
import vuejs from '../pages/vuejs.vue'


//const Bar = { template: '<div>bar</div>' }


export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: home },
        { path: '/javascript', component: javascript },
        { path: '/vuejs', component: vuejs }
    ]
})
