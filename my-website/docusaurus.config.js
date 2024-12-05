// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
const simplePlantUML = require("@akebifiky/remark-simple-plantuml");
// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ГИР',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://Sophia3136.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: 'gir-docs',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Sophia3136', // Usually your GitHub org/user name.
  projectName: 'gir-docs', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,
  deploymentBranch: 'gh-pages',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  
  plugins: [
    ['drawio', {}],
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          remarkPlugins: [simplePlantUML],
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
    [
      'redocusaurus',
      {
        specs: [
          {
            id: 'petstore',
            spec: 'api_specs/openapi.yaml',
          },
        ],
        theme: {
          primaryColor: '#1890ff',
        },
      }
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Гуляй Играй Развивай',
        logo: {
          alt: 'GIR Logo',
          src: 'img/gir-logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Документация',
          },
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
