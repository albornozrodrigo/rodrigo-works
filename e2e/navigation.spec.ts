import { expect, test } from '@playwright/test';

/**
 * Cada card da home é um link para a página do case. O `getByRole('heading')`
 * evita o strict mode do Playwright: o título do card e o parágrafo de
 * descrição são dois links distintos para a mesma rota.
 */
const CARDS = [
  { name: 'Sistema de Gestão de Sellers', url: '/cases/store' },
  { name: 'Sistema de Autenticação', url: '/cases/freight-login' },
  { name: 'App Broker', url: '/cases/app-broker' },
  { name: 'Loveg - v1 / v2', url: '/projects/loveg-v1-v2' },
  { name: 'Swipe Cards', url: '/code-samples/swipe-cards' },
  { name: 'Onboarding', url: '/code-samples/onboarding' },
  {
    name: 'API GraphQL (Schema First)',
    url: '/code-samples/graphql-api-schema-first',
  },
  {
    name: 'API GraphQL (Code First)',
    url: '/code-samples/graphql-api-code-first',
  },
];

for (const card of CARDS) {
  test(`navega para ${card.name}`, async ({ page }) => {
    await page.goto('/');
    await page
      .getByRole('heading', { name: card.name })
      .getByRole('link')
      .click();

    await expect(page).toHaveURL(card.url);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  });
}

test('navega para o currículo pela navbar', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Currículo', exact: true }).click();

  await expect(page).toHaveURL('/cv');
  await expect(
    page.getByRole('heading', { name: 'Rodrigo Albornoz Figueiredo' }),
  ).toBeVisible();
});

test('lista e abre as publicações', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Ver todas as publicações' }).click();
  await expect(page).toHaveURL('/artigos');

  const firstArticle = page
    .getByRole('link', { name: /Frugal Cascade/ })
    .first();
  const title = await firstArticle.innerText();
  await firstArticle.click();

  await expect(page).toHaveURL(/\/artigos\/frugal-cascade/);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(title);
  // O markdown precisa virar HTML de verdade, não texto cru com '##'.
  await expect(page.getByRole('heading', { level: 2 }).first()).toBeVisible();
  await expect(page.getByRole('table')).toBeVisible();
});

test('slug de artigo inexistente cai no 404', async ({ page }) => {
  await page.goto('/artigos/nao-existe');

  await expect(
    page.getByRole('heading', { name: 'Página não encontrada' }),
  ).toBeVisible();
});

test('mostra a página 404 em rota inexistente', async ({ page }) => {
  await page.goto('/rota/que/nao/existe');

  await expect(
    page.getByRole('heading', { name: 'Página não encontrada' }),
  ).toBeVisible();
});

test('o título da página muda por rota', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Rodrigo Albornoz/);

  await page.goto('/cv');
  await expect(page).toHaveTitle(/Currículo/);
});
