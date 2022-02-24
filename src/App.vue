<template>

  <router-view v-slot="{ Component }">
    <transition name="route" mode="out-in">
      <component :is="Component" :key="$route.path"></component>
    </transition>
  </router-view>

  <!-- <router-view></router-view> -->

  <Footer />
</template>

<script>
import Footer from './components/Footer.vue'

export default {
  components: { Footer }
}
</script>

<style>
  /* Route Transition Classes */

  .route-enter-from {
    opacity: 0;
    /* transform: translateX(100px); */
  }
  .route-enter-active {
    transition: all 0.3s ease-out;
  }
  .route-leave-to {
    opacity: 0;
    /* transform: translateX(-100px); */
  }
  .route-leave-active {
    transition: all 0.3s ease-in;
  }
</style>
