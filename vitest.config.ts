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
    coverage: {
      provider: 'v8',
      reporter: ['text', 'text-summary', 'html'],
      reportsDirectory: './coverage',
      include: [
        'components/**/*.{ts,vue}',
        'composables/**/*.ts',
        'utils/**/*.ts',
        'types/**/*.ts',
      ],
      exclude: [
        '**/*.{test,spec}.{ts,js}',
        '**/*.stories.ts',
        '**/node_modules/**',
        '.playground/**',
        '**/*.d.ts',
      ],
      all: false, // テストされたファイルのみのカバレッジを表示
    },
    // ワーカースレッドの設定
    pool: 'threads',
    poolOptions: {
      threads: {
        singleThread: true,
      },
    },
  },
})
