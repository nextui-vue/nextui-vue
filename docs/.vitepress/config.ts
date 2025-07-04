import { defineConfig } from 'vitepress'
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons'
import { componentViewMarkdownPlugin } from 'vitepress-plugin-vue-component-view'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'NextUI Vue',
  description: 'Vue 3 Component Library based on HeroUI Theme',
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  ignoreDeadLinks: true,

  markdown: {
    config(md) {
      md.use(groupIconMdPlugin)
      md.use(componentViewMarkdownPlugin)
    },
  },
  vite: {
    plugins: [
      // @ts-expect-error ignore
      groupIconVitePlugin(),
    ],
  },

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      link: "/en/",
      title: 'NextUI Vue',
      description: 'Vue 3 Component Library based on HeroUI Theme',
      themeConfig: {
        nav: [
          { text: 'Guide', link: '/en/guide/introduction' },
          { text: 'Components', link: '/en/components/button' },
          { text: 'HeroUI', link: 'https://heroui.com/' },
        ],
        sidebar: [
          {
            text: 'Guide',
            collapsed: false,
            items: [
              { text: 'Introduction', link: '/en/guide/introduction' },
              { text: 'Installation', link: '/en/guide/installation' },
            ],
          },
          {
            text: 'Components',
            collapsed: false,
            items: [
              { text: 'Button', link: '/en/components/button' },
              { text: 'Alert', link: '/en/components/alert' },
            ],
          },
        ],
      },
    },
    zh: {
      label: '简体中文',
      link: "/zh/",
      lang: 'zh-CN',
      title: 'NextUI Vue',
      description: '基于HeroUI Theme构建的Vue3组件库',
      themeConfig: {
        nav: [
          { text: '指南', link: '/zh/guide/introduction' },
          { text: '组件', link: '/zh/components/button' },
          { text: 'HeroUI', link: 'https://heroui.com/' },
        ],
        sidebar: [
          {
            text: '指南',
            collapsed: false,
            items: [
              { text: '介绍', link: '/zh/guide/introduction' },
              { text: '安装', link: '/zh/guide/installation' },
            ],
          },
          {
            text: '组件',
            collapsed: false,
            items: [
              { text: 'Button', link: '/zh/components/button' },
              { text: 'Alert', link: '/zh/components/alert' },
            ],
          },
        ],
      },
    },
  },

  themeConfig: {
    logo: '/logo.png',
    search: {
      provider: 'local',
    },
    outline: 'deep',

    socialLinks: [
      { icon: 'github', link: 'https://github.com/nextui-vue/nextui-vue' },
    ],

    footer: {
      message: 'MIT Licensed',
      copyright: '©hotdogc1017',
    },

    // Language switcher
    langMenuLabel: 'Change language',
    returnToTopLabel: 'Return to top',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Dark mode',
    lightModeSwitchTitle: 'Switch to light theme',
    darkModeSwitchTitle: 'Switch to dark theme',
  },
})
