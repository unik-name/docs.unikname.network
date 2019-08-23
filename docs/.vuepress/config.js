module.exports = {
    title: "The UNS Network Player Hub",
    title2: "Universal-Name-System Docs",
    description: "Comprehensive guides and documentation to help you start working with the UNS blockchain as quickly as possible. Let's go!",
    description2: "Official documentation for the Universal-Name-System (UNS) blockchain network and protocol",
    plugins: {
      sitemap: {
        hostname: "https://docs.uns.network"
      }
    },
    head: [
      ["link", {rel: "icon", href: "./logo.png"}]
    ],
    themeConfig:{
        logo: './logo.png',
        repo: "unik-name/docs.uns.network",
        repoLabel: "Contribute!",
        editLinks: true,
        editLinkText: "Help us improve this page!",
        docsDir: "docs",
        lastUpdated: true,
        activeHeaderLinks: true,
        nav: [
            { text: 'Getting Started', link: '/uns_getting-started/' },
            { text: 'Becoming a Network Player', link: '/uns_network-player/' },
        ],
        sidebar: [
            '/',
            ['/uns_getting-started/', 'Getting Started'],
            {
                title: 'Introduction',
                children: [
                  ['/uns_introduction/', 'Understanding UNS'],
                  ['/uns_tokens/', 'The UNS Tokens']
                ]
            },
            {
              title: 'Use the Network',
              children: [
                ['/uns_usethenetwork/', 'Introduction'],
                ['/uns_usethenetwork/cli', 'CLI'],
                ['/uns_usethenetwork/api', 'API'],
                ['/uns_usethenetwork/sdk', 'SDK'],
                ['/uns_usethenetwork/wallet', 'Wallet']
              ]
            },
            ['/uns_unikname/', '@unik-name use case'],
            {
                title: 'Network Player',
                /* collapsable: false, */
                children: [
                    ['/uns_network-player/', 'Becoming a network player'],
                    ['/uns_rewarding/', 'Get Rewards'],
                    ['/uns_setting-up-node/', 'Setting up your Node']
                ]
            },
            {
              title: 'Security',
              children: [
                  ['/uns_security/', 'Security & Hack Protections'],
                  ['/uns_security/security-vulnerabilities', 'Security & Vulnerabilities']
              ]
          },
            {
              title: 'More...',
              children: [
                    ['/uns_qna/', 'Q&A'],
                    ['/uns_glossary/', 'Glossary'],
                    ['/uns_poweredbyark/', 'Powered by Ark.io']
                ]
            }
        ]
    }
}