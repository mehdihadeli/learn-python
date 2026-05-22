const config = {
  title: "Learn Python",
  tagline: "A structured, docs-first Python learning path",
  url: "https://mehdihadeli.github.io",
  baseUrl: "/learn-python/",
  organizationName: "mehdihadeli",
  projectName: "learn-python",
  trailingSlash: false,
  onBrokenLinks: "throw",
  future: {
    experimental_faster: {
      swcJsLoader: false,
      swcJsMinimizer: false,
      swcHtmlMinimizer: false,
      lightningCssMinimizer: false,
      mdxCrossCompilerCache: false,
      rspackBundler: false,
      rspackPersistentCache: false,
      ssgWorkerThreads: false,
    },
  },
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: false,
        pages: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: [
    function removeWebpackBarPlugin() {
      return {
        name: "remove-webpackbar-plugin",
        configureWebpack(config) {
          return {
            mergeStrategy: {
              plugins: "replace",
            },
            plugins: (config.plugins || []).filter(
              (plugin) => plugin?.constructor?.name !== "WebpackBarPlugin",
            ),
          };
        },
      };
    },
  ],
  themeConfig: {
    navbar: {
      title: "Learn Python",
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Docs",
        },
        {
          href: "https://github.com/mehdihadeli/learn-python",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Introduction",
              to: "/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Python Docs",
              href: "https://docs.python.org/3/",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/mehdihadeli/learn-python",
            },
          ],
        },
      ],
      copyright: `Copyright ${new Date().getFullYear()} Learn Python`,
    },
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
  },
};

module.exports = config;
