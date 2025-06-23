# Installation
Global installation, on-demand installation, configuration

## Global Installation
Allows you to use all components under the `nextui-vue` namespace.

::: code-group
```bash [npm]
npm install nextui-vue
```
```bash [pnpm]
pnpm install nextui-vue
```
```bash [yarn]
yarn install nextui-vue
```
```bash [bun]
bun install nextui-vue
```
:::

## On-Demand Installation
Install only the components you need. Please refer to each component's documentation to learn how to install them.

::: tip
Make sure you have completed the [Theme Configuration](#theme-configuration) before using on-demand installation.
:::

## Theme Configuration
Install the HeroUI theme.

::: code-group
```bash [npm]
npm install @heroui/theme
```
```bash [pnpm]
pnpm install @heroui/theme
```
```bash [yarn]
yarn install @heroui/theme
```
```bash [bun]
bun install @heroui/theme
```
:::

Since HeroUI is based on TailwindCSS, you also need to install it. Refer to [TailwindCSS installation steps](https://tailwindcss.com/docs/installation).

:::warning
Only TailwindCSS V3 and below are supported, V4 is **not supported**, [related issue](https://github.com/nextui-vue/nextui-vue/issues/27).
:::

Then add the following code to your `tailwind.config.js` file:

```js{2,6,7,8,12,13}
// tailwind.config.js
const { heroui } = require('@heroui/theme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [heroui()]
}
```
