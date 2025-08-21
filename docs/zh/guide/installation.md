# 安装
全局安装、按需安装、配置

## 全局安装
::: code-group
```bash [npm]
npm install heroui-vue tailwindcss @heroui/theme
```
```bash [pnpm]
pnpm install heroui-vue tailwindcss @heroui/theme
```
```bash [yarn]
yarn install heroui-vue tailwindcss @heroui/theme
```
```bash [bun]
bun install heroui-vue tailwindcss @heroui/theme
```
:::

你可以在`heroui-vue`命名空间下使用所有组件。

heroui-vue并不内置`@heroui/theme`主题依赖，且它依赖`tailwindcss`，因此你必须一同安装它们。

## 按需安装
你也可以仅安装你需要的组件，请参考每个组件的文档以了解如何安装。

::: tip
使用按需安装前请确保你已经完成了[配置](#配置)。
:::

## 配置
heroui-vue默认支持最新版本的TailwindCSS（当前是V4），且对V3及以下的版本也提供有限的支持。

### TailwindCSS
可通过两种不同的方式来配置TailwindCSS，即**有**tailwind.config.js文件和**无**tailwind.config.js文件。

#### 有tailwind.config.js文件（推荐）
如果你更喜欢通过`tailwind.config.js`文件来配置TailwindCSS，可以这样配置：

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

::: details 为什么推荐`tailwind.config.js`?
通过`tailwind.config.js`文件来配置TailwindCSS有几个好处：

- 降低迁移成本。保留`tailwind.config.js`文件也可以使用新版的TailwindCSS。
- 符合直觉。不需要了解新版TailwindCSS的配置细节，完全可以按照以往的经验来配置，但是有[一些限制](https://tailwindcss.com/docs/functions-and-directives#config-directive)。
- 兼容性。一些库可能还没有适配新版TailwindCSS，但是仍然可以在旧版本中使用，而保留`tailwind.config.js`文件也为后续库的适配预留了空间。
:::

#### 无tailwind.config.js文件
通过指令来配置TailwindCSS，这也是官方推荐的配置方式。

首先在根目录下创建一个`heroui.ts`文件，用来导出HeroUI的TailwindCSS插件:

```ts
// heroui.ts
import { heroui } from "@heroui/theme";

export default heroui(); // 别忘记调用`heroui`函数
```

然后在根目录下创建一个css文件，假设名称是`index.css`，导入插件并且配置TailwindCSS:

::: tip
你也可以在已有的css文件中配置TailwindCSS，并且确保导入的文件路径正确。
:::

```css
/* index.css */
@import "tailwindcss";
@source "../node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}";
@plugin "./heroui.ts";
@custom-variant dark (&:is(.dark *));
```

### Vite
如果你的项目使用Vite，需要安装官方的`@tailwindcss/vite`插件，然后在你的vite配置文件使用它。

#### 安装插件
```sh
npm install @tailwindcss/vite // [!=npm auto]
```

#### 配置vite
```ts{3,6}
// vite.config.ts
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
});
```
