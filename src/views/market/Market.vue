<template>
  <div class="market">
    <nav-bar>
      <template #middle>购物车</template>
    </nav-bar>
  </div>
</template>

<script>
export default {
  name: 'Market'
}
</script>

<style lang="less" scoped>
  .nav-bar {
    background-color: lightpink;
    font-weight: bold;
    color: #fff;
  }
</style>