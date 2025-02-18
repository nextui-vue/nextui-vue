import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import { Alert, Button } from 'nextui-vue'
import './styles.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('NButton', Button)
    app.component('NAlert', Alert)
  },
} satisfies Theme
