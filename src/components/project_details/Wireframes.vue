<template>
  <section class="wireframes padding-default" v-bind:class="{ 'bg-grey': wireframes.bgGrey }">
    <div class="container">
      <div class="row center">
        <div class="col-9 content-col">
          <h2 class="align-center bottom-1">
            {{ wireframes.heading }}
          </h2>
          <div v-if="slug === 'lamden'">
            <p class="bottom-1-5">
              After creating a flow I was able to start wireframes of the new experience. Since cryptocurrency and browser
              extensions are new to most users, I wanted to make sure I was guiding them each step of the way and gave them
              paths if they were confused or lost.
            </p>
            <p>
              I created a <a class="text-only underline" href="#">prototype</a> of the wireframes to share with the team to
              get feedback. Here's the prototype in Axure. Fast iterations are very essential to this process.
            </p>
          </div>
          <div v-if="slug === 'blender'">
            <p>
              This was a project that started with few requirements and direction. To save myself time and to move fast,
              I created wireframes to make sure the project stakeholder could give approval on the idea and direction.
            </p>
          </div>
        </div>
      </div>
      <div class="row top-2 image-row center">
        <div class="col-free image-col" v-for="(wireframe, i) in wireframes.images" :key="i">
          <div class="image-wrap" :class="wireframes.imgClass">
            <img :src="require(`@/assets/images${wireframe.img}`)" :alt="wireframe.alt">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['wireframes', 'slug']
}
</script>

<style>

.content-col {
  padding-left: 18px;
  padding-right: 18px;
}



</style>
