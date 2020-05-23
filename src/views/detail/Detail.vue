<template>
  <div class="detail">
    <detail-nav-bar ref="navbar" @itemClick='itemClick' />
    <common-scroll ref="scroll" :probe-type='3' @getPosition="getPosition">
      <common-swiper :padding-bottom='"80%"' :banner="banner" />
      <detail-goods-info :goods-info='goodsInfo' />
      <detail-shop-info :shop='shopInfo' />
      <detail-image-info @imgLoad='imgLoad' :image-info='imageInfo' />
      <detail-params-info :params-info='paramsInfo' ref="params" />
      <detail-comment-info :comment-info='commentInfo' ref="comment" />
      <goods-list :goods='recommendInfo' ref="goods" />
    </common-scroll>
    <back-top @backTop='backTop' v-show="isShowBackTop" />
  </div>
</template>

<script>
import {
  reqDetails,
  GoodsInfo,
  ShopInfo,
  GoodsParam,
  CommentInfo,
  reqRecommends
  } from 'network/detail'

import {backTopMixin} from 'utils/mixins'
import DetailNavBar from './base/NavBar'
import DetailGoodsInfo from './base/GoodsInfo'
import DetailShopInfo from './base/ShopInfo'
import DetailImageInfo from './base/ImageInfo'
import DetailParamsInfo from './base/ParamsInfo'
import DetailCommentInfo from './base/CommentInfo'
import GoodsList from 'components/content/goodlist/GoodList'

export default {
  name: 'Detail',
  data() {
    return {
      banner: [],
      goodsInfo: {},
      shopInfo: {},
      imageInfo: {},
      paramsInfo: {},
      commentInfo: {},
      recommendInfo: [],
      offsetTopList: [],
      // isShowBackTop:false, // 初始不显示返回顶部组件
      iid: '',
    }
  },
  components: {
    DetailNavBar,
    DetailGoodsInfo,
    DetailShopInfo,
    DetailImageInfo,
    DetailParamsInfo,
    DetailCommentInfo,
    GoodsList
  },
  mixins: [backTopMixin],
  created() {
    this.getDetails()
    this.getRecommends()
  },
  methods: {
    async getDetails() {  // 获取数据
      const iid = this.$route.params.iid;
      const {result} = await reqDetails(iid);
      const data = result.itemInfo.topImages.map(item=>this.banner.push({image:item}))
      // 商品信息
      this.goodsInfo = new GoodsInfo(result.itemInfo,result.columns,result.shopInfo.services)
      // 商铺信息
      this.shopInfo = new ShopInfo(result.shopInfo);
      // 商品图片信息
      this.imageInfo = result.detailInfo;
      // 参数信息
      this.paramsInfo = new GoodsParam(result.itemParams.info, result.itemParams.rule);
      // 评论信息
      if(result.rate.cRate !==0) {
        this.commentInfo = new CommentInfo(result.rate.list[0])
      }
    },
    async getRecommends() { // 获取推荐数据
      const result = await reqRecommends()
      this.recommendInfo = result.data.list
    },
    getPosition(position) {
      const positionY = -position.y;
      // console.log(positionY,this.offsetTopList)
      /*
        [0,7884,8563,8826,1000000/Number_MAX_VALUE]
        0 - 7884, index = 0
        7884 - 8563, index = 1
        8563 - 8826, index = 2
        8826 - 100000, index = 3
      */
      if(positionY < this.offsetTopList[1]) {
        this.$refs.navbar.currentIndex = 0
      }else if(positionY >= this.offsetTopList[1] && positionY < this.offsetTopList[2]) {
        this.$refs.navbar.currentIndex = 1
      }else if(positionY >= this.offsetTopList[2] && positionY < this.offsetTopList[3]) {
        this.$refs.navbar.currentIndex = 2
      }else if(positionY >= this.offsetTopList[3] && positionY < this.offsetTopList[4]) {
        this.$refs.navbar.currentIndex = 3
      }
      this.isShowBackTop = positionY >= 1000
      // console.log(this.$refs.navbar.currentIndex)
    },
    itemClick(index) {
      this.$refs.scroll.scrollTo(0, -this.offsetTopList[index], 200)
    },
    imgLoad(count) {
      this.offsetTopList.push(
        0,
        this.$refs.params.$el.offsetTop-50,
        this.$refs.comment.$el.offsetTop-50,
        this.$refs.goods.$el.offsetTop-50,
        1000000
      )
      // console.log(`第${count}图片加载完成`, this.offsetTopList)
    },
  }
  
}
</script>

<style>

</style>