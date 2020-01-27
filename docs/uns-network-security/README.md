---
home: false
title: "uns.network Security & Hack Protections"
---

# Security & Hack Protections

<uns/> and protocol implement multiple hack protections:

[[TOC]]

### Unlisted protection

@uniknames are unlisted by default.

The registry of non-fungible @unikname tokens consists of obfuscated strings. With this technology, it’s not possible to determine names recorded into the registry. Very-slow-hash functions is used to prevent “rainbow-table” attacks.

### Reverse lookup protection

The registry is protected against reverse lookup. It is not possible to find a @unikname from a value within the registry (e.g. a blockchain public address) because user’s registry does not contain @unik names nor any reference to it, and because the user’s registry is stored off-chain. 

The key field of the database containing values is composed of obfuscated unik-addresses. This key is also protected against “rainbow-table” attacks. (see Unlisted Protection here above).

In addition, there is a double protection for values attached to a label with restricted permissions (see here above). These values are encrypted and stored off-chain. Only whitelisted @unik names are able to decrypt the value stored into the registry. An attacker who succeed to get access to the off-chain storage will only get encrypted data. 

### Data Integrity Protection (Proof Of Retrievability - POR)

Data Integrity Stamp concept aims to protect user’s data against hacks. It’s based on the proven technology called POR (Proof Of Retrievability).

Every dataset containing user’s data get a key and are stamped with a unique tamper-proof checksum. This checksum is calculated from the dataset itself and is recalculated after every update of the dataset. The key and the checksum are pushed to our decentralized registry, the Stamped Index. This decentralized registry with its blockchain protocol ensures the integrity of the key/checksum pair. 

If user’s dataset is changed without user’s permission then discrepancy appears between the associated checksum stored in the user’s data database and the broadcasted checksum in the blockchain. In this case, the user’s registry becomes unavailable to prevent misuse while waiting for corrective actions.
The key/checksum pair is called the ‘Data Integrity Stamp’. It proves the integrity of the dataset. 

### Man-In-The-Middle (MITM) Protection

The Man-In-The-Middle attack is an attack where a hacker can read, eventually modify, secretly, data exchanged in a private channel between two parties.

Two systems protect our users:
- Dedicated encrypted channels over TLS v1.3 protect our users from secret reading of their data by a hacker
- The POR (see above): even if a hacker succeeds in secretly modifying data when they are exchanged between the data provider and the wallet of the user, the POR protection will allow the user (through his wallet) to detect the unwanted modifications: data integrity stamps will be different! (the one coming from the blockchain and the one calculated from the data received from the data provider). The combination of the POR and dedicated encrypted channels over TLS v1.3 to exchange data will protect our users from MITM attacks.

### Data Leak Protection

Through OpenAPIs accesses, every request is filtered and analyzed to detect unusual or fraudulent behaviors. For eg. among many other protections: many requests coming from the same “origin” in a short time, quotas overrun...

### Ownership Protection

@unikname token is a Self-Sovereign Asset with ownership rules coded within <uns/> smart contract. Only @unikname token owner has control over it as long as the <uns/> blockchain will exist.

### Spoofing, Typosquatting, Phishing protection

Names are easily readable, pronounceable and communicable safely regarding spoofing, typosquatting risks, and phishing hacks. This protection is ensured by the SafeTypo© algorithm. Detailed specifications of SafeTypo© provide more information about this protection.

### Open Source Algorithms protection

All algorithms will be open source and published during the opening of the livenet.
