<script lang="ts" setup>
import { computed, ref } from 'vue'
import { button } from '@nextui-org/theme'
import type { ButtonVariantProps } from '@nextui-org/theme'
import useRipple from '@/shared/useRipple'

const props = defineProps<ButtonVariantProps>()

const buttonRef = ref<HTMLButtonElement>()
useRipple(buttonRef)
const hover = ref(true)
const click = ref(true)

const className = computed(() => {
  return button({
    ...props
  })
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

<style scoped>

</style>
