// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
  app: {
    head: {
      title: "Picktur",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  modules: ["@nuxtjs/i18n", '@nuxtjs/tailwindcss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  tailwindcss: {
    cssPath: ['~/assets/css/tailwind.css'],
    configPath: 'tailwind.config',
    important: true,
    viewer: true,
  },
  css: ["~/assets/css/main.css"],
  i18n: {
    lazy: true,
    langDir: "locales",
    strategy: "prefix_except_default",
    locales: [
      {
        code: "ru",
        iso: "ru",
        name: "Русский",
        file: "ru.ts",
      },
      {
        code: "md",
        iso: "md",
        name: "Молдавский",
        file: "md.ts",
      },
    ],
    defaultLocale: "ru",
  },
});
