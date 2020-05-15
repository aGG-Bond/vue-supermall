<template>
  <div class="wrapper" ref="wrapper">
    <div>
      <slot/>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CommonScroll',
  mounted(){ // 初始化 better-scroll
    // let scroll = new BScroll('.wrapper')
    let scroll = new BScroll(this.$refs.wrapper,{
      click: true
    })
  }
}
</script>

<style>

</style>