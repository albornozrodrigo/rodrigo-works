import federation from '@originjs/vite-plugin-federation';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5173,
    host: true,
    cors: true,
  },
  resolve: {
    alias: {
      '@/': fileURLToPath(new URL('./src', import.meta.url)),
      '@/components': fileURLToPath(
        new URL('./src/components', import.meta.url),
      ),
      '@/pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
    },
  },
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: 'container',
      remotes: {
        swipe:
          process.env.NODE_ENV === 'production'
            ? 'https://swipe-cards-beryl.vercel.app/assets/remoteEntry.js'
            : 'http://localhost:5001/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
  preview: {
    port: 5173,
    cors: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
});
