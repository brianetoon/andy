<template>
  <div class="top-3 center content-padding">
     <div class="top-2" v-for="(img, i) in images" :key="i">
        <img :src="require(`@/assets/images${img.url}`)" :alt="img.alt" class="center-image">
     </div>
    </div>
</template>

<script>
export default {
  props: ['images']
}
</script>

<style>

</style>