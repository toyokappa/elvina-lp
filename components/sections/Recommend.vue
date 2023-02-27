<template lang="pug">
section.section.bg-base
  h2.t-center.mb-3
    p
      span.f-36 Elvina
      span.f-24 (エルビナ)は
    p.f-24 こんな方におすすめ
  .eyecatch.mb-3
  .container
    .cell-4-pc
      PartsCardPoint.mb-2(
        v-for="(recommend, ri) in recommendList"
        :key="ri"
        :point="ri + 1"
        :titles="recommend.titles"
        :content="recommend.content"
      )
    PartsButton(to="/trial") 無料体験トレーニングを予約する
</template>

<script setup>
const recommendList = [
  {
    titles: ["安心できる空間で", "トレーニングがしたい"],
    content:
      "トレーニングジムだと男性が多く通いにくい、パーソナルジムも男性トレーナーが多く抵抗がある、プライベートな空間で安心してトレーンングがしたい、そのようなお悩みをお持ちの方は是非エルビナへお越しください。",
  },
  {
    titles: ["女性の悩みがわかる", "トレーナーがいい"],
    content:
      "女性ならではの悩みを知るのは、同じ女性です。トレーニングの悩みだけでなく、ダイエット期間中のお悩みも、安心してご相談ください。女性トレーナーが寄り添ってお応えいたします。",
  },
  {
    titles: ["一人ではダイエットや", "トレーニングが続けられない"],
    content:
      "ダイエットを始めてみたり、トレーニングジムに通ってみたりするけどなかなか続かない、そんな悩みを抱える方は多くいらっしゃいます。エルビナのトレーナーがサポートに入ることで楽しく継続することができます。",
  },
  {
    titles: ["痩せたいけど", "筋肉質にはなりたくない"],
    content:
      "パーソナルトレーニングと聞くとどうしても「筋肉」や「マッチョ」というようなイメージが浮かびます。エルビナは女性目線で美しく理想のカラダづくりをサポートしておりますのでそういった点はご安心ください。",
  },
];
</script>

<style lang="sass" scoped></style>
