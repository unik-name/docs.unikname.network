---
home: false
---

# Registering as a delegate

[[toc]]

## Installing the uns.network CLI

The <brand name="uns"/> Command Line Interface (CLI) makes it easy to manage your @unikname and Unikname apps directly from the terminal.
It’s an essential part of using <brand name="uns"/>.

| <h3>Operating system</h3> | <h3>Download</h3> | <h3>Instructions</h3> |
|:-----------------------------------:|:----------------------------------------------------------------------:|:---------------------------------------:|
| <h2><vp-icon name="windows-brands" size="2em" /><br/>Windows</h2>    | <h4>![Version](https://img.shields.io/npm/v/@uns/cli?color=029A98&label=UNS%20CLI&logoColor=FE7644)</h4><h3>[Download the installer](https://unikname-cli-assets.s3.fr-par.scw.cloud/uns-x64.exe)</h3> | <p>Run the installer you have downloaded.</p><p>Windows may display a warning, just click **Run anyway**.</p> |
| <h2><vp-icon name="apple-brands" size="2em" /><br/>MacOS</h2>        | <h4>![Version](https://img.shields.io/npm/v/@uns/cli?color=029A98&label=UNS%20CLI&logoColor=FE7644)</h4><h3>[Download the installer](https://unikname-cli-assets.s3.fr-par.scw.cloud/uns.pkg)</h3> | <p>Run the installer you have downloaded.</p> |
| <h2><vp-icon name="linux-brands" size="2em" /><br/>Linux</h2>        | <h4>![Version](https://img.shields.io/npm/v/@uns/cli?color=029A98&label=UNS%20CLI&logoColor=FE7644)</h4><h3>[Download the archive](https://unikname-cli-assets.s3.fr-par.scw.cloud/uns-linux-x64.tar.gz)</h3> | <p>After having downloaded the archive, add `{TARBALL_EXTRACTION_FOLDER}/bin` into your `PATH` environment variable in order to run the `uns` command.</p> |

[Alternate installation modes are also available in the CLI documentation](/cli.html#download-and-installation).

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

If you want more details about the CLI and tips to use it, check the [CLI documentation](/cli).
You are now ready for the next step !

## Registering as a delegate

Congratulations! Now that you have:
* a cryptoaccount with some UNS
* a @unikname linked to your cryptoaccount

Now, you can register as a delegate!

::: warning Registering as a delegate

:warning: You are about **registering yourself as a <brand name="uns"/> delegate**. :warning:

Don't execute the following command if you are trying to create your @unikname id to integrate your application with Unikname Connect. [Go to the Unikname Help Center](https://help.unikname.com/3-unikname-connect/) instead.

:::

Here is the complete process:

```
uns unik:disclose "@hello-world" -e "hello-world"
```

```
uns delegate:register "@hello-world"
```

```
uns delegate:vote "@hello-world"
```

Replace `hello-world` by your own @unikname id.

## Checking your delegate status in the Explorer

You can check on [explorer](https://explorer.uns.network/delegate-monitor) that your @unikname is in the delegate list.
To start forging blocks, you'll need to set up a node.

Let's now configure your UNS node.
