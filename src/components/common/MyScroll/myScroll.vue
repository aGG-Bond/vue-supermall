<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot/>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CommonScroll',
  props:{
    pullUpLoad:{
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null
    }
  },
  mounted(){ // 初始化 better-scroll
    // let scroll = new BScroll('.wrapper')
    this.scroll = new BScroll(this.$refs.wrapper,{
      click: true,  // 允许滚动区域点击
      pullUpLoad: this.pullUpLoad  // 开启上拉加载功能
    })
    // 监听 滚动到滚动区域的最底部
    this.scroll.on('pullingUp',()=>{
      this.$emit('loadMore');
    })
    this.scroll.on('scroll',position=>{
      this.$emit('getPosition',position)
    })
  },
  methods: {
    finishPullUp() {
      this.scroll.finishPullUp()
    },
    scrollTo(x,y,time=500) {
      this.scroll.scrollTo(x,y,time)
    }
  }
}
</script>

<style lang='less' scoped>
  .wrapper {
    // height: calc(100vh - 44px);
    height: calc(~"100vh - 93px"); //less会导致当成表达式计算，即需要增加波浪号以及一对引号
    // position: fixed;
    // top: 44px;
    // bottom: 49px;
    // left: 0;
    // right: 0;
    overflow: hidden;
  }
</style>