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
**You have to copy and save preciously these informations! If you lost these informations, you'll also lost access to your cryptoaccount and your @unikname.**
:::

### Asking for SUNS from the faucet to initialize your cryptoaccount balance

You'll need SUNS tokens to use <uns/> features (creating your UNIK for example). You can ask for SUNS on [the unik-name forum](https://forum.unik-name.com/c/uns-network/faucet).
Don't forget to provide your cryptoaccount address, created with [the <uns/> CLI](cli.html#create-wallet) (it must start with a `S` letter, such as `UHxZ4PSU9uaDeEhsfinn8jCempbLwwyFQB`).

*When SUNS are send to your cryptoaccount, you receive a forum notification and an email. Don't forget to check them!*

### Checking your cryptoaccount balance

It exists two ways to do it.

#### 1. Checking it within the CLI
Execute the following command: `cryptoaccount:read` to see informations about your cryptoaccount as your balance.
At this moment, you should see something like this.
```bash
uns cryptoaccount:read Ug9DM5vuTEcph3uLTKBjAT7WCyjH3hE53D 
{
  "data": {
    "address": "Ug9DM5vuTEcph3uLTKBjAT7WCyjH3hE53D",
    "publicKey": "03983ecf61fc9edbe34eb54faa3b7555360aa204f88a757585dddfdbcd9c482320",
    "balance": 100,
    "token": "uns",
    "isDelegate": false,
    "nfts": {
      "unik": 0
    }
  }
}
```

#### 2. Checking it through the explorer
Another way is to check your cryptoaccount balance directly through [the explorer](https://explorer.uns.network/).

## Creating your @unikname

With <uns/> CLI you can create your own UNIK token using `unik:create` command.

### Parameters
- `--explicitValue` (required): Chosen explicit value of your UNIK (255 characters max)
- `--type` (required): Type of your token [individual/organization]
- `-f --format` (optional): Specify how to format the output [json|yaml]. Default to Json.
- `--fee` : Specify a dynamic fee in satoUNS. Defaults to `100000000 satoUNS = 1 UNS`.

Some [global parameters](#global-parameters) may apply to this command.

### Usage

```bash
$ uns unik:create --explicitValue {explicitValue} --type [individual|organization]
```

:::tip
Choose your @unikname wisely. Indeed, it'll be disclosed to other people and they'll know you by this @unikname.
:::

### Examples
As example, if you want to create UNIK `individual` token `bob`:

```bash
uns unik:create --explicitValue "bob" --type individual

Enter your crypto account passphrase (12 words phrase): ***************************

{
  "data": {
    "id": "8f79445a84e3664088008927aa113e237e1c163eafb35968600922a9c5231f60",
    "transaction": "4bcde02ec632bd5531aa8710b0a13f469a59caec910dc610d46f6b8ebdcaf9ac",
    "confirmations": 1
  }
}
```
:::warning
Write somewhere your unikid (id)! You need it in the following instructions.
:::

### Checking the creation of your @unikname in the Explorer
With the transaction id given into your command prompt, you can check the @unikname creation through [the explorer](https://explorer.uns.network/).


## Registering as a delegate

Congratulations! Now that you have:
* cryptoaccount with some UNS
* @unikname linked to your cryptoaccount

You can register as a delegate! 3 steps to achieved this.


### Step 1: Disclosing your @unikname
#### Introduction
Make public the explicit value of your UNIK Name. This value will appear in "explicitValue" property of your UNIK.

#### Parameters
- `-e, --explicitValue` (required): Explicit values to disclose, separated with spaces. Must match the UNIK Name of the token.
- `--unikid` (required): The UNIK token.
- `--fee` : Specify a dynamic fee in satoUNS. Defaults to `100000000 satoUNS = 1 UNS`.
- `-f, --format` {json|yaml, json}: Specify how to format the output [json|yaml]. Default to Json.

Some [global parameters](#global-parameters) may apply to this command.

#### Usage
Use this command to disclose your @unikname : `uns unik:disclose --unikid xxxxxxxxxxxxxxxxxxx -e Bob`.
You should have the following result. 
```bash
uns unik:disclose --unikid xxxxxxxxxxxxxxxxxxx  -e Bob

Enter your crypto account passphrase (12 words phrase): ***************************************************************************

Disclosing a @unik-name to the network can t be cancelled nor revoked. Your ID will be disclosed forever. Do you confirm the disclose demand? [y/n]: y

{
  "data": {
    "transaction": "56c833231ab2049a51779d4b03264c83dd6211bb96769187faeac3bfbb362214",
    "confirmations": 1
  }
}
```
:::tip
You can check that you have successfully disclose your @unikname in [the explorer](https://explorer.uns.network/).
:::

### Step 2: Registering as delegate
#### Introduction
This command allows you to register a UNIK as delegate with your Unikname.
Before registering you must have publicly disclosed your @unikname. It's what you did in step 2.
:::warning
To apply as a delegate, you should have only one @unikname into your cryptoaccount!
:::

#### Arguments
- `ID` (required): the unikid to register as delegate or the @unikname with [the format of a DID](/uns-use-the-network/cheatsheet.html#did-decentralized-identifier). See examples below for more information.

#### Parameters
Some [global parameters](#global-parameters) may apply to this command.

#### Usage
Use this command to register as a delegate : `uns delegate:register {unikid}`.
You should have the following result.
```bash
uns delegate:register 6dfc19dbc009faf47a3491b036da1929756a2a11572b6ebc6798587d8b996131

Enter your crypto account passphrase (12 words phrase): ************************************

{
  "data": {
    "transaction": "e9ab5406596fceb93c829a53549e06d8a13ea2b512ae45de8a29a43d448d7719",
    "confirmations": 1
  }
}
```
:::tip
You can check that you have successfully register as delegate in [the explorer](https://explorer.uns.network/).
:::

### Step 3: Voting for yourself
#### Introduction
This command allows you to vote for a delegate with his @unikname to get him elected.
Here, you'll vote for yourself.

#### Arguments
- `ID` (required): the unikid of the delegate to vote for or the @unikname with [the format of a DID](/uns-use-the-network/cheatsheet.html#did-decentralized-identifier). See examples below for more information.

#### Parameters
Some [global parameters](#global-parameters) may apply to this command.

#### Usage
Use this command to vote for yourself : `uns delegate:vote {unikid}`.
You should have the following result.
```bash
uns delegate:vote 6dfc19dbc009faf47a3491b036da1929756a2a11572b6ebc6798587d8b996131

Enter your crypto account passphrase (12 words phrase): ****************************************

{
  "data": {
    "transaction": "a1e267908e4b7af2a6576a3657d31fa4a791c79ee1be0ccb3fdf70a7f0b6f312",
    "confirmations": 1
  }
}
```
:::tip
You can check that you have successfully vote for yourself in [the explorer](https://explorer.uns.network/).
:::

### Checking your delegate status in the Explorer

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