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
      "/send-email": "http://localhost:5173", // Forward /send-email requests to the backend
    },
  },
})

