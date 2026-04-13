<template>
    <header class="project-nav">
        <div class="nav-content">
            <router-link class="logo" :to="{ name: 'Home' }">Andy Phillips</router-link>
            <!-- <h2 class="logo">Andy Phillips</h2> -->

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

@media screen and (min-width: 640px) {
    .project-dropdown {
        margin-left: 30px;
    }
}
@media screen and (min-width: 640px) {
    .project-dropdown {
        margin-left: 40px;
    }
}
</style>
