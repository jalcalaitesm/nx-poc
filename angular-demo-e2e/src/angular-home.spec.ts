import { test, expect } from '@playwright/test';

test('angular app loads', async ({ page }) => {
  await page.goto('/');

  await expect(
    page.getByText('NX + Angular')
  ).toBeVisible();

  await expect(
    page.getByRole('button')
  ).toBeVisible();
});