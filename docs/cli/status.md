---
title: "status command"
---

# `status` command

## Introduction
Command used to display blockchain status.

## Parameters
- `--network` (optional): Network on which UNS CLI will create token [mainnet|devnet|(testnet|local) local and testnet are for development only, default is mainnet]

## Usage

```bash
uns status
```

### Example
To display UNS devnet blockchain status

```bash
uns status --network devnet
```

### Outputs: 
Command displays some blockchain informations

```
$ uns status --network devnet
Height:  21600
Network:  devnet
Supply DUNS:  2197055800000000 DUNS
Supply UNIKs:  23 UNIKs
Active delegates:  2
Last block:  https://explorer.devnet.uns.network/block/7496261431277872677
```