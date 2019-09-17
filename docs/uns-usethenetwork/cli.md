---
home: false
title: Using UNS network with the CLI 
---

# UNS CLI

[[toc]]

## Introduction
Universal Name System provides an interactive command line interface to create and manage your wallets ans UNIK tokens.
**Mainnet is not launched yet, please use devnet**.

## Requirements
UNS CLI installation requires some dependencies to be installed. It is expected to work on recent Linux and MacOS installations.

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

### Get help

You can get help and list of commands with the following flags

```
-h, --help: Help
```

Example:

```bash
$ uns -h
uns CLI

VERSION
  @uns/uns-cli/0.1.0 linux-x64 node-v10.16.2

USAGE
  $ uns [COMMAND]

COMMANDS
  create-unik     Create UNIK token
  create-wallet   Create UNS wallet
  get-properties  Get properties of UNIK token.
  help            display help for uns
  read-unik       Display UNIK token informations
  read-wallet     Read current data of a specified wallet, ic. balance
  set-properties  Set (add or update) properties of UNIK token.
  status          Display blockchain status
  version         UNS CLI Version
```

You can get help on a specific command by using the `help` command, followed by your command name.

Example:

```bash
$ uns help create-wallet
Create UNS wallet

USAGE
  $ uns create-wallet

OPTIONS
  -h, --help              show CLI help
  --network=devnet|local  (required) Network used to create UNIK nft token (local are for development only)

EXAMPLE
  $ uns create-wallet --network [devnet|local]
```

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
- `-f --format`: Specify how to format the output [json|table|yaml]. Default to Json.

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
Command displays some blockchain information

```bash
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

```bash
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

If the wallet creation succeed UNS CLI displays your wallet information.

```bash
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

Redirect stdout to file to create json file with wallet information:

```bash
uns create-wallet --network devnet >> ./myUNSWallet.json
```

### `read-wallet`

#### Introduction
Read current data of a specified wallet, ic. balance

#### Parameters

- `--idwallet` (required): the ID of the wallet. Can be either the publicKey or the address of the wallet.
- `--listunik` (optional): list UNIK tokens owned by the wallet, if any.

Some [global parameters](#global-parameters) may apply to this command.

#### Usage

```bash
uns read-wallet --idwallet {wallet identifier}] [--listunik]
```

#### Example

Display wallet information and list of UNIK token owned by this wallet
```bash
uns read-wallet --idwallet DU5L54d1cH2xhMcWRv4VBvpotsXGc9Z2VN --listunik --network devnet
```

#### Output

```bash
$ uns read-wallet --idwallet DU5L54d1cH2xhMcWRv4VBvpotsXGc9Z2VN --listunik --network devnet
UNS WALLET:
	address: DU5L54d1cH2xhMcWRv4VBvpotsXGc9Z2VN
	publicKey: 02b11f00c5aaa77c257241738fb92f5b267b87258fd517d95d1f19235e4dc395f6
	username: null
	secondPublicKey: null
	balance: 2099 DUNS
	isDelegate: false
	vote: null
	numberOfUNIK: 3

CONTEXT:
	network: devnet
	node: https://forger1.devnet.uns.network
	readDateTime: 2019-08-27T08:45:40.000Z
	height: 460

LIST OF UNIK:
	unikid: ecae7045b637c31ed31d1cddbcc8433f161321753c76635bfe04ce5fb9a34eb6
	unikid: f96fbd620e90130c178deb9f19dc8b5677a1913899e66c47a90d55dd54713866
	unikid: 08a57d5d28eb73b8dbb1e78bc61321b1304195e56bec3dcac3b2de684dd2e1cf
```
For information: Wallet's balance is updated applying each transaction that engages the wallet (recipient or sender). Wallets are stored in-memory and are loaded by the node when it starts.


### `read-unik`

#### Introduction
Read current data of a specified UNIK token

#### Parameters

- `--unikid` (required): the ID of the UNIK token

Some [global parameters](#global-parameters) may apply to this command.

#### Usage

```bash
uns read-unik --unikid {UNIK token id}
```

#### Example

Display UNIK informations
```bash
uns read-unik --unikid 2eb0bdfb42d9cd042cf65db167fa87e13166e76453e8150f0cdabf8a85fd814d --network devnet
```

#### Output

```bash
$ uns read-unik --unikid 78c3224000ed650682582c5ccd75ba0a8daf876187563cace113b3b195fbf759 --network devnet
UNIK:
	unikid: 78c3224000ed650682582c5ccd75ba0a8daf876187563cace113b3b195fbf759
	owner address: DNBkoGqWeTSiaEVgVzSKZd3jS7UWzv9PSo
	creation block: 2581339445265943992
	creation transaction: 30a671b90f834cf81a368a36cf0e93a4a33a0dd2fd100bd3a9bd84ecc6bad1c2
	creation date: 2019-08-26T13:06:10.000Z
	properties: 
		 { type: '1' }

