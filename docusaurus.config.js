// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config


var redirects = require("./data/redirects.json");


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "PureLyrics",
  tagline: "Home to Tamil and English Christian lyrics",
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: "https://purelyrics.org",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/purelyrics/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "davidson-r", // Usually your GitHub org/user name.
  projectName: "purelyrics", // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "tamil",
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
        },
      }),
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "english",
        path: "english",
        routeBasePath: "english",
        sidebarPath: require.resolve("./sidebars.js"),
      },
    ],
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: redirects.map((x) => ({ to: x.to, from: x.from })),
      },
    ],
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-EJP9Q06MM1',
        anonymizeIP: true,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "PureLyrics",
        // logo: {
        //   alt: "PureLyrics",
        //   src: "img/logo.svg",
        // },
        items: [
          {
            type: "doc",
            docId: "அ/அக்கினி-அபிஷேகம்-ஈந்திடும்-தேவ-ஆவியால்",
            position: "left",
            label: "Tamil",
            to: "/tamil/",
          },
          {
            to: "/english/A/a-babe-is-born-in-bethlehem", // ./docs-api/Intro.md
            label: "English",
            position: "left",
            activeBaseRegex: `/english/`,
          },
        ],
      },
      footer: {
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()} PureLyrics.org`,
      },
      
    }),
};

export default config;
