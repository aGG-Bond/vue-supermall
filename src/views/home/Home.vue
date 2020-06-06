<template>
  <div class="home">
    <common-nav-bar>
      <template #middle>购物街</template>
    </common-nav-bar>
    
      <tab-control class="fixed" 
        v-show="isShowTabControl"
        :titles="Object.values(types)"
        @tabClick='tabClick'
        ref="tabControl1"/>

    <common-scroll
      @loadMore='loadMore'
      @getPosition='getPosition'
      ref="scroll"
      :pull-up-load='true'
      >
      <common-swiper :padding-bottom='"52%"' :banner= "banner"/>
      <home-recommend :recommend= "recommend"/>
      <home-Popular/>
      <tab-control 
        :titles="Object.values(types)"
        @tabClick='tabClick'
        ref="tabControl2"/>
      <good-list :goods= 'goods[currentType].list'/>
    </common-scroll>
    <back-top @backTop='backTop' v-show="isShowBackTop"/>
  </div>
</template>

<script>
import {reqHomeMultidata,reqHomeGoods,ShopInfo} from 'network/home'
import HomeRecommend from './base/recommend'
import HomePopular from './base/popular'
import TabControl from 'components/content/tabcontrol/TabControl'
import GoodList from 'components/content/goodlist/GoodList'
// import BackTop from 'components/content/backtop/BackTop'
import {backTopMixin} from 'utils/mixins'

export default {
  name: 'Home',
  data() {
    return {
      banner: [],   // 轮播图数据
      recommend: [],  // 推荐数据
      currentType: 'pop',
      isShowTabControl: false,
      // isBackTop: false,
      types: {
        pop: '流行',
        new: '新款',
        sell: '精选'
      },
      goods: {      // 商品数据
        pop: {
          list: [],
          page: 0
        },
        new: {
          list: [],
          page: 0
        },
        sell: {
          list: [],
          page: 0
        }
      }
    }
  },
  mixins: [backTopMixin],
  created() {
    this.getHomeMultidata()
    Object.keys(this.types).forEach(this.getHomeGoods)
  },
  methods: {
    async getHomeMultidata() {
      const result = await reqHomeMultidata();
      this.banner = result.data.banner.list;
      this.recommend = result.data.recommend.list
    },
    async getHomeGoods(type) {
      const page = ++this.goods[type].page;
      const result = await reqHomeGoods(type,page);
      this.goods[type].list.push(...result.data.list)
    },
    tabClick(index) {
      this.$refs.tabControl1.currentIndex = this.$refs.tabControl2.currentIndex = index;
      this.currentType = Object.keys(this.types)[index]
    },
    loadMore() {
      this.getHomeGoods(this.currentType);
      // 当上拉加载数据完成，通过调用finsihPullUp来告知数据加载完成
      this.$refs.scroll.finishPullUp()
    },
    getPosition(position) { // 吸顶效果：障眼法，解决better-scroll无法使用fixed，sticty
      const positionY = -position.y;
      const isShowTabControl = positionY >= this.$refs.tabControl2.$el.offsetTop
      this.isShowTabControl = isShowTabControl;
      // 一键返回顶部
      this.isShowBackTop = positionY>=1000
    },
    // backTop() { // 定位到顶部
    //   this.$refs.scroll.scrollTo(0,0,1000)
    // }
  },
  components: {
    HomeRecommend,
    HomePopular,
    TabControl,
    GoodList,
    // BackTop
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
  
  .fixed {
    position: relative;
    z-index: 2;
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