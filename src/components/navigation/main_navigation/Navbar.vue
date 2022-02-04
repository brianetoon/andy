<template>
    <header>
        <MobileNav />
        <DesktopNav />
    </header>
</template>

<script>
import MobileNav from './MobileNav.vue'
import DesktopNav from './DesktopNav.vue'

export default {
    components: { MobileNav, DesktopNav }
}
</script>

<style>
.desktop-nav {
    display: none;
}

@media screen and (min-width: 760px) {
    header {
        padding: 0 40px;
    }
    .mobile-nav {
        display: none;
    }
    .desktop-nav {
        display: block;
    }
}
</style>