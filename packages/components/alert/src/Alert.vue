<script lang="ts" setup>
import { ref } from 'vue'
import { alert } from '@heroui/theme'
import { alertIconPath } from './constant'

export interface AlertProps {
  hideIcon?: boolean
  /**
   * 警告消息的标题
   */
  title?: string
  /**
   * 警告消息的描述
   */
  description?: string
  /**
   * 在警告中显示的图标 - 会覆盖默认图标
   */
  icon?: string
  /**
   * 警告是否可见。
   * @default false
   */
  isVisible?: boolean
  /**
   * 警告默认是否可见。
   * @default false
   */
  isDefaultVisible?: boolean
  /**
   * 警告可见状态变化时的事件处理程序。
   * @param isVisible 布尔值，表示是否可见
   * @returns void
   */
  onVisibleChange?: (isVisible: boolean) => void
  /**
   * 是否允许用户关闭警告
   */
  isClosable?: boolean
  /**
   * 关闭按钮被点击时调用的函数
   */
  onClose?: () => void
}

export interface AlertVariantProps {
  variant?: 'solid' | 'flat' | 'faded' | 'bordered' | undefined
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | undefined
  radius?: 'sm' | 'none' | 'md' | 'lg' | 'full' | undefined
  hideIcon?: boolean | undefined
  hideIconWrapper?: boolean | undefined
  hasContent?: boolean | undefined
}

const props = withDefaults(defineProps<AlertProps & AlertVariantProps>(), {
  hideIcon: false,
  isVisible: false,
  isDefaultVisible: false,
  isClosable: false,
  onClose: () => {},
})

const { base, mainWrapper, title, description, alertIcon, iconWrapper } = alert({})
</script>

<template>
  <div :class="base()">
    <slot name="startContent" />

    <div v-if="!props.hideIcon" :class="iconWrapper()">
      <svg
        fill="none" height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
        :class="alertIcon()"
      >
        <path :d="alertIconPath" />
      </svg>
    </div>

    <div :class="mainWrapper()">
      <div v-if="props.title" :class="title()" />
      <slot v-else />

      <div v-if="props.description" :class="description()">
        {{ props.description }}
      </div>
      <slot v-else name="description" />
    </div>

    <slot name="endContent" />

    <button v-if="props.isClosable || props.onClose" @click="props.onClose">
      close
    </button>
  </div>
</template>

<style scoped>

</style>
