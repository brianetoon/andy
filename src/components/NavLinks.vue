<template>
    <nav>
        <ul class="links">
            <li v-for="(link, i) in links" :key="i">
                <a href="#">{{ link }}</a>
            </li>
        </ul>
    </nav>
</template>

<script>
import { ref } from '@vue/runtime-core'

export default {
    setup() {
        const links = ref(['Home', 'Projects', 'My Process', 'About Me', 'Contact'])

        return { links }
    }
}
</script>

<style>

</style>