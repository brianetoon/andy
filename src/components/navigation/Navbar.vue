<template>
    <MainNav v-if="route.name ==='Home'"/>
    <ProjectNav v-if="route.name === 'ProjectDetails'" />
</template>

<script>
import MainNav from './main_navigation/MainNav.vue'
import ProjectNav from './project_navigation/ProjectNav.vue'
import { useRoute } from 'vue-router'

export default {
    components: { MainNav, ProjectNav },
    setup() {
        const route = useRoute()

        return { route }
    }
}
</script>

<style>

</style>