<template>
    <footer>
        <h2>Let's Work Together</h2> 
        <p>
            If you want to chat about a potential project, have a question, or just need some good travel tips, email me at 
            <a href="mailto: uxandyphil@gmail.com" class="link">uxandyphil@gmail.com</a>. 
            I'd also love to connect via 
            <a :href="link.href" v-for="(link, i) in links" 
                :key="i" class="comma" target="_blank">
                <span class="link">{{ link.name }}</span>
            </a>.
        </p>
        <a href="mailto: uxandyphil@gmail.com" class="btn btn-solid">Email Me</a>
        <IconBar />
        <p class="sub-text">UX Andy 2022 <a href="#" class="link">Open Source</a>.</p>
    </footer>
</template>

<script>
import store from '@/store.js'
import { ref } from '@vue/reactivity'
import IconBar from './IconBar.vue'

export default {
    components: { IconBar },
    setup() {
        const links = ref(store.social_links)

        return { links }
    }
}
</script>

<style>
footer {
    padding: 30px;
    margin: 30px auto;
}
footer h2 {
    text-align: center;
    margin-bottom: 20px;
}
footer p {
    max-width: 600px;
    margin: 0 auto;
}
.comma:not(:last-child):after {
    content: ", ";
    color: white;
}
.comma:last-child::before {
    content: "or ";
    color: white;
}
footer .btn {
    margin: 30px auto 25px;
}
footer .sub-text {
    margin-top: 40px;
}

@media screen and (min-width: 768px) {
    footer {
        margin: 50px auto;
    }
}
</style>