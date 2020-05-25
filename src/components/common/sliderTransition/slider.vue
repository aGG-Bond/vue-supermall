<template>
  <div class="slider">
    <transition :name="name">
      <slot/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'slider',
  data(){
    return {
      name: ''
    }
  },
  watch:{
    $route(to,from){
      if(from.path==='/')return;
      if(to.meta.index>from.meta.index){
        this.name = 'left'
      }else{
        this.name = 'right'
      }
    }
  }
}
</script>

<style>
  .left-enter-active {
    transform: translateX(100%);
    transition: 1s
  }
  .left-enter-to {
    transform: translateX(0px)
  }
  .left-leave-active,.right-leave-active {
    transform: translateX(0px);
    transition: 1s;
  }
  .left-leave-to {
    transform: translateX(-100%)
  }
  .right-leave-to {
    transform: translateX(100%)
  }
  .right-enter-active {
    transform: translateX(-100%);
    transition: 1s
  }
  .right-enter-to {
    transform: translateX(0px)
  }

</style>