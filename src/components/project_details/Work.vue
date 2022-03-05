<template>
  <section class="work padding-default-top">
    <div class="container">
      <div class="row center">
        <div class="col-10 col-md-13 col-xs-16">
          <h2 class="align-center bottom-1">
            More Work
          </h2>
          <p>
            The team was so excited with all the work that was done on the Lamden wallet that I was given the contract
            for a redesigned website. Check out their new website!
          </p>
          <a :href="work.url" class="btn btn-small top-2" :class="work.btnClasses" target="_blank">View Website</a>
        </div>
      </div>
      <div class="row top-2 image-row center wrap-sm">
        <div class="col-free image-col no-mobile-horizontal-padding" v-for="(image, i) in work.images" :key="i">
          <div class="image-wrap" :class="work.imageClass" v-bind:class="{ last: i === (work.images.length - 1) }">
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

.work .image-wrap img {
  height: 485px;
}

@media (min-width: 992px) and (max-width: 1199px) {
  .work .image-wrap img {
    height: 414px;
  }
}

@media (min-width: 850px) and (max-width: 991px) {
  .work .image-wrap img {
    height: 350px;
  }
}

@media (min-width: 768px) and (max-width: 849px) {
  .work .image-wrap img {
    height: 313px;
  }
}

@media (max-width: 767px) {
  .image-wrap.last {
    max-width: 320px;
  }
  .work .image-wrap img {
    height: auto;
  }
}

</style>
