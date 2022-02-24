<template>
  <section class="wireframes padding-default bg-grey">
    <div class="container">
      <div class="row center">
        <div class="col-9 content-col">
          <h2 class="align-center bottom-1">
            Wireframes & Prototypes
          </h2>
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
      </div>
      <div class="row top-2 image-row center">
        <div class="col-free image-col" v-for="(wireframe, i) in wireframes.images" :key="i">
          <img :src="require(`@/assets/images${wireframe.img}`)" :alt="wireframe.alt">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['wireframes']
}
</script>

<style>

.content-col {
  padding-left: 18px;
  padding-right: 18px;
}

.image-row {
  margin-left: calc(-1 * var(--image-row-spacing));
  margin-right: calc(-1 * var(--image-row-spacing));
}

.image-col {
  padding-left: var(--image-row-spacing);
  padding-right: var(--image-row-spacing);
}

</style>
