# What is UNS ? 

UNS is based on strong principles and technologies : blockchain and Ark framework. 

Before going further in our documentation, please read these **external** documentation :

## [Intro to Blockchain](https://arkdoc-23.docs.uns.network/introduction/blockchain/)


## [Intro to ARK](https://arkdoc-23.docs.uns.network/introduction/ark/)


## Intro to UNS

// TODO

### UNIK tokens

In order to manage @unik-names on chain we've decided to use the non-fungible token concept (*abbrev.* NFT). 

NFT is the best concept to fit @unik-name's needs :

- each token is unique
- each token has a single owner (a wallet)
- each token represents an asset thus not interchangeable
- each token is tradable
- each token can have properties

Thanks to these features, we can have a technical representation of what is a @unik-name on-chain.

But, let's introduce a little bit more NFT properties.

NFT has mainly two properties :

- an identifier, which is unique across all available NFTs of the same chain. Once set, it can't be deleted or updated. 
- an owner, which is the current and usually unique wallet address able to update NFT properties. 

UNIK **IS** an NFT so it inherits from these two properties. But it also has many more

- **type** : represents [@unik-name type]() and is immutable.
    - `1` for Individual.
    - `2` for Corporate. 

