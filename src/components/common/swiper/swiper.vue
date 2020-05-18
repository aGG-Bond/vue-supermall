<template>
  <swiper :options="swiperOptions" class="swiper" :style="{paddingBottom}">
    <swiper-slide v-for="item in banner" :key="item.acm">
      <a :href="item.link">
        <img :src="item.image" alt="photo">
      </a>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
 
<script>
  export default {
    name: 'CommonSwiper',
    props: {
      banner: {
        type: Array,
        default() {
          return []
        }
      },
      paddingBottom: {
        type: String
      }
    },
    data() {
      return {
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination'
          },
          loop: true,     // 是否无缝循环轮播
          autoplay: {     // 自动播放
            delay: 2000    // 每隔2s切换一次
          }
          // Some Swiper option/callback...
        }
      }
    },
    // computed: {
    //   swiper() {
    //     // return this.$refs.mySwiper.$swiper
    //   }
    // },
    // mounted() {
    //   console.log('Current Swiper instance object', this.swiper)
    //   // this.swiper.slideTo(3, 1000, false)
    // }
  }
</script> 
<style scoped lang='less'>
.swiper {
  position: relative;
  overflow: hidden;
  height: 0;
  img {
    width: 100%;
  }
}
/* >>> 或 /deep/ 样式穿透 
  如果需要在当前项目中修改第三方库的样式 
  >>> 不支持css预处理语法 less sass
  /deep/ 支持css预处理语法 less sass */
  .swiper /deep/ .swiper-container{
    position: static;
  }
.swiper /deep/ .swiper-pagination-bullet-active {
    background: lightskyblue
  }
</style>