import { test, expect } from '@playwright/test';

test('button story renders', async ({ page }) => {
  await page.goto(
    '/iframe.html?id=components-button--primary'
  );

  await expect(
    page.getByText('Hello Nx')
  ).toBeVisible();
});