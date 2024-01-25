import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        'react-redux',
        '@reduxjs/toolkit',
        'react-router-dom',
        'axios',
        'react-toastify',
        'history',
        'react-icons/bi',
      ],
    },
  },
});
