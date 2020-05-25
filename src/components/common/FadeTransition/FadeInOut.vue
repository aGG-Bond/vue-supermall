<template>
  <div class="fade-in-out">
    <transition mode="out-in">
      <slot/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'FadeInOut'
}
</script>

<style>
  .v-enter-active {
    opacity: 0;
    transition: 1s;
  }
  .v-enter-to {
    opacity: 1;
  }
  .v-leave-active {
    opacity: 1;
    transition: 1s;
  }
  .v-leave-to {
    opacity: 0;
  }
</style>