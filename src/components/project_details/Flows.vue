<template>
  <section class="flows padding-default">
    <div class="container">
      <div class="row center">
        <div class="col-9 col-md-13 col-xs-16">
          <h2 class="align-center bottom-1">
            Flows
          </h2>
          <p>
            I created user flows for a first time user to make sure all personas had an easy time with their first experience.
          </p>
        </div>
      </div>
      <div class="row top-2 center">
        <div class="col-12 col-md-14 col-xs-16 align-center">
          <img :src="require(`@/assets/images${flows.img}`)" :alt="flows.alt">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['flows']
}
</script>

<style>


</style>
