<template lang="pug">
nuxt-link.campaign(to="/trial")
  img(src="@/assets/images/campaign.png" width="480" height="227" alt="キャンペーン実施中！")
  .t-center.f-14 まずは無料体験から！お気軽にご予約ください！
</template>

<style lang="sass" scoped>
.campaign
  display: block
  color: inherit
  text-decoration: none
  img
    width: 100%
    max-width: 480px
    margin: 0 auto
</style>
