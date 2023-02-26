const domain = "elvina.jp"
const host = `https://${domain}`
const projectName = "Elvina"
const serviceName = "女性専用パーソナルElvina(エルビナ)"
const pageTitle = `${serviceName} | 前橋初！女性が安心して通えるパーソナルジム`
const description = "前橋初！トレーナーは全員女性。安心してトレーニングがしたい。そんな夢を叶えるパーソナルジムです。"

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
      title: pageTitle,
      htmlAttrs: {
        lang: 'ja'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: description },
        { name: 'keywords', content: '女性専用,群馬,前橋,パーソナルジム,パーソナルトレーニング,プライベートジム'}, 
        { name: 'apple-mobile-web-app-title', content: 'Elvina' },
        { name: 'application-name', content: 'Elvina' },
        { name: 'msapplication-TileColor', content: '#ffc40d' },
        { name: 'theme-color', content: '#ffffff' },
      ],
      link: [
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap' },
        { rel: 'canonical', href: `https://${domain}` },
      ],
    }
  },
  modules: ['~/modules/sitemap'],
  runtimeConfig: {
    public: {
      host,
      serviceName,
    }
  },
  router: {
    options: {
      strict: true
    }
  },
})
