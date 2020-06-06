<template>
  <div id="app">
    <!-- <transition>
      <router-view/>
    </transition> -->

    <!-- fade in-out -->
    <!-- <fade-in-out>
      <router-view/>
    </fade-in-out> -->

    <!-- slider -->
    <slider>
      <keep-alive exclude="Detail">
        <router-view class="center"/>
      </keep-alive>
    </slider>

    <tab-bar v-show="!$route.path.includes('detail')"/>
  </div>
</template>

<script>
// import FadeInOut from './components/FadeTransition/FadeInOut'
// import Slider from './components/common/sliderTransition/slider'
export default {
  name: 'App',
  // props: {
  //   isShowTabBar: {
  //     type: Boolean,
  //     default: true
  //   }
  // },
  // computed: {
  //   tab() {
  //     return this.$route.path != '/detail'
  //   }
  // },
  // components: {
  //   // FadeInOut,
  //   // Slider
  // }
}
</script>

<style lang="less">
  .center {
    position: absolute;
    width: 100%;
    height: calc(~"100vh - 49px");
  }
</style>
