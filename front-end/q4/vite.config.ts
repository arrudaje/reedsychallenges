/// <reference types="vitest" />
import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

loadEnv('', process.cwd())

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    root: fileURLToPath(new URL('./', import.meta.url)),
    transformMode: {
      web: [/\.[jt]sx$/]
    }
  }
})
