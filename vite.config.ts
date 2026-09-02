import federation from '@originjs/vite-plugin-federation';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const isProduction = process.env.NODE_ENV === 'production';

const remote = (production: string, devPort: number) =>
  isProduction
    ? production
    : `http://localhost:${devPort}/assets/remoteEntry.js`;

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5173,
    host: true,
    cors: true,
  },
  resolve: {
    alias: {
      // Do mais específico para o mais genérico: o Vite testa os aliases em
      // ordem e '@/' casaria antes de '@/components'.
      '@/components': fileURLToPath(
        new URL('./src/components', import.meta.url),
      ),
      '@/pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
      '@/': fileURLToPath(new URL('./src/', import.meta.url)),
    },
  },
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: 'container',
      remotes: {
        swipe: remote(
          'https://swipe-cards-beryl.vercel.app/assets/remoteEntry.js',
          5001,
        ),
        onboarding: remote(
          'https://onboarding-flame-pi.vercel.app/assets/remoteEntry.js',
          5002,
        ),
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  build: {
    target: 'esnext',
    // Estava `false`, o que publicava o bundle inteiro sem minificar.
    minify: 'oxc',
    cssMinify: true,
    // Mantém o CSS por chunk: a home não precisa baixar o CSS das páginas
    // de case que só carregam sob demanda.
    cssCodeSplit: true,
    sourcemap: false,
    reportCompressedSize: true,
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        // Separa as libs que quase nunca mudam do código da aplicação, para
        // que um deploy de conteúdo não invalide o cache do vendor.
        // O Vite 8 usa Rolldown: `manualChunks` deu lugar a `advancedChunks`.
        advancedChunks: {
          groups: [
            {
              name: 'react',
              test: /node_modules[\\/](react|react-dom|react-router|react-router-dom|scheduler)[\\/]/,
            },
            {
              name: 'motion',
              test: /node_modules[\\/](framer-motion|motion-dom|motion-utils)[\\/]/,
            },
          ],
        },
      },
    },
  },
  preview: {
    port: 5173,
    cors: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
});
