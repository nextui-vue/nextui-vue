/**
 * The type needs to be regenerated because of this [issue](https://github.com/vitejs/vite-plugin-vue/issues/167)
 */
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

interface ButtonGroup {
  /**
   * 是否占满父容器宽度
   */
  fullWidth: boolean
}

type ButtonProps = Partial<Button>

export type { ButtonProps, ButtonGroup }
