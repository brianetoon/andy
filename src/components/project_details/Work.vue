<template>
  <section class="work padding-default">
    <div class="container">
      <div class="row center">
        <div class="col-10">
          <h2 class="align-center bottom-1">
            More Work
          </h2>
          <p>
            The team was so excited with all the work that was done on the Lamden wallet that I was given the contract
            for a redesigned website. Check out their new website!
          </p>
          <a href="#" class="btn btn-small top-2" :class="work.btnClasses">View Website</a>
        </div>
      </div>
      <div class="row top-2 image-row center">
        <div class="col-free image-col" v-for="(image, i) in work.images" :key="i">
          <div class="image-wrap" :class="work.imageClass">
            <img :src="require(`@/assets/images${image.img}`)" :alt="image.alt">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['work']
}
</script>

<style>

.image-row {
  margin-left: calc(-1 * var(--image-row-spacing));
  margin-right: calc(-1 * var(--image-row-spacing));
}

.image-col {
  padding-left: var(--image-row-spacing);
  padding-right: var(--image-row-spacing);
}

</style>
