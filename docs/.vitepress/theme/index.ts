import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import './styles.css'
import 'virtual:group-icons.css'
import { enhanceAppWithComponentView } from 'vitepress-plugin-vue-component-view/client'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    enhanceAppWithComponentView(app)
  },
} satisfies Theme
