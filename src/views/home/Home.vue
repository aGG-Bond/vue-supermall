<template>
  <div class="home">
    <nav-bar>
      <template #middle>购物街</template>
    </nav-bar>
    <common-scroll>
      <common-swiper :banner= "banner"/>
      <home-recommend :recommend= "recommend"/>
      <home-Popular/>
<!-- 1045-1939-6513-0689-8524-8411 -->
      <tab-control :titles="['流行','新款','精选']"></tab-control>
      <div v-for="item in 50" :key="item.id">{{item}}</div>
    </common-scroll>
  </div>
</template>

<script>
import {reqHomeMultidata} from 'network/home'
import HomeRecommend from './base/recommend'
import HomePopular from './base/popular'
import TabControl from 'components/content/tabcontrol/TabControl'
import goodsList from 'components/common/goodslist/goodsList'

export default {
  name: 'Home',
  data() {
    return {
      banner: [],   // 轮播图数据
      recommend: [],  // 推荐数据
      goods: {      // 商品数据
        pop: {
          list: [],
          page: 1
        },
        new: {
          list: [],
          page: 1
        },
        sell: {
          list: [],
          page: 1
        }
      }
    }
  },
  created() {
    this.getHomeMultidata()
  },
  methods: {
    async getHomeMultidata(){
      const result = await reqHomeMultidata()
      this.banner = result.data.banner.list
      this.recommend = result.data.recommend.list
    }
  },
  components: {
    HomeRecommend,
    HomePopular,
    TabControl,
    goodsList
  }
}
</script>

<style lang="less" scoped>
  .nav-bar {
    background-color: lightskyblue;
    font-weight: bold;
    color: #fff
  }
  .swiper {   
    width: 100%;
    padding-bottom: 52%;  // 占位标签，解决抖屏
      img {
        width: 100%
      }
  }
  .swiper /deep/.swiper-pagination-bullet-active {
    background: lightskyblue
  }
  .wrapper {
    // height: calc(100vh - 44px);
    height: calc(~"100vh - 93px"); //less会导致当成表达式计算，即需要增加波浪号以及一对引号
    // position: fixed;
    // top: 44px;
    // bottom: 49px;
    // left: 0;
    // right: 0;
  }
</style>