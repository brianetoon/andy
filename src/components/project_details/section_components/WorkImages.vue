<template>
    <div class="work row top-2 image-row center wrap-sm">
        <div class="col-free image-col no-mobile-horizontal-padding" v-for="(img, i) in images" :key="i">
            <div class="image-wrap lamden" :class="{ last: i === (images.length - 1) }">
                <img :src="require(`@/assets/images${img.url}`)" :alt="img.alt">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['images']
}
</script>

<style>
.work .image-wrap img {
  height: 485px;
}

@media (min-width: 992px) and (max-width: 1199px) {
  .work .image-wrap img {
    height: 414px;
  }
}

@media (min-width: 850px) and (max-width: 991px) {
  .work .image-wrap img {
    height: 350px;
  }
}

@media (min-width: 768px) and (max-width: 849px) {
  .work .image-wrap img {
    height: 313px;
  }
}

@media (max-width: 767px) {
  .image-wrap.last {
    max-width: 320px;
  }
  .work .image-wrap img {
    height: auto;
  }
}
</style>