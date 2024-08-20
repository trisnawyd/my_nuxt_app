// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  components: {
    dirs: [
      {
        // default
        path: "~/components",
        global: true,
        extensions: [".vue"],
      },
      {
        // for components inside features. need to mark as global to enable auto import.
        path: "~/features",
        global: true,
        extensions: [".vue"],
      },
    ],
  },

  modules: ["nuxt-icons"],
});
