<template lang="pug">
section.section.bg-base
  h2.t-center.f-24.mb-3 サービス内容
  .container
    .cell-pc.cell-2
      PartsCardImage.mb-2(
        v-for="(service, index) in serviceList"
        :key="index"
        :name="service.name"
        :image="service.image"
      )
    PartsButton(to="/trial") 無料体験トレーニングを予約する
</template>

<script setup>
import image01 from "@/assets/images/service01.jpg";
import image02 from "@/assets/images/service02.png";
import image03 from "@/assets/images/service03.jpg";
import image04 from "@/assets/images/service04.jpg";

const serviceList = [
  {
    name: "パーソナルトレーニング",
    image: image01,
  },
  {
    name: "完全個室の提供",
    image: image02,
  },
  {
    name: "高精度体組成計での測定",
    image: image03,
  },
  {
    name: "食事改善カウンセリング",
    image: image04,
  },
];
</script>
