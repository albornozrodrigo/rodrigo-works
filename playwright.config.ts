import { defineConfig, devices } from '@playwright/test';

const PORT = 5173;

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: process.env.CI ? 'github' : 'list',
  // O dev server do Vite transforma as rotas lazy sob demanda, e o primeiro
  // acesso a uma delas estourava o timeout padrão de forma intermitente.
  expect: { timeout: 10_000 },
  use: {
    baseURL: `http://localhost:${PORT}`,
    trace: 'on-first-retry',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'mobile', use: { ...devices['Pixel 7'] } },
  ],
  // Roda contra o build de produção, não contra o dev server: é o que de fato
  // vai ao ar (minificado, com os chunks reais) e não paga transform em runtime.
  webServer: {
    command: `pnpm build && pnpm preview --port ${PORT} --strictPort`,
    port: PORT,
    timeout: 180 * 1000,
    reuseExistingServer: !process.env.CI,
  },
});
