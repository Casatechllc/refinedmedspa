// nuxt.config.ts
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2026-05-20',
  devtools: { enabled: true },

  // Declare your main global style sheet
  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  runtimeConfig: {
    // Keys inside public are exposed to both the server and the client browser
    public: {
      googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
      googlePlaceId: process.env.GOOGLE_PLACE_ID,
    }
  },

  modules: ['@nuxt/image'],

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Quattrocento&family=Tenor+Sans&display=swap' }
      ]
    }
  },
})