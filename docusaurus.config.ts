import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Overture 7421",
  tagline: "Welcome to the Overture 7421 Website",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://overture7421.org",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./frcBlogSidebar.ts",
          // Please change this to your repo.
          path: "./frc-blog",
          routeBasePath: "frc-blog",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "FTCBlog",
        routeBasePath: "ftc-blog",
        path: "./ftc-blog",
        sidebarPath: "./ftcBlogSidebar.ts",
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Overture 7421",
    //   logo: {
    //     alt: "Logo",
    //     src: "img/logo.svg",
    //   },
      items: [
        {
          to: "/frc-blog/category/Crescendo",
          label: "FRC Blog",
          position: "left",
        },
        {
          to: "/ftc-blog/category/Into-The-Deep",
          label: "FTC Blog",
          position: "left",
        },
        {
          href: "https://github.com/Overture-7421",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Overture 7421. Built with Docusaurus.`,
    },
	colorMode: {
	  defaultMode: "dark",
	  disableSwitch: false,
	  respectPrefersColorScheme: true,
	},
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
