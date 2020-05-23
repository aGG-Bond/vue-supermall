import BackTop from 'components/content/backtop/BackTop'
export const backTopMixin = {
  data(){
    return {
      isShowBackTop: false,   // 初始不显示返回顶部按钮
    }
  },
  components: {
    BackTop
  },
  methods: {
    backTop() {
      this.$refs.scroll.scrollTo(0,0)
    }
  }
}