import Vue from 'vue'

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

      router,
      render: h => h(App)
}).$mount('#app');

export {app, router}