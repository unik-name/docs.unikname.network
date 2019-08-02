# How to update UNIK properties via CLI

## Prerequisites

Ensure you have a [working copy](/tutorials/node/setup.html) of UNS node and you are in the `packages/core-tester-cli/` folder.

UNIK properties are updatable via command-line interface using the `core-tester-cli` (Read more about module [here](https://arkdoc-23.developer.uns.network/guidebook/developer/tester-cli-transaction.html#basics)). 

From this module, we've added some commands to *create*, *update* and *delete* a UNIK property. 

<!-- 
### NftTransfer
#### Create NFT token
##### Parameters
- owner (the passphrase owner)
- unikname (unikname to mint, used to calculate NFT token Id)
- id (the token id you want to set to - if no unikname parameter)
##### Command (unikname mode)
```bash
yarn tester send:nfttransfer --unikname $UNIK_NAME --owner $OWNER_PASSPHRASE
```

##### Command (id mode)
```bash
yarn tester send:nfttransfer --id $TOKEN_ID --owner $OWNER_PASSPHRASE
```

#### Transfer NFT token to an other wallet
##### Parameters
- id (NFT token id to transfer)
- owner (the passphrase owner)
- recipientId (the new NFT token wallet address)
##### Command
```bash
yarn tester send:nfttransfer --id $TOKEN_ID --recipient $RECIPIENT --owner $OWNER_PASSPHRASE
```
-->

## Commands

In the following commands we use environment variable to set some options:
- `$TOKEN_ID` : identifier of your UNIK. 
- `$OWNER_PASSPHRASE` : passphrase of the current wallet owner of the UNIK
- `$PROPS` : a JSON object (as string) representing properties to create, update or delete. 

To create, update or delete a property use the command bellow.

```bash
yarn tester send:nftupdate --id $TOKEN_ID --owner $OWNER_PASSPHRASE --props $PROPS
```

To **ADD** a property, you must set in `$PROPS` a pair `'key':'value'` with a **not currently attached key** to the UNIK token (you can find the list of attached properties via [API call](/api/nfts/#get-nft-properties) ).

To **UPDATE** a property, you must set in `$PROPS` a pair `'key':'value'` with an **already attached key**, but with a **different value** (you can find the current value of a property via [API call](/api/nfts/#get-nft-properties) ).

To **DELETE** a property, you must set in `$PROPS` a pair `'key':'value'` with an **already attached key**, but with a **`null` value**. 

Obviously, you can mix update operations on different properties in the same transaction.

*Note:* some properties have constraints. Your transaction will be rejected if your operations do not respect constraints. You can find the full list of UNIK properties and their constraints [here]().