import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  // any custom Vitest config you require
  test: {
    include: [
      'test/unit/**/*.{test,spec}.?(c|m)[jt]s?(x)',
      'utils/**/*.{test,spec}.?(c|m)[jt]s?(x)',
      'components/**/*.{test,spec}.?(c|m)[jt]s?(x)',
      'composables/**/*.{test,spec}.?(c|m)[jt]s?(x)',
      'types/**/*.{test,spec}.?(c|m)[jt]s?(x)',
    ],
  },
})
