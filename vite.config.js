import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ], 
  server: {
    proxy: {
      "/send-email": {
        target: "http://localhost:5000", // Ensure backend is handling emails
        changeOrigin: true,
        secure: false,
      },
      "/poke": {
        target: "http://localhost:5000",
        changeOrigin: true,
        secure: false,
      },
      "/last-visitor": {
        target: "http://localhost:5000",
        changeOrigin: true,
        secure: false,
      }
    },
  },
})


