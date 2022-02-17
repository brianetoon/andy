<template>
    <section id="about">
        <div class="about-border">
            <div class="about-content">
                <img src="@/assets/images/shaq.png" class="shaq" alt="shaq">
                <div v-for="(para, i) in about" :key="i" class="about-text">
                    <h2>{{ para.title }}</h2>
                    <p>{{ para.text }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import store from '@/store.js'
import { ref } from '@vue/reactivity'

export default {
    setup() {
        const about = ref(store.about)

        return { about }
    }
}
</script>

<style>
.about-border {
    margin: 30px auto;
    padding: 5px;
    border-radius: 10px;
    background: linear-gradient(to right, #00BAC6, #C5FFAA);
}
.about-content {
    background: var(--background);
    padding: 30px;
    border-radius: 7px;
}
.shaq {
    max-width: 200px;
    display: block;
    border-radius: 200px;
    margin: 25px auto;
}
.about-text {
    margin: 25px 0;
}
.about-text h2 {
    margin-bottom: 15px;
}

@media screen and (min-width: 900px) {
    .about-content {
        position: relative;
        padding: 50px;
    }
    .about-text {
        max-width: 60%;
    }
    .shaq {
        position: absolute;
        right: 10%;
        top: 45%;
        transform: translateY(-50%);
    }
}

@media screen and (min-width: 1200px) {
    #about {
        max-width: 1280px;
    }
    .about-content {
        padding: 80px;
    }
    .about-text {
        max-width: 65%;
    }
    .shaq {
        max-width: 250px;
    }
}
</style>