<script lang="ts" setup>
import { computed, ref } from 'vue'
import { button } from '@nextui-org/theme'
import { useRipple } from '@vue-nextui/shared'

interface Button {
  /**
   * 按钮的变体样式
   */
  variant: 'solid' | 'bordered' | 'light' | 'flat' | 'faded' | 'shadow' | 'ghost'

  /**
   * 按钮的尺寸
   */
  size: 'sm' | 'md' | 'lg'

  /**
   * 按钮的颜色
   */
  color: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'

  /**
   * 按钮的圆角样式
   */
  radius: 'none' | 'sm' | 'md' | 'lg' | 'full'

  /**
   * 是否占满父容器宽度
   */
  fullWidth: boolean

  /**
   * 是否禁用按钮
   */
  isDisabled: boolean

  /**
   * 是否在按钮组中
   */
  isInGroup: boolean

  /**
   * 是否仅为图标按钮
   */
  isIconOnly: boolean

  /**
   * 是否禁用动画效果
   */
  disableAnimation: boolean
}

type ButtonProps = Partial<Button>

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
