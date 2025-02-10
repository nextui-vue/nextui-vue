## 主题
安装NextUI的主题依赖。
```bash
npm add @nextui-org/theme
```

由于NextUI使用了[tailwindcss]()，因此还需要作为开发依赖安装它。如果你的项目已经在使用tailwindcss，可跳过接下来的安装步骤。

可以参考tailwindcss官方的[安装步骤]()

如果你想/已经使用vite作为开发构建工具，可通过以下步骤安装

## 按需安装(**推荐**)
组件以`@vue-nextui/component`的格式可作为依赖被安装

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
