---
home: false
title: "UNIK Badges"
tags: 
  - badge
  - governance
  - network player
  - role
  - pioneer
  - label
  - xp
  - sponsorship
---

# Understanding Badges <Badge text="Key Concept"/>

Each @unikname is assigned trust badges. They provide information on the qualities of each UNIK DID and its involvement in the network.

![jack-sparrow-idcard-header](./images/did-nft-unik-unikname-jack-sparrow-header-badges.png)
<small>_example of badges displayed in the header section of @jack-sparrow_</small>

Badges take the form of On-Chain properties and are always Disclosed, regardless of the visibility of the UNIK.

The badges are accessible with the Resolver within the path `/badges/`.

There are two types of badges, singular ones and enumerated ones, belonging to families.

The badges are returned by the APIs, the CLI, and are visible on the chain explorer and on My Unikname App.

The badges can be [claimed with the CLI](/cli.html#badges-claim) and with My Unikname App.

## Why Badges?

**First of all Badges contribute to build trust in the network**. They give indications on the quality and legitimacy of each existing @unikname ID within the network.

**In this spirit, Badges is a means to unlock Unikname features**.

## Badge List

![badges-governance](./images/badges-governance.png)

Badge Type: `boolean`

Property key `/Badges/Security/`

| Name | How to get it | Description | Scope | 
|-|-|-|-|
| **Second Passphrase** | forging the second passphrase transaction  | The UNIK is attached to a wallet with a second passphrase | all types | 
| **Multisig** | forging the multisig transaction | The UNIK is owned by a multisig cryptoaccount | all types | 


---
![badges-np-roles](./images/badges-np-roles.png)

Badge Type: `boolean`

Property key `/Badges/NP/`

| Name | How to get it | Description | Scope | 
|-|-|-|-|
| **Delegate** | Forging the `delegate registration transaction` | The cryptoaccount of the UNIK is registered as Delegate | all types |
| **Storage Provider** | Getting licence* | The UNIK is related to a Network Service Provider having a `Storage Provider Licence`. | all types |
| **NFT Factory** | Getting licence* | The UNIK is related to a Network Service Provider having a `NFT Factory licence`. | network only |
| **URL Checker** | Getting licence* | The UNIK is related to a Network Service Provider having a `URL Checker licence`. | network only |
| **AUTH Services** | Getting licence* | The UNIK is related to a Network Service Provider having a `Auth Service licence`. | network only |

_* see [Network Service Providers](./service-provider)_

---
![badges-pioneer](./images/badges-pioneer.png)

Badge Type: `enumerate`

Property key `/Badges/Pioneer/`

| Name | How to get it | Description | Scope
|-|-|-|-|
| **Innovator** | Claim | Badge claimed before the end of 2020. | individual only
| **Early Adopter** | Claim | 2020 is ended and there is less than 150 000 UNIK created in the chain when the badge is claimed. | individual only

---
![badges-label](./images/badges-label.png)

Badge Type: `boolean`

Property key `/Badges/Label/`

| Name | How to get it | Description | scope 
|-|-|-|-|-|
| **Verified** | my-unikname App, with a coupon | The @unikname owner has provided contact information that have been verified | Organization only 

---
![badges-xp](./images/badges-xp.png)

Badge Type: `enumerate`

Property key `/Badges/XPLevel/`

| Name | How to get it | Description | Scope |
|-|-|-|-|-|
| **Newcomer** | Minting the UNIK | The UNIK has just been minted. | individual only
| **Beginner** | Claim within the App | - the @unikname has been created for 10000 blocks ago or more (~24h) <br/> + lifecycle statuts activated <br/> + local authentication activity  | individual only
| **Advanced** | Claim within the App | - has made 10 transactions and 10 contributions | individual only
| **Leader** | Claim within the App | - Has setup personnal properties <br/> - has contributed to each Network Service Providers <br/> - get the promoter badge | individual only
| **Maven** | Claim within the App |  - has made at least one connection<br/> - Leader since 12 months.<br/> Has voted for a delegate. | individual only

---
![badges-sponsorship](./images/badges-sponsorship.png)

Type: `enumerate`

Property key `/Badges/Sponsorship/`

| Name | How to get it  | Description | Scope |
|-|-|-|-|-|
| **Promoter** | via sponsoring features | has invited 7 other user | individual only
| **Supporter** | via sponsoring features | has invited 7 users who created their @unikname becoming alive | individual only
| **Networker** | via sponsoring features | has invited 49 users who created their @unikname  becoming alive | individual only
| **Ambassador** | via sponsoring features | have been sponsor for 350 @unikname becoming alive | individual only
