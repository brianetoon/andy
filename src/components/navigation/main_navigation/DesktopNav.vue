<template>
    <div class="desktop-nav">
        <div class="nav-content">
            <h2 class="logo">UX Andy</h2>
            <NavLinks />
        </div>
    </div>
</template>

<script>
import NavLinks from './NavLinks.vue'
export default {
    components: { NavLinks }
}
</script>

<style>
.desktop-nav {
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.desktop-nav .nav-links {
    display: flex;
    padding: 0;
}
.desktop-nav li {
    margin-left: 30px;
}

@media screen and (min-width: 900px) {
    .desktop-nav li {
        margin-left: 40px;
    }
}
</style>