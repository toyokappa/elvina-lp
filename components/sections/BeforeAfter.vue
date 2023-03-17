<template lang="pug">
section.section
  h2.t-center.f-24.mb-3 Before/After
  .container
    .t-center.mb-2 Elvinaを実際に体験いただいた方々
    .cell-pc.cell-2.mb-2(v-for="monitor in monitorList" :key="monitor.id")
      .content.mb-1
        .before-after
          .before
            img(:src="monitor.photo.before" alt="Before" width="400" height="800")
            .text-label before
          .after
            img(:src="monitor.photo.after" alt="After" width="400" height="800")
            .text-label after
        img.arrow-right(src="@/assets/images/vector-before-after.svg" alt=">>" width="50" height="50")
      .content
        .detail
          .t-center
            .profile.mb-1 {{ monitor.profile }}
            .course.f-20.mb-2 {{ monitor.course }}
            .separate.mb-2
          .result(v-for="result in monitor.results" :key="result.parts")
            strong {{ result.parts }}
            .result-body
              .before
                span.f-20 {{ result.before }}
                span {{ result.unit }}
              img(src="@/assets/images/vector-before-after.svg" alt=">>" width="50" height="50")
              .after
                span.f-24 {{ result.after }}
                span {{ result.unit }}
              .defference
                span.f-24 {{ Math.floor((result.after * 10) - (result.before * 10)) / 10 }}
                span {{ result.unit }}
    PartsButton(to="/trial") 無料体験トレーニングを予約する
</template>

<script setup>
import before01 from "@/assets/images/before01.jpg";
import after01 from "@/assets/images/after01.jpg";
import before02 from "@/assets/images/before02.jpg";
import after02 from "@/assets/images/after02.jpg";

const monitorList = [
  {
    id: 1,
    profile: "27歳女性/身長154cm",
    course: "ショートコース(2ヶ月全16回)",
    photo: {
      before: before01,
      after: after01,
    },
    results: [
      {
        parts: "体重",
        unit: "kg",
        before: 63.4,
        after: 58.2,
      },
      {
        parts: "体脂肪率",
        unit: "%",
        before: 38.2,
        after: 33.1,
      },
      {
        parts: "ウェスト",
        unit: "cm",
        before: 73.8,
        after: 66.8,
      },
      {
        parts: "ヒップ",
        unit: "cm",
        before: 101.7,
        after: 96.2,
      },
    ],
  },
  {
    id: 2,
    profile: "24歳女性/身長160cm",
    course: "ショートコース(2ヶ月全16回)",
    photo: {
      before: before02,
      after: after02,
    },
    results: [
      {
        parts: "体重",
        unit: "kg",
        before: 88.2,
        after: 77.8,
      },
      {
        parts: "体脂肪率",
        unit: "%",
        before: 47.8,
        after: 43.3,
      },
      {
        parts: "ウェスト",
        unit: "cm",
        before: 115,
        after: 101,
      },
      {
        parts: "ヒップ",
        unit: "cm",
        before: 112,
        after: 104,
      },
    ],
  },
];
</script>

<style lang="sass" scoped>
.content
  position: relative
  .arrow-right
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, calc(-50% - 30px))
.before-after
  width: 100%
  display: flex
  .before, .after
    .text-label
      text-align: center
      font-weight: bold
      width: 100%
      padding: 10px 0
  .before
    border-right: 2px solid $white
    .text-label
      background-color: $grey
  .after
    border-left: 2px solid $white
    .text-label
      color: $white
      background-color: $sun-red
.detail
  background-color: $white
  padding: 20px
  border: 1px solid $black
  border-radius: 5px
  .separate
    display: inline-block
    width: 50px
    border-bottom: 5px solid $grey
  .result
    .result-body
      display: flex
      align-items: center
      .before
        margin-right: 10px
      img
        width: 24px
        height: auto
        margin-right: 10px
      .defference
        color: $white
        background-color: $sun-red
        padding: 5px 10px
        border-radius: 5px
        margin-left: auto
</style>
