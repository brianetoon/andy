<template>
    <section id="featured-projects">
        <h2 class="title">Featured Projects</h2>
        <ProjectCard  v-for="(project, i) in projects" :key="i" 
            class="project" :project="project" />
    </section>
</template>

<script>
import { ref } from '@vue/reactivity'
import store from '@/store.js'
import ProjectCard from './ProjectCard.vue'

export default {
    components: { ProjectCard },
    setup() {
        const projects = ref(store.projects)

        return { projects }
    }
}
</script>

<style>

</style>