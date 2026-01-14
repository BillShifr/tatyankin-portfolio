import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { readFileSync, writeFileSync } from 'fs'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [
    react(),
    // Плагин для копирования index.html как 404.html для GitHub Pages SPA fallback
    {
      name: 'copy-404',
      closeBundle() {
        if (command === 'build') {
          try {
            const indexHtml = readFileSync(path.resolve(__dirname, 'dist/index.html'), 'utf-8')
            writeFileSync(path.resolve(__dirname, 'dist/404.html'), indexHtml)
            console.log('✓ Created 404.html for GitHub Pages')
          } catch (error) {
            console.warn('Could not create 404.html:', error)
          }
        }
      },
    },
  ],
  // Для custom domain используем '/', для GitHub Pages без custom domain '/tatyankin-portfolio/'
  // Если используете custom domain, всегда используйте '/'
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
}))

