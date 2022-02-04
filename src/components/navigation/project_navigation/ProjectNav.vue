<template>
    <header class="project-nav">
        <div class="nav-content">
            <h2 class="logo">UX Andy</h2>

            <nav>
                <router-link :to="{ name: 'Home' }">Home</router-link>
                <ProjectDropdown />
            </nav>
        </div>
    </header>
</template>

<script>
import ProjectDropdown from './ProjectDropdown.vue'

export default {
    components: { ProjectDropdown }
}
</script>

<style>
.project-nav nav {
    display: flex;
    align-items: center;
}
.project-dropdown {
    margin-left: 20px;
}
</style>