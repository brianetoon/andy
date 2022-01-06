<template>
    <div id="featured-projects">
        <h2>Featured Projects</h2>
        <div class="project" v-for="project in projects" :key="project.id">
            <router-link :to="{ name: 'ProjectDetails', params: { slug: project.slug } }">
                {{ project.title }}
            </router-link>
        </div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import store from '@/store.js'

export default {
    setup() {
        const projects = ref(store.projects)

        return { projects }
    }
}
</script>

<style>
.project a {
    color: #ffffff;
}
</style>