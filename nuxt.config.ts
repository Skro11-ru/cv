import { defineNuxtConfig } from 'nuxt';
import { resolve } from 'path';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ['@/assets/style/_main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/assets/style/cfg-scss";`,
        },
      },
    },
  },
});
