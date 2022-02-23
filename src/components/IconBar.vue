<template>
    <ul class="icon-bar">
        <li v-for="(link, i) in links" :key="i">
            <a :href="link.href" target="_blank">
                <SocialIcon :name="link.name" />
            </a>
        </li>
    </ul>
</template>

<script>
import store from '@/store.js'
import { ref } from '@vue/reactivity'
import SocialIcon from './SocialIcon.vue'

export default {
    components: { SocialIcon },
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
    max-width: 200px;
    margin: 0 auto;
}
</style>