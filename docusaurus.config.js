// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '雙龍體育',
  tagline: '​雙龍職籃 ... 籃球，為一種由兩隊參與，在一個長方形籃球場進行的球類運動。每隊出場5名隊員，可將球向任何方向傳、投、拍、滾或運，目的是將籃球投入對方球籃得分，並阻止',
  url: 'https://www.ssangyongsports.eu.org/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://uploads-ssl.webflow.com/634b88e48246d83808264be5/634b8a960007a1ac7d21f4e2_62f32325349867818a2a6fa2_62ccdcf75b92a3e26f4df0b7_%E6%9C%AA%E5%91%BD%E5%90%8D%E8%A8%AD%E8%A8%88%20(1).jpg',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ssangyongsports', // Usually your GitHub org/user name.
  projectName: 'github-k8klqk', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
   i18n: {
    defaultLocale: 'zh-tw',
    locales: ['zh-tw'],
  },
 
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,

          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.         
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
                },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        hideOnScroll: true,
        
        logo: {
          alt: '雙龍體育 Logo',
          src: 'https://img.ssangyongsports.eu.org/logo2.png',
        className: 'custom-navbar-logo-class',
             },
        items: [
           {
          label: "體育",
          position: "left",
          items: [
            {
              label: "雙龍職棒",
            href: 'https://slbtw.cf/',
            },
            {
            label: '雙龍職籃',
            href: 'https://sbatw.ml/',
            },
          ],
        },
      {
          label: "支援",
          position: "left",
          items: [
            {
              label: "幫助中心",
            href: 'https://help.ssangyongsports.eu.org/',
            },
            {
            label: '社區',
            href: 'https://DISCUSS.ssangyongsports.eu.org/',
            },
            {
              label: "聯繫",
              to: "/c",
            },
          ],
        },
         {
          label: "組織",
          position: "left",
          items: [
            {
              label: "Blog",
              to: "/blog/",
              activeBaseRegex: "/blog/?$",
            },
            {
            label: '狀態',
            href: 'https://status.ssangyongsports.eu.org/',
            },
          ],
        },
          {
          label: "條款",
          position: "left",
          items: [
            {
              label: "隱私政策",
              to: "/p",
            },
            {
             label: "服務條款",
              to: "/t",
            },
          ],
        },
        ],
      },
              announcementBar: {
      id: 'announcementBar-2',
      content:
        '新年快樂2023',
      backgroundColor: '#84C1FF',
      textColor: '#091E42',
      isCloseable: false,
    },
          algolia: {
      apiKey: "7640fd8ca3b8204bd58b654f71607ab5",
      indexName: "docs",
      appId: "8YELX4XDEG",
      // Optional: see doc section bellow
      contextualSearch: true,

      // Optional: Algolia search parameters
      searchParameters: {},

      //... other Algolia params
    },
  
  
      footer: {
        style: 'dark',
        logo: {
        alt: '雙龍體育',
        src: 'https://img.ssangyongsports.eu.org/logo2.png',
        href: '/',
        width: 160,
        height: 51,
      },
        links: [
          {
          title: '體育',
            items: [
              {
                  label: '雙龍職棒',
                  href: 'https://slbtw.cf',
              },
              {
                label: '雙龍職籃',
                href: 'https://sbatw.ml',
              },
              {
                label: '雙龍足球',
                href: '/',
              },
            ],
          },
          {
           title: '組織',
            items: [
              {
                label: 'blog',
                href: '/blog',
              },
              {
                label: '狀態',
                href: 'https://status.ssangyongsports.eu.org/',
              },              
            ],
          },
          {
            title: '幫助',
            items: [
              {
                label: '幫助',
                href: 'https://help.ssangyongsports.eu.org/',
              },
              {
                label: '社區',
                href: 'https://discuss.ssangyongsports.eu.org/',
              },
              {
                label: '聯繫',
                href: '/c',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 雙龍體育, org. 維護團隊：雙龍體育.`,
      },
       prism: {
        theme: lightCodeTheme,
        darkTheme: lightCodeTheme
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false
      },
    }),
};

module.exports = config;
