---
---

# Setting-up your Node

[[toc]]

::: warning
UNS/uns.network/universal-name-system is the old name of unikname.network blockchain.
UNIK is the old name of UNIKNAME nft token
UNS is the old name of UNIK protocol token
Urls, commands and old documentation are not renamed yet but are still valid. We're updating progressively.
:::

## Introduction

Here we will help you set up a <brand name="uns"/> relay node and/or forger node.

To make your life easier, we've built Docker images of <brand name="uns"/> nodes.

### What is docker 

Docker is the de facto industry standard for packaging applications into a container.
By doing so, all dependencies, such as the language runtimes, operating system, and libraries are combined with the product.

Different cloud providers offer specific products to host your Docker containers, such as:

- [AWS Elastic Beanstalk](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/Welcome.html)
- [Azure](https://azure.microsoft.com/en-us/services/kubernetes-service/docker/)
- [Digital Ocean](https://www.digitalocean.com/products/one-click-apps/docker/)
- [Scaleway](https://www.scaleway.com/en/)
- [OVH](https://www.ovh.com)

Orchestrators with Docker as a first-class citizen:

- [Kubernetes](https://kubernetes.io/)
- [Nomad](https://www.nomadproject.io/)
- [Mesos](http://mesos.apache.org/)

For the moment, we have chosen to only describe the `docker-compose` setup.
So, if you choose to run your <brand name="uns"/> node on other platforms, share your own experience [on the <brand name="uns"/> network of the forum!](https://forum.unikname.com/c/uns-network/7)

### Requirements for running a relay or forger node

Operating system: Linux: Ubuntu 18.04 / 20.04, Debian Buster, CentOS/RHEL 7 / 8 ...

|                  |     Minimum     |   Recommended  |
|------------------|:---------------:|:--------------:|
| CPU              |      1 vCPU     |     2 vCPU     |
| Memory           |       1 GB      |      2 GB      |
| Storage          |      20 GB      | 40 GB SSD NVMe |

We strongly recommend running your node on SSD drive (NVMe if possible) as there are a lot of read and write operations to the DB.

## Network configuration

Depending on your hosting infrastructure, you will need open TCP ports on your firewall:
- LIVENET:
  * `4001` (required): this is the communication port used by the node to exchange information with other nodes of the <brand name="uns"/>
  * `4003` (optional): open it if you want to open the API to the world, in order to submit transactions for example. If you don't know what is it for, keep it closed

::: warning
Don't forget to forward (by NAT, routing ...) the opened ports to the corresponding ports on your VM or Docker engine!
:::

Unfortunately, there is no standard documentation to do that, so please follow the configuration guide of the firewall provided by your hosting provider, or if you are running a node at home, the guide for your 'home box'.

## Run a node with Docker Compose

In this documentation, we'll start a LIVENET <brand name="uns"/> node using [Docker Compose](https://docs.docker.com/compose/) and a configuration file.

So, be sure to have these prerequisites:
- [Docker](https://docs.docker.com/install) installed on your Linux machine
- [Docker Compose](https://docs.docker.com/compose/install) installed on your machine (only if you want to use it to setup node, documented below).

Create the following configuration file `docker-compose.yml`: 

<<< @/docs/setting-up-uns-node/livenet/docker-compose.yml

You can also [download the full file from our repository](https://raw.githubusercontent.com/unik-name/docs.uns.network/master/docs/setting-up-uns-node/livenet/docker-compose.yml).

::: tip
You can download the file directly on your machine:

```shell
$ curl -O https://raw.githubusercontent.com/unik-name/docs.uns.network/master/docs/setting-up-uns-node/livenet/docker-compose.yml
```
:::

Check-out [the reference guide to understand the Docker-compose file](/docker-compose-management.html#docker-compose-file).

### Run a relay with Docker Compose

With the previously created configuration file, you simply have to run:

```shell
$ docker-compose up
```

The node starts logging a lot of information and tries to reach peers before syncing.
You can stop the node by hitting `CTRL+C`.

::: tip
You can read your node logs by running `docker-compose logs --tail 10 uns` (here, the last 10 log lines).
:::

### Run a permanent relay with Docker Compose

If you want to permanently run your node (so as a **d**aemon), use this command:

```shell
$ docker-compose up -d
```

Then you can shutdown it with:

```shell
$ docker-compose down
```

### Run a forger with Docker Compose

To run a forger node, please edit the `docker-compose.yml` file, with Nano or Vim for example: `nano docker-compose.yml`.

Find and uncomment line `FORGER_SECRET` by removing the `#` at the beginning of the line and set your crypto-account passphrase as value (between `" "`):

```yaml{6}
  uns:
    image: universalnamesystem/core:livenet
    ...
    environment:
      ...
      FORGER_SECRET: "your fantastic passphrase here"
```

Then, (re)start your forger node with the following command:

```shell
$ docker-compose up -d
```

Now you have a running forger node and you're forging blocks! 👏

## Checking your delegate status in the Explorer

Now, your job is done.
You can check on [explorer](https://explorer.unikname.network/delegate-monitor) that you're in the delegate list (either in `active` or `standby` tab).

If you're in the `active` tab, congratulation, you're a <brand name="uns"/> delegate, and your forger node is actually forging blocks and getting rewards!

If you're in the `standby` tab, you need to gather more voting power than current active delegates (i.e. have cryptoaccounts with positive balance voting for you).

Let's go fot the final steps.
