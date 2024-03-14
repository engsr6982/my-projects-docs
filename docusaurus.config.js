// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "engsr6982's projects docs",
  tagline: "engsr6982's some projects docs",
  // favicon: "img/favicon.ico",

  // 页面地址
  url: "https://engsr6982.github.io",
  baseUrl: "/projects-docs/",

  // Github配置
  organizationName: "engsr6982", // GitHub名称
  projectName: "projects-docs", // 仓库名称

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // 语言配置
  i18n: {
    defaultLocale: "zh-CN",
    locales: ["zh-CN"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: false,
        pages: {
          path: "pages",
        },
        docs: {
          sidebarPath: "./sidebars.js",
          editUrl: "https://github.com/engsr6982/projects-docs/tree/main",
        },
        theme: {
          customCss: "./static/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // 文档配置
      docs: {
        sidebar: {
          hideable: true, // 侧边栏隐藏
          autoCollapseCategories: true,
        },
      },
      // 导航栏
      navbar: {
        title: "Projects Docs",
        // logo: {
        //   alt: "My Site Logo",
        //   src: "img/logo.svg",
        // },
        hideOnScroll: true, // 滚动隐藏标题
        items: [
          {
            type: "docSidebar",
            sidebarId: "auto",
            label: "项目",
            position: "left",
          },
          {
            href: "https://github.com/engsr6982/projects-docs",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      // 页面底部
      footer: {
        style: "dark",
        links: [
          {
            title: "Links",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/engsr6982/projects-docs",
              },
              {
                label: "MineBBS",
                href: "https://minebbs.com",
              },
              {
                label: "Docusaurus",
                href: "https://docusaurus.io/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} engsr6982's some Projects docs. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),

  themes: [
    [
      // @ts-ignore 本地搜索组件
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      // @ts-ignore
      ({
        hashed: true, // 是否对搜索结果进行hash
        // language: ["zh"], // 搜索语言
        // indexDocs: true, // 是否对docs进行索引
        indexBlog: false, // 是否对blog进行索引
        // indexPages: false, // 是否对pages进行索引
        // docsRouteBasePath: ["docs"], // 配置需要搜索的文档路径
      }),
    ],
  ],
};

export default config;
