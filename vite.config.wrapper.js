import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'wrapper.js',
      name: 'HelloWorldWebComponent',
      fileName: (format) => `hello-world-web-component.${format}.js`,
      formats: ['es'] // Change to ES module format
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    },
    minify: false,
    sourcemap: true
  }
});