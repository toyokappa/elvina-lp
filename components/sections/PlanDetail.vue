<template lang="pug">
section.section.bg-base
  h2.t-center.mb-3
    p.f-24 継続利用プラン
    p (チケット方式)
  .description.px-2.mb-3 パーソナルトレーニングコースを修了いただいた方限定のプランです。あなたの生活スタイルに合わせてお好みのタイミングでご利用いただけます。まとめてご購入いただけるほど1回あたりの料金が抑えられる様に設定しております。
  .content.px-2.mb-2
    PartsCard(
      v-for="(plan, pi) in planList"
      :key="pi"
      :headerMain="plan.headerMain"
      :headerSub="plan.headerSub"
      :class="{ 'mb-2': planList.length > (pi + 1) }"
    )
      .plan
        .fee
          span.f-36 {{ plan.fee.toLocaleString() }}
          span.f-20 円(税込)
        .unit-fee(v-if="plan.unitFee") (1回あたり{{ plan.unitFee.toLocaleString() }}円)
  .px-2
    PartsButton(to="/trial") 無料体験トレーニングを予約する
</template>

<script setup>
const planList = [
  {
    headerMain: "Visitor",
    headerSub: "1回チケット",
    fee: 13000,
  },
  {
    headerMain: "Regular",
    headerSub: "8回チケット",
    fee: 96000,
    unitFee: 12000,
  },
  {
    headerMain: "Superior",
    headerSub: "16回チケット",
    fee: 184000,
    unitFee: 11500,
  },
  {
    headerMain: "Awesome",
    headerSub: "24回チケット",
    fee: 264000,
    unitFee: 11000,
  },
  {
    headerMain: "Excellent",
    headerSub: "32回チケット",
    fee: 336000,
    unitFee: 10500,
  },
  {
    headerMain: "Marvelous",
    headerSub: "40回チケット",
    fee: 400000,
    unitFee: 10000,
  },
];
</script>

<style lang="sass">
.plan
  text-align: center
  font-weight: bold
</style>
