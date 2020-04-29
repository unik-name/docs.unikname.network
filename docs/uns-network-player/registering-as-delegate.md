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

Follow the link corresponding to your OS.

| <h1><vp-icon name="windows-brands" size="2em" /><br/>Windows</h1> | <h1><vp-icon name="apple-brands" size="2em" /><br/>macOS</h1> | <h1><vp-icon name="linux-brands" size="2em" /><br/>Linux</h1> |
|:-------:|:-----:|:-----:|
| <h3>[Download the 64-bit installer](https://unikname-cli-assets.s3.fr-par.scw.cloud/uns-x64.exe)</h3>        | <h3>[Install from sources](https://docs.uns.network/uns-use-the-network/cli/alternate-installation.html#installation-from-sources)</h3>      | <h3>[Install from sources](https://docs.uns.network/uns-use-the-network/cli/alternate-installation.html#installation-from-sources)</h3>      |

:::tip
*If you use Windows 10, execute the file downloaded to procede to installation.
Windows may display a warning. Don't worry, just continue the procedure.*
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

## Setting up your node

To set up your node, you can open in a new tab the [following instructions](https://docs.uns.network/uns-network-setting-up-node/#introduction).

## Checking your delegate status in the Explorer

Now, your job is done.
You can check on [explorer](https://explorer.uns.network/delegate-monitor) that you're in the delegate list (either in `active` or `standby` tab).

If you're in the `active` tab, congratulation, you're a <uns/> delegate, and your forger node is actually forging blocks and getting rewards!
If you're in the `standby` tab, you need to gather more voting power than current active delegates (i.e. have cryptoaccounts with positive balance voting for you).

*If you have any suggestions or encounter any problems with this tutoriel, give us your feedback on [our forum](https://forum.unik-name.com/c/uns-network/)!*