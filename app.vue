<template lang="pug">
NuxtLayout
  NuxtPage
</template>

<style lang="sass">
body
  font-family: 'Noto Sans JP', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif
.section
  padding: 30px 0
.container
  padding: 0 20px
  @include pc
    width: 100%
    max-width: 992px
    margin: 0 auto
.cell-4-pc
  @include pc
    margin: 0 auto
    display: flex
    align-items: stretch
    flex-wrap: wrap
    & > *
      width: calc(50% - 10px)
      margin-right: 20px
      &:nth-child(even)
        margin-right: 0
.t-center
  text-align: center
.eyecatch
  width: 100%
  aspect-ratio: 16/9
  background-color: $grey
.bg-base
  background-color: $base
.f-12
  font-size: 12px
.f-20
  font-size: 20px
.f-24
  font-size: 24px
.f-32
  font-size: 32px
.f-36
  font-size: 36px
.f-64
  font-size: 64px
.px-2
  padding: 0 20px
.mb-1
  margin-bottom: 10px
.mb-2
  margin-bottom: 20px
.mb-3
  margin-bottom: 30px
</style>
