<template>
    <div class="row center">
        <div class="col-9 col-md-13 col-xs-16">
            <h2 class="align-center bottom-1">
                {{ title }}
            </h2>
            <p>
                {{ intro }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['title', 'intro']
}
</script>

<style>

</style>