import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',
  plugins: [react()],
  resolve: {
    tsconfigPaths: true,
  },
  server: {
    host: true,
    port: 5173,
    allowedHosts: ['all', 'b99d-103-105-103-91.ngrok-free.app', 'localhost', '127.0.0.1'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'react-vendor'
            if (id.includes('lodash')) return 'lodash'
            if (id.includes('chart.js')) return 'charts'
            return 'vendor'
          }
        },
      },
    },
  }
})