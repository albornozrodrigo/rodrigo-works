import { expect, test } from '@playwright/test';

test('navegação para a página do projeto Loveg', async ({ page }) => {
  await page.goto('/');
  await page.click('text=Loveg - v1 / v2');
  await expect(page).toHaveURL('/projects/loveg-v1-v2');
});
