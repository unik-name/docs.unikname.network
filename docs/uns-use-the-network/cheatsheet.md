---
home: false
title: uns.network Cheat Sheet 
pageClass: cheatsheet-pageclass
---

# Command Line Interface (CLI)

| CLI | Rewards | description | CLI version |
| - | - | - | - |
| [version](cli.html#version) | | Display version of the CLI | 2.2.0 |
| [status](cli.html#status) | | Display <uns/> blockchain status | 2.2.0 |
| [send](cli.html#send) |  YES | Send UNS tokens to another public address | 2.2.0 |
| [resolve](cli.html#resolve) | | Resolve a decentralized Identifier |
| [cryptoaccount:create](cli.html#cryptoaccount-create) | | Create a <uns/> crypto-account | 2.2.0 |
| [cryptoaccount:read](cli.html#cryptoaccount-read) | | Read current data of a specified cryptoaccount, eg. balance | 2.2.0 |
| [cryptoaccount:address](cli.html#cryptoaccount-address) | | Get public address for a specified UNIK or for a passphrase | 2.2.0 |
| [unik:create](cli.html#unik-create) | YES | Create a UNIK Token | 2.2.0 |
| [unik:read](cli.html#unik-read) | | Read UNIK Token data | 2.2.0 |
| [unik:disclose](cli.html#unik-disclose) | YES | Disclose one or more explicit(s) value(s) related to a UNIK | 2.2.0 |
| [unik:is-disclosed](cli.html#unik-is-disclosed) | YES | Check if UNIK has one or more disclosed explicit value | 2.2.0 |
| [delegate:register](cli.html#delegate-register) | YES | Register a UNIK as delegate using @unikname or unikid | 2.0.0 |
| [delegate:resign](cli.html#delegate-resign) | YES | Resign delegate registration of a @unikname or unikid | 2.0.0 |
| [delegate:vote](cli.html#delegate-vote) | YES | Vote for a delegate with his @unikname or unikid | 2.0.0 |
| [delegate:unvote](cli.html#delegate-unvote) | YES | Remove vote from a delegate with his @nikname or unikid | 2.0.0 |
| [properties:get](cli.html#properties-get) | | Get the value of a specific property of a UNIK token. | 2.2.0 |
| [properties:list](cli.html#properties-list) | | List all properties of a UNIK token | 2.2.0 |

Add or Update your CLI to the latest version : `>yarn global [add|upgrade] @uns/uns-cli`  
Getting help for a specific _command_ : `>uns command --help`

## Standard command flags

`-h --help`: (optional) Command help  
`-n --network`: (required) Network on which to run the command [sandbox or local] (local is for development only)  
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
| 0 | Transfer UNS tokens |
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

## Types of UNIK

Each kind of `type` have different features, behaviors of the <uns/> and governance processes.

**Possible Values**

- `1`: UNIK for individuals identifers
- `2`: UNIK for organizations identifiers
- `3`: UNIK for networks identifiers

## Types and categories of UNIK

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

# Property keys of UNIK

Property keys format must match with the following rules:
- be alphanumeric: `a-z A-Z 0-9`
- be shorter or equals to 255 characters

# Badges of UNIK

| Badge | How get it |
| - | - |
| Badges/Security/SecondPassphrase | Set a second passphrase on your crypto-account |
| Badges/NP/Delegate | Register your @unikname as delegate |

# DID - Decentralized IDentifier

The expected format of a DID of kind "UNIK" is: `[@][unik:][type:]explicitValue[?propertyKey|?*]`.

`[...]` are the optional parts of the pattern. Each part of the pattern are described below.

## `Type`

The `type` can be one of [these values](#types-and-categories-of-unik) (numeric or letter format).

**The default value of `type` is `individual`:** `@Bob` always designates the individual DID of `Bob`. So if you want to designate the DID of `MyCompany`, you will need to add the type: `@organization:MyCompany`.

## `explicitValue`

The `explicitValue` is the usual value of your @unikname.

## `propertyKey`

The `propertyKey` part must match with [property keys format](#property-keys-of-unik).

## Examples

TODO
