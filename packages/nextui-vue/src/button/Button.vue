<script lang="ts" setup>
import { computed, ref } from 'vue'
import { button } from '@nextui-org/theme'
import type { ButtonVariantProps } from '@nextui-org/theme'
import useRipple from '../shared/useRipple'

export interface ButtonProps {
  disabled?: boolean
  size?: ButtonVariantProps['size']
  type?: ButtonVariantProps['variant']
}

const props = defineProps<ButtonProps>()

const buttonRef = ref<HTMLButtonElement>()
useRipple(buttonRef)
const hover = ref(true)
const click = ref(true)

const className = computed(() => {
  return button({
    variant: props.type,
    size: 'sm',
    color: 'success',
    radius: 'sm',
    fullWidth: false,
    isDisabled: props.disabled,
    isInGroup: false,
    disableAnimation: false,
    isIconOnly: false,
  })
})

function focus() {
  click.value = true
}

function blur() {
  click.value = false
}
</script>

<template>
  <button
    ref="buttonRef"
    :data-pressed="click ? true : null"
    :data-hover="hover ? true : null"
    :class="className"
    @mouseup="blur"
    @mousedown="focus"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
  >
    <slot />
  </button>
</template>

<style scoped>

</style>
