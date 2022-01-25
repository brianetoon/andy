<template>
  <main class="home">
    <VideoBanner />
    <FeaturedProjects />
    <MyProcess />
    <AboutMe />
    <Contact />
  </main>
</template>

<script>
import VideoBanner from '@/components/home/VideoBanner.vue'
import FeaturedProjects from '@/components/home/FeaturedProjects.vue'
import MyProcess from '@/components/home/MyProcess.vue'
import AboutMe from '@/components/home/AboutMe.vue'
import Contact from '@/components/home/Contact.vue'

export default {
  components: { VideoBanner, FeaturedProjects, MyProcess, AboutMe, Contact }
}
</script>

<style>
.home section:not(:first-child) {
  padding: 0 40px;
  margin: 70px 0;
}
</style>