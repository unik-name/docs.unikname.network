---
home: false
Title: "UNIK IDentifers"
sidebarDepth: 0
---

# UNIK Identifiers

The main purpose of <brand name="uns"/> is to issue, to manage and to secure Decentralized IDentifiers. Here we explain what is a Decentralized IDentifiers in general and what are the specificities of the <brand name="uns"/> ones.

Content:
[[TOC]]

<hseparator/>

## Introduction to Identifiers and DIDs

An identifier, or an ID, is a name that identifies a unique object. An identifier may be a word, number, letter, symbol, or any combination of those.

A famous identifier used every day by everybody is the email address, like `bob@protonmail.com`. It identifies an email account. Combined with a password, it allows us to authenticate and to access our email account.

A Decentralized Identifier (DID) is a type of identifier that is decoupled from any centralized registries or database. In other words a DID is controlled by a individual, its owner, and nobody else.

DIDs are based on the Self-sovereign identity concept where only the user should own their digital identity data fully without intervention from a centralized third party.

IDs rooted in <brand name="uns"/> blockchain are Decentralized IDs, or DIDs. 

## DID has Remarkable properties

Any decentralized IDentifiers have remarkable properties which make them the legitimate successor of traditional identifiers:

- DID is under the sole control of his owner
- DID owner is the only one to decide who can access data related to its ID
- DID is available every time and everywhere around the world
- DID is immutable, once minted, it can't be modified nor deleted
- DID is unique on a global network, by definition
- DID lifetime is everlasting
- DID can be anonymous, and his use can be untraceable in a P2P context

**:heavy_check_mark:** <brand name="uns"/> UNIK DIDs have all these remarkable properties.

## DID only exist in a Decentralized Network

A Decentralized Network...
- relies on many independent actors from each other
- is publicly accessible
- has a decentralized governance, independent of a country (such as an international foundation)
- is reliable, resilient, incorruptible, resistant to censorship, efficient

…providing DID…
- is accessible at low cost
- provide « International IDs», not only latin nor ascii ones
- rewards securing and using DIDs
- guarantees the absolute sovereignty of IDs

…self-controls their creation.

**:heavy_check_mark:** <brand name="uns"/> meets all these criteria, making it the ideal Decentralized Network for DIDs

## Uns.network Decentralized Identifier: UNIK DID

<brand name="uns"/> Decentralized Identifiers are called `UNIK DID`. 

Every UNIK DID has a human-readable form called a `@unikname ID`.

Every UNIK DID is a Non Fungible Token (NFT), represented by is a 64 characters unique string hash, called `UNIK token`, minted into the <brand name="uns"/> blockchain.

:::tip Example

The @unikname ID <un id="@jack-Sparrow"/> is represented in the <brand name="uns"/> by the UNIK Token hash code `10e7052bbc0b914d4d9bb88db916a366258569b7e1b1c9e5c47cef2fc37deedb`.
:::

## What makes UNIK DID so unique?

**:heavy_check_mark:** DID UNIK is a **pseudonymous Identifer**, it is **not a proof of digital identity**.  
**:heavy_check_mark:** DID UNIK is Human-Readable, easy to remember and **protected against typo-squatting**  
**:heavy_check_mark:** DID UNIK **belong to namespaces**, called types, defining their purpose.  
**:heavy_check_mark:** DID UNIK have **configurable governance rules** specific to their type.  
**:heavy_check_mark:** DID UNIK embed **exclusive features for authentication**  
**:heavy_check_mark:** DID UNIK have **advanced data registries** (on-chain, off-chain, encrypted, badges…)

## SafeTypo© technology

Every @unikname is a string built with SafeTypo© technology for a peerless User eXperience. SafeTypo is an algorithm we've designed to build trustworthy Human-Readable identifiers. They're easily readable, pronounceable and communicable safely regarding spoofing and typosquatting risks.

This string is composed of unicode characters belonging to the [SafeTypo© international alphabet](https://github.com/unik-name/SafeTypo). It's a serie of digits, letters denominated in a specific alphabet or script, and separators.  

:::tip Example of @unikname secured with SafeTypo© in an international context

<un id="@Alice101"/><br/>
<un id="@Obi-Wan.Kenobi"/><br/>
<un id="@Sarah.O’Connor"/><br/>
<un id="@El-Niño-del-sol"/><br/>
<un id="@Мое-имя"/><br/>
<un id="@はると"/><br/>
<un id="@张伟"/><br/>
:::

The identifier built upon the @unikname string don't care about upper case/lower case, about accent, about separators, and take into account confusing characters.

<un id="@Alice101"/> is the same identifier as <un id="@alïce-1.O.1"/>. This is the same @unikname ID with a single owner. Once minted on the blockchain, users can use any equivalent typo to share and resolve their @unikname ID.

## UNIK DID resolver

UNIK DID can be resolved via the [blockchain explorer](https://explorer.uns.network/) or with the dedicated [unikname.id resolver](https://unikname.id/) 

The resolver works with a @unikname ID string matching a predefined format:

`[@][unik:][{type}:]{explicitValue}`

> _Values between square brackets `[]` are optional_

Properties of @unikname ID's can be resolved too, with a string following this format: 

`[@][unik:][{type}:]{explicitValue}`[?{propertyKey}|?*]

