import Vue from 'vue'
import VueResource from 'vue-resource'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import App from './App.vue'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import './style.scss'
import hljs from 'highlight.js'
//import code from 'directives/codehighlight'



Vue.use(MuseUI)
Vue.use(VueResource)
Vue.use(VueAxios, axios)

// Vue.directive('highlightjs', function() {
//       hljs.highlightBlock(this.el)
// })

Vue.directive('code', function (el, binding) {
      console.log(el.children[0].children)
      hljs.highlightBlock(el)
});

// Vue.directive('highlight', (el) => {
//       code.innerHTML = h(code.textContent)
// });

const app = new Vue({
      el: '#app',
      components: {
            // all components already registered
      },

      router,
      render: h => h(App)
})


