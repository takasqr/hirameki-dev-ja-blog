import { test, expect } from '@playwright/test'

test.describe('正常にアクセスできるページ', () => {
  const paths = [
    '/ja/blog/',
  ]

  for (const path of paths) {
    test(path, async ({ page }) => {
      const response = await page.goto(path, { waitUntil: 'domcontentloaded' })

      expect(response?.status()).toBe(200)
      expect(new URL(page.url()).pathname).toBe(path)
    })
  }
})
