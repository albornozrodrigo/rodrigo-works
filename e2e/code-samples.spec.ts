import { expect, test } from '@playwright/test';

test('navegação para a página do projeto Swipe Cards', async ({ page }) => {
  await page.goto('/');
  await page.click('text=Swipe Cards');
  await expect(page).toHaveURL('/code-samples/swipe-cards');
});

test('navegação para a página do projeto Onboarding', async ({ page }) => {
  await page.goto('/');
  await page.click('text=Onboarding');
  await expect(page).toHaveURL('/code-samples/onboarding');
});
