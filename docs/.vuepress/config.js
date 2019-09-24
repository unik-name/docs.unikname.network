module.exports = {
  title: "The UNS Network Player Hub",
  title2: "Universal-Name-System Docs",
  description:
    "Comprehensive guides and documentation to help you start working with the UNS blockchain as quickly as possible. Let's go!",
  description2:
    "Official documentation for the Universal-Name-System (UNS) blockchain network and protocol",
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
      { text: "Getting Started", link: "/uns-getting-started/" },
      { text: "Becoming a Network Player", link: "/uns-network-player/" }
    ],
    sidebar: [
      "/",
      ["/uns-getting-started/", "Getting Started"],
      {
        title: "Introduction",
        children: [
          ["/uns-introduction/", "Understanding UNS"],
          ["/uns-tokens/", "The UNS Tokens"]
        ]
      },
      {
        title: "Use the Network",
        children: [
          ["/uns-usethenetwork/", "Introduction"],
          ["/uns-usethenetwork/cli", "CLI"],
          ["/uns-usethenetwork/api", "API"],
          ["/uns-usethenetwork/sdk", "SDK"],
          ["/uns-usethenetwork/wallet", "Wallet"]
        ]
      },
      ["/uns-unikname/", "@unik-name use case"],
      {
        title: "Network Player",
        /* collapsable: false, */
        children: [
          ["/uns-network-player/", "Becoming a network player"],
          ["/uns-rewarding/", "Get Rewards"],
          ["/uns-setting-up-node/", "Setting up your Node"]
        ]
      },
      {
        title: "Security",
        children: [
          ["/uns-security/", "Security & Hack Protections"],
          [
            "/uns-security/security-vulnerabilities",
            "Security & Vulnerabilities"
          ]
        ]
      },
      {
        title: "More...",
        children: [
          ["/uns-qna/", "Q&A"],
          ["/uns-glossary/", "Glossary"],
          ["/uns-poweredbyark/", "Powered by Ark.io"]
        ]
      }
    ]
  }
};
