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


In some cases, functions returns chain meta datas as `ChainMeta`. These meta datas represent the informations about the block used to read chain informations.

```
"height": 165009, // Block number
"timestamp": { // Date of reading
  "epoch": 2081533,
  "unix": 1570796439,
  "human": "2019-10-11T12:20:39.000Z"
}
```

#### Get on-chain value UNIK types

```typescript
import { UNIKTypes } from "@uns/ts-sdk"

const unikTypeIndividual:number = UNIKTypes.INDIVIDUAL
```

Full list of available types [here](https://docs.uns.network/uns-tokens/#existing-unik-properties)

#### Get status of UNS node

```typescript
import { UNSClient, NodeStatus, Network } from "@uns/ts-sdk"

const nodeStatus:NodeStatus = (await new UNSClient(Network.devnet).node.status()).data
const { synced, now, blocksCount } = nodeStatus;

```

#### Get UNIK token

```typescript
import { UNSClient, Unik, ResponseWithChainMeta, ChainMeta, Network } from "@uns/ts-sdk"

const response: ResponseWithChainMeta<Unik> = await new UNSClient(Network.devnet).unik.get("unikId");
const unik: Unik = response.data;
const meta: ChainMeta = response.chainmeta;

```

#### Get UNIK property value

```typescript
import { getPropertyValue, ResponseWithChainMeta, PropertyValue, ChainMeta, Network } from "@uns/ts-sdk"

const options = {
  withChainmeta: true; // Retrieve ChainMeta object [default: true]
  confirmations: true; // Retrieve number of confirmations since last transaction on UNIK token [default: true]
  disableHtmlEscape: true; // Disable HTML escaping [default: false]
}

const response: ResponseWithChainMeta<PropertyValue> | PropertyValue = await getPropertyValue("unikId", "propertyKey", Network.devnet, options);

if( response instanceof PropertyValue ){
  const value: PropertyValue = response as PropertyValue;
} else {
  const resp: ResponseWithChainMeta<PropertyValue> = response as ResponseWithChainMeta<PropertyValue>
  const value: PropertyValue = resp.data
  const meta: ChainMeta = resp.chainmeta;
  const confirmations: number = resp.confirmations;
}

```

This function is protected by HTML escaping. When you use `getPropertyValue` function, the result is "HTML escaped" by default.

***Do not use `eval` function with a property retrieved by the chain. Javascript can be easily injected!***

#### Resolve Decentralized Identifier (DID)

```typescript
import { didResolve, DidResolution, Unik, Network } from "@uns/ts-sdk"
const unikType = "individual";
const unikName = "unikName";
const response = await didResolve(`@unik:${unikType}/${unikName}`, Network.devnet) as DidResolution<Unik>;
const { id, ownerId } = response.data;

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


