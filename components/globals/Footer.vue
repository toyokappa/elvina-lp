<template lang="pug">
footer
  ul.footer-nav
    li
      nuxt-link(to="/terms") 利用規約
    li
      nuxt-link(to="/policy") プライバシーポリシー
    li
      nuxt-link(to="/tokusho") 特定商取引法に基づく表示
  .copy &copy; ELVINA 2023
</template>

<style lang="sass" scoped>
footer
  font-size: 12px
  font-weight: bold
  text-align: center
  color: $white
  background-color: $dark
  width: 100%
  padding: $block-padding
  .footer-nav
    list-style: none
    text-align: center
    margin: 0
    padding: 10px 0
    li
      margin-bottom: 5px
      a
        color: inherit
        text-decoration: none
</style>
