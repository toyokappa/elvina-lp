<template lang="pug">
section.section
  h2.t-center.mb-3
    p.f-24 お支払い方法
  .container
    PartsCard.mb-2(headerSub="クレジットカード(一括のみ)")
      .row.mb-1
        .col
          img(src="@/assets/images/card-visa.png" alt="VISA" width="120" height="39")
        .col
          img(src="@/assets/images/card-mastercard.png" alt="Mastercard" width="120" height="94")
        .col
          img(src="@/assets/images/card-jcb.png" alt="JCB" width="120" height="93")
      .row
        .col
          img(src="@/assets/images/card-american_express.png" alt="American Express" width="120" height="73")
        .col
          img(src="@/assets/images/card-diners_club.png" alt="diners club" width="120" height="76")
        .col
          img(src="@/assets/images/card-discover.png" alt="discover" width="120" height="72")
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
