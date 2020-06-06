<template>
  <div class="icon-selector" :class="{'selector-active':checked}">
    <img src="~/assets/img/cart/tick.svg" alt />
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  props: {
    checked: {
      type: Boolean,
      default: true
    },
  },
  methods: {

  }
};
</script>

<style scoped>
.icon-selector {
  position: relative;
  margin: 0;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid #ccc;
  cursor: pointer;
}

.selector-active {
  background-color: #59c3e5;
  border-color: #59c3e5;
}
</style>
