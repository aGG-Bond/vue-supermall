<template>
  <div class="tab-bar">
    <tab-bar-item path='/home' color='blue'>
      <template #item-icon>
        <img src="~assets/img/tabbar/home.svg" alt="home">
      </template>
      <template #item-active-icon>
        <img src="~assets/img/tabbar/home_active.svg" alt="home_active">
      </template>
      <template #item-msg>
        <p>首页</p>
      </template>
    </tab-bar-item>
    <tab-bar-item path='/category' color='blue'>
      <template #item-icon>
        <img src="~assets/img/tabbar/category.svg" alt="category">
      </template>
      <template #item-active-icon>
        <img src="~assets/img/tabbar/category_active.svg" alt="category_active">
      </template>
      <template #item-msg>
        <p>分类</p>
      </template>
    </tab-bar-item>
    <tab-bar-item path='/market' color='blue'>
      <template #item-icon>
        <img src="~assets/img/tabbar/market.svg" alt="market">
      </template>
      <template #item-active-icon>
        <img src="~assets/img/tabbar/market_active.svg" alt="market_active">
      </template>
      <template #item-msg>
        <p>购物车</p>
      </template>
    </tab-bar-item>
    <tab-bar-item path='/profile' color='blue'>
      <template #item-icon>
        <img src="~assets/img/tabbar/profile.svg" alt="profile">
      </template>
      <template #item-active-icon>
        <img src="~assets/img/tabbar/profile_active.svg" alt="profile_active">
      </template>
      <template #item-msg>
        <p>个人</p>
      </template>
    </tab-bar-item>
  </div>
</template>

<script>
// import TabBarItem from './TabBarItem'
export default {
  name: 'TabBar',
  components: {
    // TabBarItem
  }
}
</script>

<style lang="less" scoped>
  .tab-bar {
    z-index: 10;
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f8f8f8;
    box-shadow: 0 -2px 1px rgba(100, 100, 100, 0.3);
  }
</style>