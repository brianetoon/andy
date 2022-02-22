<template>
    <ul class="icon-bar">
        <li v-for="(link, i) in links" :key="i">
            <a :href="link.href" target="_blank">
                <img :src="require(`@/assets/icons/${link.icon}`)">
            </a>
        </li>
    </ul>
</template>

<script>
import store from '@/store.js'
import { ref } from '@vue/reactivity'
export default {
    setup() {
        const links = ref(store.social_links)

        return { links }
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
</style>