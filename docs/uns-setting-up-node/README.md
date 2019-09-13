---
home: false
title: "Setting-up your UNS Node"
---

# Setting-up your Node

## Introduction

Here we will help you set up a UNS relay node and/or forger node.

To make your life easier, we've built Docker images of UNS nodes.

### What is docker 

Docker is the de facto industry standard for packaging applications into a container. By doing so, all dependencies, such as the language runtimes, operating system, and libraries are combined with the product.

Different cloud providers offer specific products to host your Docker containers, such as:

- [Google App Engine](https://cloud.google.com/appengine/)
- [AWS Elastic Beanstalk](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/Welcome.html)
- [Azure](https://azure.microsoft.com/en-us/services/kubernetes-service/docker/)
- [Digital Ocean](https://www.digitalocean.com/products/one-click-apps/docker/)

Orchestrators with Docker as a first-class citizen:

- [Kubernetes](https://kubernetes.io/)
- [Nomad](https://www.nomadproject.io/)
- [Mesos](http://mesos.apache.org/)

## Installation

First of all, be sure to have these prerequisites:
- [Docker](https://docs.docker.com/install) installed on your machine
- [Docker Compose](https://docs.docker.com/compose/install) installed on your machine (only if you want to use it to setup node, documented below).
- a [Docker](https://hub.docker.com/) account (Sign up if you don't have one yet).
- Docker CLI must be logged with your docker account (using command [`login`](https://docs.docker.com/engine/reference/commandline/login/))

Currently, our network is in **private alpha mode** so we've deployed docker image to a private repository into our organization.

It means that our code is only accessible via invitation. [Send us](mailto:contact@unik-name.com) your docker ID or email in order to grant you read access. 

Once done, you'll be able to pull our `universalnamesystem/core` image.

## Run a node

In this documentation, we'll start devnet UNS node using docker-compose and a configuration file.

Create the following configuration file `docker-compose.yml`: 

```docker
version: '2'
services:
  postgres:
    image: "postgres:11-alpine"
    container_name: postgres-devnet
    restart: always
    ports:
      - '127.0.0.1:5432:5432'
    volumes:
      - 'postgres:/var/lib/postgresql/data'
    networks:
      - core 
    environment:
     POSTGRES_PASSWORD: password
     POSTGRES_DB: uns_devnet
     POSTGRES_USER: uns

  uns:
    image: universalnamesystem/core
    container_name: uns
    restart: always
    environment:
     UNS_NET: devnet
     # FORGER_SECRET: "" <-- edit here to start a forger
     DB_HOST: postgres
     DB_PORT: 5432
     DB_PASSWORD: password
     DB_DATABASE: uns_devnet
     DB_USER: uns
    ports:
     - "4102:4102"
     - "4103:4103"
    cap_add:
      - SYS_NICE
      - SYS_RESOURCE
      - SYS_TIME
    volumes:
     - /tmp/uns-data/cfg:/etc/uns
     - /tmp/uns-data/log:/var/log/uns
     - /tmp/uns-data/key:/run/secrets
    networks:
      - core 
    tty: true
    links:
     - postgres
    depends_on:
      - postgres
volumes:
  postgres:
  core:
networks:
  core:
```

This file really ease node start, configuring it for you. 

::: tip
You can run a node without docker-compose with simple docker commands, but we won't describe here.
:::

From configuration file we can see that 2 services will be started: a node and its database.

You also have 2 volumes mounted on the file system (for node and database files) and a local network for services communication.

### The database service

Based on [`postgres` (version 11 and Linux alpine)](https://github.com/docker-library/postgres/blob/0a66d53fface5ccc8274f99712ba2f382a1caf42/11/alpine/Dockerfile), it exposes a single port (`5432`) and requires environment variables (for db name, user name and password).
These variables must match with those provided in the node service (see below).

### The node service

The node service is based on our `universalnamesystem/core` image (latest tag). 

It has two exposed ports; for p2p (`4102`) and for API (`4103`), and mount 3 volumes (for logs, forger secret and configuration files).

Some environment variables are set :
- for the database (port, user name, user password and db name)
- for the network (here it's `devnet`, it means that it'll connect to other UNS devnet nodes)
- and the forger secret (line `FORGER_SECRET`, commented by default). 

### Run a relay

With the previously created configuration file, you simply have to run `docker-compose up`.

The node starts logging a lot of information and tries to reach peers before syncing.

### Run a forger

To run a forger node, please edit the `docker-compose.yml` file.

Find and uncomment line `FORGER_SECRET` and set your wallet passphrase as value. Then, you can use the same command than for relay.

Now you have a running relay node and you're ready to forge blocks. But before, you need to [be a delegate](/uns-network-player/#becoming-a-delegate).


