<template>
    <section class="padding-default">
        <div class="container">
            <Intro :title="section.title" :intro="section.intro" />
            <Button :button="section.button" v-if="section.button" />
            <Deliverables :deliverables="section.deliverables" v-if="section.deliverables"/>
            <SingleImage :image="section.image" v-if="section.image" />
            <MultiImage :images="section.images" v-if="section.images" />
            <WorkImages :images="section.workImages" v-if="section.workImages"/>
        </div>
    </section>
</template>

<script>
import Intro from './section_components/Intro.vue'
import Button from './section_components/Button.vue'
import Deliverables from './section_components/Deliverables.vue'
import SingleImage from './section_components/SingleImage.vue'
import MultiImage from './section_components/MultiImage.vue'
import WorkImages from './section_components/WorkImages.vue'

export default {
    props: ['section'],
    components: {
        Intro,
        Button,
        Deliverables,
        SingleImage,
        MultiImage,
        WorkImages
    }
}
</script>

<style>
.image-wrap {
    padding: 4px;
}
</style>