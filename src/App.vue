<template>
  <Navbar />
  <router-view v-slot="{ Component }">
    <transition :name="transitionName" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
  <Footer />
</template>

<script>
import Navbar from './components/navigation/Navbar.vue'
import Footer from './components/Footer.vue'
import { ref } from '@vue/reactivity'

export default {
  components: { Navbar, Footer },
  setup() {
    const transitionName = ref('fade')

    setTimeout(() => {
      transitionName.value = 'route'
    }, 100)

    return { transitionName }
  }
}
</script>

<style>
  /* Route Transition Classes */

  .route-enter-from {
    opacity: 0;
    transform: translateX(50%);
  }
  .route-enter-active {
    transition: all 0.3s ease-out;
  }
  .route-leave-to {
    opacity: 0;
    transform: translateX(-50%);
  }
  .route-leave-active {
    transition: all 0.3s ease-in;
  }
</style>
