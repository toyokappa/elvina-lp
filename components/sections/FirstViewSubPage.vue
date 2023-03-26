<template lang="pug">
.container
  ul.breadcrumb
    li
      nuxt-link(to="/") エルビナ
    template(v-for="item in breadcrumb" :key="item.title")
      li
        img(src="@/assets/images/vector-right.svg" alt=">" width="16" height="17")
      li
        template(v-if="item.path")
          nuxt-link(:to="item.path") {{ item.title }}
        template(v-else)
          | {{ item.title }}
  h1.mb-3(v-if="mainHeader")
    PartsElvinaFont.underbar.f-64.mb-1 {{ pageTitleSub }}
    .f-24 {{ pageTitle }}
  .mb-3(v-else)
    PartsElvinaFont.underbar.f-64.mb-1 {{ pageTitleSub }}
    .f-24 {{ pageTitle }}
  PartsCampaign.mb-3
//- .eyecatch.top
</template>

<script setup lang="ts">
interface Props {
  mainHeader?: boolean;
  pageTitle: string;
  pageTitleSub: string;
  breadcrumb: object[];
}

const props = withDefaults(defineProps<Props>(), {
  mainHeader: true,
});
</script>

<style lang="sass">
.breadcrumb
  font-size: 12px
  list-style: none
  display: flex
  flex-wrap: nowrap
  align-items: center
  margin: 10px 0
  overflow: hidden
  li
    margin-right: 5px
    flex-shrink: 0
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
