// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    }
  },
  routeRules: {
    '/': { ssr: false }
  },
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@vueuse/motion/nuxt'
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
  tailwindcss: {
    viewer: false
  },
  compatibilityDate: '2024-11-04'
})
