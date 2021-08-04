---
home: false
title: "unikname.network Tokens"
---

# The tokens of unikname.network

The <brand name="uns"/> blockchain runs with two types of tokens:

* [UNIKNAME tokens:](#the-unikname-token) NFT representing UniknameID.
* [$UNIK tokens:](#the-unik-token) the protocol token. A fungible token used to secure the network and reward network players and users. This is the “fuel” of the network.

<br/>

## The UNIKNAME Token

<hseparator type="UNIK" size="medium"/>

### UNIKNAME tokens are NFT

UNIKNAME represents UniknameID in the blockchain. Once a user chooses their human-readable identifier, their UniknameID, it is minted into the blockchain as a NFT. We call this NFT a `UNIKNAME Token`. 

:::tip There are as many UNIKNAME tokens in the chain as UniknameID.
:::

UNIKNAME tokens are owned by Unikname crypto-accounts. Crypto-accounts are in turn controlled by the entity that possesses the associated private key (or keys). UNIKNAME are therefore owned and controlled by the private key(s) of its related crypto-account.

> The UNIKNAME token is based on Ark Core technology, and more precisely on its NFT-specialized fork, available in the Github's project [Ark Core NFT](https://github.com/spacelephantlabs/ark-core_non-fungible-token).
Ark Core NFT specifications are discussed in the standard _Ark Improvement Process_ and are available in their dedicated [AIPs issue](https://github.com/ArkEcosystem/AIPs/issues/70).

### UNIKNAME tokens remarkable properties

:sparkles: **Unique:** The owner of a UNIKNAME has the guarantee that their identifier is unique and that no one can get the same within the same namespace. Every UniknameID is represented by a single cryptographic hash code locked as a UNIKNAME token within the <brand name="uns"/> blockchain.

:sparkles: **Immutable:** When created, UniknameID are written into the blockchain. This means that they can be neither altered nor deleted.

:sparkles: **Obfuscated:** The human-readable string representing a UniknameID is not written directly in the <brand name="uns"/> blockchain. A cryptographic hash code is used instead. Thus, UniknameID are obfuscated: their human-readable representation cannot be read from the blockchain. For the same reason, UniknameID cannot be directly listed. It is necessary to know a UniknameID to make requests on it.

:sparkles: **Self-Sovereign:** Self-Sovereign Identifiers (SSI) are a concept where individuals or entities have ultimate control over their identifier. They are the final arbiter of who can access and use the data associated with it. Every UNIKNAME token has its ownership rules coded within the <brand name="uns"/> blockchain. Only the UNIKNAME token's owner has control over it.

:sparkles: **Persistence:** Every UNIKNAME token is minted and sealed into the <brand name="uns"/> blockchain. No subscription plan required, nobody can delete it. Its continued existence is independent of one single entity.

### UNIKNAME Token Issuance

Only accredited nodes can mint UNIKNAME in the chain. These nodes belong to Network Players with a `NFT Factory Licence`, they are called `NFT Factory Nodes`.

<br/>

## The $UNIK Token

<hseparator type="uns" size="medium"/>

### The $UNIK is a protocol token

The $UNIK is a protocol token required to run the <brand name="uns"/>. Every network operation requires $UNIK tokens for their execution: 
- to mint new UNIKNAME and seal the corresponding UniknameID into the chain
- to update existing UNIKNAME, eg. transfer ownership
- to update UNIKNAME registry
- to unlock features or to extend $UNIK capabilities
- to vote for Network Delegates
- ...

Most operations require the possession of a UNIKNAME in addition to spending $UNIK.

### $UNIK Token Issuance

Supply of UNIK utility token is dynamic and follows network adoption.

$UNIK Tokens are issued in two ways: 
1. **$UNIK Tokens are minted every time a new block is created.** This action happens roughly every 8 seconds. These $UNIK go to the delegate that forges the block.
1. **$UNIK Tokens are minted by the protocol for every UNIKNAME issuance and activation.** This is called the Pioneer Reward and is meant to encourage adoption.

> The Pioneer Reward will only be active during the Launch Phase of Unikname Network. The Launch Phase ist expected to end towards Q3/Q4 2021.

$UNIK 10M have been minted in the genesis block to enable start-up operations and to be used as a network reserve. These tokens have been allocated to a wallet owned by the first network player: Unikname itself.

### Token name across networks

To prevent confusion and fatal errors, tokens are named differently between networks:
- LIVENET: **UNIK**, for the live network
- SANDBOX : **SUNIK**, for the the development network
