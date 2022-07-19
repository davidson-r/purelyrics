var redirects = require("./data/redirects.json");

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "PureLyrics",
  tagline: "Home to Tamil and English Christian lyrics",
  url: "https://purelyrics.org",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  // favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "davidson-r", // Usually your GitHub org/user name.
  projectName: "purelyrics", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "tamil",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
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

        // [
        //   // /docs/oldDoc -> /docs/newDoc
        //   {
        //     to: "/docs/newDoc",
        //     from: "/docs/oldDoc",
        //   },
        //   // Redirect from multiple old paths to the new path
        //   {
        //     to: "/docs/newDoc2",
        //     from: ["/docs/oldDocFrom2019", "/docs/legacyDocFrom2016"],
        //   },
        // ],
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
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
