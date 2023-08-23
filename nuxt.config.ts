// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "T-Children App",
    },
  },

  css: ["@/assets/scss/main.scss"],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/_variables.scss";',
        },
      },
    },
  },

  // routeRules: {
  //   "/api/**": { cors: true },
  // },

  modules: ["nuxt-mongoose"],
  plugins: [],

  devtools: { enabled: true },
});
