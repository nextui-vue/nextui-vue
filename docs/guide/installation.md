# 安装

## 主题
安装HeroUI的主题依赖。

::: code-group
```bash [npm]
npm add @heroui/theme
```
```bash [pnpm]
pnpm add @heroui/theme
```
```bash [yarn]
yarn add @heroui/theme
```
```bash [bun]
bun add @heroui/theme
```

由于NextUI使用了[tailwindcss]()，因此还需要作为开发依赖安装它。

> [!INFO]
> 可以参考tailwindcss官方的[安装步骤]()

## 按需安装(**推荐**)
组件以`@vue-nextui/*`的格式可作为依赖被安装

## 全局安装
```bash
npm install nextui-vue
```
组件在命名空间`nextui-vue`下被具名导出

以[button组件](/components/button)举例, 在Vue文件中使用:

```vue
<script lang="ts" setup>
import { Button } from 'nextui-vue'
</script>

<template>
  <Button>Click me</Button>
</template>
```
