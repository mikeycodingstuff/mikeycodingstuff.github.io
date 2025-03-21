// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  app: {
    head: {
      title: 'mikeycodingstuff',
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        { rel: 'icon', href: '/favicon.ico' },
      ],
    },
  },

  srcDir: 'src/',
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['@/assets/css/main.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  modules: ['@vueuse/nuxt', '@nuxt/eslint'],
})
