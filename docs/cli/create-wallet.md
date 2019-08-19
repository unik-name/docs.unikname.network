---
title: "create-wallet command"
---

# `create-wallet` command

## Introduction
With UNS CLI you can create your UNS wallet using `create-wallet` command.

## Parameters
- `--network` (required): Network on which UNS CLI will create token [devnet|(local) local is for development only]

## Usage

```bash
uns create-wallet --network [devnet|local]
```

### Example
As example, if you want to create a UNS wallet on `devnet` network:
```bash
uns create-wallet --network devnet
```

A wallet.json file with address, public key, private key, passphrase and network is created in the current directory


### Outputs: 

If the wallet creation succeed UNS CLI displays your wallet informations.

```
$ uns create-wallet --network devnet

Wallet informations are stored here: /home/bob/currentDirectory/wallet.json

⚠️  WARNING: this information is not saved anywhere (wallet.json). You need to copy and save it by your own. ⚠️

{
  "address": "D9B6HLADr1Fd6TXvEGCuNc3A9aHK9JzjYC",
  "publicKey": "03522706bd0b812faea10e92dc0400e37aba468f9df3e2f63570c11c2b66eadc22",
  "privateKey": "d7877b7867404cd35bf85ea7643ad23058f5af1262d11a389ffc429648f4abe7",
  "passphrase": "train drastic alley office seed glove cable fee firm during lottery cause",
  "network": "devnet"
}

```