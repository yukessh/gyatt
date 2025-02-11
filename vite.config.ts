import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: './index.html', // Ensure correct input file
    },
  },
  resolve: {
    alias: {
      '@': '/src', // Ensure correct alias for src
    },
  },
});
