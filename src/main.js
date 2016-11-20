import Vue from 'vue'

import VueResource from 'vue-resource'
Vue.use(VueResource)

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

import router from './router'
import App from './App.vue'


import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

Vue.use(VueMaterial)
Vue.material.theme.register('default', {
      primary: 'indigo',
      accent: 'pink'
})



const app = new Vue({
      el: '#app',
      router,
      render: h => h(App)
})

// export {app, router}

//////////
////////////////////////