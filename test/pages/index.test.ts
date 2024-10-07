import { describe, test, expect } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils/e2e'

describe('Root ページのテスト', async () => {
  await setup({
    // Nuxtの設定オプションをここに追加
    server: true, // サーバーを起動してテストを実行
  })

  test('Root ページのテスト', async () => {
    const html = await $fetch('/')
    expect(html).toContain('日本語')
  })
})

// Error になってしまって config の設定も変えたがうまくいかなかったので一時退避

// ⎯⎯⎯⎯⎯⎯ Failed Suites 1 ⎯⎯⎯⎯⎯⎯⎯

//  FAIL  test/unit/pages/index.test.ts > Root ページのテスト
// Error: Hook timed out in 120000ms.
// If this is a long-running hook, pass a timeout value as the last argument or configure it globally with "hookTimeout".
// ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯

//  Test Files  1 failed | 2 passed (3)
//       Tests  8 passed (9)
//    Start at  03:05:06
//    Duration  128.44s (transform 1.13s, setup 24ms, collect 791ms, tests 126.59s, environment 1ms, prepare 222ms)

// Error: Process completed with exit code 1.
