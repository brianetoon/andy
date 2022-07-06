<template>
    <div class="row center top-2">
        <div class="col-14 col-md-16 image-wrap" :class="image.classes">
            <img :src="require(`@/assets/images${image.url}`)" 
                :alt="image.alt" class="center-img">
        </div>
    </div>
</template>

<script>
export default {
    props: ['image']
}
</script>

<style>

</style>