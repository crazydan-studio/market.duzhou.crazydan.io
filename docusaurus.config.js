module.exports = {
  title: '渡舟市场',
  tagline: '平台正在开发中，敬请期待！',
  url: 'https://market.duzhou.crazydan.io',
  baseUrl: '/',
  favicon: 'img/logo.svg',
  organizationName: 'Crazydan Studio',
  projectName: 'market.duzhou.crazydan.io',
  themeConfig: {
    navbar: {
      title: '渡舟市场',
      logo: {
        alt: '渡舟市场',
        src: 'img/logo.svg',
      },
      items: [
      ],
    },
    footer: {
      style: 'dark',
      links: [
      ],
      copyright: `Copyright © 2023-${new Date().getFullYear()} <a href="https://studio.crazydan.org/" target="_blank">Crazydan Studio</a>.`,
    },
  },
  plugins: [
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
