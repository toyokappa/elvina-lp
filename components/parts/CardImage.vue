<template lang="pug">
.card
  img.eyecatch(:src="image" :alt="name")
  .text
    .f-20 {{ name }}
</template>

<script setup>
const props = defineProps({
  name: String,
  image: String,
});
</script>

<style lang="sass" scoped>
.card
  .eyecatch
    border-radius: 5px 5px 0 0
  .text
    text-align: center
    background-color: $white
    border-radius: 0 0 5px 5px
    padding: 20px 0
</style>
