import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';

/**
 * Config dedicada de testes.
 *
 * Não reaproveita a `vite.config.ts` de propósito: o plugin de Module
 * Federation tentaria baixar os `remoteEntry.js` dos micro frontends durante a
 * suíte. Aqui os remotes são resolvidos para mocks locais.
 */
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'swipe/swipe-cards': fileURLToPath(
        new URL('./__mocks__/swipe/index.tsx', import.meta.url),
      ),
      'onboarding/app': fileURLToPath(
        new URL('./__mocks__/onboarding/index.tsx', import.meta.url),
      ),
      '@/components': fileURLToPath(
        new URL('./src/components', import.meta.url),
      ),
      '@/pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
      '@/': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    include: ['src/**/*.spec.{ts,tsx}'],
    exclude: ['e2e/**', 'node_modules/**'],
    css: false,
    coverage: {
      provider: 'v8',
      reportsDirectory: './coverage',
      include: ['src/**/*.{ts,tsx}'],
      exclude: [
        'src/**/*.spec.{ts,tsx}',
        'src/main.tsx',
        'src/entry-*.tsx',
        'src/vite-env.d.ts',
      ],
    },
  },
});
