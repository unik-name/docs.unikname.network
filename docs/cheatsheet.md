---
home: false
title: uns.network Cheat Sheet 
pageClass: cheatsheet-pageclass
---

# Command Line Interface (CLI)

| CLI | Network Costs | description | 
| - | :-: | - | :-: |
| [version](cli.html#version) | | Display version of the CLI 
| [update](cli.html#update) | | Keep the CLI up to date
| [status](cli.html#status) | | Display <brand name="uns"/> blockchain status 
| [resolve](cli.html#resolve) | | Resolve a decentralized Identifier 
| [send](cli.html#send) |  YES | Send UNS tokens to another public address 
| [cryptoaccount:create](cli.html#cryptoaccount-create) | | Create a <brand name="uns"/> crypto-account 
| [cryptoaccount:read](cli.html#cryptoaccount-read) | | Read current data of a specified cryptoaccount, eg. balance 
| [cryptoaccount:set-second-passphrase](cli.html#cryptoaccount-set-second-passphrase) | YES | Set a second passphrase for the specified cryptoaccount 
| [unik:create](cli.html#unik-create) | YES | Create a UNIK Token 
| [unik:read](cli.html#unik-read) | | Read UNIK Token data
| [unik:disclose](cli.html#unik-disclose) | YES | Disclose one or more explicit(s) value(s) related to a UNIK
| [unik:is-disclosed](cli.html#unik-is-disclosed) | YES | Check if UNIK has one or more disclosed explicit value
| [unik:everlasting](cli.html#unik-everlasting) | YES | Keep UNIK alive for eternity
| [properties:set](cli.html#properties-set) | YES | Set the value of a specific property of a UNIK
| [properties:unset](cli.html#properties-unset) | YES | Unset or clear the value of a specific property of a UNIK
| [properties:list](cli.html#properties-list) | | List all properties of a UNIK token 
| [properties:get](cli.html#properties-get) | | Get the value of a specific property of a UNIK
| [properties:register](cli.html#properties-register) | | Register a properties to verify
| [properties:verify](cli.html#properties-verify) | YES | Verify a registered properties
| [delegate:vote](cli.html#delegate-vote) | YES | Vote for a delegate with his @unikname or unikid 
| [delegate:unvote](cli.html#delegate-unvote) | YES | Remove vote from a delegate with his @nikname or unikid
| [delegate:register](cli.html#delegate-register) | YES | Register a UNIK as delegate using @unikname or unikid 
| [delegate:resign](cli.html#delegate-resign) | YES | Resign delegate registration of a @unikname or unikid
| [badges:claim](cli.html#badges-claim) | YES | Claim a badge for a specified UNIK

Add or Update your CLI to the latest version : `>yarn global [add|upgrade] @uns/uns-cli`

Getting help for a specific {command} : `>uns {command} --help`

## Standard command flags

`-h --help`: (optional) Command help  
`-n --network`: (required) Network on which to run the command [sandbox or livenet] (local is for development only)  
`-v --verbose`: (optional) Output more details on logs  
`-f --format`: (optional) Specify how to format the output [json|table|yaml|raw]. See command help to know supported format.  
`-m --chainmeta`: (optional) Output chain meta data related to the read itself."  
`--node`: (optional) URL of custom node representing blockchain endpoint (environment variable: UNS_NODE)  
`--nftfactory`: (optional): URL of custom forge factory services endpoint (environment variable: UNS_SERVICES)  
`--await-confirmation`: (optional) Maximum number of blocks to wait to get one confirmation of the transaction. Default to 3. 0 for immediate return.  
`--passphrase`: The passphrase of the owner of UNIK. If you do not enter a passphrase you will be prompted for it.  
`--second-passphrase`: The second crypto account passphrase. If you have set up a second passphrase on your crypto-account, you can specify it with this flag.  
`--sender-account`: The @unikname or unik ID of the transaction sender. If --sender-account is provided, a check is performed to verify if the passphrase match the unik's account.

## APIs

| API | 
| - | 
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

`{1|individual|2|organization|3|network}`

**The default type value is `individual`:** `@Bob` always designates the individual DID of `Bob`. So if you want to designate the DID of `MyCompany`, you will need to specify the type: e.g. `@organization:MyCompany`.

# Property keys of UNIK

Property keys format must match with the following rules:
- it must be alphanumeric: `a-z`, `A-Z`, `0-9`
- it may contains: `+ - . / _` (but no space characters at all)
- it must be shorter or equals to 255 characters

# Property values of UNIK

Property values format must match with the following rules:
- it may any UTF-8 characters
- it must be shorter or equals to 255 characters

# DID - Decentralized IDentifier

@unikname DID string format: `[@][unik:][type:]explicitValue[?propertyKey|?*]`.

# Mint @unikname services

To create @unikname, a service fee must be paid to the NFT-Factory with UNS tokens. Prices are depending of the pattern wanted.

Prices for individual patterns:

| Price (UNS) | Pattern | Description |
| -: | - | - | 
| 500 000 | **Individual - Digits - Tiny** | Only digits from Safetypo alphabet, 5 characters and less | 
| 50 000 | **Individual - Digits - Standard** | Only digits from Safetypo alphabet, between 6 and 9 characters | 
| 100 | **Individual - Digits - Long** | Only digits from Safetypo alphabet, 10 character and more | 
| 5 000 000 | **Individual - Latin Safetypo - 1** | Letters and digits from Safetypo alphabet, exactly 1 character | 
| 1 000 000 | **Individual - Latin Safetypo - 2** | Letters and digits from Safetypo alphabet, exactly 2 characters |
| 500 000 | **Individual - Latin Safetypo - 3** | Letters and digits from Safetypo alphabet, exactly 3 characters | 
| 50 000 | **Individual - Latin Safetypo - Tiny** | Letters and digits from  Safetypo alphabet, 4 or 5 characters | 
| 5 000 | **Individual - Latin Safetypo - Short** | Letters and digits from Safetypo alphabet, 6 or 7 characters | 
| 500 | **Individual - Latin Safetypo - Normal** | Letters and digits from Safetypo alphabet, between 8 and 14 characters | 
| 10 | **Individual - Latin Safetypo - Long** | Letters and digits from Safetypo alphabet, more than 15 characters | 

Prices for organization patterns:

| Price (UNS) | Pattern | Description |
| -: | - | - |
| 25 000 | **Organization - Digits** | Only digits from Safetypo	alphabet. No length restriction. |
| 25 000 | **Organization - Latin Safetypo** | Letters and digits from Safetypo alphabet. No length restriction. |

Prices for network pattern:

| Price (UNS) | Pattern | Description |
| -: | - | - |
| 1 000 000 | **Network - Digits** | Only digits from Safetypo alphabet. No length restriction. |
| 1 000 000 | **Network - Latin Safetypo** | Letters and digits from Safetypo alphabet. No length restriction. |

 
