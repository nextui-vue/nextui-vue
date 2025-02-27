import path from 'node:path'
import { defineConfig } from 'rolldown'
import vue from 'unplugin-vue'

export default defineConfig({
  input: path.resolve(__dirname, './index.ts'),
  plugins: [vue.rolldown()],
  external: ['vue', '@heroui/theme'],
  output: {
    format: 'esm',
  },
})
