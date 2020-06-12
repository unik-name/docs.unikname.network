---
home: false
title: "Getting Started with uns.network "
---

# Getting Started with uns.network

This guide introduce the basics of the uns.network. It explains Decentralized Identifiers, how to create your own @unikname on the network, how to setup your own on-chain properties, and to get rewards. You will also discover the Unikname APP and how to use your own minted @unikname to get connected to any OpenId Connect website. 

To get started we invite you to
[[TOC]]

## 1. Install the Command Line Interface

The <uns/> comes with several tools to interact with the chain. The most famous ones are the chain explorer, the wallet App, and the command line interface. 

We're going to start with the command line interface, also called the **CLI** .

Choose your prefered setup depending on your desktop environment and install the command line interface.

| <h1><vp-icon name="windows-brands" size="2em" /><br/>Windows</h1> | <h1><vp-icon name="apple-brands" size="2em" /><br/>macOS</h1> | <h1><vp-icon name="linux-brands" size="2em" /><br/>Linux</h1> |
|:-----------------------------------:|:----------------------------------------------------------------------:|:---------------------------------------:|
| <h4>![GitHub version](https://badge.fury.io/gh/unik-name%2Funs-cli.svg)</h4><h3>[Download the 64-bit installer](https://unikname-cli-assets.s3.fr-par.scw.cloud/uns-x64.exe)</h3>        | <h4>![GitHub version](https://badge.fury.io/gh/unik-name%2Funs-cli.svg)</h4><h3>[Download the tarball*](https://unikname-cli-assets.s3.fr-par.scw.cloud/uns-darwin-x64.tar.gz)</h3>      | <h4>![GitHub version](https://badge.fury.io/gh/unik-name%2Funs-cli.svg)</h4><h3>[Download the 64-bit tarball*](https://unikname-cli-assets.s3.fr-par.scw.cloud/uns-linux-x64.tar.gz)</h3>or<h3>[Download the ARMv7+ tarball*](https://unikname-cli-assets.s3.fr-par.scw.cloud/uns-linux-arm.tar.gz)</h3>      |

*: you should then add `{TARBALL_EXTRACTION_FOLDER}/bin` into your `PATH` environment variable in order to be able to run `uns` command.

You can also [install from NPM/Yarn](cli/alternate-installation.html#installation-from-npm-yarn) for all platforms.

Now you must be able to run the uns commands. Open a console and test it.

```bash
$ uns --version
@uns/cli/3.1.0 win32-x64 node-v12.16.1
```

:::tip
All CLI commands can be found in the [Using the uns.network chapter](../uns-use-the-network/cli).

You can also request inline help with the command `$ uns --help`
:::

Okay, now let's go to query the <uns/> blockchain.

## 2. Use the resolver to query the chain

One very interesting feature provided by <uns/> blockchain is the name resolver. With this name resolver you can query the blockchain and you can get @unikname's related on-chain public data very fast.

Let's try the ``resolve`` command to get Bob's NFT UNIK address within the chain
```bash
$ uns resolve "@bob"
{
  "data": {
    "unikid": "158cffbe4d7b567468a17290c0cd1546ea3b013059a3a471e5ad309cfddfb0e3",
    "ownerAddress": "UYWaMkArHJjMecuHgs6LYapFtvV27QeafX"
  }
}
```

The `unikid` data is the unique identifier of the Non Fungible Token forged within the chain and representing Bob's unikname. 

:::tip
@Bob is called a DID, a Decentralized ID, because it has a unique Identifier within a decentralized network, the <uns/> blockchain.
:::

Is you try to resolve a name that doesn't exist with the blockchain chain then the command returns the message "DID not resolved"

You can also use the resolver to get quick access to properties of a @unikname. Let's try the ``resolve`` command to get Bob's uns.network public address for example.

```bash
$ uns resolve "@bob?*" --format=raw 
UYWaMkArHJjMecuHgs6LYapFtvV27QeafX
```

:::tip
For quite all commands you can use the _"@oneComprehensiveUnikname"_ syntax rather than a public key or a network cryptographic address. For example to send tokens to @bob you can use the following syntax:
```bash
$ uns send 100 UNS --to="UYWaMkArHJjMecuHgs6LYapFtvV27QeafX" 
```
but you can also use a more friendly and less risky syntax:
```bash
$ uns send 100 UNS --to="@bob" 
```
:::

The <uns/> resolver is also usefull to resolve user's defined properties. For example Bob has decided to share publicly one of it's BTC public address and his ARK public address. Let see how easy it is to get them:

```bash
$ uns resolve "@bob?usr/wallet/ark" --format=raw 
ark:AMN48dmd3g8rgAT1xhTYfi4zwEBWpCjNDk
```
and to get the BTC public address:
```bash
$ uns resolve "@bob?usr/wallet/btc" --format=raw 
btc:bc1qt9qrhany5l0yn040rak4h9jcsu6v9d48sysrna
```

Okay, now it's time for you to get your own @unikname. Let's go!

## 3. Get you own universal IDs, your @unikname

So now let's get your own @unikname. To get it with the CLI you need to run two commands. First you need to create your cryptoaccount (e.g. your wallet) and the command is very simple.

```bash
$ uns cryptoaccount:create
» :warn: This information is not saved anywhere. You need to copy and save it by your own.;
{
  "address": "USRUEFD3aTq4HaY1SkpTqhCSQ81Ww9mVee",
  "publicKey": "036b274eef34e35d06387a53edf247d7f367034741cf29c9c9d8d883aba54be730",
  "privateKey": "****************************************************************",
  "passphrase": "**** **** **** **** **** **** **** **** **** **** **** ****",
  "network": "livenet"
}
```

> _NOTA: In your case the stars are replaced by real values._

:::danger
It is very important to save your passphrase at this stage! **There's no way to recover it** nor to look for it later. **So do it right now!** 

1. Take care of spelling it. You should be able to access it for all your life long. 
1. If you use a password safe solution like _lastpass_ or _keepass_ you're encouraged to save it on it
:::

Okay now you can create you own @unikname by issuing a NFT UNIK Token and by embedding it to the crypto account you've just created. In the example here above just replace `yourUnikname` by your own identifier.

```bash
$ uns unik:create --type=individual --explicitValue="yourUnikname" --coupon="LATIN-FREE-UNSDOC"
```

#### Understanding parameters

`--type=individual` &rightarrow; Individual type is the most common. Individual @unikname can be used to authenticate on websites. There's other types of @unikname but the creation process is different. To understand types you can read [Types Key Concept](../uns-network-key-concepts/unik-type).


`--explicitValue="yourUnikname"` &rightarrow; this is the most important one, this is your @unikname. You can choose a nick name, your real name or any pseudo, it's up to you. It must be easy to remind. It is not sensitive to case nor to accent nor to separators. That mean that "Laurent.Lourenço" is the same as "laurentlourenco"

:::tip
You @unikname is obfuscted within the blockchain so that means nobody knows it unless you. **It's very important to remember the @unikname you've choosen.** Nobody can help you to look for it nor to recover it. It's a good practice to write it close to the pass phrase you've just backed-up.
:::

`--coupon="LATIN-FREE20-UNSDOC"` &rightarrow; There's two ways to create and forge a @unikname within the uns.blockchain. (1) You can spend UNS tokens. The number of UNS tokens required depends on the category of your @unikname : alphabet, length, pattern... (2) The second way is to use a prepaid coupon code. So for your onboarding the UNIK NFT-Factory offers to you a 15 latin characters long (or more). Just use this coupon code.

:::tip
If you want to create a second @unikname you can choose to attach it to the same crypto account, with the same passphrase, or to create a second crypto account with a second passphrase. We may recommend to attach it to the same crypto account unless for @unikname used to register a delegate on the network.
:::

The CLI ask you for your passphrase, then the result should looks like this
```bash
{
  "data": {
    "id": "59a9deed6bcf6232e9f9a57db04ff01bebe7e3ccc2499d4b7dd3e47f655c79ca",
    "transaction": "84ee796c946d4d9d635dba72a61d6b90d602c362ca721def7ae721dbf78f1d23",
    "confirmations": 1
  }
}
```

## 4. Look for your universal ID within the uns.network blockchain

You already know how to query your @unikname within the chain with the resolver. Running the command `$ uns resolve "@yourUnikname"` must show the unikid (the hashcode representing the obfuscted version of your @unikname). This unikid is the UNIK Non Fongible Token forged forever within the blockchain.

But you can also use the blockchain explorer! Let's go to [explorer.uns.network](https://explorer.uns.network). Go to the the search bar in the header and look for your own @unikname

![lookforyourunikname.png](./images/lookforyourunikname.png)

You get it.

![lookforyourunikname2.png](./images/lookforyourunikname2.png)

As you see your @unikname has been found within the chain but it's not disclosed. So until you share it, nobody knows it.

## 5. Install the Unikname APP on your smartphone

Using your @unikname for authentication required to install the Unikname APP on your smartphone and to setup your @unikname on it.

The easiest way to do it is to open your browser on your smartphone and go to [my.unikname.app](https://my.unikname.app). You will not have to go to an App store! 

If you're familiar with QR Code you can also scan this one with your smartphone for a quick setup.

![qrcode-my-unikname-app2](./images/qrcode-my-unikname-app2.png)


During the installation process you will have to setup your PIN Code and optionally to subscribe to our _keep in touch_ mailing list.

Until done you're going to choose "restore your @unikname" button, and follow the process.

## 6. Save your @unikname and its passphrase

Very good! Before to go further it's the good time to save your @unikname and its passphrase. 

:::danger
It is very important to save **both your passphrase and the @unikname you've choosen** at this stage! **There's no way to recover them** nor to look for it later. **So do it right now!** 

1. Take care of spelling it. You should be able to access it for all your life long. 
1. If you use a password safe solution like _lastpass_ or _keepass_ you're encouraged to save it on it
:::

## 7. Use your @unikname to sign-up on our forum

Let's go to our [forum](https://forum.unikname.com) and choose to sign-up with your own @unikname.
1. select the "sign-up' button
1. select "connect with my private @unikname" button
1. enter your @unikname
1. open your app and refresh
1. click on the connexion request
1. enter your pin code

Here you are!

Welcome to the community of people who cares about their privacy.

You're welcome to post a feedback on your 1st experience with the community and with our team, directly on our forum.

## ...and to go further

* [Become a network player](../uns-network-player)
* [Vote for a delegate](../uns-use-the-network/cli.html#delegate-vote)
* [Disclose your @unikname or/and claim trust badges](../uns-use-the-network/cli.html#unik-disclose
* [Record public data on your on-chain registry](../cli.html#properties-set)

