import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  markdown: {
    mermaid: true,
  },
  title: "AXBoot.dev",
  tagline: "Bootstrap Your Admin with a Rich UI",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://axboot.dev",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "axisj", // Usually your GitHub org/user name.
  projectName: "axboot.dev", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "ko",
    locales: ["ko", "en"],
  },
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/axisj/axboot.dev/tree/main",
        },
        blog: {
          routeBasePath: "case-study",
          showReadingTime: true,
          blogTitle: "Case Study",
          blogDescription: "AXBoot Success Stories",
          blogSidebarCount: "ALL",
          postsPerPage: 5,
        },
        theme: {
          customCss: ["./src/css/fonts.css", "./src/css/custom.css", "./src/css/axboot.css", "./src/css/swiper.css"],
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/axboot-sns.jpg",
    navbar: {
      title: "axboot.dev",
      logo: {
        alt: "AXBoot.dev Logo",
        src: "img/axb_logo.svg",
        srcDark: "img/axb_logo_dark.svg",
        width: 126,
        height: 32,
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Tutorial",
        },
        {
          type: "docSidebar",
          sidebarId: "apiSidebar",
          position: "left",
          label: "API",
        },
        { to: "/case-study", label: "Case Study", position: "left" },
        { to: "/store", label: "Store", position: "left" },
        { to: "/get-in-touch", label: "Get in touch", position: "right" },
        {
          type: "localeDropdown",
          position: "right",
        },
        {
          href: "https://github.com/axisj/axboot.dev",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    docs: {
      sidebar: {
        hideable: false,
      },
    },
    footer: {
      style: "dark",
      links: [
        {
          label: "Tutorial",
          href: "/docs/intro",
        },
        {
          label: "API",
          href: "/docs/api/back-end/system-api",
        },
        {
          label: "Case Study",
          href: "/case-study",
        },
        {
          label: "Store",
          href: "/store",
        },
        {
          label: "Get in touch",
          href: "/get-in-touch",
        },
        {
          label: "axisj.com",
          href: "https://axisj.com",
        },
        // {
        //   html: `
        //     <a href="https://www.netlify.com" target="_blank" rel="noreferrer noopener" aria-label="Deploys by Netlify">
        //       <img src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg" alt="Deploys by Netlify" width="114" height="51" />
        //     </a>
        //   `,
        // },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} AXISJ, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
