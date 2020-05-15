<template>
  <div class="category">
    <nav-bar>
      <template #middle>分类</template>
    </nav-bar>
  </div>
</template>

<script>
export default {
  name: 'Category'
}
</script>

<style lang="less" scoped>
  .nav-bar {
    background-color: lightgreen;
    font-weight: bold;
    color: #fff;
  }
</style>