<script lang="ts" setup>
import { computed, ref } from 'vue'
import { button } from '@nextui-org/theme'
import { useRipple } from '@nextui-vue/shared'
import type { ButtonProps } from './button-types'

const props = defineProps<ButtonProps>()

const hover = ref(true)
const click = ref(true)

const buttonRef = ref<HTMLButtonElement>()
useRipple(buttonRef)

const className = computed(() => {
  return button({ ...props })
})
</script>

<template>
  <button
    ref="buttonRef"
    :data-pressed="click ? true : null"
    :data-hover="hover ? true : null"
    :class="className"
    @mouseup="click = false"
    @mousedown="click = true"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
  >
    <slot />
  </button>
</template>
