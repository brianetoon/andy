<template>
  <section class="final-product">
    <div class="container">
      <div class="row center">
        <div class="col-9">
          <h2 class="align-center bottom-1">
            Final Product
          </h2>
          <p>
            Here's the end result of all of the hard work that went into the project. Keep scrolling if you want to learn
            about all the work that went into the process.
          </p>
          <!-- gradient button to go here -->
          <img :src="finalProduct.img" :alt="finalProduct.alt">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['finalProduct']
}
</script>

<style>
  .final-product {
    padding: var(--spacing-lg) 0;
  }
</style>
