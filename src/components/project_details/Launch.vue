<template>
  <section class="launch padding-default" v-bind:class="{ 'bg-grey': launch.bgGrey }">
    <div class="container">
      <div class="row center">
        <div :class="launch.topCol">
          <h2 class="align-center bottom-1">
            {{ launch.title }}
          </h2>
          <p :class="'paragraph-' + slug">
            {{ launch.description }}
          </p>
          <a href="#" class="btn btn-small top-2" :class="launch.btnClasses">View Chrome Extension</a>
        </div>
      </div>
      <div class="row center top-2">
        <div class="col-11 image-wrap" :class="launch.imageClass">
          <img :src="require(`@/assets/images${launch.img}`)" :alt="launch.alt">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import '@/assets/styles/transitions.css';
export default {
  props: ['launch', 'slug']
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
p.paragraph-lamden {
  margin-left: 54px;
}
</style>
