<template lang="pug">
.hero
.content
  .logo
    img(src="@/assets/images/logo.png")
    .text エルビナ
  .concept
    p トレーナーは全員女性。
    p 安心してトレーニングがしたい。
    p そんな夢を叶えるパーソナルジムです。
</template>

<style lang="sass">
.hero
  width: 100%
  height: 340px
  background-color: $grey
.content
  text-align: center
  padding: 50px 0
  .logo
    margin-bottom: 20px
    img
      height: 48px
      width: auto
      margin: 0 auto 10px
    .text
      font-size: 20px
  .concept
    font-weight: bold
</style>
