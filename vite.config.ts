import react from '@vitejs/plugin-react'
import path from 'node:path'
import { defineConfig } from 'vite'

const RootDir = import.meta.dirname

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@domain': path.resolve(RootDir, 'src/domain'),
      '@application': path.resolve(RootDir, 'src/application'),
      '@infrastructure': path.resolve(RootDir, 'src/infrastructure'),
      '@presentation': path.resolve(RootDir, 'src/presentation'),
      '@assets': path.resolve(RootDir, 'src/assets'),
    },
  },
})
