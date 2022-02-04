<template>
    <div class="project-dropdown">

        <div class="dropdown-button" :class="{ open: showingDropdown }"
            @click="showingDropdown = !showingDropdown">
            <div class="button-content">
                <span class="button-text">Featured Projects</span>
                <img src="@/assets/icons/caret_down.svg" class="caret">
            </div>
        </div>

        <div class="project-links" v-if="showingDropdown">
            <ul class="links">
                <li v-for="(project, i) in projects" :key="i">
                    <router-link :to="{ name: 'ProjectDetails', params: {slug: project.slug} }">
                        {{ project.link_name }}
                    </router-link>
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
import store from '@/store.js'
import { ref } from '@vue/reactivity'

export default {
    setup() {
        const projects = ref(store.projects)
        const showingDropdown = ref(false)

        return { showingDropdown, projects }
    }
}
</script>

<style>
.project-dropdown {
    width: 100%;
    max-width: 200px;
    position: relative;
}
.dropdown-button {
    background: linear-gradient(to right, #7949FC, #BE17FB);
    padding: 2px;
    border-radius: 5px;
    cursor: pointer;
}
.project-dropdown .button-content {
    background: #151515;
    padding: 8px 16px;
    border-radius: 3px;
    display: flex;
    justify-content: space-between;
}
.dropdown-button.open {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}
.caret {
    width: 15px;
    margin-left: 10px;
}
.project-links {
    width: 100%;
    background: linear-gradient(to right, #7949FC, #BE17FB);
    position: absolute;
    padding: 0 2px 2px 2px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
}
.project-links .links {
    background: #151515;
    padding: 10px 0;
    border-radius: 3px;
}
.project-links li {
    padding: 10px 16px;
}
</style>