CONTEXT:
	network: devnet
	node: https://forger1.devnet.uns.network
	readDateTime: 2019-08-27T08:45:40.000Z
	height: 460

```

### `get-properties`

#### Introduction
Get properties of UNIK token. The command will fail if the minimum number of confirmations has not been reached yet.

#### Parameters

- `--unikid` (required): The UNIK token on which to get the properties.
- `--confirmed` (optional): Minimum number of confirmation since the last update of the UNIK required to return the value. Default value is 3

Some [global parameters](#global-parameters) may apply to this command.

#### Usage

```bash
uns get-properties --unikid {UNIK token id} --network devnet
```

#### Examples

##### Success example

Display UNIK properties
```bash
uns get-properties --unikid 78c3224000ed650682582c5ccd75ba0a8daf876187563cace113b3b195fbf759 --network devnet
```

##### Success output example

```bash
$ uns get-properties --unikid 78c3224000ed650682582c5ccd75ba0a8daf876187563cace113b3b195fbf759 --network devnet
UNIK:
	unikid: 2eb0bdfb42d9cd042cf65db167fa87e13166e76453e8150f0cdabf8a85fd814d
	properties: 
		 { type: '2' }
	confirmations: 217
```

##### Failing example

Display UNIK properties with at least 300 confirmations since the last UNIK token update
```bash
uns get-properties --unikid 78c3224000ed650682582c5ccd75ba0a8daf876187563cace113b3b195fbf759 --network devnet --confirmed 300
```

##### Failing output example

CLI throws error because of the actual number of confirmations of the last transaction that have updated UNIK token is lower than expected.
```bash
$ uns get-properties --unikid 78c3224000ed650682582c5ccd75ba0a8daf876187563cace113b3b195fbf759 --network devnet --confirmed 300
›   Error: [get-properties] Not enough confirmations (expected: 300, actual: 217)
```

### `set-properties`

#### Introduction
Set (add or update) properties of UNIK token.

#### Parameters

- `--unikid` (required): the ID of the UNIK token
- `-p --properties` (required): Array of properties to set.
  
  `"key1:value1" "key3:"` Sets `value1` to `key1` and empty string to `key3`
- `--await` : Number of blocks to wait to get confirmed for the success. Default to `3`.
  
  `0` for immediate return.
  Needs to be strictly greater than `--confirmation` flag
- `--confirmations` : Number of confirmations to wait to get confirmed for the success. Default to `1`.

  Needs to be strictly lower than `--await` flag
- `--passphrase` : The passphrase of the owner of UNIK. If you do not enter a passphrase you will be prompted for it.
- `--fee` : Specify a dynamic fee in satoUNS. Defaults to `100000000 satoUNS = 1 UNS`.

It's impossible to ask more confirmations (with the --confirmations flag) than the number of blocks CLI waits (--await). Only 1 confirmation possible by block.

Some [global parameters](#global-parameters) may apply to this command.

#### Usage

```bash
uns set-properties --unikid {UNIK token id} --properties "key:value" "key3:" --network devnet
```

#### Example

Add property `key/value` to UNIK `2eb0bdfb42d9cd042cf65db167fa87e13166e76453e8150f0cdabf8a85fd814d`
```bash
uns set-properties --unikid 2eb0bdfb42d9cd042cf65db167fa87e13166e76453e8150f0cdabf8a85fd814d --network devnet --properties "key:value"
```

#### Output

```bash
$ uns set-properties --unikid 2eb0bdfb42d9cd042cf65db167fa87e13166e76453e8150f0cdabf8a85fd814d --network devnet --properties "key:value"

unikid:  2eb0bdfb42d9cd042cf65db167fa87e13166e76453e8150f0cdabf8a85fd814d
transaction:  5cb8c18b817f793eee58f4351426c2fe865d065d95667fcc8b23d8319afc0920
confirmations:  1

```
