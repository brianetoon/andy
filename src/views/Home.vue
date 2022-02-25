<template>
  <main class="home">
    <VideoBanner />
    <FeaturedProjects />
    <MyProcess />
    <AboutMe />
  </main>
</template>

<script>
import VideoBanner from '@/components/home/VideoBanner.vue'
import FeaturedProjects from '@/components/home/FeaturedProjects.vue'
import MyProcess from '@/components/home/MyProcess.vue'
import AboutMe from '@/components/home/AboutMe.vue'

export default {
  components: { 
    VideoBanner, 
    FeaturedProjects, 
    MyProcess, 
    AboutMe 
  }
}
</script>

<style>
.home section:not(:first-child) {
  padding: 0 30px;
  margin: 90px 0;
}
.home section:not(:first-child) > * {
  margin: 30px auto;
}

@media screen and (min-width: 768px) {
  .home section:not(:first-child) {
    padding: 0 40px
  }
  .home section:not(:first-child) > * {
    margin: 40px auto;
  }
}

@media screen and (min-width: 900px) {
  .home section:not(:first-child) {
    padding: 0 50px;
    margin: var(--spacing-lg) auto 120px;
    max-width: 1120px;
  }
  .home section:not(:first-child) > * {
    margin: 50px auto;
  }
}
</style>
