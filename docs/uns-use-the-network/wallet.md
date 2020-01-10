---
home: false
title: Wallets for UNS tokens and UNIK tokens
---

# Wallets

## Basic Wallets

Both UNS and UNIK tokens are manageable with a command line interface (CLI). But this is not really user-friendly. 

ArkEcosystem comes with a lot of out-of-the-box tools for bridgechains like UNS. Among those tools, we have the awesome [Desktop Wallet](https://ark.io/wallet) which is fully compatible with uns.network. From a single wallet application, you can manage your ARK **AND** UNS tokens easily. By default, the app connects to Ark.io mainnet. But with a simple configuration, you can connect it to <uns/> too. Let's do it !

### How to setup the default ARK Desktop Wallet to work with UNS tokens

> :warning: *this tutorial has been written for the Ark desktop wallet verion `2.6`. It could not work properly with newer versions.*

First of all, download and install the app for your platform : https://ark.io/wallet  *(works with Windows, macOS and Linux)*

You must setup the wallet for ARK tokens first, then you will be able to setup the wallet to work with the UNS tokens. 

So, follow Ark [instructions](https://docs.ark.io/tutorials/usage-guides/how-to-use-ark-desktop-wallet.html) on how to setup and use the application. 

From now, you should have a perfectly configured desktop application to manage your ARK tokens.
To manage UNS tokens it's simple and it requires only two additional steps: 
- setup a new network configuration
- create a new dedicated profile.

#### step 1. Setup the uns.network configuration

Go to `manage network` section (bottom-left of navigation bar).  
![manage-network](./images/manage-network.png)

Then click on : `Add a new network` (top-right)  
![add-network](./images/new-network.png)

Fill inputs:
- name: **UNS Sandbox**
- description: **<uns/> SANDBOX**
- seed server: **http://163.172.146.222:4200**

And click on `Fetch` to automatically get full node configuration (like token name, explorer url or wallet derivation keys).

Guess what 🤔, you've just completed the first step to configure your wallet ! Congrats 🎉

#### step 2. Create a dedicated profile

Click on your profile (last item of navigation bar).  
Then `Add profile` (top-left). 
![add-profile](./images/add-profile.png)

Fill-in all inputs like you did for Ark profile.  
Now, in step `2. Network` you can choose the freshly appeared `UNS Sandbox` item.  
![network](./images/network.png)

At the end, you should have a fully configured Desktop wallet able to transfer UNS tokens, create <uns/> wallets, vote for <uns/> delegates, or any other features inherited from ArkEcosystem.

If you want to start playing, you can get `SUNS` [from the FAUCET](./#sandbox-faucet).

> NOTA: Management of UNIK tokens is not able with the default Ark Wallet, it requires the installation of the @unik-name APP.


## @unik-name APP

The @unik-name mobile APP is not only an app to manage your owns @unik-names and its properties. The @unik-name mobile APP is also, and before all, a wallet. This APP embed cryptographic and secured features like handling pass phrase, handling private keys and calculating public addresses. 

So the @unik-name mobile APP is the prefered user APP to manage @unik-names but also UNS tokens, UNIK tokens, and to trigger transactions requiring tokens.

