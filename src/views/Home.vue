<template>
  <div id="home">
    <HomeBanner />
    <FeaturedProjects />
    <MyProcess />
    <AboutMe />
    <Contact />
  </div>
</template>

<script>
import HomeBanner from '@/components/HomeBanner.vue'
import FeaturedProjects from '@/components/FeaturedProjects.vue'
import MyProcess from '@/components/MyProcess.vue'
import AboutMe from '@/components/AboutMe.vue'
import Contact from '@/components/Contact.vue'

export default {
  components: { HomeBanner, FeaturedProjects, MyProcess, AboutMe, Contact }
}
</script>

<style>
#home {
  height: 200vh;
}
</style>