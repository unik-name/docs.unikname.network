module.exports = {
  title: "The uns.network Player Hub",
  title2: "uns.network Docs (Universal-Name-System)",
  description:
    "Comprehensive guides and documentation to help you start working with the uns.network blockchain and protocol as quickly as possible. Let's go!",
  description2:
    "Official documentation for the uns.network blockchain and protocol (Universal-Name-System)",
  plugins: {
    sitemap: {
      hostname: "https://docs.uns.network"
    },
    "@vuepress/last-updated": {
      transformer: (timestamp, lang) => {
        // UTC date (without time) as ISO format: 2019-09-17
        return new Date(timestamp).toISOString().split("T")[0];
      }
    }
  },
  head: [["link", { rel: "icon", href: "./logo.png" }]],
  themeConfig: {
    logo: "./logo.png",
    repo: "unik-name/docs.uns.network",
    repoLabel: "Contribute!",
    editLinks: true,
    editLinkText: "Help us improve this page!",
    docsDir: "docs",
    lastUpdated: true,
    activeHeaderLinks: true,
    nav: [
      { text: "Getting Started", link: "/uns-network-getting-started/" },
      { text: "Becoming a Network Player", link: "/uns-network-player/" }
    ],
    sidebar: [
      "/",
      ["/uns-network-getting-started/", "Getting Started"],
      {
        title: "Introduction",
        children: [
          ["/uns-network-introduction/", "Understanding uns.network"],
          ["/uns-network-tokens/", "The uns.network Tokens"]
        ]
      },
      {
        title: "Using the uns.network",
        children: [
          ["/uns-use-the-network/", "Introduction"],
          ["/uns-use-the-network/cli", "CLI"],
          ["/uns-use-the-network/api", "API"],
          ["/uns-use-the-network/sdk", "SDK"],
          ["/uns-use-the-network/wallet", "Wallet"],
          ["/uns-use-the-network/cheatsheet", "Cheat Sheet"]
        ]
      },
      ["/uns-network-unik-name-use-case/", "uns.network use cases"],
      {
        title: "Network Player",
        /* collapsable: false, */
        children: [
          ["/uns-network-player/", "Becoming a network player"],
          ["/uns-network-rewarding/", "Get Rewards"],
          ["/uns-network-setting-up-node/", "Setting up your Node"]
        ]
      },
      {
        title: "Security",
        children: [
          ["/uns-network-security/", "Security & Hack Protections"],
          ["/uns-network-security/security-vulnerabilities", "Security & Vulnerabilities"]
        ]
      },
      {
        title: "More...",
        children: [
          ["/uns-network-qna/", "Q&A"],
          ["/uns-network-glossary/", "Glossary"],
          ["/uns-network-poweredbyark/", "Powered by Ark.io"]
        ]
      }
    ]
  }
};
