import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Arquivos estáticos (ex.: e-book em PDF) ficam em src/public
  publicDir: 'src/public',
})

