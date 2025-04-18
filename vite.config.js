import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()], server: {
    proxy: {
      "/api": {
        target: "https://api.gog.com",  // A URL do GOG API
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ""), // Para remover o /api da URL
      },
    },
  },
  
})
