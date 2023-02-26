<template lang="pug">
section.section.bg-base
  h2.t-center.f-24.mb-3 サービス内容
  .px-2.mb-2
    PartsCardImage(
      v-for="(service, index) in serviceList"
      :key="index"
      :name="service.name"
      :class="{ 'mb-2': serviceList.length > index + 1 }"
    )
  .px-2
    PartsButton(to="/trial") 無料体験トレーニングを予約する
</template>

<script setup>
const serviceList = [
  {
    name: "パーソナルトレーニング",
  },
  {
    name: "完全個室の提供",
  },
  {
    name: "高精度体組成計での測定",
  },
  {
    name: "食事改善カウンセリング",
  },
];
</script>
