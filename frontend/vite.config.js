import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/articles',
  server: {
    port: 5173,
    open: '/articles'
  },
  plugins: [
    tailwindcss(),
    react()],
})
