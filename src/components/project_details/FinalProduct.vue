<template>
  <section class="final-product padding-default">
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
          <a href="#" class="btn btn-small top-2" :class="finalProduct.btnClasses">View Chrome Extension</a>
        </div>
      </div>
      <div class="row center top-2">
        <div class="col-11 image-wrap" :class="finalProduct.imageClass">
          <img :src="require(`@/assets/images${finalProduct.img}`)" :alt="finalProduct.alt">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import '@/assets/styles/transitions.css';
export default {
  props: ['finalProduct']
}
</script>

<style>
  .image-wrap {
    padding: 4px;
  }
  .btn {
    margin-left: auto;
    margin-right: auto;
  }
</style>
