---
home: false
title: "Becoming uns.network Player"
---

# Registering as a delegate

[[toc]]

## Getting some UNS

On the <uns/> network, the functions we are going to use are blockchain transactions that have fees.
It is therefore necessary to have [UNS](https://docs.uns.network/uns-network-tokens/#the-uns-token) to be able to carry out the rest of the operations.

If you do not have a UNS, there are two possibilities:
- Obtaining UNS via faucet
- Come and ask for UNS on the [forum](https://forum.unik-name.com)

## Installing the <uns/> CLI

The <uns/> Command Line Interface (CLI) makes it easy to manage your @unikname and Unikname apps directly from the terminal.
It’s an essential part of using <uns/>.

### Download & install the CLI

| <h1><vp-icon name="windows-brands" size="2em" /><br/>Windows</h1> | <h1><vp-icon name="apple-brands" size="2em" /><br/>macOS</h1> | <h1><vp-icon name="linux-brands" size="2em" /><br/>Linux</h1> |
|:-----------------------------------:|:----------------------------------------------------------------------:|:---------------------------------------:|
| <h4>![GitHub version](https://badge.fury.io/gh/unik-name%2Funs-cli.svg)</h4><h3>[Download the 64-bit installer](https://unikname-cli-assets.s3.fr-par.scw.cloud/uns-x64.exe)</h3>        | <h4>![GitHub version](https://badge.fury.io/gh/unik-name%2Funs-cli.svg)</h4><h3>[Download the tarball*](https://unikname-cli-assets.s3.fr-par.scw.cloud/uns-darwin-x64.tar.gz)</h3>      | <h4>![GitHub version](https://badge.fury.io/gh/unik-name%2Funs-cli.svg)</h4><h3>[Download the 64-bit tarball*](https://unikname-cli-assets.s3.fr-par.scw.cloud/uns-linux-x64.tar.gz)</h3>or<h3>[Download the ARMv7+ tarball*](https://unikname-cli-assets.s3.fr-par.scw.cloud/uns-linux-arm.tar.gz)</h3>      |

*: you should then add `{TARBALL_EXTRACTION_FOLDER}/bin` into your `PATH` environment variable in order to be able to run `uns` command.

[Alternate installation modes are also available in the CLI documentation](/uns-use-the-network/cli.html#download-and-installation).

:::tip On Windows
Execute the file downloaded to procede to installation.
Windows may display a warning, but don't worry, just continue the procedure.*
:::

You can check that your installation is finished by entering `uns` into your command prompt.
You should see the following menu :

```bash
$ uns
UNS.network CLI

VERSION
  @uns/cli/X.X.X XXX XXX

USAGE
  $ uns [COMMAND]

COMMANDS
  cryptoaccount  Manage Crypto Account (`uns cryptoaccount` to display Crypto Account commands)
  ...
```

If you want more details about the CLI and tips to use it, check the [CLI documentation](/uns-use-the-network/cli).
You are now ready for the next step !

## Registering as a delegate

Congratulations! Now that you have:
* cryptoaccount with some UNS
* @unikname linked to your cryptoaccount

Now, you can register as a delegate!

Here is the complete process:

    $ uns unik:disclose "@hello-world" -e "hello-world"
    $ uns delegate:register "@hello-world"
    $ uns delegate:vote "@hello-world"

## Checking your delegate status in the Explorer

You can check on [explorer](https://explorer.uns.network/delegate-monitor) that your @unikname is in the delegate list.
To start forging blocks, you'll need to set up a node.

Let's now configure your UNS node.
