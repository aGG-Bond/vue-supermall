import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/reset.css'

import vueSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import VueLazyLoad from 'vue-lazyload'

import './components/common'
Vue.use(vueSwiper,/*(default options with global component)*/)
Vue.config.productionTip = false
Vue.use(VueLazyLoad,{
  loading: require('assets/img/common/placeholder.png')
})
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
