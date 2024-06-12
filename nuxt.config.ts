// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    }
  },
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts',
    '@vueuse/nuxt'
  ],
  content: {
    markdown: {
      toc: {
        depth: 3,
        searchDepth: 3
      }
    },
    documentDriven: true,
    highlight: {
      theme: {
        default: 'min-light',
        dark: 'min-dark'
      }
    }
  },
  fonts: {
    families: [
      { name: 'Geist Sans', provider: 'fontsource' },
      { name: 'Geist Mono', provider: 'fontsource' }
    ],
    defaults: {
      weights: [400, 500, 600, 700],
      styles: ['normal']
    }
  },
  tailwindcss: {
    viewer: false
  }
})
