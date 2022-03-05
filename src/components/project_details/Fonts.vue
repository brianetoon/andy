<template>
  <section class="fonts padding-default bg-grey">
    <div class="container">
      <div class="row center">
        <div class="col-9 col-md-13 col-xs-16">
          <h2 class="align-center bottom-1">
            Fonts, Colors, Buttons
          </h2>
          <p>
            {{ fonts.paragraph }}
          </p>
        </div>
      </div>
      <div class="row top-2 image-row center">
        <div class="col-free image-col">
          <img class="image-medium" :src="require(`@/assets/images${fonts.images.img}`)" :alt="fonts.images.alt">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['fonts']
}
</script>

<style>


</style>
