import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader';

import * as path from 'path';

export default defineConfig({
  plugins: [
    vue(),
    svgLoader({
      svgo: false,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      web3: path.resolve(__dirname, './node_modules/web3/dist/web3.min.js'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
});
