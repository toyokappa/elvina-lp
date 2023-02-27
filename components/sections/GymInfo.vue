<template lang="pug">
section.section.bg-base
  h2.t-center.f-24.mb-3 店舗情報
  .container.mb-2
    .mb-2
      strong 営業時間
      p 10:00〜22:00（最終受付21:00）
    .mb-2
      strong 住所
      p 群馬県前橋市下石倉町12-4
      p AZBL BOXを利用
  .map.eyecatch
    iframe(src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4564.642914470674!2d139.05398959383797!3d36.38047622690952!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa8a4e5446f4dc5ed!2z44OR44O844K944OK44Or44OI44Os44O844OL44Oz44Kw44K444OgQVpCTCBQUklWQVRF5YmN5qmL5LiL55-z5YCJ5bqXIC8g44Os44Oz44K_44Or44K444OgQVpCTCBCT1jliY3mqYvkuIvnn7PlgInlupc!5e0!3m2!1sja!2sjp!4v1670689512120!5m2!1sja!2sjp" title="gym map" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade")

</template>

<style lang="sass" scoped>
.map
  @include pc
    width: 100%
    max-width: 992px
    margin: 0 auto
</style>
