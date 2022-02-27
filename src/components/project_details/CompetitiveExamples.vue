<template>
  <section class="personas padding-default">
    <div class="container">
      <div class="row center">
        <div class="col-9 col-md-13 col-xs-16">
          <h2 class="align-center bottom-1">
            Competitive Examples
          </h2>
          <p>
            {{ examples.paragraph }}
          </p>
        </div>
      </div>
      <div class="row top-2 image-row center wrap-xs">
        <div class="col-free col-sm-8 col-xs-free image-col" v-for="(example, i) in examples.images" :key="i">
          <div class="image-wrap" :class="examples.imgClass">
            <img :src="require(`@/assets/images${example.img}`)" :alt="example.alt">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['examples']
}
</script>

<style>



</style>
