<template>
    <div class="row center">
        <a :href="button.url" target="_blank" 
            class="btn btn-small top-2" :class="button.classes">
            {{ button.text }}
        </a>
    </div>
</template>

<script>
export default {
    props: ['button']
}
</script>

<style>

</style>