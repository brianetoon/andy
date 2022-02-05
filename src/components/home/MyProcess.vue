<template>
    <section id="my-process">
        <h2 class="title">My Process</h2>
        <p class="intro">{{ intro }}</p>
        <div class="process-grid">
            <ProcessCard v-for="(item, i) in process" :key="i" :item="item" />
        </div>
    </section>
</template>

<script>
import { ref } from '@vue/reactivity'
import store from '@/store.js'
import ProcessCard from './ProcessCard.vue'

export default {
    components: { ProcessCard },
    setup() {
        const process = ref(store.process)
        const intro = ref(store.process_intro)

        return { process, intro }
    }
}
</script>

<style>
#my-process .title {
    margin: 0;
}
#my-process .intro {
    margin: 15px auto 30px;
    max-width: 800px;
}
.process-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
}
.process-card {
    grid-column: span 2;
}

@media screen and (min-width: 768px) {
    .process-card {
        grid-column: span 1;
    }
    .process-card .card-content {
        min-height: 241px;
    }
}
</style>