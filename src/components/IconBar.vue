<template>
    <ul class="icon-bar">
        <li v-for="(link, i) in links" :key="i">
            <a :href="link.href">
                <img :src="require(`@/assets/icons/${link.icon}`)">
            </a>
        </li>
    </ul>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    setup() {
        const links = ref([
            { icon: 'telegram.svg', href: '#'},
            { icon: 'linkedin.svg', href: '#'},
            { icon: 'discord.svg', href: '#'},
            { icon: 'twitter.svg', href: '#'},
        ])

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