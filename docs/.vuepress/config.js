const { slugify: vuePressSlugify } = require("@vuepress/shared-utils");

function customSlugifyToHandleBadges(str) {
  // Remove badges
  return vuePressSlugify(str.replace(/<Badge[^>]*\/>/, ""));
}

const DOMAIN = "docs.unikname.network";
const HOSTNAME = `https://${DOMAIN}`;

module.exports = {
  title: "unikname.network documentations",
  title2: "unikname.network docs",
  description:
    "Comprehensive guides and documentation to help you start working with the unikname.network blockchain and protocol as quickly as possible. Let's go!",
  description2:
    "Official documentation for the unikname.network blockchain and protocol",
  plugins: {
    sitemap: {
      hostname: HOSTNAME,
    },
    robots: { host: HOSTNAME },
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
    "@spacelephantlabs/vuepress-plugin-matomo-spacelephant": {
      siteId: 2,
    },
    "@spacelephantlabs/vuepress-plugin-rocketchat-livechat": {
      rocketChatUrl: "https://spacelephant.rocket.chat/",
    },
    seo: {
      // your options
      author: (_, $site) => {
        return {
          name: $site.themeConfig.author,
          twitter: "@Uns_Network",
        };
      },
      image: ($page, $site) =>
        $site.themeConfig.domain +
        "/" +
        ($page.frontmatter.image || "opengraph-v1.png"),
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
    ["meta", { name: "charset", content: "utf-8" }],
  ],
  themeConfig: {
    logo: "/logo.png",
    repo: "unik-name/docs.uns.network",
    hostname: HOSTNAME,
    domain: HOSTNAME,
    author: "UNS.network Team",
    repoLabel: "Contribute!",
    editLinks: true,
    editLinkText: "Help us improve this page!",
    docsDir: "docs",
    lastUpdated: true,
    activeHeaderLinks: true,
    searchMaxSuggestions: 10,
    nav: [
      { text: "Get my @unikname ID", link: "https://my.unikname.app" },
      { text: "Unikname.network Home", link: "https://unikname.network" },
      {
        text: "Unikname.network Explorer",
        link: "https://explorer.unikname.network",
      },
    ],
    sidebar: [
      "/",
      {
        title: "Introduction",
        children: [
          ["./introduction", "Understanding unikname.network"],
          ["./tokens", "The Tokens"],
          ["./getting-started", "Getting Started"],
        ],
      },
      {
        title: "Key concepts",
        sidebarDepth: 0,
        children: [
          ["/key-concept/", "Key Concept Summary"],
          ["/key-concept/cryptography-overview", "Cryptography Overview"],
          ["/key-concept/unik-did-nft", "UNIKNAME IDentifiers"],
          ["/key-concept/unik-type", "Type of UNIKNAME"],
          ["/key-concept/unik-pattern", "Pattern of UNIKNAME"],
          ["/key-concept/unik-lifecycle", "Lifecycle of UNIKNAME"],
          ["/key-concept/unik-property", "Properties of UNIKNAME"],
          ["/key-concept/unik-badge", "Badges"],
          //["/key-concept/nft-coupon", "Coupons"],
          ["/key-concept/service-provider", "Network Service Provider"],
          ["/key-concept/donuts", "Directory of Network Services"],
          ["/key-concept/network-governance", "Governance"],
        ],
      },
      {
        title: "Using the unikname.network",
        sidebarDepth: 0,
        children: [
          ["./interacting-with-uns", "Introduction"],
          ["./cli", "CLI"],
          ["./api", "API"],
          ["./sdk", "SDK"],
          ["./wallet", "Wallet"],
          ["./cheatsheet", "Cheat Sheet"],
        ],
      },
      ["./unikname-use-case", "Use cases"],
      {
        title: "Becoming a Network Player",
        /* collapsable: false, */
        sidebarDepth: 0,
        children: [
          ["./becoming-network-player", "Introduction"],
          "./creating-your-unikname-individual",
          "./creating-unikname-organization",
          ["./registering-as-delegate", "Registering as Delegate"],
          ["/setting-up-uns-node/", "Setting up your node"],
          ["./last-steps", "Last steps"],
        ],
      },
      {
        title: "Guides",
        children: [
          ["./docker-configuration", "Docker container configuration"],
          ["./docker-compose-management", "Docker Compose management"],
          "./how-to-secure-your-uns-network-node",
        ],
      },
      {
        title: "Security",
        children: [
          ["./security", "Security & Hack Protections"],
          ["./security-vulnerabilities", "Security & Vulnerabilities"],
        ],
      },
      {
        title: "More...",
        children: [
          ["./qna", "Q&A"],
          ["./glossary", "Glossary"],
          ["./powered-by-ark-io", "Powered by ARK"],
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
