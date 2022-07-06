<template>
    <div class="row center top-2 image-row wrap-sm">
        <div class="col-free col-sm-8 col-xs-free image-col"
            v-for="(img, i) in images" :key="i">
            <div class="image-wrap" :class="img.classes">
                <img :src="require(`@/assets/images${img.url}`)" :alt="img.alt" class="image-small">
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

</style>