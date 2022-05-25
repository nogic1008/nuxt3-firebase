import { resolve } from 'path'
import { defineConfig } from 'vitest/config'
import Vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [Vue()],
  resolve: {
    alias: {
      '~/': resolve(__dirname, '/'),
    },
  },
  test: {
    environment: 'jsdom',
    coverage: {
      reporter: ['text', 'lcov'],
    },
  },
})
