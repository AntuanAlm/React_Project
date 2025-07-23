import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://AntuanAlm.github.io/Pokemon_Project' // Set the base path for GitHub Pages
})
