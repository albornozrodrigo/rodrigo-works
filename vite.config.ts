import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
// @ts-expect-error no types
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      // @ts-expect-error __dirname error
      '@/': path.resolve(__dirname, './src'),
      // @ts-expect-error __dirname error
      '@/components': path.resolve(__dirname, './src/components'),
      // @ts-expect-error __dirname error
      '@/pages': path.resolve(__dirname, './src/pages'),
    },
  },
  plugins: [react(), tailwindcss()],
});
