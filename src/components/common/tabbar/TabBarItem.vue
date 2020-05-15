<template>
  <div class="tab-bar-item" @click="handleClick">
    <div v-show="!active">
      <slot name="item-icon"></slot>
    </div>
    <div v-show="active">
      <slot name="item-active-icon"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-msg"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
    path: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: 'blue'
    }
  },
  methods: {
    handleClick(){
      this.$router.push(this.path)
    }
  },
  computed: {
    active(){
      return this.$route.path===this.path
    },
    activeStyle(){
      return this.active?{color: this.color}:{}
    }
  }
}
</script>

<style lang="less" scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    img{
      width: 24px;
      height: 24px;
      margin-top: 3px;
    }
  }

</style>