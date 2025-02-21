# Alert
提供关于操作或事件的简洁反馈的临时通知

## 安装
::: code-group
```sh [npm]
npm add @vue-nextui/alert
```
```sh [pnpm]
pnpm add @vue-nextui/alert
```
```sh [yarn]
yarn add @vue-nextui/alert
```
```sh [bun]
bun add @vue-nextui/alert
```
:::

> [!NOTE]
> 如果你使用[全局安装](/guide/installation#全局安装)的方式，可忽略此安装步骤

## 导入
::: code-group
```js [按需导入]
import { Alert } from '@vue-nextui/alert'
```
```js [全局导入]
import { Alert } from 'nextui-vue'
```
:::

## 使用

<NAlert>alert</NAlert>

::: code-group
```vue [示例代码]
<script setup lang="ts">
import { Alert } from 'nextui-vue'
</script>

<template>
    <Alert>alert</Alert>
</template>
```
:::
