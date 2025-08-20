<script setup>
import { Alert } from '@vue-nextui/core/raw'
</script>

# Alert
Temporary notifications that provide concise feedback about actions or events

## Installation
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
> If you use [global installation](/en/guide/installation#global-installation), you can skip this installation step

## Import
::: code-group
```js [On-demand import]
import { Alert } from '@vue-nextui/alert'
```
```js [Global import]
import { Alert } from 'nextui-vue'
```
:::

## Usage

<Alert title="This is an alert" description="Thanks for subscribing to our newsletter!" />

::: code-group
```vue [Example]
<script setup lang="ts">
import { Alert } from 'nextui-vue'
</script>

<template>
  <Alert
    title="This is an alert"
    description="Thanks for subscribing to our newsletter!"
  />
</template>
```
:::

### Colors
Alert has 6 color variants to convey different meanings.

<div style="display: grid; row-gap: 1rem;">
  <Alert v-for="color in ['default', 'primary', 'secondary', 'success', 'warning', 'danger']" :key="color" :color :title="`This is a ${color} alert`" />
</div>

::: code-group
```vue [Example]
<script setup lang="ts">
import { Alert } from 'nextui-vue'
</script>

<template>
  <div style="display: grid; row-gap: 1rem;">
    <Alert
      v-for="color in ['default', 'primary', 'secondary', 'success', 'warning', 'danger']"
      :key="color"
      :color
      :title="`This is a ${color} alert`"
    />
  </div>
</template>
```
:::

### Variants

<div style="display: grid; row-gap: 1rem; margin-top: 1rem;">
  <Alert
   v-for="variant in ['solid', 'bordered', 'flat', 'faded']"
   :key="variant"
   :variant color="secondary"
   :title="`This is a ${variant} alert`" />
</div>

::: code-group
```vue [Example]
<script setup lang="ts">
import { Alert } from 'nextui-vue'
</script>

<template>
  <div style="display: grid; row-gap: 1rem;">
    <Alert
      v-for="variant in ['solid', 'bordered', 'flat', 'faded']"
      :key="variant"
      color="secondary"
      :variant
      :title="`This is a ${variant} alert`"
    />
  </div>
</template>
```
:::

### Custom Icon

By default, the Alert component displays a corresponding icon based on the `color` prop. You can override this behavior by providing a custom icon using the `icon` slot.

<Alert title="An alert with a custom icon">
  <template #icon>
    <svg
      data-name="Iconly/Curved/Profile"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      >
        <path
          d="M11.845 21.662C8.153 21.662 5 21.088 5 18.787s3.133-4.425 6.845-4.425c3.692 0 6.845 2.1 6.845 4.4s-3.134 2.9-6.845 2.9z"
          data-name="Stroke 1"
        />
        <path d="M11.837 11.174a4.372 4.372 0 10-.031 0z" data-name="Stroke 3" />
      </g>
    </svg>
  </template>
</Alert>

::: code-group
```vue [Example]
<script setup lang="ts">
import { Alert } from 'nextui-vue'
</script>

<template>
  <Alert title="An alert with a custom icon">
    <template #icon>
      <svg
        data-name="Iconly/Curved/Profile"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="{10}"
          strokeWidth="{1.5}"
        >
          <path
            d="M11.845 21.662C8.153 21.662 5 21.088 5 18.787s3.133-4.425 6.845-4.425c3.692 0 6.845 2.1 6.845 4.4s-3.134 2.9-6.845 2.9z"
            data-name="Stroke 1"
          />
          <path d="M11.837 11.174a4.372 4.372 0 10-.031 0z" data-name="Stroke 3" />
        </g>
      </svg>
    </template>
  </Alert>
</template>
```
:::

### Without Icon

You can hide the icon by setting the `hideIcon` prop to `true`.

<Alert
  hideIcon
  color="success"
  description="Thanks for subscribing to our newsletter!"
  title="This is an alert"
  variant="faded"
/>

::: code-group
```vue [Example]
<Alert
  hideIcon
  color="success"
  description="Thanks for subscribing to our newsletter!"
  title="This is an alert"
  variant="faded"
/>
```
:::

### Without Icon Wrapper

You can hide the icon wrapper by setting the `hideIconWrapper` prop to `true`.

<Alert
  hideIconWrapper
  color="secondary"
  description="This is a bordered variant alert"
  title="Bordered Alert"
  variant="bordered"
/>

::: code-group
```vue [Example]
<Alert
  hideIconWrapper
  color="secondary"
  description="This is a bordered variant alert"
  title="Bordered Alert"
  variant="bordered"
/>
```
:::
