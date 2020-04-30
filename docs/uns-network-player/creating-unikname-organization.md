---
home: false
---

#  Creating @unikname for an organization

[[toc]]


installation CLI


## Creating your cryptoaccount

### Creating and saving your cryptoaccount informations

Your cryptoaccount is required for all the following steps. To create it, just execute the following command: `cryptoaccount:create`.
Here is an example of what you are supposed to see on your command prompt.
```bash
uns cryptoaccount:create
» :warn: This information is not saved anywhere. You need to copy and save it by your own.;
{
  "address": "XXXXXXXXXXXXXXXXXXXXXXXXX",
  "publicKey": "XXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  "privateKey": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  "passphrase": "XXXXX XXXXX XXXX XXXXXXXX XXXXXX XXXXXXX XXXX XXXXX",
  "network": "livenet"
}
```

:::warning
**You have to copy and save preciously these informations! If you lost these informations, you'll also lost access to your cryptoaccount and your @unikname.**
:::

## Vouchers

-- contact@unikname.com

Creating a @unikname requires a voucher. If you have one, you can continue. 
Otherwise, contact us on [the forum](https://forum.unik-name.com) to request one.

## Create your @unikname

Once you have your voucher, all you have to do is create your @unikname!

:::tip Choose your @unikname carefully
*Once you've chosen a name, you won't be able to change it. So choose it carefully!*
:::

**Don't forget to backup and secure your passphrase**, it will allow you to retrieve access to your @unikname in case you change your device.
Neither <uns/>, nor Unikname will be able to give you back access to your @unikname.

## Creating your @unikname

With <uns/> CLI you can create your own UNIK token using `unik:create` command.

### Parameters
- `--explicitValue` (required): Chosen explicit value of your UNIK (255 characters max)
- `--type` (required): Type of your token [individual/organization]
- `-f --format` (optional): Specify how to format the output [json|yaml]. Default to Json.
- `--fee` : Specify a dynamic fee in satoUNS. Defaults to `100000000 satoUNS = 1 UNS`.

Some [global parameters](#global-parameters) may apply to this command.

### Usage

```bash
$ uns unik:create --explicitValue {explicitValue} --type [individual|organization]
```

:::warning Choosing the @unikname
Choose the @unikname wisely. Indeed, it'll be disclosed to other people and they'll know you by this @unikname.
:::

### Examples
As example, if you want to create UNIK `individual` token `bob`:

```bash
uns unik:create --explicitValue "bob" --type individual

Enter your crypto account passphrase (12 words phrase): ***************************

{
  "data": {
    "id": "8f79445a84e3664088008927aa113e237e1c163eafb35968600922a9c5231f60",
    "transaction": "4bcde02ec632bd5531aa8710b0a13f469a59caec910dc610d46f6b8ebdcaf9ac",
    "confirmations": 1
  }
}
```
::: tip UnikId
Write somewhere your unikid (id)! You need it in the following instructions.
:::

### Checking the creation of the @unikname in the Explorer

With the transaction id given into your command prompt, you can check the @unikname creation through [the explorer](https://explorer.uns.network/).

And now, [let's go registering your organization as a delegate](./registering-as-delegate).
