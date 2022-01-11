<template>
    <header>
        <div class="navbar">
            <h2 class="logo">UX Andy</h2>

            <img src="@/assets/icons/close.svg" class="close" 
                @click="closeDropdown" v-if="showingDropdown">
            <img src="@/assets/icons/hamburger.svg" class="hamburger" 
                @click="openDropdown" v-if="!showingDropdown">
        </div>

        <NavLinks class="dropdown" />
    </header>
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
            animation = gsap.timeline({paused:true, defaults:{duration:0.4}})
                .to('.dropdown', {scaleY:1, ease:'back'})
                .to('.dropdown li', {scale:1, opacity:1}, '-=0.1')
        })

        return { showingDropdown, openDropdown, closeDropdown }
    }
}
</script>

<style>
header {
    background: #151515;
    box-sizing: border-box;
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    width: 100%;
}
.navbar {
    color: #ffffff;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 30px;
}
nav.dropdown {
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.9);
    transform-origin: top;
}
nav ul {
    margin: 0;
    padding: 0 30px;
    list-style: none;
}
nav li {
    margin: 30px 0;
    transform-origin: left center;
}
nav a {
    color: #ffffff;
    text-decoration: none;
    font-size: 16px;
}
nav a:hover {
    color: var(--primary);
}
.logo {
    font-size: 16px;
    font-weight: 700;
}
.hamburger, .close {
    width: 42px;
    cursor: pointer;
}
</style>