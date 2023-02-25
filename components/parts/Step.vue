<template lang="pug">
.step
  .step-header
    .circle
      .item
        .f-12 STEP
        .value.f-24 {{ step }}
    .step-title {{ title }}
  .step-body
    .step-side
      .line(v-if="!noLine")
    .step-main
      .eyecatch.mb-1
      .description
        slot
</template>

<script setup>
const props = defineProps({
  step: Number,
  title: String,
  noLine: Boolean,
});
</script>

<style lang="sass">
.step
  .step-header
    display: flex
    align-items: center
    .circle
      font-weight: bold
      width: 60px
      height: 60px
      border: 2px solid $pink
      border-radius: 50%
      margin-right: 10px
      position: relative
      .item
        text-align: center
        color: $pink
        position: absolute
        top: 50%
        left: 50%
        transform: translate(-50%, -50%)
        .value
          margin-top: -5px
  .step-body
    display: flex
    .step-side
      width: 70px
      margin-right: 10px
      .line
        height: calc(100% + 20px)

        background-image: url("@/assets/images/line_dot.png")
        background-size: 7px 28px
        background-position: center
        background-repeat: repeat-y
    .step-main
      width: 100%
      margin-left: auto
      font-size: 14px
</style>
