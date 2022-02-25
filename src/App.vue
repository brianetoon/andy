<template>
  <Navbar />
  <router-view v-slot="{ Component, route }">
    <transition :name="transitionName" mode="out-in">
      <component :is="Component" :key="route.path"></component>
    </transition>
  </router-view>
  <Footer />
</template>

<script>
import Navbar from './components/navigation/Navbar.vue'
import Footer from './components/Footer.vue'
import { ref } from '@vue/reactivity'
import { watchEffect } from '@vue/runtime-core'
import { useRoute } from 'vue-router'

export default {
  components: { Navbar, Footer },
  setup() {
    const transitionName = ref('fade')
    const route = useRoute()

    setTimeout(() => {
      watchEffect(() => {
        if (route.name === 'Home') {
          transitionName.value = 'slide-right'
        } else {
          transitionName.value = 'slide-left'
        }
      })
    }, 400)

    return { transitionName }
  }
}
</script>

<style>
  /* Route Transition Classes */
  .fade-enter-from {
    opacity: 0;
  }
  .fade-enter-active {
    transition: all 0.4s ease-out;
  }
  .fade-leave-to {
    opacity: 0;
  }
  .fade-leave-active {
    transition: all 0.4s ease-in;
  }

  .slide-left-enter-from {
    opacity: 0;
    transform: translateX(50%);
  }
  .slide-left-enter-active {
    transition: all 0.25s ease-out;
  }
  .slide-left-leave-to {
    opacity: 0;
    transform: translateX(-50%);
  }
  .slide-left-leave-active {
    transition: all 0.25s ease-in;
  }

  .slide-right-enter-from {
    opacity: 0;
    transform: translateX(-50%);
  }
  .slide-right-enter-active {
    transition: all 0.25s ease-out;
  }
  .slide-right-leave-to {
    opacity: 0;
    transform: translateX(50%);
  }
  .slide-right-leave-active {
    transition: all 0.25s ease-in;
  }
</style>
