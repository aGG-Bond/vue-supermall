<template>
    <div class="good-list">
      <good-list-item v-for="item in goods" :goodsInfo="item" :key="item.id"/>
    </div>
</template>

<script>
import GoodListItem from './GoodListItem'
export default {
  name: 'goodList',
  props: {
    goods: {
      type: Array,
      default() {
        return {}
      }
    }
  },
  components: {
    GoodListItem
  }
}
</script>

<style lang="less" scoped>
  @import '~assets/css/varbile.less';

  .good-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>