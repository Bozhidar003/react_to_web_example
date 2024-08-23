import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'wrapper.js'),
      name: 'HelloWorldWebComponent',
      fileName: (format) => `hello-world-web-component.${format}.js`,
      formats: ['iife']
    },
    rollupOptions: {
      external: [],
    },
    minify: false,
    sourcemap: true
  },
  define: {
    'process.env.NODE_ENV': '"development"',
    'global': 'window'
  }
});