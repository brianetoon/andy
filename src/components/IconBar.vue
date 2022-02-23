<template>
    <ul class="icon-bar">
        <li v-for="(link, i) in links" :key="i">
            <a :href="link.href" target="_blank">
                <img :src="require(`@/assets/icons/${link.icon}`)">
                <!-- <object :data="require(`@/assets/icons/${link.icon}`)" 
                        type="image/svg+xml" :id="link.name" ref="svg"
                        @click="handleClick">
                </object> -->
            </a>
        </li>
    </ul>
    <!-- <p ref="p" @click="handleClick">hi</p> -->
</template>

<script>
import store from '@/store.js'
import { ref } from '@vue/reactivity'
export default {
    setup() {
        const links = ref(store.social_links)

        const svg = ref(null)
        const p = ref(null)

        const handleClick = () => {
            console.log('clicked')
            // console.log(svg)
        }

        return { links, svg, handleClick, p }
    }
}
</script>

<style>
.icon-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 180px;
    margin: 0 auto;
}
.icon-bar object {
    z-index: -1;
}
@media screen and (min-width: 900px) {
    .icon-bar {
        max-width: 200px;
    }
    .icon-bar img {
        width: 33px;
    }
}
</style>