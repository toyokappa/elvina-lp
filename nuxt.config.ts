// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  css: [
    "@/assets/styles/reset.css",
  ],
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@import "@/assets/styles/main.sass"'
        }
      }
    },
  },
    app: {
    head: {
      title: '女性専用パーソナルElvina',
      htmlAttrs: {
        lang: 'ja'
      },
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:400,700' },
      ],
    }
  },
})
