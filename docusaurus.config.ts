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
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "Training",
        routeBasePath: "training",
        path: "./training",
        sidebarPath: "./trainingSidebar.ts",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "OvertureLib",
        routeBasePath: "OvertureLib",
        path: "./OvertureLib",
        sidebarPath: "./overtureLibSidebar.ts",
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
          type: "dropdown",
          label: "Build Blogs",
          position: "left",
          items: [
            {
              label: "FRC Blogs",
              to: "/frc-blog/category/Crescendo",
            },
            {
              label: "FTC Blogs",
              to: "/ftc-blog/category/Into-The-Deep",
            },
          ],
        },
        {
          type: "dropdown",
          label: "Resources",
          position: "left",
          items: [
            {
              label: "Robots",
              to: "/robots",
            },
            {
              label: "Training",
              to: "/training",
            },
          ],
        },
        {
          type: "dropdown",
          label: "OvertureLib",
          position: "left",
          items: [
            {
              label: "FRC Library",
              to: "/OvertureLib/category/FRC",
            },
            {
              label: "FTC Library",
              to: "/OvertureLib/category/FTC",
            },
          ],
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
