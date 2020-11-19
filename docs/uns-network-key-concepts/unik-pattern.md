---
home: false
title: "Pattern of UNIK ID"
---

# Pattern of UNIK ID

Every @unikname is a unique string of characters, forming a human-readable identifier. This string is composed of unicode characters belonging to the SafeTypo&copy; international alphabet. It's a serie of digits, letters denominated in a specific alphabet or script, and separators. The way the character string is combined can be classified into patterns.

Pattern is used to determine the cost of @unikname ID and to control @unikname issuance: 
- Licences of NFT-Factories are granted by Pattern
- Potentially confusing @unikname ID are highlighted
- @unikname ID launches are organized by Pattern

Patterns provides following information about @unikname ID:
[[TOC]]

<hpicture noshadow caption="example of pattern displayed in the metadata section of @jack-sparrow">![jack-sparrow-idcard-pattern](./images/did-nft-unik-unikname-jack-sparrow-pattern.png)</hpicture>

:::tip
Pattern is calculated from the @unikname ID string. It's not a disclosed information unless the @unikname itself has been disclosed by its owner.
:::

## The type of @unikname ID

Patterns provides information about the [type of the @unikname ID (aka UNIK ID)](/uns-network-key-concepts/unik-type): `Individual`, `Organization` or `Network`. 

## The script used

Patterns provides information about the script of characters used to form a @unikname ID. A script is a group of alphabets, for example `Latin` script includes French, Spanish, Italian, German and other alphabets. 

For the time being the following scripts are managed: 

- ``Digit``
- ``Latin``

:::warning
Separators are ignored when determining the script element of a Pattern of a @unikname.
:::

:::tip
Unicode characters that make up the SafeTypo&copy; alphabet are listed in the public [SafeTypo github repository](https://github.com/unik-name/SafeTypo).
:::

## The group of length

Patterns provide information about the group of length of the @unikname ID. This is an information that complements the type and the script. 

For example: a @unikname of type `individual` composed of `Latin` characters stands in the following groups of lengths:
- `Tiny`: 4 to 5 characters
- `Short`: 6 to 7 characters
- `Medium`: 8 to 14 characters
- `Long`: 15 characters and more

:::warning
Separators are ignored when determining the length of a Pattern of a @unikname ID.

Length is calculated with the shortest number of characters in case of confusing letters. See SafeTypo&copy; algorithm for more information.
:::

## Similarities with other famous character string


| Is Like | Description |
|-|-|
| ``No likeness`` | No identified similarities |
| ``Single char`` | The @unikname string is composed of a serie of a single character |
| ``Looks like TLD`` | The @unikname string ends with main TLD letters: "com", "net", "gov", "edu", "org", "mil", "int"

The list of similarities can be extended.
