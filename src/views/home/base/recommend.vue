<template>
  <ul class="home-recommend">
    <li class="recommend-item" v-for="item in recommend" :key="item.acm">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
      <p>{{item.title}}</p>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Recommend',
  props: {
    recommend: {
      type: Array
    }
  }
}
</script>

<style lang="less" scoped>
  .home-recommend { 
    display: flex;
    font-size: 12px;
    padding: 15px 0 30px;
    border-bottom: 8px solid #eee;
    text-align: center;
    .recommend-item {
      flex: 1;
      img {
        width: 80px;
      }
      p {
        padding-top: 10px;
      }
    }
  }
  
</style>