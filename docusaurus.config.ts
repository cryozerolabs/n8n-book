import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "冰零的n8n实战指南",
  tagline: "冰零的n8n实战指南",
  favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://n8n.cryozero.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "cryozerolabs", // Usually your GitHub org/user name.
  projectName: "n8n-book", // Usually your repo name.

  deploymentBranch: "gh-pages", // 部署的分支名
  trailingSlash: false,

  onBrokenLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "冰零的n8n实战指南",
      logo: {
        alt: "冰零的n8n实战指南",
        src: "img/logo.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "实战指南",
        },
        { to: "/blog", label: "博客", position: "left" },
        {
          href: "https://github.com/cryozerolabs/n8n-book",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "📘 实战指南",
          items: [
            {
              label: "快速开始",
              to: "/docs/intro",
            },
            {
              label: "进阶教程",
              to: "/docs/advanced",
            },
            {
              label: "模版仓库",
              to: "/workflows",
            },
          ],
        },
        {
          title: "🛠️ 技术生态",
          items: [
            {
              label: "n8n 官方文档",
              href: "https://docs.n8n.io/",
            },
            {
              label: "Docker Hub",
              href: "https://hub.docker.com/",
            },
            {
              label: "钉钉 n8n 插件",
              href: "https://www.npmjs.com/package/@cryozerolabs/n8n-nodes-dingtalk",
            },
            {
              label: "DeepSeek API",
              href: "https://platform.deepseek.com/",
            },
          ],
        },
        {
          title: "💬 关注冰零",
          items: [
            {
              label: "Blog",
              href: "https://blog.cryozerolabs.com/",
            },
            {
              label: "GitHub",
              href: "https://github.com/cryozerolabs",
            },
            {
              label: "加入微信群",
              to: "/contact",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 冰零实验室 (CryoZero Labs). Built with Docusaurus & n8n.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
