<template>
  <section class="personas padding-default">
    <div class="container">
      <div class="row center">
        <div class="col-9 col-md-13 col-xs-16">
          <h2 class="align-center bottom-1">
            Personas
          </h2>
          <p>
            I created three personas to fit the target demographic. We need a business professional, an investor,
            and a developer to fit these objectives.
          </p>
        </div>
      </div>
      <div class="row top-2 image-row center wrap-sm">
        <div class="col-free col-sm-8 col-xs-free image-col" v-for="(persona, i) in personas.images" :key="i">
          <div class="image-wrap" :class="personas.imgClass">
            <img class="image-small" :src="require(`@/assets/images${persona.img}`)" :alt="persona.alt">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['personas']
}
</script>

<style>



</style>
