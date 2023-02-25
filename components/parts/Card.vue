<template lang="pug">
.card
  .header.mb-1
    .header-sub {{ headerSub }}
    .header-main.mb-1
      PartsElvinaFont {{ headerMain }}
    .separate
  .body
    slot
</template>

<script setup>
const props = defineProps({
  headerMain: [String, Number],
  headerSub: String,
});
</script>

<style lang="sass" scoped>
.card
  padding: 30px 20px
  border: 1px solid $black
  border-radius: 5px
  .header
    text-align: center
    .header-main
      font-size: 36px
    .separate
      display: inline-block
      width: 50px
      border-bottom: 5px solid $grey
</style>
