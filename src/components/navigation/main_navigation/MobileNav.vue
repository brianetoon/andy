<template>
    <div class="mobile-nav">
        <div class="nav-content">
            <h2 class="logo">UX Andy</h2>

            <img src="@/assets/icons/close.svg" class="close" 
                @click="closeDropdown" v-if="showingDropdown">
            <img src="@/assets/icons/hamburger.svg" class="hamburger" 
                @click="openDropdown" v-if="!showingDropdown">
        </div>

        <NavLinks class="dropdown" @close="closeDropdown" />
    </div>
</template>

<script>
import NavLinks from './NavLinks.vue'
import { ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
import gsap from 'gsap'

export default {
    components: { NavLinks },
    setup() {
        const showingDropdown = ref(false)

        const openDropdown = () => {
            animation.play()
            showingDropdown.value = true
        }
        const closeDropdown = () => {
            animation.reverse()
            showingDropdown.value = false
        }

        let animation

        onMounted(() => {
            gsap.set('.dropdown', {scaleY:0})
            gsap.set('.dropdown li', {opacity:0, scale:0.2})
            animation = gsap.timeline({paused:true, defaults:{duration:0.35}})
                .to('.dropdown', {scaleY:1, ease:'back'})
                .to('.dropdown li', {scale:1, opacity:1}, '-=0.1')
        })

        return { showingDropdown, openDropdown, closeDropdown }
    }
}
</script>

<style>
nav.dropdown {
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.9);
    transform-origin: top;
}
.mobile-nav ul {
    margin: 0;
    padding: 0 30px;
    list-style: none;
}
.mobile-nav li {
    margin: 30px 0;
    transform-origin: left center;
}
.logo {
    font-size: 16px;
    font-weight: 700;
    display: inline-block;
}
.hamburger, .close {
    width: 42px;
    cursor: pointer;
}
</style>