# Installation
Global installation, on-demand installation, configuration

## Global Installation
::: code-group
```bash [npm]
npm install nextui-vue tailwindcss @heroui/theme
```
```bash [pnpm]
pnpm install nextui-vue tailwindcss @heroui/theme
```
```bash [yarn]
yarn install nextui-vue tailwindcss @heroui/theme
```
```bash [bun]
bun install nextui-vue tailwindcss @heroui/theme
```
:::

You can use all components under the `nextui-vue` namespace.

nextui-vue does not bundle the `@heroui/theme` dependency and it depends on `tailwindcss`, so you must install them together.

## On-Demand Installation
You can also install only the components you need. Please refer to each component's documentation to learn how to install them.

::: tip
Make sure you have completed the [Configuration](#configuration) before using on-demand installation.
:::

## Configuration
nextui-vue supports the latest version of TailwindCSS (currently V4) by default, and also provides limited support for V3 and below.

### TailwindCSS
TailwindCSS can be configured in two different ways: **with** a tailwind.config.js file and **without** a tailwind.config.js file.

#### With tailwind.config.js file (Recommended)
If you prefer to configure TailwindCSS through a `tailwind.config.js` file, you can configure it like this:

```js{2,6,7,8,9,10}
// tailwind.config.js
import { heroui } from '@heroui/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  plugins: [heroui()]
}
```

::: details Why is `tailwind.config.js` recommended?
Configuring TailwindCSS through a `tailwind.config.js` file has several benefits:

- Reduced migration cost. Keeping the `tailwind.config.js` file allows you to use the new version of TailwindCSS.
- Intuitive. No need to understand the configuration details of the new TailwindCSS, you can configure it completely based on past experience, but there are [some limitations](https://tailwindcss.com/docs/functions-and-directives#config-directive).
- Compatibility. Some libraries may not have adapted to the new version of TailwindCSS yet, but can still be used in the old version, and keeping the `tailwind.config.js` file also reserves space for subsequent library adaptation.
:::

#### Without tailwind.config.js file
Configure TailwindCSS through directives, which is also the officially recommended configuration method.

First create a `heroui.ts` file in the root directory to export HeroUI's TailwindCSS plugin:

```ts
// heroui.ts
import { heroui } from "@heroui/theme";

export default heroui(); // Don't forget to call the `heroui` function
```

Then create a css file in the root directory, assuming the name is `index.css`, import the plugin and configure TailwindCSS:

::: tip
You can also configure TailwindCSS in an existing css file, and make sure the imported file path is correct.
:::

```css
/* index.css */
@import "tailwindcss";
@source "../node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}";
@plugin "./heroui.ts";
@custom-variant dark (&:is(.dark *));
```

### Vite
If your project uses Vite, you need to install the official `@tailwindcss/vite` plugin and use it in your vite configuration file.

#### Install plugin
```sh
npm install @tailwindcss/vite // [!=npm auto]
```

#### Configure vite
```ts{3,6}
// vite.config.ts
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
});
```
