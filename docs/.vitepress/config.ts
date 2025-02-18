import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'NextUI Vue',
  description: '基于NextUI Theme构建的Vue组件库',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
  ],

  themeConfig: {
    logo: '/logo.png',
    search: {
      provider: 'local',
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '组件', link: '/markdown-examples' },
      {
        text: '相关链接',
        items: [
          {
            text: 'NextUI',
            link: 'https://nextui.org/',
          },
          {
            text: 'Radix Vue',
            link: 'https://www.radix-vue.com/',
          },
          {
            text: 'IKUNUI',
            link: 'https://laine001.github.io/ikun-ui/',
          },
        ],
      },
    ],

    sidebar: [
      {
        text: '起步',
        items: [
          { text: '安装', link: '/guide/installation' },
          { text: '配置', link: '/guide/configuration' },
        ],
      },
      {
        text: '组件',
        collapsed: true,
        items: [
          { text: '按钮', link: '/components/button' },
          { text: 'alert', link: '/components/alert' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hotdogc1017/nextui-vue' },
    ],

    footer: {
      message: 'MIT Licensed',
      copyright: '©hotdogc1017',
    },
  },
})
