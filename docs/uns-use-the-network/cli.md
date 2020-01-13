---
home: false
title: "Using uns.network with the CLI"
---

# uns.network CLI

[[toc]]

## Introduction
<uns/> provides an interactive command line interface to create and manage your crypto accounts, your UNS protocol tokens and your UNIK NFT tokens.

**Livenet is not launched yet, please use sandbox**.

The <uns/> Command Line Interface is expected to work on recent Linux, MacOS, Windows 10 with WSL installations.  
Some users have reported successful installation and use of the <uns/> CLI on "raw" Windows 10 OS.

## Installation

### Installation from sources

#### Requirements

<uns/> CLI installation requires some dependencies to be installed. 

##### Node.js

Install a stable version of Node.js (10 or 12): [https://nodejs.org/en/download/](https://nodejs.org/en/download/).

**<uns/> CLI doesn't work on earlier (6, 8)**.

##### Compilation tools

Even if the <uns/> CLI is written in a cross-operating system language (Javascript), it requires native dependencies which need to be compiled for your operating system.

You need:
- gcc/g++
- Python 2.7

Most of the times, theses tools are already installed. If not, you can read on the [@unik-name Forum](https://forum.unik-name.com/t/how-to-get-required-tools-to-install-the-uns-cli/95) how to install them for your operating system.

If still you need help to install theses tools, you can get support on [the @unik-name Forum](https://forum.unik-name.com).

#### Installation with NPM

As NPM is provided by NodeJS package, you can use it to install <uns/> CLI as global command ("sudo mode" might be required, depending on your NodeJS installation).

```bash
[sudo] npm install -g @uns/cli
```

Test your installation with

```bash
uns version
```

which should output something like that:

```
$ uns version
@uns/cli/x.y.z linux-x64 node-v10.16.3
```

If you fail to install the CLI, you can get support on [the @unik-name Forum](https://forum.unik-name.com).

**Note**
If you want, you can also use [Yarn](https://yarnpkg.com/) instead of NPM to install the <uns/> CLI from sources.

## Configuration

### Global parameters

You can use the following command line options to override the default configuration settings for a single command:

- `--verbose` (optional): Additional logs

- `-n, --network` (required): choose the network to interact with.

  Possible values: `sandbox` or `local` (`local` is for development only)

::: tip
Avoid repetition of `--network` flag using the `UNS_NETWORK={network}` environment variable (or `%UNS_NETWORK%` for Windows shell).


Example:
```shell
$ UNS_NETWORK=sandbox uns status
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

To access <uns/> through proxy servers, you can configure the HTTP_PROXY and HTTPS_PROXY environment variables with either the DNS domain names or IP addresses and port numbers used by your proxy servers. See the following examples.

:::: tabs

::: tab "Linux or macOS, or Unix"
```shell
$ export HTTP_PROXY=http://proxy.example.com:1234
$ export HTTPS_PROXY=http://proxy.example.com:5678
```
:::

::: tab "Windows"
```shell
C:\> setx HTTP_PROXY=http://proxy.example.com:1234
C:\> setx HTTPS_PROXY=http://proxy.example.com:5678 
```
:::

::::

#### Authenticating to a Proxy

The <uns/> CLI supports HTTP Basic authentication. Specify the user name and password in the proxy URL, as follows.

:::: tabs

::: tab "Linux or macOS"
```shell
$ export HTTP_PROXY=http://username:password@proxy.example.com:1234
$ export HTTPS_PROXY=http://username:password@proxy.example.com:5678
```
:::

::: tab "Windows"
```shell
C:\> setx HTTP_PROXY http://username:password@proxy.example.com:1234
C:\> setx HTTPS_PROXY=http://username:password@proxy.example.com:5678
```
:::

::::

**Note**

The <uns/> CLI doesn't support NTLM proxies. If you use an NTLM or Kerberos protocol proxy, you might be able to connect through an authentication proxy like [Cntlm](http://cntlm.sourceforge.net/).


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
  @uns/cli/1.0.0 win32-x64 node-v10.8.0

USAGE
  $ uns [COMMAND]

COMMANDS
  autocomplete   display autocomplete installation instructions
  cryptoaccount  Manage Crypto Account
  help           display help for uns
  properties     Manage UNIK properties
  resolve        Resolve a decentralized identifier.
  send           Send owned UNS protocol tokens to another crypto account.
  status         Display blockchain status
  unik           Manage UNIK
  version        UNS CLI Version
```

You can get help on a specific command or topic (group of commands) by using `--help`, following your command name.

Example:

```bash
$ uns cryptoaccount:create --help
Create uns.network crypto account

USAGE
  $ uns cryptoaccount:create

OPTIONS
  -f, --format=json|yaml      [default: json] Specify how to format the output [json|yaml].
  -h, --help                  show CLI help
  -n, --network=sandbox|local  (required) Network used to create UNIK nft token
  -v, --verbose               Detailed logs

EXAMPLE
  $ uns cryptoaccount:create --network [sandbox|local] --format {json|yaml} --verbose
```

### `version`

#### Introduction
Command used to prompt CLI version.

#### Usage

```bash
$ uns version
```

#### Output

Command prompts CLI version number, platform and node version

```
$ uns version
@uns/cli/x.y.z win32-x64 node-v10.8.0
```

### `status`

#### Introduction
Command used to display blockchain status.

#### Parameters
- `-f --format` (optional): Specify how to format the output [json|yaml]. Default to Json.

Some [global parameters](#global-parameters) may apply to this command.

#### Usage

```bash
$ uns status
```

#### Examples
To display <uns/> sandbox blockchain status

```bash
$ uns status --network sandbox --format yaml
```

#### Output
Command displays some blockchain information

```bash
$ uns status --network sandbox --format yaml
height: 52328
network: sandbox
totalTokenSupply: 21104656
tokenSymbol: SUNS
NFTs:
  - nftName: UNIK
    individual: "19"
    organization: "4"
    network: "9"
activeDelegates: 23
lastBlockUrl: https://explorer.uns.network/block/52328
```
### `cryptoaccount:create`

#### Introduction
With <uns/> CLI you can create your <uns/> crypto account using `cryptoaccount:create` command.

#### Parameters
- `-f --format` (optional): Specify how to format the output [json|yaml]. Default to Json.

Some [global parameters](#global-parameters) may apply to this command.

#### Usage

```bash
$ uns cryptoaccount:create
```

#### Examples
As example, if you want to create a <uns/> crypto account on `sandbox` network:
```bash
$ uns cryptoaccount:create --network sandbox
```

#### Output

If the crypto account creation succeed <uns/> CLI displays your crypto account information.

```bash
$ uns cryptoaccount:create

⚠️  WARNING: this information is not saved anywhere. You need to copy and save it by your own. ⚠️

{
  "address": "S9B6HLADr1Fd6TXvEGCuNc3A9aHK9JzjYC",
  "publicKey": "03522706bd0b812faea10e92dc0400e37aba468f9df3e2f63570c11c2b66eadc22",
  "privateKey": "d7877b7867404cd35bf85ea7643ad23058f5af1262d11a389ffc429648f4abe7",
  "passphrase": "train drastic alley office seed glove cable fee firm during lottery cause",
  "network": "sandbox"
}

```

Redirect stdout to file to create json file with crypto account information:

```bash
$ uns cryptoaccount:create --network sandbox >> ./myUNSCryptoAccount.json
```

### `cryptoaccount:read`

#### Introduction
Read current data of a specified crypto account, ic. balance

#### Parameters

- `--listunik` (optional): list UNIK tokens owned by the crypto account, if any.
- `-f --format` (optional): Specify how to format the output [json|yaml]. Default to Json.
- `--chainmeta` (optional): Retrieve chain meta datas

Some [global parameters](#global-parameters) may apply to this command.

#### Arguments

- `cryptoAccountId` (required): the ID of the crypto account. Can be either the publicKey or the address of the crypto account.

#### Usage

```bash
$ uns cryptoaccount:read {crypto account identifier}] [--listunik]
```

#### Example

Display crypto account information and list of UNIK token owned by this crypto account
```bash
$ uns cryptoaccount:read SB2cknUqNNoJgQ34nbnsJwsZi5h8TNsYKe --listunik --network sandbox --format yaml
```

#### Output

```bash
$ uns cryptoaccount:read SB2cknUqNNoJgQ34nbnsJwsZi5h8TNsYKe --listunik --network sandbox --format yaml
data:
  address: SB2cknUqNNoJgQ34nbnsJwsZi5h8TNsYKe
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
  network: sandbox
  node: https://forger1.sandbox.uns.network
  date: 2019-09-19T08:46:30.000Z
  height: 10610
```
For information: Crypto account's balance is updated applying each transaction that engages the crypto account (recipient or sender). Crypto accounts are stored in-memory and are loaded by the node when it starts.

### `cryptoaccount:set-second-passphrase`

#### Introduction
Generates and adds a second passphrase on a crypto account to increase account security.

#### Parameters
Some [global parameters](#global-parameters) may apply to this command.

#### Usage
```bash
$ uns cryptoaccount:set-second-passphrase -n sandbox
```

#### Output
```bash
{
  "secondPassphrase": "cheap horn program during work suggest pencil collect travel suspect refuse process",
  "transaction": "7166f59df4d9a6af3b54eb8da460be1927c9bc19c60b9008382ea4e593fa5536",
  "confirmations": 1
}
```

### `unik:create`

#### Introduction
With <uns/> CLI you can create your own UNIK token using `unik:create` command.

#### Parameters
- `--explicitValue` (required): Chosen explicit value of your UNIK (255 characters max)
- `--type` (required): Type of your token [individual/organization/network]
- `-f --format` (optional): Specify how to format the output [json|yaml]. Default to Json.
- `--fee` : Specify a dynamic fee in satoUNS. Defaults to `100000000 satoUNS = 1 UNS`.

Some [global parameters](#global-parameters) may apply to this command.

#### Usage

```bash
$ uns unik:create --explicitValue {explicitValue} --type [individual|organization|network]
```

#### Examples
As example, if you want to create UNIK `individual` token `bob` on `sandbox` network:
```bash
$ uns unik:create --explicitValue bob --type individual --network sandbox --verbose
```

Enter your passphrase:

```bash
$ uns unik:create --explicitValue bob --type individual --network sandbox
Enter your crypto account passphrase (12 words phrase):
```

Your passphrase will be hidden, no trace in your terminal history:
```
Enter your crypto account passphrase (12 words phrase): ********************************************************************************
```


#### Output

If the creation succeed <uns/> CLI prompts yout UNIK token ID and links to see token and transaction in the <uns/> explorer.

```
Computing UNIK fingerprint... done
Creating transaction... done
Sending transaction... done
Waiting for transaction confirmation... done
UNIK nft created (1 confirmation(s)): bf21b5c7ae13a6892315aefcfa58ee1b1c470d011564f9f29c4f1941a2373956 [ https://sandbox.explorer.uns.network/#/uniks/bf21b5c7ae13a6892315aefcfa58ee1b1c470d011564f9f29c4f1941a2373956 ]
See transaction in explorer: https://sandbox.explorer.uns.network/#/transaction/a73f42691f2d076ba5a4e12c36f43ed8082cb8ae03c507d98305b8a08e6d4f03
{
  "data": {
    "id": "bf21b5c7ae13a6892315aefcfa58ee1b1c470d011564f9f29c4f1941a2373956",
    "transaction": "a73f42691f2d076ba5a4e12c36f43ed8082cb8ae03c507d98305b8a08e6d4f03",
    "confirmations": 1
  }
}

```

### `unik:read`

#### Introduction
Read current data of a specified UNIK token

#### Parameters

- `--unikid` (required): the ID of the UNIK token
- `-f --format` (optional): Specify how to format the output [json|yaml]. Default to Json.
- `--chainmeta` (optional): Retrieve chain meta datas


Some [global parameters](#global-parameters) may apply to this command.

#### Usage

```bash
$ uns unik:read --unikid {UNIK token id}
```

#### Example

Display UNIK informations
```bash
$ uns unik:read --unikid 2145a1e84e8a54d066dbc535388898c56dae5d95e2c46a8c2e735dd3db97c03f --network sandbox -f yaml
```

#### Output

```bash
$ uns unik:read --unikid 2145a1e84e8a54d066dbc535388898c56dae5d95e2c46a8c2e735dd3db97c03f --network sandbox -f yaml
data:
  id: 2145a1e84e8a54d066dbc535388898c56dae5d95e2c46a8c2e735dd3db97c03f
  ownerAddress: SB2cknUqNNoJgQ34nbnsJwsZi5h8TNsYKe
  creationBlock: "15218398688380119048"
  creationTransaction: 3831b7abdf68388c4f66663f6e655de996816e53314f1afe94a05f3da79f8d5e
  creationDate: 2019-09-19T06:53:48.000Z
  properties:
    - type: "1"
chainmeta:
  network: sandbox
  node: https://forger1.sandbox.uns.network
  date: 2019-09-19T09:02:00.000Z
  height: 10726

```

### `properties:set`

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
$ uns properties:set --unikid {UNIK token id} --properties "{key1}:{value1}" "{key2}:{value2}" --network sandbox
```

#### Example

Add property `key/value` to UNIK `2145a1e84e8a54d066dbc535388898c56dae5d95e2c46a8c2e735dd3db97c03f`
```bash
$ uns properties:set --unikid 2145a1e84e8a54d066dbc535388898c56dae5d95e2c46a8c2e735dd3db97c03f --network sandbox --properties "key:value" --passphrase "train drastic alley office seed glove cable fee firm during lottery cause" -f yaml
```

#### Output

```bash
$ uns properties:set --unikid 2145a1e84e8a54d066dbc535388898c56dae5d95e2c46a8c2e735dd3db97c03f --network sandbox --properties "key:value" --passphrase "train drastic alley office seed glove cable fee firm during lottery cause" -f yaml

unikid:  2145a1e84e8a54d066dbc535388898c56dae5d95e2c46a8c2e735dd3db97c03f
transaction:  5cb8c18b817f793eee58f4351426c2fe865d065d95667fcc8b23d8319afc0920
confirmations:  1

```

##### Related commands
- [properties:unset](#properties:unset)

### `properties:unset`

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
$ uns properties:unset --unikid {UNIK token id} -k prop1 -k prop2 --network sandbox
```

#### Example

Remove property `key/value` to UNIK `2145a1e84e8a54d066dbc535388898c56dae5d95e2c46a8c2e735dd3db97c03f`
```bash
$ uns properties:unset --unikid 2145a1e84e8a54d066dbc535388898c56dae5d95e2c46a8c2e735dd3db97c03f --network sandbox -k key --passphrase "train drastic alley office seed glove cable fee firm during lottery cause" -f yaml
```

#### Output

```bash
$ uns properties:unset --unikid 2145a1e84e8a54d066dbc535388898c56dae5d95e2c46a8c2e735dd3db97c03f --network sandbox -k key --passphrase "train drastic alley office seed glove cable fee firm during lottery cause" -f yaml

unikid:  2145a1e84e8a54d066dbc535388898c56dae5d95e2c46a8c2e735dd3db97c03f
transaction:  5cb8c18b817f793eee58f4351426c2fe865d065d95667fcc8b23d8319afc0920
confirmations:  1

```
##### Related commands
- [properties:set](#properties:set)

### `properties:list`

#### Introduction
Get properties of UNIK token. The command will fail if the minimum number of confirmations has not been reached yet.

#### Parameters

- `--unikid` (required): The UNIK token on which to get the properties.
- `--confirmed` (optional): Minimum number of confirmation since the last update of the UNIK required to return the value. Default value is 3
- `-f --format` (optional): Specify how to format the output [json|yaml|table|raw]. Default to Json.


Some [global parameters](#global-parameters) may apply to this command.

#### Usage

```bash
uns properties:list --unikid {UNIK token id}
```

#### Examples

##### Success example

Display UNIK properties
```bash
$ uns properties:list --unikid 2145a1e84e8a54d066dbc535388898c56dae5d95e2c46a8c2e735dd3db97c03f --network sandbox
```

##### Success output example

```bash
$ uns properties:list --unikid 2145a1e84e8a54d066dbc535388898c56dae5d95e2c46a8c2e735dd3db97c03f --network sandbox -f yaml
unikid: 2145a1e84e8a54d066dbc535388898c56dae5d95e2c46a8c2e735dd3db97c03f
properties:
  - type: "1"
confirmations: 217
```

##### Failing example

Display UNIK properties with at least 300 confirmations since the last UNIK token update
```bash
uns properties:list --unikid 2145a1e84e8a54d066dbc535388898c56dae5d95e2c46a8c2e735dd3db97c03f --network sandbox --confirmed 300
```

##### Failing output example

CLI throws error because of the actual number of confirmations of the last transaction that have updated UNIK token is lower than expected.
```bash
$ uns properties:list --unikid 2145a1e84e8a54d066dbc535388898c56dae5d95e2c46a8c2e735dd3db97c03f --network sandbox --confirmed 300
›   Error: [properties:list] Not enough confirmations (expected: 300, actual: 217)
```

### `properties:get`

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
$ uns properties:get --unikid {UNIK token id} -k {propertyKey} -n sandbox
```

#### Examples

##### Success example

Display UNIK property phone
```bash
$ uns properties:get --unikid 2145a1e84e8a54d066dbc535388898c56dae5d95e2c46a8c2e735dd3db97c03f -n sandbox -k "phone"
```

##### Success output example

```bash
$ uns properties:get --unikid 2145a1e84e8a54d066dbc535388898c56dae5d95e2c46a8c2e735dd3db97c03f -n sandbox -k "phone" -f yaml
unikid: 2145a1e84e8a54d066dbc535388898c56dae5d95e2c46a8c2e735dd3db97c03f
property: phone
value: +33606060606
confirmations: 833
```

### `resolve`

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
$ uns resolve --network sandbox "@unik:individual:bob?phone"
```

#### Examples

Resolve `@bob` `address` property in raw format:
```bash
$ uns resolve --network sandbox -f raw "@unik:individual:bob?address"

42 quai Malakoff, 44000 Nantes
```

Alternative syntaxes:
```bash
$ uns resolve --network sandbox -f raw "bob?address"
$ uns resolve --network sandbox -f raw "@bob?address"
$ uns resolve --network sandbox -f raw "@unik:bob?address"
```


### `unik:disclose`

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
$ uns unik:disclose -n sandbox --unikid {UNIK token id} -e {explicit values}
```

#### Examples

##### Success example

Disclose two explicit values: bob and b0b
```bash
uns unik:disclose -n sandbox --unikid 2145a1e84e8a54d066dbc535388898c56dae5d95e2c46a8c2e735dd3db97c03f -e bob bOb
```

##### Success output example

```bash
$ uns unik:disclose -n sandbox --unikid 2145a1e84e8a54d066dbc535388898c56dae5d95e2c46a8c2e735dd3db97c03f -e bob bOb -f yaml

Disclosing a @unik-name to the network can't be cancelled nor revoked. Your ID will be disclosed forever. Do you confirm the disclose demand? [y/n]: y
data:
  transaction: adf4e1d845c82b2cffe63b5e438869fcea384439ab913885697726894a99c75b
  confirmations: 1
```


### `unik:is-disclosed`

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
$ uns unik:is-disclosed -n sandbox {UNIK token id}
```

#### Examples

##### Success example

Check UNIK explicit value disclose status
```bash
$ uns unik:is-disclosed -n sandbox 2145a1e84e8a54d066dbc535388898c56dae5d95e2c46a8c2e735dd3db97c03f
```

##### Success output example

```bash
$ uns unik:is-disclosed -n sandbox 2145a1e84e8a54d066dbc535388898c56dae5d95e2c46a8c2e735dd3db97c03f -f yaml

unikid: 2145a1e84e8a54d066dbc535388898c56dae5d95e2c46a8c2e735dd3db97c03f
isDisclosed: true
confirmations: 833
```


### `send`

#### Introduction
Send owned UNS protocol tokens to another crypto account.

#### Arguments
- `AMOUNT` (required):  The quantity of UNS tokens to send to the recipient.

#### Parameters

- `--to` (required): The recipient address, public key or @unik-name (warning: @unik-name must be surrounded with double quotes).
- `--no-check`: Allow sending tokens to an address that do not exists on chain yet.
- `--fees-included`: Specify that the fees must be deducted from the amount. By default the fees are paid on top.
- `--passphrase`: The passphrase of the owner of unik. If you do not enter a passphrase you will be prompted for it.
- `--secondPassphrase`: The second crypto account passphrase. If you have created a second passphrase on your crypto account, you have to enter it.
- `--fee`: Specify a dynamic fee in UNSat. Defaults to 100000000 satoUNS = 1 UNS.

Some [global parameters](#global-parameters) may apply to this command.

#### Usage

```bash
$ uns send 10.42 --to S59pZ7fH6vtk23mADnbpqyhfMiJzpdixws --network sandbox
```

```bash
$ uns send 10.42 --to "@bob" --network sandbox
```

#### Examples

##### Output example

```bash
$ uns send 10.42 --to S59pZ7fH6vtk23mADnbpqyhfMiJzpdixws --network sandbox
Enter your crypto account passphrase (12 words phrase): *************************************************************************

{
  transaction: 3996912796307dae3009bc1cb3e4b681a3e34a427d563711115799252715179f
  confirmations: 3
}
```
