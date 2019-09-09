---
home: false
title: "UNS SDK Overview"
---

# UNS SDK overview

Using UNS SDKs, developers can employ the programming language of their choice to build applications utilizing the UNS blockchain.

The functionality of UNS API is split into two SDKs: Client and Cryptography.

**Client** SDKs help developers fetch information from the UNS blockchain about its current state: which delegates are currently forging, what transactions are associated with a given wallet, and so on.

**Cryptography** SDKs, by contrast, assist developers in working with transactions: signing, serializing, deserializing, etc.

If your application doesn't involve sending transactions, you can most likely build your application using the Client SDK alone. Otherwise, applications looking to leverage the full spectrum of UNS APIs should make use of both Client and Cryptography SDKs.

## Client SDK

Client SDK is a brand new product specifically developed for UNS network. 

SDK is compatible with node projects and browsers. 

### How to install

- In node : `yarn add @uns/ts-sdk`
- In browser : `<script src="https://cdn.jsdelivr.net/npm/@uns/ts-sdk/dist/index.umd.min.js"></script>`

### How to use

To have a smooth and simple developer experience, SDK connects and query a UNS node. 
To replace this default behavior you can pass URL of your own UNS node as a parameter of `UNSClient`.

#### Get on-chain value UNIK types

```typescript
import { UNIKTypes } from "@uns/ts-sdk"

const unikTypeIndividual:number = UNIKTypes.INDIVIDUAL
```

Full list of available types [here](https://docs.uns.network/uns-tokens/#existing-unik-properties)

#### Get status of UNS node

```typescript
import { UNSClient, NodeStatus } from "@uns/ts-sdk"

const nodeStatus:NodeStatus = await new UNSClient().node.status()
const { synced, now, blocksCount } = nodeStatus;

```

## Cryptography SDK

Inherited from Ark crypto package, UNS crypto package is available as a typescript library, published on npm : [`@uns/crypto`](https://www.npmjs.com/package/@uns/crypto)

It can do more than Ark package : 

- mint UNIKs 
- add, delete or update UNIK properties
- transfer UNIKs to another wallet
- transfer UNS
- create UNS wallets
- ...

For the full list of available features, please look at [ark documentation](https://arkdoc-23.docs.uns.network/sdk/cryptography/usage.html).

UNS specific features are not documented yet. Feel free to explore and [contribute](https://github.com/unik-name/docs.uns.network) 😊


