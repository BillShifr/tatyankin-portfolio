import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // Для локальной разработки используем '/', для GitHub Pages '/tatyankin-portfolio/'
  base: mode === 'production' ? '/tatyankin-portfolio/' : '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
}))

