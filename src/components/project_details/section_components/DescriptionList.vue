<template>
  <div class="row center">
    <ul class="description-list col-9 col-md-13 col-xs-16">
      <li v-for="(item, i) in list" :key="i" class="description-list__item" :class="item.classes">
        <span class="bold">{{ item.term }}</span> 
        <span v-if="item.details">{{ item.details }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['list']
}
</script>

<style>
.description-list__item {
  font-size: var(--base-font-size);
  line-height: var(--base-line-height);
}
</style>