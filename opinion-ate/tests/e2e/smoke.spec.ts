import { expect, test } from '@playwright/test';

test.describe('smoke test', () => {
  test('has title', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText('Hello, opinion-ate')).toBeVisible();
  });
});
