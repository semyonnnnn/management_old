import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [
    laravel({
      input: ['resources/css/app.css', 'resources/js/app.tsx'],
      refresh: true,
    }),
    react(),
    tailwindcss(),
  ],
  // Add this block to lock onto port 5174
  server: {
    hmr: {
      host: '10.166.20.130',
      protocol: 'ws'
    },
    cors: true,              // ENABLE THIS - it tells Vite to send the right headers
    port: 5174,
    strictPort: true,
  },
})