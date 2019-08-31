---
home: false
title: "UNS APIs"
---

# UNS APIs

[[TOC]]

## UNIK token APIs

Non-fungible token management is one of our main features.
To understand this functionality and get technical details, you can read our [proposal](https://github.com/ArkEcosystem/AIPs/issues/70) to Ark community.
You can try this API through our official [node](https://forger1.devnet.uns.network).

*:warning: there is an [issue](https://github.com/ArkEcosystem/core/issues/2111#issuecomment-513434755) with pagination plugin used by Ark in v2.3. So pagination meta properties are broken. Do not base on `meta.pageCount` and `meta.totalCount` of json result.*

### List minted UNIK

Get an overview of all minted non-fungible tokens of UNS network.

For each token you get its id and the current wallet address owning it.

Due to the large number of minted tokens, a request returns a finite number of tokens based on your query.

#### Endpoint

```HTTP
GET /api/v2/nfts
```

#### Query Parameters

| Name  | Type | Description                                   | Required |
| :---- | :--: | :-------------------------------------------- | :------: |
| page  | int  | The number of the page that will be returned. |   :x:    |
| limit | int  | The number of resources per page.             |   :x:    |

#### Examples

```sh
curl https://forger1.devnet.uns.network/api/v2/nfts
```

```json
{
    "meta":{
        "count":4,
        "pageCount":2,
        "totalCount":104,
        "next":"/api/v2/nfts?page=2&limit=100",
        "previous":null,
        "self":"/api/v2/nfts?page=1&limit=100",
        "first":"/api/v2/nfts?page=1&limit=100",
        "last":"/api/v2/nfts?page=2&limit=100"
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

For now you can only get its owner address.

#### Endpoint

```HTTP
GET /api/v2/nfts/{id}
```

#### Path Parameters

| Name  | Type    | Description                                   | Required |
| :---- | :-----: | :-------------------------------------------- | :------: |
| id    | string  | Identifier of NFT wearing queried property    |   ✅     |

#### Examples

```sh
curl https://forger1.devnet.uns.network/api/v2/nfts/76db9d8300b3e37540b2f8baaa0aca5b01cd5b9653ad0b10086c1c42b7d6c493
```

```json
{
    "data":{
        "id":"76db9d8300b3e37540b2f8baaa0aca5b01cd5b9653ad0b10086c1c42b7d6c493",
        "ownerId":"DB2cknUqNNoJgQ34nbnsJwsZi5h8TNsYKe"
    }
}
```

### Get UNIK properties

One of the differences between a protocol token and a non-fungible token is that you can attach properties on it. 
And sometimes, you want to read these properties. 

#### Endpoint

```HTTP
GET /api/v2/nfts/{id}/properties
```

#### Path Parameters

| Name  | Type    | Description                                   | Required |
| :---- | :-----: | :-------------------------------------------- | :------: |
| id    | string  | Identifier of NFT wearing queried property    |   ✅     |

#### Query Parameters

| Name  | Type | Description                                   | Required |
| :---- | :--: | :-------------------------------------------- | :------: |
| page  | int  | The number of the page that will be returned. |   :x:    |
| limit | int  | The number of resources per page.             |   :x:    |

#### Examples

```sh
curl https://forger1.devnet.uns.network/api/v2/nfts/86869b8e0a12cd46d96b96816e03fa80aa8d54d0b546160a8b580df9be5bdcce/properties
```

```json
{
    "meta":{
        "count":1,
        "pageCount":1,
        "totalCount":1,
        "next":null,
        "previous":null,
        "self":"/api/v2/nfts/86869b8e0a12cd46d96b96816e03fa80aa8d54d0b546160a8b580df9be5bdcce/properties?page=1&limit=100",
        "first":"/api/v2/nfts/86869b8e0a12cd46d96b96816e03fa80aa8d54d0b546160a8b580df9be5bdcce/properties?page=1&limit=100",
        "last":"/api/v2/nfts/86869b8e0a12cd46d96b96816e03fa80aa8d54d0b546160a8b580df9be5bdcce/properties?page=1&limit=100"
    },
    "data":[
        {"shape":"rectangle"}
    ]
}
```

### Get specific NFT property

You can access quickly to a specific NFT property with this endpoint : get its value and some meta-data.

#### Endpoint

```HTTP
GET /api/v2/nfts/{id}/properties/{key}
```

#### Path Parameters

| Name  | Type    | Description                                   | Required |
| :---- | :-----: | :-------------------------------------------- | :------: |
| id    | string  | Identifier of NFT wearing queried property    |   ✅     |
| key   | string  | Property key you want to read                 |   ✅     |

#### Examples

```sh
curl https://forger1.devnet.uns.network/api/v2/nfts/86869b8e0a12cd46d96b96816e03fa80aa8d54d0b546160a8b580df9be5bdcce/properties/type
```

```json
{
    "data":"2"
}
```

## UNS token APIs

UNS token APIs are not specific to the UNS Network, they're coming from ARK standards. As a consequence all ARK API are working on the UNS network.

For example the API `/blockain` used to retrieve latest block and supply in the chain
```
curl --header "API-Version: 2" https://api.ark.io/api/blockchain
```

works also on the uns network

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
