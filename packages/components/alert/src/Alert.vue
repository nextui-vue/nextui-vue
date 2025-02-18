<script lang="ts" setup>
import { ref } from 'vue'
import { alert } from '@heroui/theme'

const classname = alert({})

console.log(classname)
</script>

<template>
  <span :class="classname">
    <slot />
  </span>
</template>

<style scoped>

</style>
