import themeConfig from "nextui-vue/themeConfig"

/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ['./index.html', './node_modules/nextui-vue/**/*.{js,ts,jsx,tsx,vue}', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
  },
  darkMode: 'class',
  presets: [themeConfig],
}
