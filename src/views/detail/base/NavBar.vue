<template>
  <common-nav-bar>
    <template #left>
      <img src="~assets/img/common/back.svg" alt="back.svg" @click="goBack">
    </template>
    <template #middle>
      <ul class="nav-bar-title">
        <li :class="{active:currentIndex === index}"
          v-for="(item,index) in titles" :key="item.index" 
          @click="currentIndex=index"
          >{{item}}
        </li>
      </ul>
    </template>
  </common-nav-bar>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      titles: ['商品','评论','参数','推荐'],
      currentIndex: 0
    }
  },
  methods:{
    goBack() {  // 返回上一页
      this.$router.go(-1)
    }
  }
}
</script>

<style lang='less' scoped>
  @import '~assets/css/varbile.less';

  .nav-bar-title {
    display: flex;
    font-size: 14px;
    li {
      flex: 1;
    }
  }
  .active {
    color: @hightTextColor;
    font-weight: bold;
    font-size: 16px;
  }
  img {
    margin-top: 12px;
    width: 20px;
  }
</style>