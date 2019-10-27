---
home: false
title: "uns.network APIs"
---

# <uns>uns.network</uns> APIs

[[TOC]]

## UNIK token APIs

Non-fungible token management is one of our main features.
To understand this functionality and get technical details, you can read our [proposal](https://github.com/ArkEcosystem/AIPs/issues/70) to Ark community.
You can try this API through our official [node](https://forger1.devnet.uns.network).

*:warning: there is an [issue](https://github.com/ArkEcosystem/core/issues/2111#issuecomment-513434755) with pagination plugin used by Ark in v2.3. So pagination meta properties are broken. Do not base on `meta.pageCount` and `meta.totalCount` of json result.*

### List minted UNIK

Get an overview of all minted non-fungible tokens of uns.network.

For each token you get its id and the current wallet address owning it.

Due to the large number of minted tokens, a request returns a finite number of tokens based on your query.

#### Endpoint

```HTTP
GET /api/v2/uniks
```

#### Query Parameters

| Name  | Type | Description                                   | Required |
| :---- | :--: | :-------------------------------------------- | :------: |
| page  | int  | The number of the page that will be returned. |   :x:    |
| limit | int  | The number of resources per page.             |   :x:    |

#### Examples

```sh
curl https://forger1.devnet.uns.network/api/v2/uniks
```

```json
{
    "meta":{
        "count":4,
        "pageCount":2,
        "totalCount":104,
        "next":"/api/v2/uniks?page=2&limit=100",
        "previous":null,
        "self":"/api/v2/uniks?page=1&limit=100",
        "first":"/api/v2/uniks?page=1&limit=100",
        "last":"/api/v2/uniks?page=2&limit=100"
    },
    "data":[
        {"id":"641f85b721569fef4c4d1458b47ad12de97d3c432e5d95f3cdc8a53becc69a78","ownerId":"DQYXg6vydVD83ZStQTBY5mv3CfHZc7oZbW"},
        {"id":"bacc8096cd1a5850bf7d02f77132d2b2414824b1f4a3464c63366f269ee79b02","ownerId":"DED5QJc5HocAe69noQxw4jYqHuJJN9KdDi"},
        {"id":"16dc368a89b428b2485484313ba67a3912ca03f2b2b42429174a4f8b3dc84e44","ownerId":"DB2cknUqNNoJgQ34nbnsJwsZi5h8TNsYKe"},
        {"id":"76db9d8300b3e37540b2f8baaa0aca5b01cd5b9653ad0b10086c1c42b7d6c493","ownerId":"DB2cknUqNNoJgQ34nbnsJwsZi5h8TNsYKe"}
    ]
}
```

### Get UNIK details

Get more information about a UNIK with a known identifier.

For now you can get its owner address, the first transaction (UNIK creation) and the last transaction that modifies the UNIK state.

API retrieves chain meta-datas (`chainmeta`) corresponding to current block height and timestamp to allow verifing data integrity between API calls.

#### Endpoint

```HTTP
GET /api/v2/uniks/{id}
```

#### Path Parameters

| Name  | Type    | Description                                    | Required |
| :---- | :-----: | :--------------------------------------------- | :------: |
| id    | string  | Identifier of UNIK wearing queried property    |   ✅     |

#### Examples

```sh
curl https://forger1.devnet.uns.network/api/v2/uniks/76db9d8300b3e37540b2f8baaa0aca5b01cd5b9653ad0b10086c1c42b7d6c493
```

```json
{
    "data":{
        "id":"76db9d8300b3e37540b2f8baaa0aca5b01cd5b9653ad0b10086c1c42b7d6c493",
        "ownerId":"DB2cknUqNNoJgQ34nbnsJwsZi5h8TNsYKe",
        "transactions": {
          "first": {
            "id": "30a671b90f834cf81a368a36cf0e93a4a33a0dd2fd100bd3a9bd84ecc6bad1c2"
         },
          "last": {
            "id": "30a671b90f834cf81a368a36cf0e93a4a33a0dd2fd100bd3a9bd84ecc6bad1c2"
          }
        }
    },
    "chainmeta": {
        "height": 757,
        "timestamp": {
            "epoch": 76809124,
            "unix": 1566906724,
            "human": "2019-08-27T11:52:04.000Z"
        }
    }
}
```

### Get UNIK properties

One of the differences between a protocol token and a non-fungible token is that you can attach properties on it. 
And sometimes, you want to read these properties. 

API retrieves chain meta-datas (`chainmeta`) corresponding to current block height and timestamp to allow verifing data integrity between API calls.

#### Endpoint

```HTTP
GET /api/v2/uniks/{id}/properties
```

#### Path Parameters

| Name  | Type    | Description                                    | Required |
| :---- | :-----: | :--------------------------------------------- | :------: |
| id    | string  | Identifier of UNIK wearing queried property    |   ✅     |

#### Query Parameters

| Name  | Type | Description                                   | Required |
| :---- | :--: | :-------------------------------------------- | :------: |
| page  | int  | The number of the page that will be returned. |   :x:    |
| limit | int  | The number of resources per page.             |   :x:    |

#### Examples

```sh
curl https://forger1.devnet.uns.network/api/v2/uniks/86869b8e0a12cd46d96b96816e03fa80aa8d54d0b546160a8b580df9be5bdcce/properties
```

```json
{
    "meta":{
        "count":1,
        "pageCount":1,
        "totalCount":1,
        "next":null,
        "previous":null,
        "self":"/api/v2/uniks/86869b8e0a12cd46d96b96816e03fa80aa8d54d0b546160a8b580df9be5bdcce/properties?page=1&limit=100",
        "first":"/api/v2/uniks/86869b8e0a12cd46d96b96816e03fa80aa8d54d0b546160a8b580df9be5bdcce/properties?page=1&limit=100",
        "last":"/api/v2/uniks/86869b8e0a12cd46d96b96816e03fa80aa8d54d0b546160a8b580df9be5bdcce/properties?page=1&limit=100"
    },
    "data":[
        {"shape":"rectangle"}
    ],
    "chainmeta": {
        "height": 757,
        "timestamp": {
            "epoch": 76809124,
            "unix": 1566906724,
            "human": "2019-08-27T11:52:04.000Z"
        }
    }
}
```

### Get specific UNIK property

You can access quickly to a specific UNIK property with this endpoint: get its value and some meta-data.

#### Endpoint

```HTTP
GET /api/v2/uniks/{id}/properties/{key}
```

#### Path Parameters

| Name  | Type    | Description                                    | Required |
| :---- | :-----: | :--------------------------------------------- | :------: |
| id    | string  | Identifier of UNIK wearing queried property    |   ✅     |
| key   | string  | Property key you want to read                  |   ✅     |

#### Examples

```sh
curl https://forger1.devnet.uns.network/api/v2/uniks/86869b8e0a12cd46d96b96816e03fa80aa8d54d0b546160a8b580df9be5bdcce/properties/type
```

```json
{
    "data":"2"
}
```

## Public Wallets API

Wallets are addresses containing, or previously having contained UNS tokens. A wallet's public key may be unknown to the network, in that case, it is referred to as a `cold wallet`.

### Retrieve a Wallet

Specific wallets can be obtained either by their `publicKey` or `address`.

API retrieves chain meta-datas (`chainmeta`) corresponding to current block height and timestamp to allow verifing data integrity between API calls.

#### Endpoint

```
GET /api/v2/wallets/{id}
```

#### Path Parameters

| Name |  Type  | Description                                   |      Required      |
| :--- | :----: | :-------------------------------------------- | :----------------: |
| id   | string | The identifier of the wallet to be retrieved. | :white_check_mark: |

#### Response

```json
{
  "data": {
    "address": "D9YiyRYMBS2ofzqkufjrkB9nHofWgJLM7f",
    "publicKey": "0306950dae7158103814e3828b1ab97a87dbb3680db1b4c6998b8208865b2f9db7",
    "username": "bongoninja",
    "secondPublicKey": null,
    "balance": 12534670000000,
    "isDelegate": true
  },
    "chainmeta": {
        "height": 757,
        "timestamp": {
            "epoch": 76809124,
            "unix": 1566906724,
            "human": "2019-08-27T11:52:04.000Z"
        }
    }
}
```


### Retrieve tokens from wallet

Retrive UNIKs from a specific wallet.
Specific wallet can be obtained either by their `publicKey` or `address`.

#### Endpoint

```
GET /api/v2/wallets/{id}/uniks
```

#### Path Parameters

| Name |  Type  | Description                                   |      Required      |
| :--- | :----: | :-------------------------------------------- | :----------------: |
| id   | string | `publicKey` or `address` of the wallet. | :white_check_mark: |

#### Response

```json
{
  "data": [
    {
      "id": "aeb0bdfb42d9cd042cf65db167fa87e13166e76453e8150f0cdabf8a85fd814f",
      "ownerId": "AHysG9CfbXvHtxev9eziTK8WUbnFKKLFR8"
    },
    {
      "id": "6ab8c6714a9f82b4b3430eef226e004526ff9028a278081e400fe81a2a0486e1",
      "ownerId": "AHysG9CfbXvHtxev9eziTK8WUbnFKKLFR8"
    }
  ],
}
```

## Public Transactions API

Transactions are signed, serialized payloads; batched together to form a [block](/api/public/v2/blocks.md).

### Retrieve a Transaction

Obtaining a transaction by ID does not require advanced logic; as the API does not return a serialized transaction, but a nicer [DTO](https://en.wikipedia.org/wiki/Data_transfer_object).

API retrieves chain meta-datas (`chainmeta`) corresponding to current block height and timestamp to allow verifing data integrity between API calls.

#### Endpoint

```
GET /api/v2/transactions/{id}
```

#### Path Parameters

| Name |  Type  | Description                                        |      Required      |
| :--- | :----: | :------------------------------------------------- | :----------------: |
| id   | string | The identifier of the transaction to be retrieved. | :white_check_mark: |

#### Response

```json
{
  "data": {
    "id": "5c6ce775447a5acd22050d72e2615392494953bb1fb6287e9ffb3c33eaeb79aa",
    "blockId": "4271682877946294396",
    "type": 0,
    "amount": 32106400000,
    "fee": 10000000,
    "sender": "DDiTHZ4RETZhGxcyAi1VruCXZKxBFqXMeh",
    "recipient": "DQnQNoJuNCvpjYhxL7fsnGepHBqrumgsyP",
    "signature": "3044022047c39f6f45a46a87f91ca867f9551dbebf0035adcfcbdc1370222c7a1517fc0002206fb5ecc10460e0352a8b626a508e2fcc76e39e490b0a2581dd772ebc8079696e",
    "asset": {
      "nft": {
        "unik": {
          "tokenId": "a1f1121145c2dda819d5bc3017e77cc747f847fdcc84e0397b40b633a049a8d4",
          "properties": {
            "⚠": "👌",
            "🌈": "💪",
            "color": "blue"
          }
        }
      }
    },
    "confirmations": 1928,
    "timestamp": {
      "epoch": 32794053,
      "unix": 1522895253,
      "human": "2018-04-05T02:27:33Z"
    }
  },
    "chainmeta": {
        "height": 757,
        "timestamp": {
            "epoch": 76809124,
            "unix": 1566906724,
            "human": "2019-08-27T11:52:04.000Z"
        }
    }
}
```









## UNS token APIs

UNS token APIs are not specific to the uns.network, they're coming from ARK.IO standards. As a consequence all ARK.IO API are working on the uns.network.

For example the API `/blockain` used to retrieve latest block and supply in the chain
```
curl --header "API-Version: 2" https://api.ark.io/api/blockchain
```

works also on the uns.network

```
curl --header "API-Version: 2" https://forger1.devnet.uns.network/api/blockchain
```

```json
{
  "data": {
    "block": {
      "height": 91519,
      "id": "8711914249079958250"
    } ,
    "supply": 2118303800000000
  }
}
```

The full documentation of [ARK APIs is available here](https://arkdoc-23.docs.uns.network/api).
