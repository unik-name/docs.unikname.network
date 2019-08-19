---
title: "UNS CLI"
---

# UNS CLI

[[toc]]

## Introduction
Universal Name System provides an interactive command line interface to create and manage your wallets ans UNIK tokens.
**Mainnet is not launched yet, please use devnet**.

## Requirements
UNS CLI installation requires some dependencies to be installed. It is expected to work on recent Linux and Mac OSX installations.

### Node.js

Install Node.js 10: [https://nodejs.org/en/download/](https://nodejs.org/en/download/).

**UNS CLI doesn't work on earlier (6, 8) or later versions of Node.js (11, 12+)**.

### Yarn

Install Yarn: [https://yarnpkg.com/en/docs/install](https://yarnpkg.com/en/docs/install).

**Don't forget to setup your $PATH to use UNS CLI as a global command.**

## Installation
Use yarn to install UNS CLI as global command

```bash
yarn global add @uns/uns-cli
```

Test your installation with

```bash
uns version
```

which should output something like that:

```
$ uns version
@uns/uns-cli/x.y.z linux-x64 node-v10.0.0

```

## UNS CLI Commands

- -h, --help: Help
- [version, -v, --version](#version): Prompts CLI version
- [status](#status): Displays blockchain status
- [create-unik](#create-unik): Create a UNIK nft token
- [create-wallet](#create-wallet): Create a UNS wallet

### Global parameters

These parameters apply to all commands:
- `--network` (required): Network on which UNS CLI will create token [`devnet` or `local`] (`local` is for development only)

### `version`

#### Introduction
Command used to prompt CLI version.

#### Usage

```bash
uns version
```

#### Output

Command prompts CLI version number, platform and node version

```
$ uns version
@uns/uns-cli/x.y.z linux-x64 node-v10.0.0

```

### `status`

#### Introduction
Command used to display blockchain status.

#### Parameters
Some [global parameters](#global-parameters) may apply to this command.

#### Usage

```bash
uns status
```

#### Examples
To display UNS devnet blockchain status

```bash
uns status --network devnet
```

#### Output
Command displays some blockchain informations

```
$ uns status --network devnet
Height:  21600
Network:  devnet
Supply DUNS:  2197055800000000 DUNS
Supply UNIKs:  23 UNIKs
Active delegates:  2
Last block:  https://explorer.devnet.uns.network/block/7496261431277872677
```

### `create-unik`

#### Introduction
With UNS CLI you can create your own UNIK token using `create-unik` command.

#### Parameters
- `--explicitValue` (required): Chosen explicit value of your UNIK (255 characters max)
- `--type` (required): Type of your token [individual/corporate]

Some [global parameters](#global-parameters) may apply to this command.

#### Usage

```bash
uns create-unik --explicitValue {explicitValue} --type [individual|corporate]
```

#### Examples
As example, if you want to create UNIK `individual` token `bob` on `devnet` network:
```bash
uns create-unik --explicitValue bob --type individual --network devnet
```

Enter your passphrase:

```
$ uns create-unik --explicitValue bob --type individual --network devnet
Enter your wallet passphrase (12 words phrase):
```

Your passphrase will be hidden, no trace in your terminal history:
```
Enter your wallet passphrase (12 words phrase): ********************************************************************************
```


#### Output

If the creation succeed UNS CLI prompts yout UNIK token ID and links to see token and transaction in the UNS explorer.

```
Computing UNIK fingerprint... done
Creating transaction... done
Sending transaction... done
Waiting for transaction confirmation... done
UNIK nft created (1 confirmation(s)): 5a085fc678b422be2b6457819825d6566a155de9c4b4cd958fd436e4422d6bf4 [ https://explorer.devnet.uns.network/uniks/5a085fc678b422be2b6457819825d6566a155de9c4b4cd958fd436e4422d6bf4 ]
See transaction in explorer: https://explorer.devnet.uns.network/transaction/1c0c5a8672581ddcb52fb8a3c7e6e6eb6edc29203a84bbaa3d8a84c4ef00c1c4
```

### `create-wallet`

#### Introduction
With UNS CLI you can create your UNS wallet using `create-wallet` command.

#### Parameters
Some [global parameters](#global-parameters) may apply to this command.

#### Usage

```bash
uns create-wallet
```

#### Examples
As example, if you want to create a UNS wallet on `devnet` network:
```bash
uns create-wallet --network devnet
```

#### Output

If the wallet creation succeed UNS CLI displays your wallet informations.

```
$ uns create-wallet

⚠️  WARNING: this information is not saved anywhere. You need to copy and save it by your own. ⚠️

{
  "address": "D9B6HLADr1Fd6TXvEGCuNc3A9aHK9JzjYC",
  "publicKey": "03522706bd0b812faea10e92dc0400e37aba468f9df3e2f63570c11c2b66eadc22",
  "privateKey": "d7877b7867404cd35bf85ea7643ad23058f5af1262d11a389ffc429648f4abe7",
  "passphrase": "train drastic alley office seed glove cable fee firm during lottery cause",
  "network": "devnet"
}

```
