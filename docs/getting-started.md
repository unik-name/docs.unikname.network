---
---

# Getting Started with unikname.network

This guide introduces the basics of <brand name="uns"/>. It explains decentralized identifiers, how to create your own UniknameID on the network, how to setup your own on-chain properties, and how to get rewards. You will also discover the Unikname app and how your own UniknameID can be used to log in to any website that uses OpenID Connect.

To get started we invite you to
[[TOC]]

<hseparator/>

## 1. Install the Command Line Interface

<brand name="uns"/> comes with several tools to interact with the chain. The tools you should know about to get started are the <brand name="uns"/> explorer, the wallet app, and the command line interface.

We are going to start with the Command Line Interface, also called the **CLI** .

Choose your preferred setup depending on your desktop environment and install the command line interface.

|                     <h3>Operating system</h3>                     |                                                                                               <h3>Download</h3>                                                                                               |                                                                   <h3>Instructions</h3>                                                                    |
| :---------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------: |
| <h2><vp-icon name="windows-brands" size="2em" /><br/>Windows</h2> |    <h4>![Version](https://img.shields.io/npm/v/@uns/cli?color=029A98&label=UNS%20CLI&logoColor=FE7644)</h4><h3>[Download the installer](https://unikname-cli-assets.s3.fr-par.scw.cloud/uns-x64.exe)</h3>     |                       <p>Run the installer you have downloaded.</p><p>Windows may display a warning, just click **Run anyway**.</p>                        |
|   <h2><vp-icon name="apple-brands" size="2em" /><br/>MacOS</h2>   |      <h4>![Version](https://img.shields.io/npm/v/@uns/cli?color=029A98&label=UNS%20CLI&logoColor=FE7644)</h4><h3>[Download the installer](https://unikname-cli-assets.s3.fr-par.scw.cloud/uns.pkg)</h3>       |                                                       <p>Run the installer you have downloaded.</p>                                                        |
|   <h2><vp-icon name="linux-brands" size="2em" /><br/>Linux</h2>   | <h4>![Version](https://img.shields.io/npm/v/@uns/cli?color=029A98&label=UNS%20CLI&logoColor=FE7644)</h4><h3>[Download the archive](https://unikname-cli-assets.s3.fr-par.scw.cloud/uns-linux-x64.tar.gz)</h3> | <p>After having downloaded the archive, add `{TARBALL_EXTRACTION_FOLDER}/bin` into your `PATH` environment variable in order to run the `uns` command.</p> |

[Alternate installation modes are also available in the CLI documentation](/cli.html#download-and-installation).

Now you should be able to run the `uns` commands. Open a console and test it.

```bash
$ uns --version
@uns/cli/3.1.0 win32-x64 node-v12.16.1
```

:::tip
All CLI commands can be found in the [Using the unikname.network chapter](/cli).

You can also request inline help with the command `$ uns --help`
:::

Okay, now let's try to query the <brand name="uns"/> blockchain.

## 2. Use the resolver to query the chain

One very interesting feature provided by the <brand name="uns"/> blockchain is the name resolver. With this name resolver you can query the blockchain and get on-chain public data related to a UniknameID very fast.

Let's try the `resolve` command to get on-chain information for Bob using his UniknameID, @bob

```bash
$ uns resolve "@bob"
{
  "data": {
    "unikid": "158cffbe4d7b567468a17290c0cd1546ea3b013059a3a471e5ad309cfddfb0e3",
    "ownerAddress": "UYWaMkArHJjMecuHgs6LYapFtvV27QeafX"
  }
}
```

The `unikid` data is the unique identifier of the Non Fungible Token (NFT) forged within the chain and representing Bob's UniknameID.

:::tip
@bob is what we call a UniknameID. UniknameID are the decentralized identifiers of <brand name="uns"/>. They are unique within the network and are represented on-chain by UNIKNAME NFT. The `unikid` is the primary key of the UNIKNAME token.
:::

If you try to resolve a UniknameID that doesn't exist within the blockchain, then the command returns the message "DID not resolved", where DID stands for Decentralized IDentifier.

You can also use the resolver to get quick access to the public properties of a UniknameID. Let's try the `resolve` command to get Bob's <brand name="uns"/> public address for example.

```bash
$ uns resolve "@bob?*" --format=raw
UYWaMkArHJjMecuHgs6LYapFtvV27QeafX
```

:::tip
With pretty much every command you can use the _"@InsertUniknameIDHere"_ syntax rather than a public key or a network cryptographic address. For example to send tokens to @bob you can use the following syntax:

```bash
$ uns send 100 UNS --to="UYWaMkArHJjMecuHgs6LYapFtvV27QeafX"
```

but you can also use a more human-friendly and less risky syntax:

```bash
$ uns send 100 UNS --to="@bob"
```

:::

The `resolve` command is also useful to resolve user-defined properties. For example, Bob has decided to publicly share one of its BTC public address and his ARK public address. Let see how easy it is to get them:

```bash
$ uns resolve "@bob?usr/wallet/ark" --format=raw
ark:AMN48dmd3g8rgAT1xhTYfi4zwEBWpCjNDk
```

and to get the BTC public address:

```bash
$ uns resolve "@bob?usr/wallet/btc" --format=raw
btc:bc1qt9qrhany5l0yn040rak4h9jcsu6v9d48sysrna
```

Okay, now it's time for you to get your own UniknameID. Let's go!

## 3. Get you own universal ID, your UniknameID

So now let's get you your own UniknameID. To get it using the CLI you need to run two commands. First you need to create your crypto-account (e.g. your wallet). The command is very simple.

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

> _NOTA: When running the command, the stars are replaced by real values._

:::danger
It is very important to save your passphrase at this stage! **There's no way to recover it** nor to look for it later. **So do it right now!**

1. Watch out for any spelling errors. You are the only one with this information and you should be able to access it as long as you want to use your UniknameID. The passphrase will never expire.
1. If you use a password management solution like _lastpass_ or _keepass_ you are encouraged to save it on it.
   :::

Okay now you can create you own UniknameID. Technically this translates into the issuance of a UNIKNAME NFT that will be minted into the blockchain and owned by the crypto-account you have just created. In the following example, just replace `yourUnikname` by your own identifier, without the leading @.

```bash
$ uns unik:create --type=individual --explicitValue="yourUnikname" --coupon="LATIN-FREE-UNSDOC"
```

#### Understanding the parameters

`--type=individual` &rightarrow; There are several types of UniknameID. *Individual* is the most common. This is most likely the one you need. Individual UniknameID can be used to authenticate on websites. The creation process for other types of UniknameID is different. To understand types you can read [Types Key Concept](/key-concept/unik-type).

`--explicitValue="yourUnikname"` &rightarrow; this is the most important parameter, this is your UniknameID. You can choose a nickname, your real name or any pseudo, it's up to you. It must be easy to remember. Your UniknameID is not sensitive to case nor to accent nor to separators. That mean that "Laurent.Lourenço" is the same as "laurentlourenco". No need to include the @ here.

:::tip
Your UniknameID is obfuscated within the blockchain. That means that it does not explicitly appear on the chain. Instead, a derived, seemingly random value is used. Nobody knows your UniknameID expect for you. **It is very important to remember the UniknameID you have chosen.** Nobody can help you remember it, look for it, or recover it. It is a good practice to write it close to the passphrase you have just backed-up.
:::

`--coupon="LATIN-FREE20-UNSDOC"` &rightarrow; There are two ways to create and forge a UniknameID within <brand name="uns"/>. (1) You can use $UNIK tokens. The number of $UNIK tokens required depends on the category of your UniknameID : alphabet, length, pattern... (2) The second way is to use a pre-paid coupon code. For your onboarding, the UNIKNAME NFT-Factory offers you a UniknameID of 15+ latin characters. Just use this coupon code.

:::tip
If you want to create a second UniknameID, you can choose to attach it to the same crypto-account, with the same passphrase, or to create a second crypto-account with a second passphrase. We recommend to attach it to the same crypto-account unless you are creating a UniknameID to register a delegate on the network.
:::

The CLI asks you for your passphrase. The result should look like this

```bash
{
  "data": {
    "id": "59a9deed6bcf6232e9f9a57db04ff01bebe7e3ccc2499d4b7dd3e47f655c79ca",
    "transaction": "84ee796c946d4d9d635dba72a61d6b90d602c362ca721def7ae721dbf78f1d23",
    "confirmations": 1
  }
}
```

## 4. Look for your universal ID within the <brand name="uns"/> blockchain

You already know how to query your UniknameID within the chain with the `resolve` command. Running the command `$ uns resolve "@yourUnikname"` returns the `unikid` (the hashcode representing the obfuscated version of your UniknameID). This `unikid` is the UNIKNAME Non-Fungible Token (NFT) forged forever within the blockchain.

But you can also use the blockchain explorer! Let's go to [explorer.unikname.network](https://explorer.unikname.network/). Go to the search bar in the header and look for your own UniknameID (using the leading @).

![lookforyourunikname.png](/images/getting-started-lookforyourunikname.png)

You get it.

![lookforyourunikname2.png](/images/getting-started-lookforyourunikname2.png)

Your UniknameID has been found within the chain but it is not disclosed. So until you share it, nobody knows it.

## 5. Install the Unikname app on your smartphone

Using your UniknameID for authentication requires you to install the Unikname app on your smartphone and setup your UniknameID on it.

The easiest way to do it is to open your browser on your smartphone and go to [my.unikname.app](https://my.unikname.app). You will not have to go to an App store!

If you are familiar with QR Codes you can also scan this one with your smartphone for a quick setup.

![qrcode-my-unikname-app2](/images/getting-started-qrcode-my-unikname-app2.png)

During the installation process you will have to setup your PIN Code and optionally to subscribe to our _keep in touch_ mailing list.

Once this is done, choose the "restore your @unikname" button, and follow the process.

## 6. Save your UniknameID and its passphrase

Very good! Before you go further, this is a good time to save your UniknameID and its passphrase.

:::danger
It is very important to save **both your passphrase and the UniknameID you have chosen** at this stage! **There is no way to recover them** nor to look for it later. **So do it right now!**

1. Watch out for any spelling errors. You are the only one with this information and you should be able to access it as long as you want to use your UniknameID. The passphrase will never expire.
1. If you use a password management solution like _lastpass_ or _keepass_ you are encouraged to save it on it.
   :::

## 7. Use your UniknameID to sign-up on our forum

Go to our [forum](https://forum.unikname.com) and choose to sign-up with your own UniknameID.

1. select the "sign-up' button
1. enter your UniknameID
1. open your app and refresh
1. click on the connexion request
1. confirm the connexion request

And that's it !

Welcome to a community of people who care about their privacy.

You are welcome to post a feedback on your 1st experience with the community and with our team, directly on our forum.

## ...and to go further

- [Become a network player](/becoming-network-player)
- [Vote for a delegate](/cli.html#delegate-vote)
- [Disclose your UniknameID](/cli.html#unik-disclose) or/and [claim trust badges](/cli.html#badges-claim)
- [Record public data on your on-chain registry](/cli.html#properties-set)
