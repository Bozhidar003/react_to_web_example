import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'wrapper.js',
      name: 'HelloWorldWebComponent',
      fileName: (format) => `hello-world-web-component.${format}.js`,
      formats: ['iife']
    },
    rollupOptions: {
      external: [],
    },
    minify: true,
    sourcemap: true
  }
});