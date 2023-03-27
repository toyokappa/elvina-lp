<template lang="pug">
section.section(:class="{ 'bg-base': bgBase }")
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
    iframe(src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12848.69494225413!2d139.0573082!3d36.380788!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601ef317f0557217%3A0x69ce32a6d429180c!2z5aWz5oCn5bCC55So44OR44O844K944OK44Or44K444OgRWx2aW5h!5e0!3m2!1sja!2sjp!4v1679916177725!5m2!1sja!2sjp" title="gym map" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade")
</template>

<script setup lang="ts">
interface Props {
  bgBase?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  bgBase: false,
});
</script>

<style lang="sass" scoped>
.map
  @include pc
    width: 100%
    max-width: 992px
    margin: 0 auto
</style>
