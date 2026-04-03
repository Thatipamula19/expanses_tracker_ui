import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    host: true,
    port: 5173,
    allowedHosts: ['all', "b99d-103-105-103-91.ngrok-free.app", "localhost", "127.0.0.1"]
  }
  
})
