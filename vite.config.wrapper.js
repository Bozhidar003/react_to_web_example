import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'wrapper.js',
      name: 'HelloWorldWebComponent',
      fileName: (format) => `hello-world-web-component.${format}.js`,
      formats: ['es']
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'https://esm.sh/react-to-webcomponent@2.0.0'],
    },
    minify: false,
    sourcemap: true
  }
});