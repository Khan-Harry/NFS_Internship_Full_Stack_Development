import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// base is set to '/Task_2/' for GitHub Pages deployment.
// Change this to match your GitHub repo name if different.
export default defineConfig({
  plugins: [react()],
  base: './',
})
