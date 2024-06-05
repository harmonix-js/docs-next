// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts',
    'nuxt-icon',
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
        default: 'github-light',
        dark: 'github-dark'
      }
    }
  },
  fonts: {
    families: [
      { name: 'DM Sans', provider: 'google' },
      { name: 'DM Mono', provider: 'google' }
    ],
    defaults: {
      weights: [400, 500, 600, 700],
      styles: ['normal']
    }
  }
})
