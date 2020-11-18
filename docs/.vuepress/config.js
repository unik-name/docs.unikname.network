const { slugify: vuePressSlugify } = require("@vuepress/shared-utils");

function customSlugifyToHandleBadges(str) {
  // Remove badges
  return vuePressSlugify(str.replace(/<Badge[^>]*\/>/, ""));
}

module.exports = {
  title: "The uns.network Player Hub",
  title2: "uns.network Docs (Universal-Name-System)",
  description:
    "Comprehensive guides and documentation to help you start working with the uns.network blockchain and protocol as quickly as possible. Let's go!",
  description2:
    "Official documentation for the uns.network blockchain and protocol (Universal-Name-System)",
  plugins: {
    sitemap: {
      hostname: "https://docs.uns.network",
    },
    "@vuepress/last-updated": {
      transformer: (timestamp, lang) => {
        // UTC date (without time) as ISO format: 2019-09-17
        return new Date(timestamp).toISOString().split("T")[0];
      },
    },
    "@vuepress/back-to-top": {},
    tabs: {},
    "@goy/svg-icons": {},
    "vuepress-plugin-container": {
      type: "information",
      defaultTitle: "",
      before: '<div class="information">',
      after: "</div>",
    },
    "@spacelephantlabs/vuepress-plugin-matomo": {
      siteId: 2,
    },
  },
  head: [
    ["link", { rel: "icon", href: "/logo.png" }],
    [
      "meta",
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    ],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black-translucent",
      },
    ],
  ],
  themeConfig: {
    logo: "/logo.png",
    repo: "unik-name/docs.uns.network",
    repoLabel: "Contribute!",
    editLinks: true,
    editLinkText: "Help us improve this page!",
    docsDir: "docs",
    lastUpdated: true,
    activeHeaderLinks: true,
    nav: [
      { text: "Get my @unikname ID", link: "https://my.unikname.app" },
      { text: "Explorer", link: "https://explorer.uns.network/" },
    ],
    sidebar: [
      "/",
      {
        title: "Introduction",
        children: [
          ["/uns-network-introduction/", "Understanding uns.network"],
          ["/uns-network-tokens/", "The Tokens"],
          ["/uns-network-getting-started/", "Getting Started"]
        ],
      },
      {
        title: "Key concepts",
        sidebarDepth: 0,
        children: [
          ["/uns-network-key-concepts/", "Key Concept Summary"],
          ["/uns-network-key-concepts/cryptography-overview","Cryptography Overview"],
          ["/uns-network-key-concepts/unik-did-nft", "UNIK IDentifiers"],
          ["/uns-network-key-concepts/unik-type", "Types of UNIK"],
          ["/uns-network-key-concepts/unik-pattern", "Patterns of UNIK"],
          //["/uns-network-key-concepts/unik-lifecycle", "Lifecycle of UNIK"],
          ["/uns-network-key-concepts/network-governance", "Governance"],
          //["/uns-network-key-concepts/unik-property", "Registries and Properties"],
          ["/uns-network-key-concepts/unik-badge", "Badges"],
          //["/uns-network-key-concepts/nft-factory", "NFT Factories"],
          //["/uns-network-key-concepts/nft-coupon", "Coupons"],
          //["/uns-network-key-concepts/nsp", "Network Services Providers"],
          //["/uns-network-key-concepts/nut-service", "Network Unit Services"],
          //["/uns-network-key-concepts/nut-contribution", "Network Unit Contributions"],
          [
            "/uns-network-key-concepts/donuts",
            "Directory of Network Unit Services",
          ],
        ],
      },
      {
        title: "Using the uns.network",
        sidebarDepth: 0,
        children: [
          ["/uns-use-the-network/", "Introduction"],
          ["/uns-use-the-network/cli.html", "CLI"],
          ["/uns-use-the-network/api", "API"],
          ["/uns-use-the-network/sdk", "SDK"],
          ["/uns-use-the-network/wallet", "Wallet"],
          ["/uns-use-the-network/cheatsheet", "Cheat Sheet"],
        ],
      },
      ["/uns-network-unik-name-use-case/", "Use cases"],
      {
        title: "Becoming a Network Player",
        /* collapsable: false, */
        sidebarDepth: 0,
        children: [
          ["/uns-network-player/", "Introduction"],
          "/uns-network-player/creating-your-unikname-individual",
          "/uns-network-player/creating-unikname-organization",
          [
            "/uns-network-player/registering-as-delegate",
            "Registering as Delegate",
          ],
          ["/uns-network-player/setting-up-your-node", "Setting up your node"],
          ["/uns-network-player/last-steps", "Last steps"],
        ],
      },
      {
        title: "Guides",
        children: [
          [
            "/uns-network-guides/docker-configuration",
            "Docker container configuration",
          ],
          [
            "/uns-network-guides/docker-compose-management",
            "Docker Compose management",
          ],
        ],
      },
      {
        title: "Security",
        children: [
          ["/uns-network-security/", "Security & Hack Protections"],
          [
            "/uns-network-security/security-vulnerabilities",
            "Security & Vulnerabilities",
          ],
        ],
      },
      {
        title: "More...",
        children: [
          ["/uns-network-qna/", "Q&A"],
          ["/uns-network-glossary/", "Glossary"],
          ["/uns-network-powered-by-ark-io/", "Powered by ARK"],
        ],
      },
    ],
  },
  markdown: {
    slugify: customSlugifyToHandleBadges,
    toc: {
      slugify: customSlugifyToHandleBadges,
    },
  },
};
