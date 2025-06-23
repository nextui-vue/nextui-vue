# 安装
全局安装、按需安装、配置

## 全局安装
可以使你在`nextui-vue`命名空间下使用所有组件。

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

## 按需安装
仅安装你需要的组件，请参考每个组件的文档以了解如何安装。

::: tip
使用按需安装前请确保你已经完成了[主题配置](#主题配置)。
:::

## 主题配置
安装HeroUI主题。

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

由于HeroUI基于TailwindCSS，因为你还需要安装它，参考[TailwindCSS的安装步骤](https://tailwindcss.com/docs/installation)。

:::warning
仅支持TailwindCSS V3及以下的版本，**不支持**V4，[相关issue](https://github.com/nextui-vue/nextui-vue/issues/27)。
:::

然后在你的`tailwind.config.js`文件中添加如下代码：

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
