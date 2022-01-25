<template>
    <section class="featured-projects">
        <h2 class="title">Featured Projects</h2>
        <div class="project" v-for="project in projects" :key="project.id">
            <router-link :to="{ name: 'ProjectDetails', params: { slug: project.slug } }">
                {{ project.title }}
            </router-link>
        </div>
    </section>
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
.featured-projects {
    
}
.project a {
    color: #ffffff;
}
</style>