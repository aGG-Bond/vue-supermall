<template>
  <div class="detail">
    <detail-nav-bar/>
    <common-scroll>
      <common-swiper :padding-bottom='"80%"' :banner="banner" />
      <detail-goods-info :goods-info='goodsInfo' />
      <detail-shop-info :shop='shopInfo' />
      <detail-image-info :image-info='imageInfo' />
      <detail-params-info :params-info='paramsInfo' />
      <detail-comment-info :comment-info='commentInfo' />
      <goods-list :goods='recommendInfo' />
    </common-scroll>
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
      goodsInfo:{},
      shopInfo: {},
      imageInfo: {},
      paramsInfo: {},
      commentInfo: {},
      recommendInfo: []
    }
  },
  created() {
    this.getDetails()
    this.getRecommends()
  },
  methods: {
    async getDetails() {
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
    async getRecommends() {
      const result = await reqRecommends()
      this.recommendInfo = result.data.list
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
  }
}
</script>

<style>

</style>