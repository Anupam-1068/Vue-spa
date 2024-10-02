// vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()], base: "/Vue-spa/",
  build: {
    outDir: 'dist', // Ensure Vite outputs the build to the 'dist' directory
  },
});
