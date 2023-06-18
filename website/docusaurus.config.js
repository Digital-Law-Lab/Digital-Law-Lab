// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DLL Guides & Policies',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://digital-law-lab.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/Digital-Law-Lab/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Digital-Law-Lab', // Usually your GitHub org/user name.
  projectName: 'Digital-Law-Lab', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: true,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // TODO: fix edit link
          // UPDATE: Users should not be allowed to edit from GitHub Pages
          // editUrl: ({ docPath }) => {
          //   return `https://github.com/Digital-Law-Lab/Digital-Law-Lab/edit/docusaurus-source/website/docs/${docPath}`;
          // },
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themes: [
    [
      // @ts-ignore
      require.resolve('@easyops-cn/docusaurus-search-local'),
      // @ts-ignore
      {
        hashed: true,
        indexBlog: false,
        docsRouteBasePath: '/',
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: 'under_dev',
        content: 'This site is under construction',
        isCloseable: false,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      navbar: {
        hideOnScroll: false,
        title: 'Digital Law Lab',
        logo: {
          alt: 'DLL Logo',
          src: 'img/logo.svg',
          srcDark: 'img/logo_dark.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'policiesSidebar',
            position: 'left',
            label: 'Policies',
          },
          {
            type: 'docSidebar',
            sidebarId: 'guidesSidebar',
            position: 'left',
            label: 'Procedures',
          },
          // { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/Digital-Law-Lab/Digital-Law-Lab',
            className: 'header-github-link',
            position: 'right',
            // label: 'GitHub'
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Docassemble Manual',
                href: 'https://docassemble.org/docs.html',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Digital Law Lab Slack',
                href: 'https://digital-law-lab.slack.com',
              },
              {
                label: 'Docassemble Slack',
                href: 'https://docassemble.slack.com',
              },
            ],
          },
          {
            title: 'Important links',
            items: [
              {
                label: 'Development Server',
                href: 'https://app.dll.org.au/da/',
              },
              {
                label: 'Production Server',
                href: 'https://app.dll.org.au/da/',
              },
              {
                label: "Digital Law Lab GitHub",
                href: 'https://github.com/Digital-Law-Lab',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Digital Law Lab Incorpotated. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
