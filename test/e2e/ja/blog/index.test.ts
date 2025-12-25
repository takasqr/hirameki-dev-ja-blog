import { test, expect } from '@playwright/test';

test('リストが表示されるか', async ({ page }) => {
  await page.goto('/ja/blog/');

  // await expect(page.getByText('コード')).toBeVisible()
});
