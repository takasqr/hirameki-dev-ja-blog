import { test, expect } from '@nuxt/test-utils/playwright'

const account = process.env.TEST_ACCOUNT_ID ?? ''
const password = process.env.TEST_ACCOUNT_PASSWORD ?? ''

test('環境変数確認', async () => {
  // 環境変数が取得できているか確認する
  await expect(account).not.toEqual('')
  await expect(password).not.toEqual('')
})

test('サインイン成功', async ({ page }) => {
  await page.goto('/ja/signin')
  await page.getByLabel('メールアドレス').click()
  await page.getByLabel('メールアドレス').fill(account)
  await page.getByLabel('メールアドレス').press('Tab')
  await page.locator('input[type="password"]').fill(password)
  await page.getByRole('button', { name: 'ログイン', exact: true }).click()
  await expect(page.getByRole('link', { name: 'profile' })).toBeVisible()
})

test('サインイン失敗', async ({ page }) => {
  await page.goto('/ja/signin')
  await page.getByLabel('メールアドレス').click()
  await page.getByLabel('メールアドレス').fill(account)
  await page.getByLabel('メールアドレス').press('Tab')
  await page.locator('input[type="password"]').fill('password')
  await page.getByRole('button', { name: 'ログイン', exact: true }).click()
  // パスワードを間違えたら
  await expect(page.getByRole('link', { name: 'profile' })).not.toBeVisible()
})
