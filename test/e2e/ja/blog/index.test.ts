import { test, expect } from '@playwright/test';

test('リストが表示されるか', async ({ page }) => {
  await page.goto('/p/');

  await expect(page.getByText('コード')).toBeVisible()
});
