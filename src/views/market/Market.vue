<template>
  <div class="market">
    <common-nav-bar>
      <template #middle>购物车({{$store.getters.productsLength}})</template>
    </common-nav-bar>
    <common-scroll>
      <market-list/>
    </common-scroll>
    <market-botton-bar/>
  </div>
</template>

<script>
import MarketList from './base/MarketList'
import MarketBottonBar from './base/MarketBottonBar.vue'
export default {
  name: 'Market',
  components: {
    MarketList,
    MarketBottonBar
  }
}
</script>

<style lang="less" scoped>
  .nav-bar {
    background-color: lightpink;
    font-weight: bold;
    color: #fff;
  }
  .wrapper {
    // height: calc(100vh - 44px);
    height: calc(~"100vh - 137px"); //less会导致当成表达式计算，即需要增加波浪号以及一对引号
    // position: fixed;
    // top: 44px;
    // bottom: 49px;
    // left: 0;
    // right: 0;
  }
</style>