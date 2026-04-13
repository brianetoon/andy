<template>
    <section class="padding-default">
        <div class="container">
            <Title :title="section.title" v-if="section.title" />
            <Intro :intro="section.intro" v-if="section.intro" />
            <DescriptionList :list="section.description_list" v-if="section.description_list" />
            <Button :button="section.button" v-if="section.button" />
            <Deliverables :deliverables="section.deliverables" v-if="section.deliverables"/>
            <SingleImage :image="section.image" v-if="section.image" />
            <MultiImage :images="section.images" v-if="section.images" />
            <WorkImages :images="section.workImages" v-if="section.workImages"/>
            <StackedImages :images="section.stacked_images" v-if="section.stacked_images" />
        </div>
    </section>
</template>

<script>
import Title from './section_components/Title.vue'
import Intro from './section_components/Intro.vue'
import DescriptionList from './section_components/DescriptionList.vue'
import Button from './section_components/Button.vue'
import Deliverables from './section_components/Deliverables.vue'
import SingleImage from './section_components/SingleImage.vue'
import MultiImage from './section_components/MultiImage.vue'
import WorkImages from './section_components/WorkImages.vue'
import StackedImages from './section_components/StackedImages.vue'

export default {
    props: ['section'],
    components: {
        Title,
        Intro,
        DescriptionList,
        Button,
        Deliverables,
        SingleImage,
        MultiImage,
        WorkImages,
        StackedImages
    }
}
</script>

<style>
.image-wrap {
    padding: 4px;
}
</style>