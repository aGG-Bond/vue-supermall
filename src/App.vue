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

    <tab-bar></tab-bar>
  </div>
</template>

<script>
// import FadeInOut from './components/FadeTransition/FadeInOut'
// import Slider from './components/common/sliderTransition/slider'
export default {
  name: 'App',
  components: {
    // FadeInOut,
    // Slider
  }
}
</script>

<style lang="less">
  .center {
    position: absolute;
    width: 100%;
  }
</style>
