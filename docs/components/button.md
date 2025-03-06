# Button
允许用户通过单次轻触执行操作和选择

## 安装
::: code-group
```sh [npm]
npm add @vue-nextui/button
```
```sh [pnpm]
pnpm add @vue-nextui/button
```
```sh [yarn]
yarn add @vue-nextui/button
```
```sh [bun]
bun add @vue-nextui/button
```
:::

> [!NOTE]
> 如果你使用[全局安装](/guide/installation#全局安装)的方式，可忽略此安装步骤

## 导入
::: code-group
```js [按需导入]
import { Button } from '@vue-nextui/button'
```
```js [全局导入]
import { Button } from 'nextui-vue'
```
:::

## 使用

<NButton>button</NButton>

::: code-group
```vue [示例代码]
<script setup lang="ts">
import { Button } from 'nextui-vue'
</script>

<template>
  <Button>click</Button>
</template>
```
:::
