import { nextui } from "@nextui-org/theme"

/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    './index.html',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
      './src/**/*.{js,ts,jsx,tsx,vue}'
    ],
  theme: {
  },
  darkMode: 'class',
  plugins: [nextui()],
}
