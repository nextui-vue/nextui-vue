# Installation

```bash
npm add @vue-nextui/button @nextui-org/theme
```

# Configuration

```ts
// tailwind.config.js
const { nextui } = require('@nextui-org/theme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [nextui()]
}
```

# Usage

```vue
<script lang="ts" setup>
import { Button } from '@vue-nextui/button'
</script>

<template>
  <Button>Click</Button>
</template>
```
