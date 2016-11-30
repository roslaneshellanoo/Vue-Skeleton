import Vue from 'vue'
import VueResource from 'vue-resource'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import App from './App.vue'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import './style.scss'




Vue.use(MuseUI)
Vue.use(VueResource)
Vue.use(VueAxios, axios)



const app = new Vue({
      el: '#app',
      components: {
            // all components already registered
      },

      router,
      render: h => h(App)
})


