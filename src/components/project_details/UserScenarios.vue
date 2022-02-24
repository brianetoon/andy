<template>
  <section class="scenarios padding-default bg-grey">
    <div class="container">
      <div class="row center">
        <div class="col-9">
          <h2 class="align-center bottom-1">
            User Scenarios
          </h2>
          <p>
            After research and competitive patterning, I created all the possible user scenarios Bob, Ace, and Max would
            need to accomplish in the wallet.
          </p>
        </div>
      </div>
      <div class="row top-2 image-row center">
        <div class="col-free image-col" v-for="(scenario, i) in scenarios.images" :key="i">
          <img :src="require(`@/assets/images${scenario.img}`)" :alt="scenario.alt">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['scenarios']
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
