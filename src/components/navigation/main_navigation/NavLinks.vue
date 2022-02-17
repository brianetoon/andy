<template>
    <nav>
        <ul class="nav-links">
            <li v-for="(link, i) in links" :key="i">
                <a @click="scroll(link.anchor)">{{ link.name }}</a>
            </li>
        </ul>
    </nav>
</template>

<script>
import gsap from 'gsap'
import ScrollToPlugin from 'gsap/ScrollToPlugin.js'
import { ref } from '@vue/runtime-core'

export default {
    setup(props, { emit }) {
        const links = ref([
            { name: 'Home', anchor: 0},
            { name: 'Projects', anchor: '#featured-projects'},
            { name: 'My Process', anchor: '#my-process'},
            { name: 'About Me', anchor: '#about'},
            { name: 'Contact', anchor: 'footer'},
        ])

        const close = () => {
            emit('close')
        }

        gsap.registerPlugin(ScrollToPlugin)

        const scroll = (anchor) => {
            gsap.to(window, {duration:.5, scrollTo:{y: anchor, offsetY:100}, onStart:close})
        }

        return { links, scroll }
    }
}
</script>

<style>

</style>