import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'

export default defineConfig({
  plugins: [vue()],
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        school: resolve(__dirname, 'demos/school/index.html'),
        pizza: resolve(__dirname, 'demos/pizza/index.html'),
        translationApi: resolve(__dirname, 'demos/translation-api/index.html'),
      },
    },
  },
})
