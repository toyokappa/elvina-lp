<template lang="pug">
section.section
  h2.t-center.f-24.mb-3 無料体験の流れ
  .px-2.mb-2
    PartsStep.mb-2(:step="1" title="まずは無料体験を予約")
      p
        strong 理想の身体を手に入れる第一歩
        span です。まずはこちらのページの下にある「予約ページに進む」ボタンから無料体験の来店予約をお願いします。
    PartsStep.mb-2(:step="2" title="ご来店")
      p.mb-1
        span ご予約いただいた日時にご来店ください。
      p.mb-1
        span 当日は持ち物として運動ができる服装、室内履き、タオル、お飲み物をご持参くださいませ。
      p
        span なお、当ジムには駐車場がございますので、車のお客様もご安心してお越しいただけます。
    PartsStep.mb-2(:step="3" title="お着替え")
      p
        span ジム内の更衣室にて、お手持ちのウェアに着替えて準備をしていただきます。
    PartsStep.mb-2(:step="4" title="測定")
      p.mb-1
        span 現在のお身体の状態を把握するために、体重・体脂肪率の測定をいたします。測定には
        strong InBody（インボディ）
        span という精密に測定ができる体組成計をご利用いただけます。
      p
        span 測定後の結果は紙で印刷されますので、ご自身のお身体の測定結果をお持ち帰り頂けます。
    PartsStep.mb-2(:step="5" title="カウンセリング")
      p.mb-1
        span 普段の生活リズム、運動習慣、食生活などについてお伺いし、お身体やダイエットのお悩み相談に乗らせていただきます。
      p
        span お相手は女性トレーナーとなりますので、
        strong 女性ならではのお悩み
        span もお気軽にご相談ください。
    PartsStep.mb-2(:step="6" title="体験トレーニング")
      p.mb-1
        span Elvina(エルビナ)のトレーニングの一部を体験いただきます。実際に身体を動かして、運動習慣やお身体にあったトレーニング方法を提案いたします。
      p
        span 「お腹周りを中心にやりたい」「おしりを引き締めたい」などのご要望があれば、そちらに即したトレーニングも致しますので、お気軽にお申し付けください。
    PartsStep.mb-2(:step="7" title="お着替え後にフィードバック")
      p.mb-1
        span トレーニングを終えて今日一日のフィードバックをさせていただきます。お客様の体験してみての感想なども伺えると嬉しいいです。
      p
        strong ご入会希望の場合
        span は、このタイミングでお申し付けいただければご入会の案内も致します。
    PartsStep(:step="8" title="体験終了" noLine)
      p
        span これにて体験は終了です。トレーニングお疲れさまでした。急な運動にて疲れている場合もございますので、お気をつけてお帰りください。
  .px-2
    PartsButton(color="white" href="https://sympl.jp/reserve" outside) 予約ページに進む
</template>

<script setup></script>

<style lang="sass" scoped></style>
