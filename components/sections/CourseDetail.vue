<template lang="pug">
section.section
  h2.t-center.f-24.mb-3 初めての方へ
  .container
    .description.mb-3 Elvina（エルビナ）は、女性のダイエットのダイエットのお悩みを解決する3つのコースをご用意しております。ご予算や目的に応じてお選びいただけます。
    .cell-pc.cell-3
      PartsCard.mb-2(
        v-for="(course, ci) in courseList"
        :key="ci"
        :headerMain="course.headerMain"
        :headerSub="course.headerSub"
      )
        .course
          .mb-2
            p(v-for="text in course.texts" :key="text") {{ text }}
          .mb-2
            p 実施期間
            p.value.f-24 {{ course.term }}ヶ月(全{{ course.count }}回)
          .mb-2
            p 入会金
            p.value
              span.f-36 {{ course.admissionFee.toLocaleString() }}
              span.f-20 円(税込)
          div
            p コース料金
            p.value
              span.f-36 {{ course.courseFee.toLocaleString() }}
              span.f-20 円(税込)
    PartsButton(to="/trial") 無料体験トレーニングを予約する
</template>

<script setup>
const courseList = [
  {
    headerMain: "Trial",
    headerSub: "トライアルコース",
    texts: ["まずはパーソナルトレーニングを", "試したい方へ"],
    term: 1,
    count: 8,
    admissionFee: 22000,
    courseFee: 104000,
  },
  {
    headerMain: "Short",
    headerSub: "ショートコース",
    texts: ["短期間で引き締まった", "身体を目指したい方へ"],
    term: 2,
    count: 16,
    admissionFee: 22000,
    courseFee: 192000,
  },
  {
    headerMain: "Standard",
    headerSub: "スタンダードコース",
    texts: ["しっかりと時間を掛けて", "プロポーションを改善したい方へ"],
    term: 3,
    numberOfTraining: 24,
    admissionFee: 22000,
    courseFee: 276000,
  },
];
</script>

<style lang="sass">
.course
  text-align: center
  .value
    font-weight: bold
</style>
