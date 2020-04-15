---
home: false
title: "Cryptography overview"
---

# Cryptography overview

In the blockchain world you must rely on cryptography to make it happends! uns.blockchain cryptography is based on ARK.IO basics augmented with specificties related to Decentralized IDs and Decentralized Public Key Infrastructure requirements.

## Cryptoaccount

Traditional blockchain accounts are represented by a couple of public and private keys. These accounts handle a balance of fongible tokens (e.g. coin or utility token).

Within <uns/> we call these accounts the ``cryptoaccounts`` to be more meaningful. These cryptoaccounts are represented by a couple of public and private keys, and  also by a public address and a passphrase. 

Then <uns/> cryotoaccounts handle both the UNS protocol tokens, and UNIK Non Fungible Tokens representing @unikname. They're protected and secuted by a Passphrase.

## Passphrase

The passphrase is the master password (key) for your UNS tokens and also for your UNIK tokens. Every UNS address has its own unique passphrase. With the passphrase you can sign transactions to send your UNS, you can manage your @unikname represented by UNIK tokens. More important is that the combination of your Passphrase plus a pincode or a fingerprint on your smartphone allow you to sign-in and sign-up everywhere.

So, do not lose your Passphrase, and do not share it with others. You could lose access to your UNS tokens but above all you could loose access to all website you're connected to. If you lose your passphrase, or if it is stolen, there is nothing we can do to help you. We CANNOT recover any lost passphrases.

The passphrase is used to directly calculate the PrivateKey of an UNS blockchain account and should never be shared, stored irresponsibly, or transmitted over the internet. The only person that should ever have access to a passphrase is the owner of its account.

We can technically use any word, phrase, or string as a passphrase which will result in a valid <uns/> cryptoaccount; however, it is heavily discouraged as the security of an address relies on the randomness of its Passphrase. Humans are bad at creating randomness, and entering sequences of random letters and numbers isn't easy to do accurately.

<uns/> passphrases are implemented using ARK.IO alorythms, based on the BIP39 Protocol, and is combination of twelve words. 

## unikid

Every @unikname is encoded within the <uns/> blockchain with a Hashcode, its ``unikid``. Every unikid is "embedded" into a public key and can't exists without it. The unikid is the public part of a @unikname, the human-readable string representing a @unikname is not public, unless its owner decide to disclose it.


## Overview

![cryptography-overview](./images/cryptography-overview.png)

## Resolving a cryptoaccount

Here is an example of the public address of a cryptoaccount on uns.network:

```
UVxGz3EKDqx4h8LLz2ao2GoDNPx4uHf25k
```

For every public address there's a public key, associated with a private key, and encrypted with a passphrase. Here is an example of on-chain public informations available when you query this public address on uns.network.

```json
{
  "data": {
    "address": "UVxGz3EKDqx4h8LLz2ao2GoDNPx4uHf25k",
    "publicKey": "03c583c31c0ed365fecaf1dc88edd003e78d6bbded8923b355d878489284ea54ec",
    "secondPublicKey": "022b3d124aa60fb6ac0eb7576877a4c6197f8fd5aaa772f884c6269bf7829ba31e",
    "balance": 95,
    "token": "uns",
    "isDelegate": false,
    "vote": "02b43b9786808a4f415dbbdc5adab7e17bd0dde904d3dc6dd869bf11ae0f7a054d",
    "nfts": {
      "unik": 2
    },
    "tokens": {
      "unik": [
        "10e7052bbc0b914d4d9bb88db916a366258569b7e1b1c9e5c47cef2fc37deedb",
        "824387e6a9cf82caaea1b5fdc59af592f93d9dfea30c643cc3538def6a24b514"
      ]
    }
  }
}
```

Every @unikname has a single cryptoaccount, but a cryptoaccount can embedd multiple @unikname. 

:::tip
To know the cryptoaccount of a @unikname you can use the universal resolver.
:::

```bash
$ uns resolve @jack-sparrow?*
```
and 
```bash
$ uns resolve @jack-sparow?*
```
return the same cryptoaccount in this example.


## More about cryptography

For more cryptographic information about we recommend to [read ARK.IO documentation](https://learn.ark.dev/concepts/cryptography).

