---
title: "create-unik command"
---

# `create-unik` command

## Introduction
With UNS CLI you can create your own UNIK token using `create-unik` command.

## Parameters
- `--explicitValue` (required): Chosen explicit value of your UNIK (255 characters max)
- `--type` (required): Type of your token [individual/corporate]
- `--network` (optional): Network on which UNS CLI will create token [mainnet|devnet|(testnet|local) local and testnet are for development only, default is mainnet]

## Usage

```bash
uns create-unik --explicitValue {explicitValue} --type [individual|corporate] [--network [mainnet|devnet|testnet|local]]
```

### Example
As example, if you want to create UNIK `individual` token `bob` on `devnet` network:
```bash
uns create-unik --explicitValue bob --type individual --network devnet
```

Enter your passphrase:

```
$ uns create-unik --explicitValue bob --type individual --network devnet
Enter your wallet passphrase (12 words phrase):
```

Your passphrase will be hidden, no trace in your terminal history:
```
Enter your wallet passphrase (12 words phrase): ********************************************************************************
```


### Outputs: 

If the creation succeed UNS CLI prompts yout UNIK token ID and links to see token and transaction in the UNS explorer.

```
Computing UNIK fingerprint... done
Creating transaction... done
Sending transaction... done
Waiting for transaction confirmation... done
UNIK nft created (1 confirmation(s)): 5a085fc678b422be2b6457819825d6566a155de9c4b4cd958fd436e4422d6bf4 [ https://explorer.devnet.uns.network/uniks/5a085fc678b422be2b6457819825d6566a155de9c4b4cd958fd436e4422d6bf4 ]
See transaction in explorer: https://explorer.devnet.uns.network/transaction/1c0c5a8672581ddcb52fb8a3c7e6e6eb6edc29203a84bbaa3d8a84c4ef00c1c4
```