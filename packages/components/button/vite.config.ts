import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [vue(), dts({ tsconfigPath: './tsconfig.json', rollupTypes: true })],
  build: {
    lib: {
      formats: ['es'],
      entry: resolve(__dirname, './index.ts'),
      fileName: 'index',
    },
    rollupOptions: {
      external: ['vue'],
    },
  },
})
