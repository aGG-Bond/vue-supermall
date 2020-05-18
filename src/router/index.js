import Vue from 'vue'
import Router from 'vue-router'
// import Home from 'views/home/Home'
const Home = ()=>import('views/home/Home')
const Category = ()=>import('views/category/Category')
const Market = ()=>import('views/market/Market')
const Profile = ()=>import('views/profile/Profile')
const Detail = ()=>import('views/detail/Detail')
Vue.use(Router)

const routes =[
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {index: 0}
  },
  {
    path: '/category',
    component: Category,
    meta: {index: 1}
  },
  {
    path: '/market',
    component: Market,
    meta: {index: 2}
  },
  {
    path: '/profile',
    component: Profile,
    meta: {index: 3}
  },
  {
    path: '/detail/:iid',
    component: Detail,
    meta: {index: 4}
  }
]

export default new Router({
  mode: 'history',
  routes
})