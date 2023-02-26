<template lang="pug">
section.section
  h2.t-center.mb-3
    p
      span.f-36 Elvina
      span.f-24 (エルビナ)
    p
      span.f-64
        PartsElvinaFont 4
      span.f-32 つの特長
  .content.px-2.mb-2
    PartsCard(
      v-for="(feature, fi) in featureList"
      :key="fi"
      :headerMain="fi + 1"
      headerSub="特長"
      :class="{ 'mb-2': featureList.length > (fi + 1) }"
    )
      .card-title.mb-1
        p(v-for="title in feature.titles" :key="title") {{ title }}
      .card-content
        p(
          v-for="(content, ci) in feature.contents"
          :key="ci"
          :class="{ 'mb-2': feature.contents.length > (ci + 1) }"
        ) {{ content }}
  .px-2
    PartsButton(to="/trial") 無料体験トレーニングを予約する
</template>

<script setup>
const featureList = [
  {
    titles: ["トレーナーが全員女性"],
    contents: [
      "女性同士だからこそ打ち明けられるお悩みもあるはず。",
      "トレーニングだけでなく、ダイエット期間中の食事、悩み、不安にもお応えできます。",
      "パーソナルトレーニングは受けてみたいけど、男性トレーナーに少し抵抗がある、、という方におすすめです。",
      "女性トレーナーが1人1人のお悩みに丁寧に対応いたします。",
    ],
  },
  {
    titles: ["完全個室で", "安心安全の空間を提供"],
    contents: [
      "エルビナのトレーニングルームは完全個室です。女性トレーナーがマンツーマンで指導をいたします。",
      "周りの目を気にせず、集中してトレーニングを行うことができます。",
      "完全個室なので相談事も安心してお伺いください。",
    ],
  },
  {
    titles: ["女性らしい美しい", "カラダづくりをサポート"],
    contents: [
      "痩せたいけど筋肉質にはなりたくない、自身の思い描く理想の体型に近づけたい。",
      "そういったお悩みをエルビナのトレーナーが解決します。",
      "会社勤めの方、主婦の方、学生の方など、さまざまな方が通われています。",
      "プロアスリートのようなガッチリ体型ではなく、程よく筋肉があり、健康的で美しいカラダづくりを意識してサポートいたします。",
    ],
  },
  {
    titles: ["リバウンドしない", "食事改善を提供"],
    contents: [
      "いきなり食事を抜いて、とにかく痩せる、といったことはいたしません。",
      "急な食生活の変化はリバウンドのもと。食生活の改善には時間がかかるものです。",
      "何を食べてよいのか、悪いのかを1〜2ヶ月通して1人1人のペースに合わせて改善を図ります。",
      "毎日の食事内容を確認し、毎回のトレーニングの際にアドバイスをさせていただきます。",
    ],
  },
];
</script>

<style lang="sass" scoped>
.section
  .content
    .card-title
      font-size: 20px
      text-align: center
</style>
