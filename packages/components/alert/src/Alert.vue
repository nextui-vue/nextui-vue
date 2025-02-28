<script lang="ts" setup>
import { computed, ref } from 'vue'
import { alert } from '@heroui/theme'
import { defaultIconPath, successIconPath, warningIconPath } from './constant'

export interface AlertProps {
  /**
   * 警告消息的标题
   */
  title?: string
  /**
   * 警告消息的描述
   */
  description?: string
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
   * 是否允许用户关闭警告
   */
  isClosable?: boolean
}

export interface AlertVariantProps {
  variant?: 'solid' | 'flat' | 'faded' | 'bordered' | undefined
  color?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger'
    | undefined
  radius?: 'sm' | 'none' | 'md' | 'lg' | 'full' | undefined
  hideIcon?: boolean | undefined
  hideIconWrapper?: boolean | undefined
  hasContent?: boolean | undefined
}

const props = withDefaults(defineProps<AlertProps & AlertVariantProps>(), {

})

const emits = defineEmits<{
  /**
   * 关闭按钮被点击时调用的函数
   */
  (e: 'close'): void
  /**
   * 警告可见状态变化时的事件处理程序。
   * @param isVisible 布尔值，表示是否可见
   * @returns void
   */
  (e: 'visibleChange', isVisible: boolean): void
}>()

const { base, mainWrapper, title, description, alertIcon, iconWrapper } = alert(
  {
    color: props.color ?? 'default',
    variant: props.variant ?? 'flat',
    hideIconWrapper: props.hideIconWrapper,
  },
)

const icon = computed(() => {
  const color = props.color

  if (color === 'default' || color === 'secondary' || color === 'primary') {
    return defaultIconPath
  }
  else if (color === 'success') {
    return successIconPath
  }
  else if (color === 'warning' || color === 'danger') {
    return warningIconPath
  }
  else {
    return defaultIconPath
  }
})

function onClose() {
  emits('close')
}
</script>

<template>
  <div :class="base()">
    <slot name="startContent" />

    <div v-if="!props.hideIcon" :class="iconWrapper()">
      <slot name="icon">
        <svg
          fill="none"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          :class="alertIcon()"
        >
          <path :d="icon" />
        </svg>
      </slot>
    </div>

    <div :class="mainWrapper()">
      <div v-if="props.title" :class="title()">
        {{ props.title }}
      </div>
      <slot v-else />

      <div v-if="props.description" :class="description()">
        {{ props.description }}
      </div>
      <slot v-else name="description" />
    </div>

    <slot name="endContent" />

    <!-- Improve: use the `Button` component instead -->
    <button v-if="props.isClosable" @click="onClose">
      close
    </button>
  </div>
</template>

<style scoped></style>
