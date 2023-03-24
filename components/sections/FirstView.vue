<template lang="pug">
section
  video.hero(playsinline muted autoplay loop)
    source(src="@/assets/videos/hero.mp4" type="video/mp4")
  .content
    h1.logo
      img(src="@/assets/images/logo.png" alt="Elvina" width="157" height="48")
      .text エルビナ
    .concept.mb-3
      p トレーナーは全員女性。
      p 安心してトレーニングがしたい。
      p そんな夢を叶えるパーソナルジムです。
    .container
      PartsCampaign
</template>

<style lang="sass" scoped>
.hero
  width: 100%
  height: auto
  aspect-ratio: 4/3
  background-color: $grey
  object-fit: cover
  object-position: center center
  @include pc
    aspect-ratio: 16/9
    height: auto
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
