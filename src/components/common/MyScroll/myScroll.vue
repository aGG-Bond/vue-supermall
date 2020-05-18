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
  data() {
    return {
      scroll: null
    }
  },
  mounted(){ // 初始化 better-scroll
    // let scroll = new BScroll('.wrapper')
    this.scroll = new BScroll(this.$refs.wrapper,{
      click: true,  // 允许滚动区域点击
      pullUpLoad: true  // 开启上拉加载功能
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

<style>

</style>