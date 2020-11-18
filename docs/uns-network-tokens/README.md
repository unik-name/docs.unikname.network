---
home: false
title: "uns.network Tokens"
---

# The uns.network Tokens

The <brand name="uns"/> blockchain runs with two tokens linked together with smart-contracts:

* [UNIK Token:](#the-unik-token) a NFT Token representing @unikname Identifiers.
* [UNS Token:](#the-uns-token) the protocol token used to secure the network and to rewards network players and users. This is the “fuel” of the network.

<hseparator/>

## The UNIK Token

### UNIK Token is a NFT Token

Every @unikname ID is secured by the blockchain. Once chosen, a smart-contract mints each human-readable identifier into the blockchain as a NFT Token. We name it the `UNIK Token`. 

:::tip There is as many UNIK tokens in the chain as @uniknames IDs that exist.
:::

UNIK tokens belong to the owners of Unikname crypto-account. The private keys enabling access to UNIKs are the private keys of its related crypto-account.

> The UNIK token is based on Ark Core technology, and more precisely on its NFT specialized fork, available in the Github's project [Ark Core NFT](https://github.com/spacelephantlabs/ark-core_non-fungible-token).
Ark Core NFT specifications are discussed in the standard _Ark Improvement Process_ and are available in their dedicated [AIPs issue](https://github.com/ArkEcosystem/AIPs/issues/70).

### UNIK Token Remarkable Properties

:sparkles: **Unique:** The owner of a UNIK has the guarantee that his identifier is unique and that no one can get the same within the same namespace. Every @unikname is represented by a single cryptographic hash code locked as a UNIK token within the <brand name="uns"/> blockchain.

:sparkles: **Immutable:** Once created and sealed into the blockchain, the name can’t be neither altered, nor changed. 

:sparkles: **Obfuscated:** The internal string representing the @unikname identifier is obfuscated within the <brand name="uns"/> blockchain. Thus, it can neither be read nor listed. Only people who knows it can make request on it.

:sparkles: **Self-Sovereign Asset:** Self-sovereign identifier is a concept where the individual or the entity has ultimate control over their identifier and is the final arbiter of who can access and use their data related to it. Every UNIK token has its ownership rules coded within the <brand name="uns"/> blockchain smart contract. Only UNIK token owner has control over it.

:sparkles: **Created and obtained for Eternity:** Every UNIK token is minted and sealed into the <brand name="uns"/> blockchain. No subscription plan required, nobody can delete it.

### UNIK Token Issuance

Only accredited nodes can mint UNIK in the chain. These nodes belongs to Network Players owning a `NFT Factory Licence`, they're called `NFT Factory Nodes`.

<hseparator/>

## The UNS Token

### UNS token is a protocol token

UNS token is a protocol token required to run the <brand name="uns"/>. Executing every network operation requires UNS Tokens: 
- to mint and sealed new @uniknames ID, new UNIK
- to update existing UNIK, eg. transfer ownership
- to update UNIK registry
- to unlock features or to extend UNIK capabilities
- to vote for Network Delegates
- ...

Most operations require to use a UNIK in addition to spending UNS.

### UNS Token Issuance

Supply of UNS utility token is dynamic and follows network adoption.

UNS Tokens are issued in two ways: 
1. **UNS Tokens are minted by the protocol itself every 8 seconds** for validation of block of transactions.
1. **UNS Tokens are minted by the protocol for every UNIK Issuance and activation.** This design makes the token less prone to speculation and more stable.

The genesis block have supplied $UNS 10M to enable start-up operations and to be used as a network reserve. These tokens have been allocated to wallet owned by the first network player : Unikname itself.

### Token name across networks

To prevent confusion and fatal errors, tokens are named differently between networks:
- LIVENET: **UNS**, for the live network
- SANDBOX : **SUNS**, for the the development network
