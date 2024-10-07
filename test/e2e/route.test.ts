import { expect, test } from '@nuxt/test-utils/playwright'

test('Route', async ({ page, goto }) => {
  await goto('/', { waitUntil: 'hydration' })
  await expect(page.getByText('日本語')).toBeVisible()
})

test('Route Ja', async ({ page, goto }) => {
  await goto('/ja', { waitUntil: 'hydration' })
  await goto('/my/profile', { waitUntil: 'hydration' })
  await expect(page.getByText('profile')).toBeVisible()
  await goto('/ai', { waitUntil: 'hydration' })
})
