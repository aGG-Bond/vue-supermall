<template>
  <div class="detail">
    <detail-nav-bar></detail-nav-bar>
    <common-swiper :padding-bottom='"80%"' :banner="banner"/>
  </div>
</template>

<script>
import {reqDetails} from 'network/detail'
import DetailNavBar from './base/detail-nav-br'
export default {
  name: 'Detail',
  data() {
    return {
      banner: [],
    }
  },
  created() {
    this.getDetails()
  },
  methods: {
    async getDetails() {
      const iid = this.$route.params.iid;
      const {result} = await reqDetails(iid);
      const data = result.itemInfo.topImages.map(item=>this.banner.push({image:item}))
    },

  },
  components: {
    DetailNavBar,
  }
}
</script>

<style>

</style>