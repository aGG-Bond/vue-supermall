<template>
  <div class="product-list">
    <market-list-item v-for="product in products" 
      :key="product.id" :item-info='product' />
  </div>
</template>

<script>
import {mapState} from 'vuex'
import MarketListItem from './MarketListItem'
export default {
  name: 'MarketList',
  components: {
    MarketListItem
  },
  computed: {
    ...mapState(['products'])
  }
}
</script>

<style>

</style>