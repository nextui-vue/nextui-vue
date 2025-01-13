import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      formats: ["es"],
      entry: ['./index.ts'],
      fileName: 'index',
    },
    rollupOptions: {
      external: ['vue'],
    },
  },
})
