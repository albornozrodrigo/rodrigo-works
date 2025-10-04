import { expect, test } from '@playwright/test';

test('navegação para a página do projeto Freight Login', async ({ page }) => {
  await page.goto('/');
  await page.click('text=Sistema de Autenticação');
  await expect(page).toHaveURL('/cases/freight-login');
});

test('navegação para a página do projeto App Broker', async ({ page }) => {
  await page.goto('/');
  await page.click('text=App Broker');
  await expect(page).toHaveURL('/cases/app-broker');
});

test('navegação para a página do projeto Store', async ({ page }) => {
  await page.goto('/');
  await page.click('text=Sistema de Gestão de Sellers');
  await expect(page).toHaveURL('/cases/store');
});
