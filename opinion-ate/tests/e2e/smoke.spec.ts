import { expect, test } from '@playwright/test';

test.describe('smoke test', () => {
  test('can view the home page', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText('Hello, opinion-ate')).toBeVisible();
  });
});
