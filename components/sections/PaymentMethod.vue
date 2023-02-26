<template lang="pug">
section.section
  h2.t-center.mb-3
    p.f-24 お支払い方法
  .content.px-2.mb-2
    PartsCard(headerSub="クレジットカード(一括のみ)")
      .row.mb-1
        .col
          img(src="@/assets/images/card-visa.png")
        .col
          img(src="@/assets/images/card-mastercard.png")
        .col
          img(src="@/assets/images/card-jcb.png")
      .row
        .col
          img(src="@/assets/images/card-american_express.png")
        .col
          img(src="@/assets/images/card-diners_club.png")
        .col
          img(src="@/assets/images/card-discover.png")
  .px-2
    PartsButton(to="/trial") 無料体験トレーニングを予約する
</template>

<style lang="sass" scoped>
.row
  display: flex
  align-items: center
  justify-content: center
  .col
    margin: 10px
    img
      width: 60px
      height: auto
</style>
