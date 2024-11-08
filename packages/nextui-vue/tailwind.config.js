import { nextui } from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: {
    relative: true,
    files: ['./src/**/*.{js,ts,vue}', './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'],
  },
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [nextui()],
}
