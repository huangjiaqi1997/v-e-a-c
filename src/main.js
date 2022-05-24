import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'

import '@/styles/index.scss'

import Element from 'element-ui'

Vue.use(Element, {
  size: 'small'
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
