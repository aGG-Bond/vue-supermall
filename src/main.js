import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/reset.css'
import store from './store'
import ToastPlugin from './plugins/toast'

import vueSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import VueLazyLoad from 'vue-lazyload'

import './components/common'
Vue.use(vueSwiper,/*(default options with global component)*/)
Vue.use(ToastPlugin)
Vue.config.productionTip = false
Vue.use(VueLazyLoad,{
  loading: require('assets/img/common/placeholder.png')
})
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
