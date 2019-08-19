---
title: "UNS CLI"
---

# UNS CLI

[[toc]]

## Introduction
Universal Name System provides an interactive command line interface to create and manage your wallets ans UNIK tokens.

## Requirements
UNS CLI installation requires some dependencies to be installed.

### Node.js

Install node.js: [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

### Yarn

Install yarn: [https://yarnpkg.com/en/docs/install#debian-stable](https://yarnpkg.com/en/docs/install#debian-stable).
**Don't forget to setup path to use UNS CLI as global command.**

## Installation
Use yarn to install UNS CLI as global command

```bash
yarn global add @uns/uns-cli
```

## UNS CLI Commands
- -h, --help: Help
- [version, -v, --version](/cli/version): Prompts CLI version
- [status](/cli/status): Displays blockchain status
- [create-unik](/cli/create-unik): Create a UNIK nft token