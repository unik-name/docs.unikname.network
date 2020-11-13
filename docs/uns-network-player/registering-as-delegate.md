---
home: false
---

# Registering as a delegate

[[toc]]

## Installing the uns.network CLI

The <uns/> Command Line Interface (CLI) makes it easy to manage your @unikname and Unikname apps directly from the terminal.
It’s an essential part of using <uns/>.

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

If you want more details about the CLI and tips to use it, check the [CLI documentation](/uns-use-the-network/cli.html).
You are now ready for the next step !

## Registering as a delegate

Congratulations! Now that you have:
* a cryptoaccount with some UNS
* a @unikname linked to your cryptoaccount

Now, you can register as a delegate!

::: warning Registering as a delegate

:warning: You are about **registering yourself as a <uns/> delegate**. :warning:

Don't execute the following command if you are trying to create your @unikname id to integrate your application with Unikname Connect. [Go to the Unikname Help Center](https://help.unikname.com/3-unikname-connect/) instead.

:::

Here is the complete process:

    $ uns unik:disclose "@hello-world" -e "hello-world"
    $ uns delegate:register "@hello-world"
    $ uns delegate:vote "@hello-world"

Replace `hello-world` by your own @unikname id.

## Checking your delegate status in the Explorer

You can check on [explorer](https://explorer.uns.network/delegate-monitor) that your @unikname is in the delegate list.
To start forging blocks, you'll need to set up a node.

Let's now configure your UNS node.
