<template>
    <div id="project-details">
        <ProjectNav />
        <Banner :banner="project.banner" />
    </div>
</template>

<script>
import store from '@/store.js'
import { computed } from '@vue/reactivity'
import ProjectNav from '@/components/navigation/project_navigation/ProjectNav.vue'
import Banner from '@/components/project_details/Banner.vue'

export default {
    props: ['slug'],
    components: { ProjectNav, Banner },
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