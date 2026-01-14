import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Для GitHub Pages: base должен соответствовать имени репозитория
  // Репозиторий называется 'tatyankin-portfolio', поэтому base = '/tatyankin-portfolio/'
  base: '/tatyankin-portfolio/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})

