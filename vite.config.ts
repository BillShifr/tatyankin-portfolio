import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Для Vercel/Netlify используйте '/'
  // Для GitHub Pages: если репозиторий называется 'portfolio-site', используйте '/portfolio-site/'
  // Если репозиторий называется 'username.github.io', используйте '/'
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})

