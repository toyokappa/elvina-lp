import VueGtag from "vue-gtag";

// Nuxtプラグインの登録
export default defineNuxtPlugin((nuxtApp) => {
  // ルーター取得
  const router = useRouter();

  // Vue登録
  nuxtApp.vueApp.use(
    VueGtag,
    {
      appName: 'Elvina',                 // サイトの名称
      pageTrackerScreenviewEnabled: true, // ページトラッキングスクリーンビューを有効
      config: { id: 'G-8PRS1WNB1M' },     // GoogleAnalytics(GA4)の測定IDを指定する
    },
    router
  );
});