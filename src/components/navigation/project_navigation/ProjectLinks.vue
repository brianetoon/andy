<template>
    <div class="project-links">
        <ul class="links">
            <li v-for="(project, i) in projects" :key="i">
                <router-link :to="{ name: 'ProjectDetails', params: {slug: project.slug} }" @click="close">
                    {{ project.link_name }}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import store from '@/store.js'
import { ref } from '@vue/reactivity'

export default {
    setup(props, { emit }) {
        const filteredProjects = store.projects.filter(p => !p.hidden)
        const projects = ref(filteredProjects)
        const close = () => emit('close')
        return { projects, close }
    }
}
</script>

<style>
.project-links a.router-link-active {
    color: var(--primary);
}
</style>