// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/content",
    // "@nuxtjs/storybook",
    "@nuxt/image",
    "@pinia/nuxt",
  ],
  css: ['./assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  // storybook: {
  //   url: 'http://localhost:6006',
  //   storybookRoute: '/__storybook__',
  //   port: 6006,
  // },
})