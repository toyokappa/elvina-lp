<template lang="pug">
.container
  ul.breadcrumb
    li
      nuxt-link(to="/") エルビナ
    li
      img(src="@/assets/images/vector-right.svg")
    li {{ pageTitle }}
  h1.mb-3
    PartsElvinaFont.underbar.f-64.mb-1 {{ pageTitleSub }}
    .f-24 {{ pageTitle }}
  PartsCampaign.mb-3
.eyecatch.top
</template>

<script setup>
const props = defineProps({
  pageTitle: String,
  pageTitleSub: String,
});
</script>

<style lang="sass">
.breadcrumb
  font-size: 12px
  list-style: none
  display: flex
  align-items: center
  margin: 10px 0
  li
    margin-right: 10px
    a
      color: inherit
      text-decoration: none
  li:last-child
    margin-right: 0
.underbar
  position: relative
  &::before
    width: calc(100% - 15px)
    content: ""
    height: 7px
    background-color: $pink
    border: 1px solid $black
    position: absolute
    bottom: -5px
    left: 4.5px
  &::after
    width: calc(100% - 10px)
    content: ""
    height: 7px
    background-color: $white
    border: 1px solid $black
    position: absolute
    bottom: -5px
    left: 7px
.eyecatch.top
  aspect-ratio: 5/2
</style>
