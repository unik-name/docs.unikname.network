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

Orchestrators with Docker as a first class citizen:

- [Kubernetes](https://kubernetes.io/)
- [Nomad](https://www.nomadproject.io/)
- [Mesos](http://mesos.apache.org/)

## Installation

First of all, be sure to have these prerequisites installed on your machine:

- [Docker Engine](https://docs.docker.com/install)
- [Docker Compose](https://docs.docker.com/compose/install)

Currently, our network is in private alpha mode. It means that our code is only accessible via invitation. [Contact us](mailto:contact@unik-name.com) to get access to our private registry.

Once we've granted your access, you can download our `docker-compose.yml` file. This file will really simplify the setup.

## Run a relay

Run `docker-compose up` to start a relay node connected to devnet. 

## Run a forger

To run a forger node, please edit the `docker-compose.yml` file.

Find and uncomment commented line `FORGER_SECRET` and set your wallet passphrase as value. Then, you can use the same command than for relay.

Now you have a running relay node and you're ready to forge blocks. But before, you need to [be a delegate](/uns-network-player/#becoming-a-delegate).


