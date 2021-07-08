---
home: false
title: "Type of UNIKNAME"
---

# Type of UNIKNAME <Badge text="Key Concept"/>

UNIKNAME DID are minted with a type according to their purpose
- **type 1 &rightarrow; Individual** to be used as a universal identifier for individuals.
- **type 2 &rightarrow; Organization** to be used as an authentication certificate for organizations and businesses
- **type 3 &rightarrow; Network** to be used as a global  identifier to share network configuration data

The type determines most of the capabilities of every UNIKNAME and the related @unikname ID. Rules, Features, Costs of transactions, Rewarding... comes from type of UNIKNAME.

The type is like a namespace for @unikname ID. An ID may exist within several types, in this case their on-chain fingerprint and their passphrase are totally different. 

:::tip Under the hood
The @unikname type is a genesis property of the UNIKNAME NFT. The type is minted simultaneously with the UNIKNAME Token, and it's an immutable property.
:::

## Type 'Individual'

![individual](./images/unik-individual-icon-dark.png)

UNIKNAME of type `Individual` is intended to be controlled by an individual and represents a pseudo or a nickname.

It is acquired one time for all, and is hidden (obfuscated) by default.

**Use cases**
- Identify Individual, anonymously
- Confidential authentication
- Store public, private or shareable personal data
- Control sharing of personal information
- Public sharing of verified URL
- Remote access to public information shared by members, via the universal name resolver
- Contribute to services on the network and get rewards
- Speculate on the value of a pseudo
- ...

:::tip NOTA
A @unikname ID of type `individual` looks like an email address, but decentralized. It belongs to its owner and it does not belong to the email domain name owner.
:::

## Type 'Organization'

![organization](./images/unik-organization-icon-dark.png)

UNIKNAME of type `Organization` is intended for organizations and businesses wanting to implement <brand name="unc"/> authentication solution.

It identifies publicly the organization on the network, and it is used for build the trust certificate used by the authentication protocol.

The ID is under the control of people authorized by the organization.

**Use cases**
- Identify Organization over the Internet
- Setup <brand name="unc"/> on a website, and certify user authentication
- Public sharing of verified URL
- Control sharing of business information
- Promote brand to get more users
- ...

:::tip NOTA
A @unikname ID of type `organization` looks like a domain name, but decentralized.
:::

## Type 'Network'

![network](./images/unik-network-icon-dark.png)

UNIKNAME of type `Network` is intended for global identifiers playing a role one the network but without authentication capabilities.

**Use cases**
- Identify Network Service Providers
- Provide Network Services
- ...

## Summary

| Use case | ![individual](./images/unik-individual-icon-dark.png) |![organization](./images/unik-organization-icon-dark.png) | ![network](./images/unik-network-icon-dark.png) |
|-|:-:|:-:|:-:|
|Confidential sign-up and log in on websites|:heavy_check_mark: |:x:|:x:|
|Contribute to services and get rewards |:heavy_check_mark: |:x:|:x:|
|Setup Unikname Connect Authentication|:x: |:heavy_check_mark:|:x:|
|Provide Network Services|:x:|:x:|:heavy_check_mark:|
|Control sharing of information |:heavy_check_mark: |:heavy_check_mark:|:heavy_check_mark:|
|Public sharing verified URLs|:heavy_check_mark: |:heavy_check_mark:|:heavy_check_mark:|
|Participate to the governance of the network|:heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|
