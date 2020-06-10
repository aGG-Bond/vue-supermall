<template>
  <div class="detail">
    <detail-nav-bar ref="navbar" @itemClick='itemClick' style="background-color: white"/>
    <common-scroll ref="scroll" :probe-type='3' @getPosition="getPosition">
      <common-swiper :padding-bottom='"80%"' :banner="banner" />
      <detail-goods-info :goods-info='goodsInfo' />
      <detail-shop-info :shop='shopInfo' />
      <detail-image-info @imgLoad='imgLoad' :image-info='imageInfo' />
      <detail-params-info :params-info='paramsInfo' ref="params" />
      <detail-comment-info :comment-info='commentInfo' ref="comment" />
      <goods-list :goods='recommendInfo' ref="goods" />
    </common-scroll>
    <detail-bottom-bar @addMarket='addMarket' />
    <back-top @backTop='backTop' v-show="isShowBackTop" />
    <!-- <toast/> -->
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

import {mapGetters} from 'vuex'
import {backTopMixin} from 'utils/mixins'
import DetailNavBar from './base/NavBar'
import DetailGoodsInfo from './base/GoodsInfo'
import DetailShopInfo from './base/ShopInfo'
import DetailImageInfo from './base/ImageInfo'
import DetailParamsInfo from './base/ParamsInfo'
import DetailCommentInfo from './base/CommentInfo'
import GoodsList from 'components/content/goodlist/GoodList'
import DetailBottomBar from './base/BottomBar'
// import Toast from 'components/content/toast/Toast'

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
      // isShow: false,  // 点击加入购物车后显示
      // message: ''  // 点击加入购物车后显示的文字
    }
  },
  computed: {
    ...mapGetters(['count'])
  },
  components: {
    DetailNavBar,
    DetailGoodsInfo,
    DetailShopInfo,
    DetailImageInfo,
    DetailParamsInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,
    // Toast
  },
  mixins: [backTopMixin],
  created() {
    this.getDetails()
    this.getRecommends()
  },
  methods: {
    async getDetails() {  // 获取数据
      this.iid = this.$route.params.iid;
      const {result} = await reqDetails(this.iid);
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
      // if(positionY < this.offsetTopList[1]) {
      //   this.$refs.navbar.currentIndex = 0
      // }else if(positionY >= this.offsetTopList[1] && positionY < this.offsetTopList[2]) {
      //   this.$refs.navbar.currentIndex = 1
      // }else if(positionY >= this.offsetTopList[2] && positionY < this.offsetTopList[3]) {
      //   this.$refs.navbar.currentIndex = 2
      // }else if(positionY >= this.offsetTopList[3] && positionY < this.offsetTopList[4]) {
      //   this.$refs.navbar.currentIndex = 3
      // }
      // 优化代码
      for(let i in this.offsetTopList) {
        if(i == this.offsetTopList.length-1)break;
        let currentIndex = this.$refs.navbar.currentIndex
        // console.log(typeof i ,i,i+1,+i+1,this.offsetTopList[i]) // i 为字符串，直接进行运算会变为字符串拼接，所以需要转换为数字
        if(currentIndex !=i && positionY >= this.offsetTopList[i] && positionY <= this.offsetTopList[+i+1]) {
          this.$refs.navbar.currentIndex = +i
        }
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
    addMarket() {
      console.log('111')
      const product = {}
      product.image = this.banner[0];
      product.title = this.goodsInfo.title;
      product.desc = this.goodsInfo.desc;
      product.price = this.goodsInfo.realPrice;
      product.iid = this.iid;
      this.$store.commit('addMarket',product)
      // console.log(this.$refs.toast)
      // console.log(this)
      this.$toast.show(`购物车中的数量为${this.count(this.iid)}`)
      // this.isShow = true;
      // this.message = `购物车中的数量为${this.count(this.iid)}`;
      // console.log(this.count(this.iid))
      // setTimeout(()=>{
      //   this.isShow = false;
      //   this.message = ''
      // },1000)
      // console.log(product)
      // this.$store.getters.count(this.iid)
    }
  }
  
}
</script>

<style lang='less' scoped>
  .center {
    height: calc(~"100vh - 58px")
  }
  .wrapper {
    // height: calc(100vh - 102px);
    height: calc(~"100vh - 102px"); //less会导致当成表达式计算，即需要增加波浪号以及一对引号
    // position: fixed;
    // top: 44px;
    // bottom: -58px;
    // left: 0;
    // right: 0;
    }
</style>