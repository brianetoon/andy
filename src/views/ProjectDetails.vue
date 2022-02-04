<template>
    <div id="project-details">
        <ProjectNav />
        <h2>Project Details Template</h2>
        <img :src="require(`@/assets/images/${project.testImg}`)" class="shaq">
        <h3>Title: {{ project.title }}</h3>
        <p>{{ project.lead }}</p>
    </div>
</template>

<script>
import store from '@/store.js'
import { computed } from '@vue/reactivity'
import ProjectNav from '@/components/navigation/project_navigation/ProjectNav.vue'

export default {
    props: ['slug'],
    components: { ProjectNav },
    setup(props) {

        const project = computed(() => {
            return store.projects.find(project => {
                return project.slug === props.slug
            })
        })

        return { project }
    }
}
</script>

<style>
.shaq {
    width: 200px;
}
</style>