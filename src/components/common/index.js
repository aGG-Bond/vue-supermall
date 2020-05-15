import Vue from 'vue'
const requireComponent = require.context('./',true,/\.vue$/)    // 匹配出当前文件夹中以.vue结尾的文件
requireComponent.keys().forEach(filename => {
  const requireConfig = requireComponent(filename)
  // console.log(requireConfig.default)
  Vue.component(  //全局组件注册
    requireConfig.default.name,
    requireConfig.default
  )
})
