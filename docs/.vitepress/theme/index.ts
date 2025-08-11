import DefaultTheme from "vitepress/theme";
import type { Theme } from "vitepress";
import "./styles.css";
import "virtual:group-icons.css";
import { enhanceAppWithComponentView } from "vitepress-plugin-vue-component-view/client";
import { enhanceAppWithTabs } from "vitepress-plugin-tabs/client";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    enhanceAppWithComponentView(app);
    enhanceAppWithTabs(app);
  },
} satisfies Theme;
