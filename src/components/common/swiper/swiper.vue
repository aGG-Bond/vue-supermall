<template>
  <swiper :options="swiperOptions" class="swiper">
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
/* >>> 或 /deep/ 样式穿透 
  如果需要在当前项目中修改第三方库的样式 
  >>> 不支持css预处理语法 less sass
  /deep/ 支持css预处理语法 less sass */
.swiper /deep/ .swiper-pagination-bullet-active {
    background: lightskyblue
  }
.swiper {
  height: 0;
  padding-bottom: 52%;
  text-align: center;
  img {
    width: 100%;
  }
}
</style>