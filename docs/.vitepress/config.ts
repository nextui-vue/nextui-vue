import { defineConfig } from 'vitepress'
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons'
import { componentViewMarkdownPlugin } from 'vitepress-plugin-vue-component-view'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'NextUI Vue',
  description: '基于HeroUI Theme构建的Vue3组件库',
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
      groupIconVitePlugin(),
    ],
  },

  themeConfig: {
    logo: '/logo.png',
    search: {
      provider: 'local',
    },
    outline: 'deep',
    nav: [
      { text: '指南', link: '/guide/introduction' },
      { text: '组件', link: '/components/button' },
      { text: 'HeroUI', link: 'https://heroui.com/' },
    ],

    sidebar: [
      {
        text: '指南',
        collapsed: false,
        items: [
          { text: '介绍', link: '/guide/introduction' },
          { text: '安装', link: '/guide/installation' },
        ],
      },
      {
        text: '组件',
        collapsed: false,
        items: [
          { text: 'Button', link: '/components/button' },
          { text: 'Alert', link: '/components/alert' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/nextui-vue/nextui-vue' },
    ],

    footer: {
      message: 'MIT Licensed',
      copyright: '©hotdogc1017',
    },
  },
})
