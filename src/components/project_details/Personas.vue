<template>
  <section class="personas padding-default">
    <div class="container">
      <div class="row center">
        <div class="col-9">
          <h2 class="align-center bottom-1">
            Personas
          </h2>
          <p>
            I created three personas to fit the target demographic. We need a business professional, an investor,
            and a developer to fit these objectives.
          </p>
        </div>
      </div>
      <div class="row top-2 image-row center">
        <div class="col-free image-col" v-for="(persona, i) in personas.images" :key="i">
          <img :src="require(`@/assets/images${persona.img}`)" :alt="persona.alt">
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

.image-row {
  margin-left: calc(-1 * var(--image-row-spacing));
  margin-right: calc(-1 * var(--image-row-spacing));
}

.image-col {
  padding-left: var(--image-row-spacing);
  padding-right: var(--image-row-spacing);
}

</style>
