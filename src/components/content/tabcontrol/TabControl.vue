<template>
  <ul class="tab-control">
    <li v-for="(item,index) in titles" :key="item.id"
      @click="handleClick(index)" 
      :class="{active: currentIndex === index}">
      <span>{{item}}</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    titles: {
      type: Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{
      currentIndex: 0
    }
  },
  methods:{
    handleClick(index){
      this.currentIndex = index
      this.$emit('tabClick',index)
    }
  }
}
</script>

<style lang="less" scoped>
  @import '~assets/css/variable.less';

.tab-control {
  z-index: 1;
  margin-bottom: 4px;
  // position: relative;
  display: flex;
  text-align: center;
  line-height: 40px;
  background-color: #fff;
  li{
    flex: 1;
  }
  .active {
    span {
      padding: 5px;
      color: @hightTextColor;
      border-bottom: 3px solid @hightTextColor;
    }
  }
}
</style>