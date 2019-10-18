---
home: false
title: UNS Cheat Sheet 
pageClass: cheatsheet-pageclass
---

# Command Line Interface (CLI)

| CLI | standard flags | Rewards | description | last update |
| - | - | - | - | - |
| [version](cli.html#version) | | | Display version of the CLI | 0.5.0 |
| **Network** |
| [status](cli.html#status) | -h -n -v | | Display uns.network blockchain status | 0.5.0 |
| list-nodes | -h -n -v | | List current uns.network blockchain nodes | to come |
| **Wallet** |
| [create-wallet](cli.html#create-wallet) | -h -n -v -f | | Create a UNS wallet | 0.5.0 |
| [read-wallet](cli.html#read-wallet) | -h -n -v -f -m | | Read current data of a specified wallet, eg. balance | 0.5.0 |
| get-wallet-address | -h -n -v -f -m | | Get public address for a specified UNIK or for a passphrase | to come |
| **UNS protocol Token** |
| send | -h -n -v -f |  YES | Send UNS tokens to another public address | to come |
| **UNIK NFT tokens** |
| [create-unik](cli.html#create-unik) | -h -n -v -f | YES | Create a UNIK Token | 0.5.0 |
| transfer-unik | -h -n -v -f | YES | Transfer a UNIK Token to another owner | to come |
| [read-unik](cli.html#read-unik) | -h -n -v -f -m | | Read UNIK Token data | to come |
| [set-properties](cli.html#set-properties) | -h -n -v -f | YES | Set (add or update) properties of a UNIK Token | 0.5.0 |
| [get-properties](cli.html#get-properties) | -h -n -v -f -m | | Get properties of a UNIK token | 0.5.0 |
| get-property-value | -h -n -v -f -m | | Get the value of a specified property for a specified UNIK | to come |
| disclose-explicit-values | -h -n -v -f | YES | Disclose @unik-names related to a UNIK | to come |
| stach-explicit-value | -h -n -v -f | YES | Stach @unik-names related to a UNIK | to come |
| is-disclosed | -h -n -v -f -m | | Return if a @unik-name is disclosed or not | to come |
| **Decentralized Identifier** |
| [did-resolve](cli.html#did-resolve) | -h -n -v -f | | Resolve a decentralized Identifier |

Add or Update your CLI to the latest version : `>yarn global [add|upgrade] @uns/uns-cli`  
Getting help for a specific _command_ : `>uns command --help`

## Standard command flags

`-h --help`: (optional) Command help  
`-n --network`: (required) Network on which to run the command [devnet or local] (local is for development only)  
`-v --verbose`: (optional) Output more details on logs  
`-f --format`: (optional) Specify how to format the output [json|table|yaml|raw]. See command help to know supported format.  
`-m --chainmeta`: (optional) Output chain meta data related to the read itself."

## APIs

| API | Rewards |
| - | - | 
| **Wallet** |
| [/wallets/{id}](api.html#retrieve-a-wallet) _&rightarrow; read wallet info and UNS balance_ |
| [/wallets/{id}/uniks](api.html#retrieve-tokens-from-wallet) _&rightarrow; list UNIKs owned by a specific wallet._ |
| **UNS protocol Token** |
| /transactions _&rightarrow; list all transactions on chain_ |
| [/transactions/{id}](api.html#retrieve-a-transaction) _&rightarrow;list transactions for a specific UNIK_ |
| **UNIK NFT tokens** |
| [/uniks/{unikid}](api.html#get-unik-details) |
| /uniks/{unikid}/transactions |
| [/uniks/{unikid}/properties](api.html#get-unik-properties) | 
| [/uniks/{unikid}/properties/{propertyKey}](api.html#get-specific-unik-property) |
| [/uniks](api.html#list-minted-unik) _&rightarrow; list minted UNIKs_  |

## Transaction Types

| Type | Transaction |
| - | - |
| 0 | Transfer UNS |
| 1 | Second Signature Registration
| 2 | Delegate Registration
| 3 | Vote
| 4 | Multi Signature Registration
| 5 | IPFS
| 6 | Timelock Transfer
| 7 | Multi Payment
| 9 | Delegate Resignation
||
| 10 | NFT Transfer
| 11 | NFT Update
| 12 | NFT Mint

## Types and categories of UNIK

Types &rightarrow; { 1 | **individual** }, { 2 | **organization** }, { 3 | **network** }

| type | # | Category | pattern |
| - | - | - | - |
| individual | 0x101 / 257 | Latin 1 | Latin charset of SafeTypo, 1 chars long |
| individual | 0x102 / 258 | Latin 2 | Latin charset of SafeTypo, 2 chars long |
| individual | 0x103 / 259 | Latin 3 | Latin charset of SafeTypo, 3 chars long |
| individual | 0x104 / 260 | Latin Tiny | Latin charset of SafeTypo, 4 to 5 chars long |
| individual | 0x105 / 261 | Latin Short | Latin charset of SafeTypo, 6 to 9 chars long |
| individual | 0x106 / 262 | Latin Standard | Latin charset of SafeTypo, 10 to 14 chars long |
| individual | 0x107 / 263 | Latin Long | Latin charset of SafeTypo, 15 chars long and more  |
| individual | 0x110 / 272 | Only numbers | SafeTypo numbers |
| individual | 0x111 / 273 | Latin Single char | greater than 1 char long and a suite of similar latin chars |
| organization | 0x201 | Standard Latin | Latin charset of SafeTypo |
| network | 0x301 | Standard Latin | Latin charset of SafeTypo |

