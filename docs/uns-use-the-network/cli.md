---
home: false
title: "Using uns.network with the CLI"
---

# <uns>uns.network</uns> CLI

[[toc]]

## Introduction
<uns>uns.network</uns> provides an interactive command line interface to create and manage your wallets, your UNS protocol tokens and your UNIK NFT tokens.

**Mainnet is not launched yet, please use devnet**.

The <uns>uns.network</uns> Command Line Interface is expected to work on recent Linux, MacOS, Windows 10 with WSL installations.  
Some users have reported successful installation and use of the <uns>uns.network</uns> CLI on "raw" Windows 10 OS.

## Installation

### Installation from sources

#### Requirements

<uns>uns.network</uns> CLI installation requires some dependencies to be installed. 

##### Node.js

Install Node.js 10: [https://nodejs.org/en/download/](https://nodejs.org/en/download/).

<uns>uns.network</uns> CLI doesn't work on earlier (6, 8) or later versions of Node.js (11, 12+)**.

##### Compilation tools

Even if the <uns>uns.network</uns> CLI is written in a cross-operating system language (Javascript), it requires native dependencies which need to be compiled for your operating system.

You need:
- gcc/g++
- Python 2.7

Most of the times, theses tools are already installed. If not, you can read on the [@unik-name Forum](https://forum.unik-name.com/t/how-to-get-required-tools-to-install-the-uns-cli/95) how to install them for your operating system.

If still you need help to install theses tools, you can get support on [the @unik-name Forum](https://forum.unik-name.com).

#### Installation with NPM

As NPM is provided by NodeJS package, you can use it to install <uns>uns.network</uns> CLI as global command ("sudo mode" might be required, depending on your NodeJS installation).

```bash
[sudo] npm install -g @uns/uns-cli
```

Test your installation with

```bash
uns version
```

which should output something like that:

```
$ uns version
@uns/uns-cli/x.y.z linux-x64 node-v10.16.3
```

If you fail to install the CLI, you can get support on [the @unik-name Forum](https://forum.unik-name.com).

**Note**
If you want, you can also use [Yarn](https://yarnpkg.com/) instead of NPM to install the <uns>uns.network</uns> CLI from sources.

## Configuration

### Global parameters

You can use the following command line options to override the default configuration settings for a single command:

- `--verbose` (optional): Additional logs

- `-n, --network` (required): choose the network to interact with.

  Possible values: `devnet` or `local` (`local` is for development only)

::: tip
Avoid repetition of `--network` flag using the `UNS_NETWORK={network}` environment variable (or `%UNS_NETWORK%` for Windows shell).


Example:
```shell
$ UNS_NETWORK=devnet uns status
```

You can also export this environment variable in your `~/.bashrc` file (or equivalent for your current shell) to make it permanent.
:::

- `--node` (optional): URL of custom node representing blockchain endpoint

::: tip
Avoid repetition of `--node` flag using the `UNS_NODE={custom node url}` environment variable (or `%UNS_NODE%` for Windows shell).


Example:
```shell
$ UNS_NODE="http://custom.node.example:4103" uns status
```

You can also export this environment variable in your `~/.bashrc` file (or equivalent for your current shell) to make it permanent.
:::
### Write global parameters

For every new data added in the chain, you may wait for the write operation to be confirmed. Once the transaction data is written in a block, the data get one confirmation for every new block added in the chain. By default we wait for one confirmation in the next 3 blocks. With the await-confirmation flag, you can choose to extend the maximum waiting time or set it to 0 which corresponds to an asynchronous operation.

- `--await-confirmation` (optional): Maximum number of blocks to wait to get one confirmation of the transaction. Default to 3. 0 for immediate return.


### Using an HTTP Proxy

To access <uns>uns.network</uns> through proxy servers, you can configure the HTTP_PROXY and HTTPS_PROXY environment variables with either the DNS domain names or IP addresses and port numbers used by your proxy servers. See the following examples.

#### Linux or macOS, or Unix

```shell
$ export HTTP_PROXY=http://proxy.example.com:1234
$ export HTTPS_PROXY=http://proxy.example.com:5678
```

### Windows

```shell
C:\> setx HTTP_PROXY=http://proxy.example.com:1234
C:\> setx HTTPS_PROXY=http://proxy.example.com:5678 
```

#### Authenticating to a Proxy

The <uns>uns.network</uns> CLI supports HTTP Basic authentication. Specify the user name and password in the proxy URL, as follows.

##### Linux or macOS

```shell
$ export HTTP_PROXY=http://username:password@proxy.example.com:1234
$ export HTTPS_PROXY=http://username:password@proxy.example.com:5678
```

##### Windows

```shell
C:\> setx HTTP_PROXY http://username:password@proxy.example.com:1234
C:\> setx HTTPS_PROXY=http://username:password@proxy.example.com:5678
```

**Note**

The <uns>uns.network</uns> CLI doesn't support NTLM proxies. If you use an NTLM or Kerberos protocol proxy, you might be able to connect through an authentication proxy like [Cntlm](http://cntlm.sourceforge.net/).


## Commands

### Getting help

You can get help and list of commands with the following flags

```
-h, --help: Help
```

Example:

```bash
$ uns -h
uns CLI

VERSION
  @uns/uns-cli/1.0.0 win32-x64 node-v11.8.0

USAGE
  $ uns [COMMAND]

COMMANDS
  create-unik               Create UNIK token
  create-wallet             Create UNS wallet
  did-resolve               Resolve a decentralized identifier.
  disclose-explicit-values  Disclose one or multiple explicitValues of your UNIK identifier.
  get-properties            Get properties of UNIK token.
  get-property-value        Get the value of a specific property of a UNIK token.
  help                      display help for uns
  read-unik                 Display UNIK token informations
  read-wallet               Read current data of a specified wallet, ic. balance
  send                      Send owned UNS protocol tokens to another wallet.
  set-properties            Set (add or update) properties of UNIK token.
  status                    Display blockchain status
  unset-properties          Unset properties of UNIK token.
  version                   UNS CLI Version
```

You can get help on a specific command by using `--help`, following your command name.

Example:

```bash
$ uns create-wallet --help
Create uns.network wallet

USAGE
  $ uns create-wallet

OPTIONS
  -f, --format=json|yaml      [default: json] Specify how to format the output [json|yaml].
  -h, --help                  show CLI help
  -n, --network=devnet|local  (required) Network used to create UNIK nft token
  -v, --verbose               Detailed logs

EXAMPLE
  $ uns create-wallet --network [devnet|local] --format {json|yaml} --verbose
```

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
@uns/uns-cli/x.y.z win32-x64 node-v11.8.0
```

### `status`

#### Introduction
Command used to display blockchain status.

#### Parameters
- `-f --format` (optional): Specify how to format the output [json|table|yaml]. Default to Json.

Some [global parameters](#global-parameters) may apply to this command.

#### Usage

```bash
uns status
```

#### Examples
To display <uns>uns.network</uns> devnet blockchain status

```bash
uns status --network devnet --format yaml
```

#### Output
Command displays some blockchain information

```bash
$ uns status --network devnet --format yaml
height: 21600
network: devnet
totalTokenSupply: 21184378
tokenSymbol: DUNS
numberOfUniks: 23
activeDelegates: 7
lastBlockUrl: https://explorer.devnet.uns.network/block/21600
```
### `create-wallet`

#### Introduction
With <uns>uns.network</uns> CLI you can create your <uns>uns.network</uns> wallet using `create-wallet` command.

#### Parameters
- `-f --format` (optional): Specify how to format the output [json|yaml]. Default to Json.

Some [global parameters](#global-parameters) may apply to this command.

#### Usage

```bash
uns create-wallet
```

#### Examples
As example, if you want to create a <uns>uns.network</uns> wallet on `devnet` network:
```bash
uns create-wallet --network devnet
```

#### Output

If the wallet creation succeed <uns>uns.network</uns> CLI displays your wallet information.

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

- `--listunik` (optional): list UNIK tokens owned by the wallet, if any.
- `-f --format` (optional): Specify how to format the output [json|yaml]. Default to Json.
- `--chainmeta` (optional): Retrieve chain meta datas

Some [global parameters](#global-parameters) may apply to this command.

#### Arguments

- `walletId` (required): the ID of the wallet. Can be either the publicKey or the address of the wallet.

#### Usage

```bash
uns read-wallet {wallet identifier}] [--listunik]
```

#### Example

Display wallet information and list of UNIK token owned by this wallet
```bash
uns read-wallet DB2cknUqNNoJgQ34nbnsJwsZi5h8TNsYKe --listunik --network devnet --format yaml
```

#### Output

```bash
$ uns read-wallet DB2cknUqNNoJgQ34nbnsJwsZi5h8TNsYKe --listunik --network devnet --format yaml
data:
  address: DB2cknUqNNoJgQ34nbnsJwsZi5h8TNsYKe
  publicKey: 02cb4d32f1e69177bb428bf200b9c9dbf662826817f25fde2bf0bb17e28bd2292b
  username: null
  secondPublicKey: null
  balance: "99.9"
  isDelegate: false
  vote: null
  nfts:
    uniks: 1
  tokens:
    uniks:
      - 2145a1e84e8a54d066dbc535388898c56dae5d95e2c46a8c2e735dd3db97c03f
chainmeta:
  network: devnet
  node: https://forger1.devnet.uns.network
  date: 2019-09-19T08:46:30.000Z
  height: 10610
```
For information: Wallet's balance is updated applying each transaction that engages the wallet (recipient or sender). Wallets are stored in-memory and are loaded by the node when it starts.


### `create-unik`

#### Introduction
With <uns>uns.network</uns> CLI you can create your own UNIK token using `create-unik` command.

#### Parameters
- `--explicitValue` (required): Chosen explicit value of your UNIK (255 characters max)
- `--type` (required): Type of your token [individual/organization/network]
- `-f --format` (optional): Specify how to format the output [json|yaml]. Default to Json.
- `--fee` : Specify a dynamic fee in satoUNS. Defaults to `100000000 satoUNS = 1 UNS`.

Some [global parameters](#global-parameters) may apply to this command.

#### Usage

```bash
uns create-unik --explicitValue {explicitValue} --type [individual|organization|network]
```

#### Examples
As example, if you want to create UNIK `individual` token `bob` on `devnet` network:
```bash
uns create-unik --explicitValue bob --type individual --network devnet --verbose
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

If the creation succeed <uns>uns.network</uns> CLI prompts yout UNIK token ID and links to see token and transaction in the <uns>uns.network</uns> explorer.

```
Computing UNIK fingerprint... done
Creating transaction... done
Sending transaction... done
Waiting for transaction confirmation... done
UNIK nft created (1 confirmation(s)): bf21b5c7ae13a6892315aefcfa58ee1b1c470d011564f9f29c4f1941a2373956 [ https://explorer.devnet.uns.network/uniks/bf21b5c7ae13a6892315aefcfa58ee1b1c470d011564f9f29c4f1941a2373956 ]
See transaction in explorer: https://explorer.devnet.uns.network/transaction/a73f42691f2d076ba5a4e12c36f43ed8082cb8ae03c507d98305b8a08e6d4f03
{
  "data": {
    "id": "bf21b5c7ae13a6892315aefcfa58ee1b1c470d011564f9f29c4f1941a2373956",
    "transaction": "a73f42691f2d076ba5a4e12c36f43ed8082cb8ae03c507d98305b8a08e6d4f03",
    "confirmations": 1
  }
}

```

### `read-unik`

#### Introduction
Read current data of a specified UNIK token

#### Parameters

- `--unikid` (required): the ID of the UNIK token
- `-f --format` (optional): Specify how to format the output [json|yaml]. Default to Json.
- `--chainmeta` (optional): Retrieve chain meta datas


Some [global parameters](#global-parameters) may apply to this command.

#### Usage

```bash
uns read-unik --unikid {UNIK token id}
```

#### Example

Display UNIK informations
```bash
uns read-unik --unikid 2145a1e84e8a54d066dbc535388898c56dae5d95e2c46a8c2e735dd3db97c03f --network devnet -f yaml
```

#### Output

```bash
$ uns read-unik --unikid 2145a1e84e8a54d066dbc535388898c56dae5d95e2c46a8c2e735dd3db97c03f --network devnet -f yaml
data:
  id: 2145a1e84e8a54d066dbc535388898c56dae5d95e2c46a8c2e735dd3db97c03f
  ownerAddress: DB2cknUqNNoJgQ34nbnsJwsZi5h8TNsYKe
  creationBlock: "15218398688380119048"
  creationTransaction: 3831b7abdf68388c4f66663f6e655de996816e53314f1afe94a05f3da79f8d5e
  creationDate: 2019-09-19T06:53:48.000Z
  properties:
    - type: "1"
chainmeta:
  network: devnet
  node: https://forger1.devnet.uns.network
  date: 2019-09-19T09:02:00.000Z
  height: 10726

```

### `set-properties`

#### Introduction
Set (add or update) properties of UNIK token.

#### Parameters

- `--unikid` (required): the ID of the UNIK token
- `-p --properties` (required): List of key/value to set as UNIK properties: "key1:value1" "key2:value2".  See [allowed property key format](/uns-use-the-network/cheatsheet.html#property-keys-of-unik)

- `--passphrase` : The passphrase of the owner of UNIK. If you do not enter a passphrase you will be prompted for it.
- `--fee` : Specify a dynamic fee in satoUNS. Defaults to `100000000 satoUNS = 1 UNS`.
- `-f --format` (optional): Specify how to format the output [json|yaml]. Default to Json.


Some [global parameters](#global-parameters) may apply to this command.

#### Usage

```bash
uns set-properties --unikid {UNIK token id} --properties "{key1}:{value1}" "{key2}:{value2}" --network devnet
```

#### Example

Add property `key/value` to UNIK `2145a1e84e8a54d066dbc535388898c56dae5d95e2c46a8c2e735dd3db97c03f`
```bash
uns set-properties --unikid 2145a1e84e8a54d066dbc535388898c56dae5d95e2c46a8c2e735dd3db97c03f --network devnet --properties "key:value" --passphrase "train drastic alley office seed glove cable fee firm during lottery cause" -f yaml
```

#### Output

```bash
$ uns set-properties --unikid 2145a1e84e8a54d066dbc535388898c56dae5d95e2c46a8c2e735dd3db97c03f --network devnet --properties "key:value" --passphrase "train drastic alley office seed glove cable fee firm during lottery cause" -f yaml

unikid:  2145a1e84e8a54d066dbc535388898c56dae5d95e2c46a8c2e735dd3db97c03f
transaction:  5cb8c18b817f793eee58f4351426c2fe865d065d95667fcc8b23d8319afc0920
confirmations:  1

```

##### Related commands
- [unset-properties](#unset-properties)

### `unset-properties`

#### Introduction
Unset properties of UNIK token.

#### Parameters

- `--unikid` (required): the ID of the UNIK token
- `-k --propertyKey`, Key of the property to unset. (multiple occurrences)
- `--passphrase` : The passphrase of the owner of UNIK. If you do not enter a passphrase you will be prompted for it.
- `--fee` : Specify a dynamic fee in satoUNS. Defaults to `100000000 satoUNS = 1 UNS`.
- `-f --format` (optional): Specify how to format the output [json|yaml]. Default to Json.

Some [global parameters](#global-parameters) may apply to this command.

#### Usage

```bash
uns unset-properties --unikid {UNIK token id} -k prop1 -k prop2 --network devnet
```

#### Example

Remove property `key/value` to UNIK `2145a1e84e8a54d066dbc535388898c56dae5d95e2c46a8c2e735dd3db97c03f`
```bash
uns unset-properties --unikid 2145a1e84e8a54d066dbc535388898c56dae5d95e2c46a8c2e735dd3db97c03f --network devnet -k key --passphrase "train drastic alley office seed glove cable fee firm during lottery cause" -f yaml
```

#### Output

```bash
$ uns unset-properties --unikid 2145a1e84e8a54d066dbc535388898c56dae5d95e2c46a8c2e735dd3db97c03f --network devnet -k key --passphrase "train drastic alley office seed glove cable fee firm during lottery cause" -f yaml

unikid:  2145a1e84e8a54d066dbc535388898c56dae5d95e2c46a8c2e735dd3db97c03f
transaction:  5cb8c18b817f793eee58f4351426c2fe865d065d95667fcc8b23d8319afc0920
confirmations:  1

```
##### Related commands
- [set-properties](#set-properties)

### `get-properties`

#### Introduction
Get properties of UNIK token. The command will fail if the minimum number of confirmations has not been reached yet.

#### Parameters

- `--unikid` (required): The UNIK token on which to get the properties.
- `--confirmed` (optional): Minimum number of confirmation since the last update of the UNIK required to return the value. Default value is 3
- `-f --format` (optional): Specify how to format the output [json|yaml|table|raw]. Default to Json.


Some [global parameters](#global-parameters) may apply to this command.

#### Usage

```bash
uns get-properties --unikid {UNIK token id}
```

#### Examples

##### Success example

Display UNIK properties
```bash
uns get-properties --unikid 2145a1e84e8a54d066dbc535388898c56dae5d95e2c46a8c2e735dd3db97c03f --network devnet
```

##### Success output example

```bash
$ uns get-properties --unikid 2145a1e84e8a54d066dbc535388898c56dae5d95e2c46a8c2e735dd3db97c03f --network devnet -f yaml
unikid: 2145a1e84e8a54d066dbc535388898c56dae5d95e2c46a8c2e735dd3db97c03f
properties:
  - type: "1"
confirmations: 217
```

##### Failing example

Display UNIK properties with at least 300 confirmations since the last UNIK token update
```bash
uns get-properties --unikid 2145a1e84e8a54d066dbc535388898c56dae5d95e2c46a8c2e735dd3db97c03f --network devnet --confirmed 300
```

##### Failing output example

CLI throws error because of the actual number of confirmations of the last transaction that have updated UNIK token is lower than expected.
```bash
$ uns get-properties --unikid 2145a1e84e8a54d066dbc535388898c56dae5d95e2c46a8c2e735dd3db97c03f --network devnet --confirmed 300
›   Error: [get-properties] Not enough confirmations (expected: 300, actual: 217)
```

### `get-property-value`

#### Introduction
Get the value of a specific property of a UNIK token.

#### Parameters

- `--unikid` (required): The UNIK token on which to get the property.
- `-k, --propertyKey` (required): the key of the property for which we query the value. See [allowed property key format](/uns-use-the-network/cheatsheet.html#property-keys-of-unik)
- `--confirmed` (optional): Minimum number of confirmation since the last update of the UNIK required to return the value. Default value is 3.
- `-m, --chainmeta` (optional): Output chain meta data related to the data itself.
- `-f, --format` {json|yaml|raw, json}: Specify how to format the output [json|yaml|raw]. Default to Json.

Some [global parameters](#global-parameters) may apply to this command.

#### Usage

```bash
uns get-property-value --unikid {UNIK token id} -k {propertyKey} -n devnet
```

#### Examples

##### Success example

Display UNIK property phone
```bash
uns get-property-value --unikid 2145a1e84e8a54d066dbc535388898c56dae5d95e2c46a8c2e735dd3db97c03f -n devnet -k "phone"
```

##### Success output example

```bash
$ uns get-property-value --unikid 2145a1e84e8a54d066dbc535388898c56dae5d95e2c46a8c2e735dd3db97c03f -n devnet -k "phone" -f yaml
unikid: 2145a1e84e8a54d066dbc535388898c56dae5d95e2c46a8c2e735dd3db97c03f
property: phone
value: +33606060606
confirmations: 833
```

### `did-resolve`

#### Introduction
Resolve a decentralized identifier (DID).

#### Arguments
- `DID` (required):  The decentralized identifier to resolve.

Expected format : `"[@][unik:][type:]expliciteValue[?propertyKey|?*]"`, where:
- `type` can be one of [these values](/uns-use-the-network/cheatsheet.html#types-and-categories-of-unik) (numeric or letter format)
- `explicitValue` is the usual value of your @unik-name
- `propertyKey` must match with [this format](/uns-use-the-network/cheatsheet.html#property-keys-of-unik)

See examples below for more information.

::: warning
DID must be surrounded by double quotes (e.g. `"@bob"`)
:::

#### Parameters

- `--confirmed` (optional): Minimum number of confirmation since the last update of the UNIK required to return the value. Default value is 3
- `-f --format` (optional): Specify how to format the output [json|yaml|raw]. Default to JSON.

Some [global parameters](#global-parameters) may apply to this command.


#### Usage

```bash
$ uns did-resolve --network devnet "@unik:individual:bob?phone"
```

#### Examples

Resolve `@bob` `address` property in raw format:
```bash
$ uns did-resolve --network devnet -f raw "@unik:individual:bob?address"

42 quai Malakoff, 44000 Nantes
```

Alternative syntaxes:
```bash
$ uns did-resolve --network devnet -f raw "bob?address"
$ uns did-resolve --network devnet -f raw "@bob?address"
$ uns did-resolve --network devnet -f raw "@unik:bob?address"
```


### `disclose-explicit-values`

#### Introduction
Make public one or more explicit values of your UNIK Name. This value will appear in "explicitValue" property of your UNIK.

#### Parameters

- `-e, --explicitValue` (required): Explicit values to disclose, separated with spaces. Must match the UNIK Name of the token.
- `--unikid` (required): The UNIK token.
- `--passphrase` : The passphrase of the owner of UNIK. If you do not enter a passphrase you will be prompted for it.
- `--fee` : Specify a dynamic fee in satoUNS. Defaults to `100000000 satoUNS = 1 UNS`.
- `-f, --format` {json|yaml, json}: Specify how to format the output [json|yaml]. Default to Json.

Some [global parameters](#global-parameters) may apply to this command.

#### Usage

```bash
uns disclose-explicit-values -n devnet --unikid {UNIK token id} -e {explicit values}
```

#### Examples

##### Success example

Disclose two explicit values: bob and b0b
```bash
uns disclose-explicit-values -n devnet --unikid 2145a1e84e8a54d066dbc535388898c56dae5d95e2c46a8c2e735dd3db97c03f -e bob bOb
```

##### Success output example

```bash
$ uns disclose-explicit-values -n devnet --unikid 2145a1e84e8a54d066dbc535388898c56dae5d95e2c46a8c2e735dd3db97c03f -e bob bOb -f yaml

Disclosing a @unik-name to the network can't be cancelled nor revoked. Your ID will be disclosed forever. Do you confirm the disclose demand? [y/n]: y
data:
  transaction: adf4e1d845c82b2cffe63b5e438869fcea384439ab913885697726894a99c75b
  confirmations: 1
```


### `is-disclosed`

#### Introduction
Check if UNIK has one or more disclosed explicit value.

#### Arguments
- `unikid` (required):  The UNIK token to query.

#### Parameters

- `--confirmed` (optional): Minimum number of confirmation since the last update of the UNIK required to return the value. Default value is 3.
- `-m, --chainmeta` (optional): Output chain meta data related to the data itself.
- `-f, --format` {json|yaml|raw, json}: Specify how to format the output [json|yaml|raw]. Default to Json.

Some [global parameters](#global-parameters) may apply to this command.

#### Usage

```bash
uns is-disclosed -n devnet {UNIK token id}
```

#### Examples

##### Success example

Check UNIK explicit value disclose status
```bash
uns is-disclosed -n devnet 2145a1e84e8a54d066dbc535388898c56dae5d95e2c46a8c2e735dd3db97c03f
```

##### Success output example

```bash
$ uns uns is-disclosed -n devnet 2145a1e84e8a54d066dbc535388898c56dae5d95e2c46a8c2e735dd3db97c03f -f yaml

unikid: 2145a1e84e8a54d066dbc535388898c56dae5d95e2c46a8c2e735dd3db97c03f
isDisclosed: true
confirmations: 833
```


### `send`

#### Introduction
Send owned UNS protocol tokens to another wallet.

#### Arguments
- `AMOUNT` (required):  The quantity of UNS tokens to send to the recipient.

#### Parameters

- `--to` (required): The recipient address, public key or @unik-name (warning: @unik-name must be surrounded with double quotes).
- `--no-check`: Allow sending tokens to an address that do not exists on chain yet.
- `--fees-included`: Specify that the fees must be deducted from the amount. By default the fees are paid on top.
- `--passphrase`: The passphrase of the owner of unik. If you do not enter a passphrase you will be prompted for it.
- `--secondPassphrase`: The second wallet passphrase. If you have created a second passphrase on your wallet, you have to enter it.
- `--fee`: Specify a dynamic fee in UNSat. Defaults to 100000000 satoUNS = 1 UNS.

Some [global parameters](#global-parameters) may apply to this command.

#### Usage

```bash
uns send 10.42 --to D59pZ7fH6vtk23mADnbpqyhfMiJzpdixws --network devnet
```

```bash
uns send 10.42 --to "@bob" --network devnet
```

#### Examples

##### Output example

```bash
$ uns send 10.42 --to D59pZ7fH6vtk23mADnbpqyhfMiJzpdixws --network devnet
Enter your wallet passphrase (12 words phrase): *************************************************************************

{
  transaction: 3996912796307dae3009bc1cb3e4b681a3e34a427d563711115799252715179f
  confirmations: 3
}
```
