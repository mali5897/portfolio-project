import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/portfolio-project/", // <--- IMPORTANT: Update YOUR_REPO_NAME
  plugins: [react()],
})