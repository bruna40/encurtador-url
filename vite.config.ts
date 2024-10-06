import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/encurtamentos': {
        target: 'https://api.encurtador.dev',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
