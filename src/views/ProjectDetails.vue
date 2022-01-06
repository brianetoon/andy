<template>
    <div id="project-details">
        <h2>Project Details Template</h2>
        <img :src="require(`@/assets/images/${project.testImg}`)">
        <h3>Title: {{ project.title }}</h3>
        <p>{{ project.lead }}</p>
    </div>
</template>

<script>
import store from '@/store.js'
import { computed } from '@vue/reactivity'

export default {
    props: ['slug'],
    setup(props) {

        const project = computed(() => {
            return store.projects.find(project => {
                return project.slug === props.slug
            })
        })

        return { project }
    }

    // computed: {
    //     project() {
    //         return store.projects.find(project => {
    //             return project.slug === this.slug
    //         })
    //     }
    // }
}
</script>

<style>
#project-details img {
    width: 200px;
}
</style>