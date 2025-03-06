import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import './styles.css'
import 'virtual:group-icons.css'

export default {
  extends: DefaultTheme,
  enhanceApp() {

  },
} satisfies Theme
