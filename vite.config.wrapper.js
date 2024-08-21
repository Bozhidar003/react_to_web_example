import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'wrapper.js',
      name: 'HelloWorldWebComponent',
      fileName: 'hello-world-web-component'
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
});