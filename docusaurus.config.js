const math = require("remark-math");
const path = require("path");
const katex = require("rehype-katex");

module.exports = {
  title: 'DODO Docs',
  tagline: "Let's DODO it!",
  url: 'https://DODOEX.github.io/docs',
  baseUrl: '/docs/',
  favicon: 'img/favicon.png',
  organizationName: 'DODOEX', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-zB1R0rpPzHqg7Kpt0Aljp8JPLqbXI3bhnPWROx27a9N0Ll6ZP/+DiW/UqRcLbRjq',
      crossorigin: 'anonymous',
    },
  ],
  themeConfig: {
    announcementBar: {
      content:
        'The current document is no longer updated, <a target="_blank" rel="noopener noreferrer" href="https://docs.dodoex.io/english/">click here to the latest version of DODO DOCS</a>.',
      textColor: '#1A1A1B',
      backgroundColor: '#FAAD32',
      isCloseable: false,
    },
    navbar: {
      title: 'DODO Docs',
      logo: {
        alt: 'DODO',
        src: 'img/logo.svg',
        href: 'https://DODOEX.github.io/docs/',
      },
      items: [
        {
          type: 'docsVersionDropdown',
          position: 'left',
        },
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://app.dodoex.io',
          label: 'Exchange',
          position: 'left',
        },
        {
          href: 'https://github.com/DODOEX',
          label: 'GitHub',
          position: 'left',
        },
        {
          type: 'localeDropdown',
          position: 'right',
          dropdownItemsAfter: [
            {
              to: 'https://github.com/DODOEX/docs/issues/24',
              label: 'Help Us Translate',
            },
          ],
        },
      ],
    },
    footer: {
      style: 'dark',
      // links: [
      //   {
      //     title: "Developer",
      //     items: [
      //       {
      //         label: "GitHub",
      //         href: "https://github.com/facebook/docusaurus",
      //       },
      //       {
      //         label: "Deployed Info",
      //         href: "https://github.com/facebook/docusaurus",
      //       },
      //     ],
      //   },
      //   {
      //     title: "Community",
      //     items: [
      //       {
      //         label: "Medium",
      //         href: "https://stackoverflow.com/questions/tagged/docusaurus",
      //       },
      //       {
      //         label: "Telegram",
      //         href: "https://discordapp.com/invite/docusaurus",
      //       },
      //       {
      //         label: "Twitter",
      //         href: "https://twitter.com/docusaurus",
      //       },
      //     ],
      //   },
      // ],
      copyright: `Copyright © ${new Date().getFullYear()} DODOEX, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          // homePageId: "briefIntro",
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/DODOEX/docs/edit/master/',
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [path.resolve(__dirname, 'my-plugin')],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh', 'jp'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      zh: {
        label: '中文',
      },
      jp: {
        label: '🚧 日本語 🚧',
      },
    },
  },
};
