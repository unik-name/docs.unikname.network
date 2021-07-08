---
prev: /becoming-network-player
---

#  Creating @unikname id for an organization

You want to become a delegate with an organization @unikname id, so you need to create your organization @unikname id.

👉 If you have changed your mind, you can also [become a delegate with an individual @unikname id](./creating-your-unikname-individual.html).

::: warning @unikname id for becoming a delegate

:warning: You are about to create a @unikname id for **becoming a <brand name="uns"/> delegate**. :warning:

If you are trying to create your @unikname id to integrate your application with Unikname Connect, [go to the Unikname Help Center](https://help.unikname.com/3-unikname-connect/) instead.

:::

**Table of Content**

[[toc]]

::: warning
UNS/uns.network/universal-name-system is the old name of unikname.network blockchain.
UNIK is the old name of UNIKNAME nft token
UNS is the old name of UNIK protocol token
Urls, commands and old documentation are not renamed yet but are still valid. We're updating progressively.
:::

## Installing the uns.network CLI

The <brand name="uns"/> Command Line Interface (CLI) makes it easy to manage your @unikname and Unikname apps directly from the terminal.
It’s an essential part of using <brand name="uns"/>.

| <h3>Operating system</h3> | <h3>Download</h3> | <h3>Instructions</h3> |
|:-----------------------------------:|:----------------------------------------------------------------------:|:---------------------------------------:|
| <h2><vp-icon name="windows-brands" size="2em" /><br/>Windows</h2>    | <h4>![Version](https://img.shields.io/npm/v/@uns/cli?color=029A98&label=UNS%20CLI&logoColor=FE7644)</h4><h3>[Download the installer](https://unikname-cli-assets.s3.fr-par.scw.cloud/uns-x64.exe)</h3> | <p>Run the installer you have downloaded.</p><p>Windows may display a warning, just click **Run anyway**.</p> |
| <h2><vp-icon name="apple-brands" size="2em" /><br/>MacOS</h2>        | <h4>![Version](https://img.shields.io/npm/v/@uns/cli?color=029A98&label=UNS%20CLI&logoColor=FE7644)</h4><h3>[Download the installer](https://unikname-cli-assets.s3.fr-par.scw.cloud/uns.pkg)</h3> | <p>Run the installer you have downloaded.</p> |
| <h2><vp-icon name="linux-brands" size="2em" /><br/>Linux</h2>        | <h4>![Version](https://img.shields.io/npm/v/@uns/cli?color=029A98&label=UNS%20CLI&logoColor=FE7644)</h4><h3>[Download the archive](https://unikname-cli-assets.s3.fr-par.scw.cloud/uns-linux-x64.tar.gz)</h3> | <p>After having downloaded the archive, add `{TARBALL_EXTRACTION_FOLDER}/bin` into your `PATH` environment variable in order to run the `uns` command.</p> |

[Alternate installation modes are also available in the CLI documentation](/cli.html#download-and-installation).

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

## Creating your cryptoaccount

### Creating and saving your cryptoaccount informations

Your cryptoaccount is required for all the following steps. To create it, just execute the following command: `cryptoaccount:create`.
Here is an example of what you are supposed to see on your command prompt.
```bash
uns cryptoaccount:create
» :warn: This information is not saved anywhere. You need to copy and save it by your own.;
{
  "address": "XXXXXXXXXXXXXXXXXXXXXXXXX",
  "publicKey": "XXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  "privateKey": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  "passphrase": "XXXXX XXXXX XXXX XXXXXXXX XXXXXX XXXXXXX XXXX XXXXX",
  "network": "livenet"
}
```

:::warning
**You have to copy and save preciously these informations! If you lose these informations, you'll also lose access to your cryptoaccount and your @unikname.**
:::

## Using a COUPON to create the organization @unikname 

Creating an organization @unikname requires a COUPON. If you have one, you can continue. 
Otherwise, [go to the UNS Forum](https://forum.unikname.com/c/uns-network/7) to request one.

## Create your @unikname

Once you have your coupon, all you have to do is create your @unikname!

**Don't forget to backup and secure your passphrase**, it will allow you to retrieve access to your @unikname in case you change your device.
Neither <brand name="uns"/>, nor Unikname will be able to give you back access to your @unikname.

With <brand name="uns"/> CLI you can create your own UNIKNAME token using [`unik:create`](/cli.html#unik-create) command.

:::warning Choosing the @unikname
Choose the @unikname wisely. Indeed, it'll be disclosed to other people and they'll know you by this @unikname and once you've chosen a name, you won't be able to change it.
:::

As example, for creating the UNIKNAME `organization` token `SpaceElephant` with the coupon you have received:

```bash
$ uns unik:create --explicitValue "SpaceElephant" --type organization --coupon "HERE_THE_COUPON"
Enter your crypto account passphrase (12 words phrase): ***************************
{
  "data": {
    "id": "ccabe13311350a306d510c3484889a151eda9a1b61b5fe4d346fd3b1eeb42c25",
    "transaction": "4bcde02ec632bd5531aa8710b0a13f469a59caec910dc610d46f6b8ebdcaf9ac",
    "confirmations": 1
  }
}
```
::: tip UnikId
Write somewhere your unikId (`id` here, with value `ccabe13311350a306d510c3484889a151eda9a1b61b5fe4d346fd3b1eeb42c25`)! You need it in the following instructions.
:::

### Checking the creation of the @unikname in the Explorer

With the transaction id given into your command prompt, you can check the @unikname creation through [the explorer](https://explorer.unikname.network/). Look for the @unikname by its unikId in the search bar on the top.

You can also directly go to `https://explorer.unikname.network/${unikid}` in your browser.
For example, [https://explorer.unikname.network/uniks/ccabe13311350a306d510c3484889a151eda9a1b61b5fe4d346fd3b1eeb42c25](https://explorer.unikname.network/uniks/ccabe13311350a306d510c3484889a151eda9a1b61b5fe4d346fd3b1eeb42c25) for the @unikname `SpaceElephant`.

And now, [let's go registering your organization as a delegate](./registering-as-delegate).
