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
          <a href="#" class="btn btn-small top-2" :class="launch.btnClasses">{{ launch.btnText }}</a>
        </div>
      </div>
      <div class="row center top-2">
        <div class="col-14 col-md-16 image-wrap" :class="launch.imageClass">
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
.launch:not(.bg-grey) {
  padding-bottom: 0;
}

@media (max-width: 767px) {
  p.paragraph-lamden {
    margin-left: 0;
  }
}

</style>
