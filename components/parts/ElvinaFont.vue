<template lang="pug">
.font
  slot
  .front-text(:style="styles")
  .back-text(:style="styles")
</template>

<script setup>
const slotText = useSlots().default()[0].children;
const styles = computed(() => ({
  "--content": `"${slotText}"`,
}));
</script>

<style lang="sass">
.font
  display: inline-block
  text-align: left
  position: relative
  color: transparent
  margin-right: 2.5px
  letter-spacing: 1px
  font-weight: bold
  .front-text::before
    content: var(--content)
    color: $white
    -webkit-text-stroke: 1px $black
    position: absolute
    top: 0
    left: 2.5px
    z-index: 2
  .back-text::before
    content: var(--content)
    color: $pink
    -webkit-text-stroke: 1px $black
    position: absolute
    top: 0
    z-index: 1
</style>
