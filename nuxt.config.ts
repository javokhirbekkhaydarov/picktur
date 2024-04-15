// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: "Picktur",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  modules: ["@nuxtjs/i18n", "@nuxtjs/tailwindcss"],
  css: ["~/assets/css/main.css"],
  i18n: {
    lazy: true,
    langDir: "locales",
    strategy: "prefix_except_default",
    locales: [
      {
        code: "ru",
        iso: "ru",
        name: "Russian(RU)",
        file: "ru.ts",
      },
      {
        code: "md",
        iso: "md",
        name: "Moldovan(MD)",
        file: "md.ts",
      },
    ],
    defaultLocale: "ru",
    vueI18n: {
      fallbackLocale: "ru",
    },
  },
});
