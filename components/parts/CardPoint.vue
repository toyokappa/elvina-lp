<template lang="pug">
.card
  .point
    .f-12 POINT
    .f-24 {{ point }}
  .separate
  .content
    .content-title.mb-1
      p(v-for="title in titles" :key="title") {{ title }}
    .content-body
      p {{ content }}
</template>

<script setup>
const props = defineProps({
  point: Number,
  titles: Array,
  content: String,
});
</script>

<style lang="sass" scoped>
.card
  background-color: $white
  padding: 20px
  border: 1px solid $black
  border-radius: 5px
  display: flex
  .point
    font-weight: bold
    text-align: center
    color: $pink
    margin-right: 10px
  .separate
    height: 50px
    border-right: 3px solid $grey
    margin-right: 10px
  .content
    .content-title
      font-weight: bold
</style>
