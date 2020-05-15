import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/reset.css'

import vueSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

import './components/common'
Vue.use(vueSwiper,/*(default options with global component)*/)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
