import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import moment from 'moment-timezone'
import VueClipboard from 'vue-clipboard2'

Vue.config.productionTip = false
Vue.use(VueClipboard)
Vue.use(require('vue-moment'), { moment })

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
