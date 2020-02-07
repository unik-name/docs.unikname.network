---
home: false
title: "Becoming uns.network Player"
---

# Becoming a uns.network Player

[[toc]]

## Installing the uns.network CLI

The uns.network Command Line Interface (CLI) makes it easy to create and manage your @unikname and Unikname apps directly from the terminal.
It’s an essential part of using uns.network.

### Download & install the CLI

Follow the link corresponding to your OS.

| <h1><vp-icon name="windows-brands" size="2em" /><br/>Windows</h1> | <h1><vp-icon name="apple-brands" size="2em" /><br/>macOS</h1> | <h1><vp-icon name="linux-brands" size="2em" /><br/>Linux</h1> |
|:-------:|:-----:|:-----:|
| <h3>[Download the 64-bit installer](https://unikname-cli-assets.s3.fr-par.scw.cloud/uns-x64.exe)</h3>        | <h3>[Install from sources](cli/alternate-installation.html#installation-from-sources)</h3>      | <h3>[Install from sources](cli/alternate-installation.html#installation-from-sources)</h3>      |

:::tip
*If you use Windows 10, execute the file downloaded to procede to installation.
Windows may display a warning. Don't worry, just continue the procedure.*
:::

You can check that your installation is finished by entering **uns** into your command prompt.
You should see the following menu :

```bash
$ uns
UNS.network CLI

VERSION
  @uns/cli/X.X.X XXX XXX

USAGE
  $ uns [COMMAND]

COMMANDS
  autocomplete   display autocomplete installation instructions
  cryptoaccount  Manage Crypto Account (`uns cryptoaccount` to display Crypto Account commands)
  delegate       Manage UNS delegates (`uns delegate` to display Delegate commands)
  help           display help for uns
  properties     Manage UNIK properties (`uns properties` to display UNIK properties commands)
  resolve        Resolve a decentralized identifier.
  send           Send owned UNS protocol tokens to another wallet.
  status         Display blockchain status
  unik           Manage UNIK (`uns unik` to display UNIK commands)
  update         update the uns CLI
  version        UNS CLI Version
```

If you want more details about the CLI and tips to use it, check the [CLI documentation](https://docs.uns.network/uns-use-the-network/cli.html).
You are now ready for the next step !

## Creating your cryptoaccount

### Creating and saving your cryptoaccount informations

Your cryptoaccount is required for all the following steps. To create it, just execute the following command: `cryptoaccount:create`.
```bash
uns cryptoaccount:create --network sandbox
» :warn: This information is not saved anywhere. You need to copy and save it by your own.;
{
  "address": "XXXXXXXXXXXXXXXXXXXXXXXXX",
  "publicKey": "XXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  "privateKey": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  "passphrase": "XXXXX XXXXX XXXX XXXXXXXX XXXXXX XXXXXXX XXXX XXXXX",
  "network": "sandbox"
}
```

:::warning
**You have to copy and save preciously these informations! If you lost these informations, you'll also lost access to your cryptoaccount and your @unikname.**
:::

### Asking for SUNS from the faucet to initialize your cryptoaccount balance

You'll need SUNS tokens to use <uns/> features (creating your UNIK for example). You can ask for SUNS on [the unik-name forum](https://forum.unik-name.com/c/uns-network/faucet).
Don't forget to provide your cryptoaccount address, created with [the <uns/> CLI](cli.html#create-wallet) (it must start with a `S` letter, such as `SHxZ4PSU9uaDeEhsfinn8jCempbLwwyFQB`).

### Checking your cryptoaccount balance in the Explorer

TODO

## Creating your @unikname

Créer son unikname : https://docs.uns.network/uns-use-the-network/cli.html#unik-create

### Checking the creation of your @unikname in the Explorer

TODO

## Registering as a delegate

    Disclose : https://docs.uns.network/uns-use-the-network/cli.html#unik-is-disclosed
    Register : https://docs.uns.network/uns-use-the-network/cli.html#delegate-register
    Vote : https://docs.uns.network/uns-use-the-network/cli.html#delegate-vote

### Checking your delegate status in the Explorer

You can check on [explorer](https://sandbox.explorer.uns.network/delegate-monitor) that your @unikname is in the delegate list, in the `standby` tab.
To enter into the `active` state, you need to set up a forging node.

## Setting up your node

TODO

https://docs.uns.network/uns-network-setting-up-node/#introduction

### Checking your delegate status in the Explorer

Now, your job is done.
You can check on [explorer](https://sandbox.explorer.uns.network/delegate-monitor) that you're in the delegate list (either in `active` or `standby` tab).

If you're in the `active` tab, congratulation, you're a <uns/> delegate, and your forger node is actually forging blocks and getting rewards.

If you're in the `standby` tab, you need to gather more voting power than current active delegates (i.e. have wallets with positive balance voting for you).
