import Toast from './Toast'

var ToastPlugin = {
  install(Vue) {
    // 生成一个组件构造器
    const ToastConstructor = Vue.extend(Toast)
    // 创建ToastConstructor实例
    const toast = new ToastConstructor;
    //把组件的实例化对象和一个dom节点关联
    toast.$mount(document.createElement('div'))
    // console.log(toast)
    //把Toast组件的根节点挂载到body上
    document.body.appendChild(toast.$el)
    Vue.prototype.$toast = toast
  }
}
export default ToastPlugin
