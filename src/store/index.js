import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    products: JSON.parse(localStorage.getItem('products')) || []
  },
  mutations: {
    addMarket(state,payload) {
      // console.log(payload)
      const product = state.products.find(item=>item.iid === payload.iid)
      // console.log(product)
      if(product) {
        product.count ++
      }else {
        state.products.push({
          ...payload,
          count: 1,
          checked: true
        })
        // state.products.push(Object.assign({count: 1},payload))
      }
    },
    updateCheck(state,payload) {
      const product = state.products.find(item=>item.iid === payload)
      // console.log(product.checked,product.iid)
      product.checked = !product.checked
    },
    selectAll(state,payload) {
      state.products.forEach(item=>item.checked = payload)
    }
  },
  actions: {

  },
  getters: {
    count(state) {
      return function (iid) {
        const product = state.products.find(item=>item.iid === iid)
        return product.count
      }
    },
    productsLength(state) {  //购物车中商品种类的数量
      return state.products.length;
    },
    isCheckAll(state) {   // 全选按钮
      return state.products.every(item=>item.checked)
    },
    selectedProductsLength(state) { //购物车中选中的商品的种类 
      return state.products.filter(item=>item.checked).length
    },
    selectMarket(state) {
      let selectPrice = [];
      state.products.forEach(item=>{
        if(item.checked){
          return selectPrice.push(item)
        }
      })
      return selectPrice;
    }
  }
})

store.subscribe((mutations,state)=>{
  // console.log(arguments,mutations)
  // 存储数据到本地
  localStorage.setItem('products',JSON.stringify(state.products))
})
export default store