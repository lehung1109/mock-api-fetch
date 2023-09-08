import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        "mock-api": "./src/index.ts"
      },
      output: {
        entryFileNames: "[name].js"
      }
    }
  },
});
