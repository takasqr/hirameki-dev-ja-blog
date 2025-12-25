import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const currentDir = dirname(fileURLToPath(import.meta.url))

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    "@nuxt/content",
    "@pinia/nuxt",
  ],

  css: ['./assets/css/main.css'],

  alias: {
    '@blog-utils': join(currentDir, './utils')
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // @ts-ignore
  content: {
    contentHead: false,
    highlight: {
      theme: {
        default: 'github-dark',
        dark: 'github-dark'
      },
      preload: [
        'json',
        'js',
        'ts',
        'html',
        'css',
        'dockerfile',
        'bat',
        'xml',
        'vue',
        'diff',
        'shell',
        'markdown',
        'yaml',
        'bash',
        'sql',
        'swift',
      ]
    }
  },

  runtimeConfig: {
    // https://nuxt.com/docs/guide/going-further/runtime-config
    // Keys within public, will be also exposed to the client-side
    public: {
      TURNSTILE_SITE_KEY: process.env.TURNSTILE_SITE_KEY, // Turnstile
    },
  },

  $meta: {
    name: 'blg'
  },

  extends: [
    // 'github:takasqr/nuxt-layer-common',
    // 'github:takasqr/nuxt-layer-takasqr',
  ],

  compatibilityDate: '2025-10-16',
})