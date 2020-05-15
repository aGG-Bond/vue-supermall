<template>
  <div class="profile">
    <nav-bar>
      <template #middle>个人</template>
    </nav-bar>
  </div>
</template>

<script>
export default {
  name: 'Profile'
}
</script>

<style lang="less" scoped>
  .nav-bar {
    background-color: lightgrey;
    font-weight: bold;
    color: #fff;
  }
</style>