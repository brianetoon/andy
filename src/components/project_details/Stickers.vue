<template>
  <section class="stickers padding-default">
    <div class="container">
      <div class="row center">
        <div class="col-9 content-col">
          <h2 class="align-center bottom-1">
            Stickers
          </h2>
          <p>
            {{ stickers.paragraph }}
          </p>
        </div>
      </div>
      <div class="row top-2 image-row center">
        <div class="col-free image-col">
          <img :src="require(`@/assets/images${stickers.images.img}`)" :alt="stickers.images.alt">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['stickers']
}
</script>

<style>


</style>
