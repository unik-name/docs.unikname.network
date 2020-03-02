---
home: false
title: "@unikname Pattern"
---

# Key Concepts - @unikname Pattern 

Every @unikname is a unique string of characters, forming a human-readable identifier. This string is composed of unicode characters belonging to the SafeTypo&copy; international alphabet. It's a serie of digits, letters denominated in a specific alphabet or script, and separators. The way the character string is combined can be classified into patterns.

Pattern is used to determine the cost of @unikname and to control @unikname issuance: 
- Licences of NFT-Factories are granted by Pattern
- Potentially confusing @unikname are highlighted
- @unikname launches are organized by Pattern

Patterns provides following informations about @unikname:
- The type of @unikname
- The scripts used
- The group of length
- Similarities with other famous character string

![jack-sparrow-idcard-pattern](./images/did-nft-unik-unikname-jack-sparrow-pattern.png)
<small>_example of pattern displayed in the metadata section of @jack-sparrow_</small>

:::tip
Pattern is calculated from the @unikname string. It's not a disclosed information unless the @unikname itself has been disclosed by its owner.
:::

## The type of @unikname

Patterns provides information about the [type of the @unikname](/uns-network-key-concepts/unik-type): ``Individual``, ``Organization`` or ``Network``. 

## The scripts used

Patterns provides information about the scripts of characters uses to form a @unikname. A script is a group of alphabets, for example ``Latin`` script includes French, Spanish, Italian, German and other alphabets. 

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

Patterns provide information about the group of length of the @unikname. This is an information that complements the type and the script. 

For example for a @unikname of type ``individual`` and composed of ``Latin`` characters stands in the following group of lengths:
- ``Tiny``: 4 to 5 characters
- ``Short``: 6 to 7 characters
- ``Medium``: 8 to 14 characters
- ``Long``: more than 14 characters

:::warning
Separators are ignored when determining the length of a Pattern of a @unikname.

Length is calculated with the shortest number of characteres in case of confusing letters. See SafeTypo&copy; algorythm for more information.
:::

## Similarities with other famous character string


| Is Like | Description |
|-|-|
| ``No likeness`` | No identified similarities |
| ``Single char`` | The @unikname string is composed of a serie of a single character |
| ``Looks like TLD`` | The @unikname string ends with main TLD letters: "com", "net", "gov", "edu", "org", "mil", "int"

The list of similarities can be extended.
