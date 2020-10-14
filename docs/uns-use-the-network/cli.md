---
home: false
title: "Using uns.network with the CLI"
sidebarDepth: 3
---

# uns.network CLI

<uns/> provides an interactive command line interface to create and manage your crypto accounts, your UNS protocol tokens and your UNIK NFT tokens.

The <uns/> Command Line Interface is expected to work on recent Linux, MacOS or Windows 10 installations.

[[toc]]

## Download and installation

| <h1><vp-icon name="windows-brands" size="2em" /><br/>Windows</h1> | <h1><vp-icon name="apple-brands" size="2em" /><br/>macOS</h1> | <h1><vp-icon name="linux-brands" size="2em" /><br/>Linux</h1> |
|:-----------------------------------:|:----------------------------------------------------------------------:|:---------------------------------------:|
| <h4>![GitHub version](https://badge.fury.io/gh/unik-name%2Funs-cli.svg)</h4><h3>[Download the 64-bit installer](https://unikname-cli-assets.s3.fr-par.scw.cloud/uns-x64.exe)</h3>        | <h4>![GitHub version](https://badge.fury.io/gh/unik-name%2Funs-cli.svg)</h4><h3>[Download the tarball*](https://unikname-cli-assets.s3.fr-par.scw.cloud/uns-darwin-x64.tar.gz)</h3>      | <h4>![GitHub version](https://badge.fury.io/gh/unik-name%2Funs-cli.svg)</h4><h3>[Download the 64-bit tarball*](https://unikname-cli-assets.s3.fr-par.scw.cloud/uns-linux-x64.tar.gz)</h3>or<h3>[Download the ARMv7+ tarball*](https://unikname-cli-assets.s3.fr-par.scw.cloud/uns-linux-arm.tar.gz)</h3>      |

*: you should then add `{TARBALL_EXTRACTION_FOLDER}/bin` into your `PATH` environment variable in order to be able to run `uns` command.

You can also [install from NPM/Yarn](cli/alternate-installation.html#installation-from-npm-yarn) for all platforms.

### Staying up to date

The uns.network CLI keeps itself up to date automatically, unless you used npm/yarn install.

When you run a uns.network command, a background process checks for the latest available version of the CLI. If a new version is found, it’s downloaded and your CLI is updated locally.

You can also force updating of your uns.network CLI with the [`update` command](#update).

When installed via npm/yarn, please remove it before installing it again (`npm remove -g @uns/cli` or `yarn global remove @uns/cli`).

## Configuration

### Global parameters

You can use the following command line options to override the default configuration settings for a single command:

- `--verbose` (optional): Additional logs

- `-n, --network` (required): choose the network to interact with.

  Possible values: `sandbox` or `livenet`

::: tip
Avoid repetition of `--network` flag using the `UNS_NETWORK={network}` environment variable (or `%UNS_NETWORK%` for Windows shell).


Example:
```shell
$ UNS_NETWORK=livenet uns status
```

- `--node` (optional): URL of custom node representing blockchain endpoint

::: tip
Avoid repetition of `--node` flag using the `UNS_NODE={custom node url}` environment variable (or `%UNS_NODE%` for Windows shell).


Example:
```shell
$ UNS_NODE="http://custom.node.example:4103" uns status
```

- `--nftfactory` (optional): URL of custom forge factory services endpoint

::: tip
Avoid repetition of `--nftfactory` flag using the `UNS_SERVICES={custom service url}` environment variable (or `%UNS_SERVICES%` for Windows shell).


Example:
```shell
$ UNS_NODE="http://custom.node.example:4103" uns status
```

::: tip
You can also export environments variable in your `~/.bashrc` file (or equivalent for your current shell) to make it permanent.

:::
### Write global parameters

For every new data added in the chain, you may wait for the write operation to be confirmed. Once the transaction data is written in a block, the data get one confirmation for every new block added in the chain. By default we wait for one confirmation in the next 3 blocks. With the await-confirmation flag, you can choose to extend the maximum waiting time or set it to 0 which corresponds to an asynchronous operation.

- `--await-confirmation` (optional): Maximum number of blocks to wait to get one confirmation of the transaction. Default to 3. 0 for immediate return.

- `--passphrase` : The passphrase of the owner of UNIK. If you do not enter a passphrase you will be prompted for it.

- `--second-passphrase`: The second crypto account passphrase. If you have [set up a second passphrase on your crypto-account](#cryptoaccount-set-second-passphrase), you can specify it with this flag.

- `--sender-account`: The @unikname or unik ID of the transaction sender. If `--sender-account` is provided, a check is performed to verify if the passphrase match the unik's account.

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
C:\> setx HTTP_PROXY=http://username:password@proxy.example.com:1234
C:\> setx HTTPS_PROXY=http://username:password@proxy.example.com:5678
```
:::

::::

**Note**

The <uns/> CLI doesn't support NTLM proxies. If you use an NTLM or Kerberos protocol proxy, you might be able to connect through an authentication proxy like [Cntlm](http://cntlm.sourceforge.net/).

### Autocompletion for Bash and Zsh

UNS CLI Autocomplete helps you complete command and flag names when you press the tab key.
CLI Autocomplete completes all of the commands in the UNS CLI and will automatically support new commands as they are added.
You can also complete values for some flags and args—including apps, pipelines and config vars.

#### Installing Autocomplete

```shell
$ uns autocomplete
```

:::warning
For CLI Autocomplete to work correctly, you must be on the latest version of the UNS CLI.
:::

The specific instructions you’ll receive depend on whether you are using bash or zsh. After you finish setup, Autocomplete is ready to use with the tab key.

We are not planning to support shells besides bash and zsh at this time.

#### Command name completion

You can start writing a command and then press tab to see the different possibilities for completing it. You can match against all commands that match a given prefix.

```shell
$ uns <TAB>
autocomplete           cryptoaccount:create   help                   properties:list        send...
```

For example, pressing tab after typing `uns res` autocompletes to `uns resolve`.

In bash shells, autocompletion triggers by pressing tab twice successively.

#### Flag name completion

Most CLI commands make use of flags to provide additional input. Flags are prefaced with two dashes (--), such as (--app). Some commands have many different possible flags. You can view all available flags for each command by typing -- and then the tab key. You can match against all flag names that match a given prefix.

```shell
$ uns resolve --
--chainmeta  --confirmed  --help       --network    --node       --verbose
```

For example, pressing tab after typing `uns resolve -c` autocompletes to `uns resolve -chainmeta`.

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
  -n, --network=sandbox|livenet  (required) Network used to create UNIK nft token
  -v, --verbose               Detailed logs

EXAMPLE
  $ uns cryptoaccount:create --network [sandbox|livenet] --format {json|yaml} --verbose
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
To display <uns/> blockchain status

```bash
$ uns status --format yaml
```

#### Output
Command displays some blockchain information

```bash
$ uns status --format yaml
height: 52328
network: livenet
totalTokenSupply: 21104656
tokenSymbol: UNS
NFTs:
  - nftName: UNIK
    individual: "19"
    organization: "4"
    network: "9"
activeDelegates: 23
lastBlockUrl: https://explorer.uns.network/block/52328
```


### `resolve`

#### Introduction
Resolve a Decentralized IDentifier (DID).

#### Arguments
- `DID` (required):  The Decentralized IDentifier to resolve, with [the format of a DID](/uns-use-the-network/cheatsheet.html#did-decentralized-identifier). See examples below for more information.

::: warning
DID must be surrounded by double quotes (e.g. `"@bob"`)
:::

#### Parameters

- `--confirmed` (optional): Minimum number of confirmation since the last update of the UNIK required to return the value. Default value is 3
- `-f --format` (optional): Specify how to format the output [json|yaml|raw]. Default to JSON.

Some [global parameters](#global-parameters) may apply to this command.


#### Usage

```bash
$ uns resolve "@unik:individual:bob?usr/phone"
```

#### Examples

Resolve `@bob` `address` property in raw format:
```bash
$ uns resolve -f raw "@unik:individual:bob?usr/address"

42 quai Malakoff, 44000 Nantes
```

Alternative syntaxes:
```bash
$ uns resolve -f raw "bob?usr/address"
$ uns resolve -f raw "@bob?usr/address"
$ uns resolve -f raw "@unik:bob?usr/address"
```

### `send`

#### Introduction
Send owned UNS protocol tokens to another crypto account.

#### Arguments
- `AMOUNT` (required):  The quantity of UNS tokens to send to the recipient.
- `TARGET` (required):  The recipient address, public key, @unikname or unik ID with [the format of a DID](/uns-use-the-network/cheatsheet.html#did-decentralized-identifier). See examples below for more information.

#### Parameters

- `--no-check`: Allow sending tokens to an address that do not exists on chain yet.
- `--fees-included`: Specify that the fees must be deducted from the amount. By default the fees are paid on top.
- `--fee`: Specify a dynamic fee in UNSat. Defaults to 100000000 satoUNS = 1 UNS.
- `--text`: Publicly motivate your tokens sending. This reason will be written on chain ​​forever.
- `--[no]-text-check`: Check if user knows that this text will be readable publicly forever. (--no-text-check to bypass this check).

Some [global parameters](#global-parameters) may apply to this command.

#### Usage

```bash
$ uns send 10.42 U59pZ7fH6vtk23mADnbpqyhfMiJzpdixws
```

```bash
$ uns send 10.42 "@bob"
```

#### Examples

##### Output example

```bash
$ uns send 10.42 U59pZ7fH6vtk23mADnbpqyhfMiJzpdixws
Enter your crypto account passphrase (12 words phrase): *************************************************************************

{
  transaction: 3996912796307dae3009bc1cb3e4b681a3e34a427d563711115799252715179f
  confirmations: 3
}
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
As example, if you want to create a <uns/> crypto account:
```bash
$ uns cryptoaccount:create
```

#### Output

If the crypto account creation succeed <uns/> CLI displays your crypto account information.

```bash
$ uns cryptoaccount:create

⚠️  WARNING: this information is not saved anywhere. You need to copy and save it by your own. ⚠️

{
  "address": "U9B6HLADr1Fd6TXvEGCuNc3A9aHK9JzjYC",
  "publicKey": "03522706bd0b812faea10e92dc0400e37aba468f9df3e2f63570c11c2b66eadc22",
  "privateKey": "d7877b7867404cd35bf85ea7643ad23058f5af1262d11a389ffc429648f4abe7",
  "passphrase": "train drastic alley office seed glove cable fee firm during lottery cause",
  "network": "livenet"
}

```

Redirect stdout to file to create json file with crypto account information:

```bash
$ uns cryptoaccount:create >> ./myUNSCryptoAccount.json
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

- `TARGET` (required):  The crypto account address, public key or a @unikname owned by the account with [the format of a DID](/uns-use-the-network/cheatsheet.html#did-decentralized-identifier). See examples below for more information.

#### Usage

```bash
$ uns cryptoaccount:read {TARGET} [--listunik]
```
```bash
$ uns cryptoaccount:read @unikname [--listunik]
```
#### Example

Display crypto account information and list of UNIK token owned by this crypto account
```bash
$ uns cryptoaccount:read UB2cknUqNNoJgQ34nbnsJwsZi5h8TNsYKe --listunik --format yaml
```

#### Output

```bash
$ uns cryptoaccount:read UB2cknUqNNoJgQ34nbnsJwsZi5h8TNsYKe --listunik --format yaml
data:
  address: UB2cknUqNNoJgQ34nbnsJwsZi5h8TNsYKe
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
  network: livenet
  node: https://api.uns.network
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
$ uns cryptoaccount:set-second-passphrase
```

#### Output
```bash
{
  "secondPassphrase": "cheap horn program during work suggest pencil collect travel suspect refuse process",
  "transaction": "7166f59df4d9a6af3b54eb8da460be1927c9bc19c60b9008382ea4e593fa5536",
  "confirmations": 1
}
```

### `unik:create` <Badge text="updated 4.0.0"/>

#### Introduction
With <uns/> CLI you can create your own UNIK token using `unik:create` command.

#### Parameters
- `--explicitValue` (required): Chosen explicit value of your UNIK (255 characters max)
- `--type` (required): Type of your token [individual/organization/network]
- `-f --format` (optional): Specify how to format the output [json|yaml]. Default to Json.
- `--fee`: Specify a dynamic fee in satoUNS. Defaults to `100000000 satoUNS = 1 UNS`.
- `--unik-voucher`: Use a UNIK voucher to create this UNIK
- `--coupon`: Use a COUPON to create this UNIK <Badge text="4.0.0"/>

Some [global parameters](#global-parameters) may apply to this command.

#### Usage

```bash
$ uns unik:create --explicitValue {explicitValue} --type [individual|organization|network] --coupon {coupon}
```

#### Examples

##### Create a UNIK for the individual @unikname `bob`

As example, if you want to create UNIK `individual` token `bob`:
```bash
$ uns unik:create --explicitValue bob --type individual --verbose
```

Enter your passphrase:

```bash
$ uns unik:create --explicitValue bob --type individual
Enter your crypto account passphrase (12 words phrase):
```

Your passphrase will be hidden, no trace in your terminal history:
```
Enter your crypto account passphrase (12 words phrase): ********************************************************************************
```

##### Create a UNIK for the organization @unikname `MyCompany`

```bash
$ unik:create --explicitValue "MyCompany" --type organization
```

#### Create a UNIK for the organization @unikname `MyCompany` with a UNIK voucher

```bash
$ unik:create --explicitValue "MyCompany" --type organization --unik-voucher "eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NksifQ.eyJpYXQiOjE1OTEyOTk5OTEsImV4cCI6MTU5MTMwMTc5MSwianRpIjoiMU9aVmYzRnlueC1lY3VrR2d6TUJCIiwiYXVkIjoiZGlkOnVuaWs6dW5pZDpmYmZiZTdkOWU4YzAwNWYxYTk5MzdkOWZkMTdjNGVmN2RhMmZmODAzN2E3MWU2Y2I3ODQ3YjMwMmVkYTRkMDhWs6dW5pZDo1YWViNzU1NzM5ZGRhMDM4MDk1MzI4OTY2Y2M3Mzc1YzNlZGM4NWM0NTVlNTY2NTlhZjEwNjg4ZDIwZWFlYzk4IiwiYXV0aG9yaXphdGlvbnMiOnsic2VydmljZXMiOlsxMl19LCJpc3MiOiJkaWQ6dW5pazp1bmlkOmZiZmJlN2Q5ZThjMDA1ZjFhOTkzN2Q5ZmQxN2M0ZWY3ZGEyZmY4MDM3YTcxZTZjYjc4NDdiMzAyZWRhNGQwOGEifQ.3wkJYO11wQXZtaOp_r3CTxXR77prpqsFcZvFdjOGQF3rjp7toR2vTNLi6mxwN8EUndxM3pSEKLg-W2maSInvww"
```


#### Output

If the creation succeed <uns/> CLI prompts your UNIK token ID and links to see token and transaction in the <uns/> explorer.

```
Computing UNIK fingerprint... done
Creating transaction... done
Sending transaction... done
Waiting for transaction confirmation... done
UNIK nft created (1 confirmation(s)): bf21b5c7ae13a6892315aefcfa58ee1b1c470d011564f9f29c4f1941a2373956 [ https://explorer.uns.network/#/uniks/bf21b5c7ae13a6892315aefcfa58ee1b1c470d011564f9f29c4f1941a2373956 ]
See transaction in explorer: https://explorer.uns.network/#/transaction/a73f42691f2d076ba5a4e12c36f43ed8082cb8ae03c507d98305b8a08e6d4f03
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

- `-f --format` (optional): Specify how to format the output [json|yaml]. Default to Json.
- `--chainmeta` (optional): Retrieve chain meta datas


Some [global parameters](#global-parameters) may apply to this command.

#### Arguments

- `TARGET` (required): @unikname token ID or the @unikname with [the format of a DID](/uns-use-the-network/cheatsheet.html#did-decentralized-identifier). See examples below for more information.

#### Usage

```bash
$ uns unik:read {TARGET}
```

#### Example

Display UNIK informations
```bash
$ uns unik:read @bob -f yaml
```

#### Output

```bash
$ uns unik:read @bob -f yaml
data:
  id: 2145a1e84e8a54d066dbc535388898c56dae5d95e2c46a8c2e735dd3db97c03f
  creationBlock: "15218398688380119048"
  creationTransaction: 3831b7abdf68388c4f66663f6e655de996816e53314f1afe94a05f3da79f8d5e
  creationDate: 2019-09-19T06:53:48.000Z
  owner:
    address: UB2cknUqNNoJgQ34nbnsJwsZi5h8TNsYKe
    balance: 109
    token: UNS
  properties:
    - type: "1"
chainmeta:
  network: livenet
  node: https://api.uns.network
  date: 2019-09-19T09:02:00.000Z
  height: 10726

```

### `unik:disclose`

#### Introduction
Make public one or more explicit values of your UNIK Name. This value will appear in "explicitValue" property of your UNIK. Duplicate explicit values will be removed.
In case of several explicitValues disclosed, the first value of "explicitValues" property will be used as default.
If a @unikname is provided, --explicitValue flag can be omitted, the @unikname will be taken as explicit value.

#### Parameters

- `-e, --explicitValue`: Explicit values to disclose. Must match the UNIK Name of the token.
- `--fee` : Specify a dynamic fee in satoUNS. Defaults to `100000000 satoUNS = 1 UNS`.
- `-f, --format` `{json|yaml, json}`: Specify how to format the output [json|yaml]. Default to Json.
- `--no-check`: Allow @unikname disclose without user confirmation.

Some [global parameters](#global-parameters) may apply to this command.

#### Arguments
- `TARGET` (required): @unikname token ID or the @unikname with [the format of a DID](/uns-use-the-network/cheatsheet.html#did-decentralized-identifier). See examples below for more information.

#### Usage

```bash
$ uns unik:disclose {TARGET} -e {explicit values}
```

#### Examples

##### Success example

Disclose @unikname @bob
```bash
uns unik:disclose @bob
```

##### Success output example

```bash
$ uns unik:disclose @bob -f yaml

Disclosing a @unikname to the network can't be cancelled nor revoked. Your ID will be disclosed forever. Do you confirm the disclose demand? [y/n]: y
data:
  transaction: adf4e1d845c82b2cffe63b5e438869fcea384439ab913885697726894a99c75b
  confirmations: 1
```


### `unik:is-disclosed`

#### Introduction
Check if UNIK has one or more disclosed explicit value.

#### Arguments
- `TARGET` (required): @unikname token ID or the @unikname with [the format of a DID](/uns-use-the-network/cheatsheet.html#did-decentralized-identifier). See examples below for more information.

#### Parameters

- `--confirmed` (optional): Minimum number of confirmation since the last update of the UNIK required to return the value. Default value is 3.
- `-m, --chainmeta` (optional): Output chain meta data related to the data itself.
- `-f, --format` `{json|yaml|raw, json}`: Specify how to format the output [json|yaml|raw]. Default to Json.

Some [global parameters](#global-parameters) may apply to this command.

#### Usage

```bash
$ uns unik:is-disclosed {TARGET}
```

#### Examples

##### Success example

Check UNIK explicit value disclose status
```bash
$ uns unik:is-disclosed @bob
```

##### Success output example

```bash
$ uns unik:is-disclosed @bob -f yaml

unikid: 2145a1e84e8a54d066dbc535388898c56dae5d95e2c46a8c2e735dd3db97c03f
isDisclosed: true
confirmations: 833
```

### `unik:everlasting` <Badge text="added 4.2.0" />

#### Introduction
Buy Everlasting status for a @unikname.

#### Arguments
- `TARGET` (required): @unikname token ID or the @unikname with [the format of a DID](/uns-use-the-network/cheatsheet.html#did-decentralized-identifier). See examples below for more information.

#### Parameters
- `-f, --format` `{json|yaml, json}`: Specify how to format the output [json|yaml]. Default to Json.

Some [global parameters](#global-parameters) may apply to this command.

#### Usage

```bash
$ uns unik:everlasting {TARGET}
```

#### Examples

##### Success example

Claim everlasting status for `@bob`
```bash
$ uns unik:everlasting @bob
```

##### Success output example

```bash
$ uns unik:everlasting @bob -f yaml

transaction: d6046fd481d30796e7014d745af62cb6d54c43ec6073ecd93a534c2477455ce6
confirmations: 833
```

### `properties:set`

#### Introduction
Set (add or update) properties of UNIK token.

Users properties keys must start with `usr/`. Keys without this prefix are reserved for internal properties.

You cannot register more than 3 user properties by default.

#### Parameters

- `-k --key` (required): Key of property to set as UNIK property. See [allowed property key format](/uns-use-the-network/cheatsheet.html#property-keys-of-unik)
- `-V --value` (required): Value of property to set as UNIK property. See [allowed property value format](/uns-use-the-network/cheatsheet.html#property-values-of-unik)
- `--fee` : Specify a dynamic fee in satoUNS. Defaults to `100000000 satoUNS = 1 UNS`.
- `-f --format` (optional): Specify how to format the output [json|yaml]. Default to Json.


Some [global parameters](#global-parameters) may apply to this command.

#### Arguments
- `TARGET` (required): @unikname token ID or the @unikname with [the format of a DID](/uns-use-the-network/cheatsheet.html#did-decentralized-identifier). See examples below for more information.

#### Usage

```bash
$ uns properties:set {TARGET} --key "{key1}" --value "{value1}" --key "{key2}" --value "{value2}"
```

#### Example

Add property `key/value` to UNIK `@bob`

```bash
$ uns properties:set @bob --key "key" --value "value" -f yaml

unikid:  2145a1e84e8a54d066dbc535388898c56dae5d95e2c46a8c2e735dd3db97c03f
transaction:  5cb8c18b817f793eee58f4351426c2fe865d065d95667fcc8b23d8319afc0920
confirmations:  1
```

##### Related commands
- [properties:unset](#properties:unset)

### `properties:unset`

#### Introduction
Unset properties of UNIK token.

The only properties that can be unset are those whose key starts with `usr/`.

#### Parameters

- `-k --propertyKey`, Key of the property to unset. (multiple occurrences)
- `--fee` : Specify a dynamic fee in satoUNS. Defaults to `100000000 satoUNS = 1 UNS`.
- `-f --format` (optional): Specify how to format the output [json|yaml]. Default to Json.

Some [global parameters](#global-parameters) may apply to this command.

#### Arguments
- `TARGET` (required): @unikname token ID or the @unikname with [the format of a DID](/uns-use-the-network/cheatsheet.html#did-decentralized-identifier). See examples below for more information.

#### Usage

```bash
$ uns properties:unset {TARGET} -k prop1 -k prop2
```

#### Example

Remove property `key/value` of UNIK `@bob`
```bash
$ uns properties:unset @bob -k key -f yaml

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

- `--confirmed` (optional): Minimum number of confirmation since the last update of the UNIK required to return the value. Default value is 3
- `-f --format` (optional): Specify how to format the output [json|yaml|table|raw]. Default to Json.


Some [global parameters](#global-parameters) may apply to this command.

#### Arguments
- `TARGET` (required): @unikname token ID or the @unikname with [the format of a DID](/uns-use-the-network/cheatsheet.html#did-decentralized-identifier). See examples below for more information.

#### Usage

```bash
uns properties:list {TARGET}
```

#### Examples

##### Success example

Display UNIK properties
```bash
$ uns properties:list @bob
```

##### Success output example

```bash
$ uns properties:list @bob -f yaml
unikid: 2145a1e84e8a54d066dbc535388898c56dae5d95e2c46a8c2e735dd3db97c03f
properties:
  - type: "1"
confirmations: 217
```

##### Failing example

Display UNIK properties with at least 300 confirmations since the last UNIK token update
```bash
uns properties:list @bob --confirmed 300
```

##### Failing output example

CLI throws error because of the actual number of confirmations of the last transaction that have updated UNIK token is lower than expected.
```bash
$ uns properties:list @bob --confirmed 300
›   Error: [properties:list] Not enough confirmations (expected: 300, actual: 217)
```

### `properties:get`

#### Introduction
Get the value of a specific property of a UNIK token.

#### Parameters

- `-k, --propertyKey` (required): the key of the property for which we query the value. See [allowed property key format](/uns-use-the-network/cheatsheet.html#property-keys-of-unik)
- `--confirmed` (optional): Minimum number of confirmation since the last update of the UNIK required to return the value. Default value is 3.
- `-m, --chainmeta` (optional): Output chain meta data related to the data itself.
- `-f, --format` `{json|yaml|raw, json}`: Specify how to format the output [json|yaml|raw]. Default to Json.

Some [global parameters](#global-parameters) may apply to this command.

#### Arguments
- `TARGET` (required): @unikname token ID or the @unikname with [the format of a DID](/uns-use-the-network/cheatsheet.html#did-decentralized-identifier). See examples below for more information.

#### Usage

```bash
$ uns properties:get {TARGET} -k {propertyKey}
```

#### Examples

##### Success example

Display UNIK property phone
```bash
$ uns properties:get @bob -k "usr/phone"
```

##### Success output example

```bash
$ uns properties:get @bob -k "usr/phone" -f yaml
unikid: 2145a1e84e8a54d066dbc535388898c56dae5d95e2c46a8c2e735dd3db97c03f
property: phone
value: +33606060606
confirmations: 833
```

### `properties:register` <Badge text="added 4.2.0"/>

#### Introduction
Initialize ownership verification process of a unik property (for example a domain name).
This command generates a verification package `uns-verification.txt` which will be used in the next steps of the verification process with the [`properties:verify`](#properties-verify) command.

**This package expires after 72h**.

#### Parameters


- `-V, --value` (required): Value of the Unik property to verify.
- `-t, --type` {url}: type of unik property to register. Default to "url".

Some [global parameters](#global-parameters) may apply to this command.

#### Arguments
- `TARGET` (required): @unikname token ID or the @unikname with [the format of a DID](/uns-use-the-network/cheatsheet.html#did-decentralized-identifier). See examples below for more information.

#### Usage

```bash
$ uns properties:register {TARGET} -V {domainUrl}
```

#### Examples

Register `www.mycompany.com` site for the organization @unikname `@2:MyCompany` (or `@organization:MyCompany`):

```bash
$ uns properties:register @2:MyCompany -V "www.mycompany.com"
{
  "data": {
    "type": "url",
    "value": "www.mycompany.com",
    "filename": "uns-verification.txt",
    "verificationKey": "TOlzvZCLq2wufJOg7RjNE",
    "expirationDate": "2020-08-15T12:39:31.000Z"
  }
}
```

The `verificationKey` will be used in the next steps of the verification process with the [`properties:verify`](#properties-verify) command.

### `properties:verify` <Badge text="added 4.2.0"/>

#### Introduction
Finalize ownership verification process of a unik property.
For domain name verification, three channels are available: html, file and whitelist.
Prior using html and file channels, a verification package should be generated using [`properties:register`](#properties-register) command.

#### Parameters

- `-c, --url-channel` (required) `{html, file, whitelist}` Channel to use for verification
- `--url-name` A name you can choose to identify this verified URL. It must be `a-zA-Z0-9_-` chars (as an example, see [the verification `Verified/URL/log-in` of the @unikname `@organization:unikname`](https://explorer.uns.network/uniks/f6018b8dcddbc9f8675577419c3493ffbc961876062655be43fce108e52408c0))

Some [global parameters](#global-parameters) may apply to this command.

#### Arguments
- `TARGET` (required): @unikname token ID or the @unikname with [the format of a DID](/uns-use-the-network/cheatsheet.html#did-decentralized-identifier).See examples below for more information.

#### Usage

```bash
$ uns properties:verify {TARGET} --url-channel {html, file, whitelist}
```

#### Examples

Detailed usages of this command are [described in the Unikname Help Center](https://docs.unikname.com/3-unikname-connect/howto-get-unikname-trust-certificate-organization).

### `delegate:vote` <Badge text="breaking 4.0.0" type="warning" />

#### Introduction

This command allows you to vote for a delegate with his @unikname to get him elected.
Votes are restricted to the same UNIK type (individual, organization) delegate as yours.
Voter must have the LifeCycle status "Alive".

#### Arguments
- `TARGET` (required): the unikid or the @unikname with [the format of a DID](/uns-use-the-network/cheatsheet.html#did-decentralized-identifier) of the delegate to vote for. See examples below for more information.

#### Parameters

Some [global parameters](#global-parameters) may apply to this command.

#### Usage

```bash
$ uns delegate:vote {TARGET}
```

#### Examples

Vote for the delegate whose @unikname id (or unikid) is `2145a1e37e8a54d066dbc535388898c56dae5d95e2c46a8c2e735dd3db97c03f`

```bash
$ uns delegate:vote 2145a1e37e8a54d066dbc535388898c56dae5d95e2c46a8c2e735dd3db97c03f
```

Vote for the individual delegate whose @unikname is `@Bob`

```bash
$ uns delegate:vote "@Bob"
```

Vote for the organization delegate whose @unikname is `@MyCompany`

```bash
$ uns delegate:vote "@organization:MyCompany"
```

### `delegate:unvote`

#### Introduction

This command allows you to revoke your vote given to a delegate with his @unikname.

#### Arguments
- `TARGET` (required): the unikid or the @unikname with [the format of a DID](/uns-use-the-network/cheatsheet.html#did-decentralized-identifier) of the delegate to unvote from. See examples below for more information.

#### Parameters

Some [global parameters](#global-parameters) may apply to this command.

#### Usage

```bash
$ uns delegate:unvote {TARGET}
```

#### Examples

Unvote for the delegate whose @unikname id (or unikid) is `2145a1e37e8a54d066dbc535388898c56dae5d95e2c46a8c2e735dd3db97c03f`

```bash
$ uns delegate:unvote 2145a1e37e8a54d066dbc535388898c56dae5d95e2c46a8c2e735dd3db97c03f
```

Unvote for the individual delegate whose @unikname is `@Bob`

```bash
$ uns delegate:unvote "@Bob"
```

Unvote for the organization delegate whose @unikname is `@MyCompany`

```bash
$ uns delegate:unvote "@organization:MyCompany"
```

### `delegate:register`

#### Introduction

This command allows you to register a UNIK as delegate with your Unikname.
Before registering you must have publicly disclosed your Unikname (see [unik:disclose command](#unik:disclose))
To apply as delegate, the Crypto-account of the Unik candidate is limited to a single Unik (i.e delegate user should own a maximum of 1 Unik in crypto-account).

#### Arguments
- `TARGET` (required): the unikid or the @unikname with [the format of a DID](/uns-use-the-network/cheatsheet.html#did-decentralized-identifier) to register as delegate. See examples below for more information.

#### Parameters

Some [global parameters](#global-parameters) may apply to this command.

#### Usage

```bash
$ uns delegate:register {TARGET}
```

#### Examples

Register individual `@Bob` as delegate

```bash
$ uns delegate:register "@Bob"
```

Register organization `@MyCompany` as delegate

```bash
$ uns delegate:register "@organization:MyCompany"
```

### `delegate:resign`

#### Introduction

This command allows you to resign delegate status of your UNIK.

#### Arguments
- `TARGET` (required): the unikid or the @unikname with [the format of a DID](/uns-use-the-network/cheatsheet.html#did-decentralized-identifier) to unregister as delegate. See examples below for more information.

#### Parameters

Some [global parameters](#global-parameters) may apply to this command.

#### Usage

```bash
$ uns delegate:resign {TARGET}
```

#### Examples

Resignation of delegate `@Bob`

```bash
$ uns delegate:resign "@Bob"
```

### `badges:claim`

#### Introduction

This command allows you to claim following badges for your UNIK:
- Pioneer: "Innovator" before 1500 UNIKs or "Early adopter" till 150.000 UNIKs on chain when claiming the badge.

#### Parameters

- `-b, --badge` (required): one of the followings badges identifier: [pioneer]
#### Arguments
- `ID` (required):  The unikid or the @unikname with [the format of a DID](/uns-use-the-network/cheatsheet.html#did-decentralized-identifier). See examples below for more information.

#### Parameters

Some [global parameters](#global-parameters) may apply to this command.

#### Usage

```bash
$ uns badges:claim {ID Unikname} -b {badge name}
```

#### Examples

Claim Pioneer badge

```bash
$ uns badges:claim "@Bob" -b pioneer
```

### `update`

#### Introduction

This command allows you to update the uns.network CLI.

#### Usage

```bash
$ uns update
```
