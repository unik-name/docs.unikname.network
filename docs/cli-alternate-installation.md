---
home: false
title: "uns.network CLI alternate installation modes"
---

# uns.network CLI alternate installation modes

## Installation from NPM / Yarn

### Requirements

<brand name="uns"/> CLI installation requires some dependencies to be installed. 

#### Node.js

Install a stable version of Node JS 12: [https://nodejs.org/en/download/](https://nodejs.org/en/download/).

**<brand name="uns"/> CLI doesn't work on earlier versions (6, 8 or 10)**.

#### Compilation tools

Even if the <brand name="uns"/> CLI is written in a cross-operating system language (Javascript), it requires native dependencies which need to be compiled for your operating system.

You need:
- gcc/g++
- Python v3.x

Most of the times, theses tools are already installed. If not, you can read on the [Unikname Forum](https://forum.unikname.com/t/how-to-get-required-tools-to-install-the-uns-cli/95) how to install them for your operating system.

If still you need help to install theses tools, you can get support on [the Unikname Forum](https://forum.unikname.com/c/uns-network/support/).

### Installation with NPM

As NPM is provided by NodeJS package, you can use it to install <brand name="uns"/> CLI as global command ("sudo mode" might be required, depending on your NodeJS installation).

```bash
[sudo] npm install -g @uns/cli
```

Test your installation with

```bash
uns version
```

which should output something like that:

```
$ uns version
@uns/cli/x.y.z linux-x64 node-vXX.yy.zz
```

### UPDATE with NPM

When installed via npm, please remove it before installing it again.


```bash
[sudo] npm remove -g @uns/cli
```

If you fail to install the CLI, you can get support on [the Unikname Forum](https://forum.unikname.com/c/uns-network/support/).

**Note**
If you want, you can also use [Yarn](https://yarnpkg.com/) instead of NPM to install the <brand name="uns"/> CLI from sources.
