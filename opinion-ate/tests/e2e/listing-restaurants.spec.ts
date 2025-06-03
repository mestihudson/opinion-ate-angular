import { expect, test } from '@playwright/test';

test.describe('listing restaurants', () => {
  test('show restaurants from the server', async ({ page }) => {
    const sushiPlace = 'Sushi Place';
    const pizzaPlace = 'Pizza Place';

    await page.route(
      'https://api.outsidein.dev/*/restaurants',
      async (route) => {
        await route.fulfill({
          json: [
            { id: 1, name: sushiPlace },
            { id: 2, name: pizzaPlace },
          ],
        });
      },
    );

    await page.goto('/');
    await expect(page.getByText(sushiPlace)).toBeVisible();
    await expect(page.getByText(pizzaPlace)).toBeVisible();
  });
});
