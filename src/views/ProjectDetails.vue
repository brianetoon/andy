<template>
    <ProjectNav />
    <Banner :banner="project.banner" />
    <main class="project-details">
      <FinalProduct :finalProduct="project.finalProduct"/>
      <Problem :problem="project.problem"></Problem>
    </main>
</template>

<script>
import store from '@/store.js'
import { computed } from '@vue/reactivity'
import ProjectNav from '@/components/navigation/project_navigation/ProjectNav.vue'
import Banner from '@/components/project_details/Banner.vue'
import FinalProduct from "@/components/project_details/FinalProduct";
import Problem from "@/components/project_details/Problem";

export default {
    props: ['slug'],
    components: { FinalProduct, ProjectNav, Banner, Problem },
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

</style>
