# UNS Core Docker Compose Management

## Main management commands

### Starting the node in the foreground

Core and database are launched in the foreground:

`docker-compose up -d`

You can stop them with `CTRL+C`.

### Starting the node in the background

Core and database are launched in the background:

`docker-compose up -d`

### Stopping the node running in the background

Core and database are stopped. Data are kept.

`docker-compose down`

### Stopping the node running in the background and remove data about it

::: warning Removing the node's data

This command will remove all data related to the node.
So you will need to resynchronize your node!
:::

Core and database are stopped. Data are removed.

`docker-compose down -v`

### Get UNS Core version from Docker image

```
docker image inspect --format="{{ index .Config.Labels \"org.label-schema.version\"}}" universalnamesystem/core:livenet
```
Replace ```livenet``` by ```sandbox``` for Sandbox images

## Docker Compose File

From configuration file we can see that 2 services will be started: the node and its database.

You also have volumes mounted on the file system (for node and database files) and a local network for services communication.

Official Docker Compose files:
- [For Livenet](https://raw.githubusercontent.com/unik-name/docs.uns.network/master/docs/setting-up-uns-node/livenet/docker-compose.yml): `https://raw.githubusercontent.com/unik-name/docs.uns.network/master/docs/setting-up-uns-node/livenet/docker-compose.yml`
- [For Sandbox](https://raw.githubusercontent.com/unik-name/docs.uns.network/master/docs/setting-up-uns-node/sandbox/docker-compose.yml): `https://raw.githubusercontent.com/unik-name/docs.uns.network/master/docs/setting-up-uns-node/sandbox/docker-compose.yml`

### The database service

Based on [`postgres` (version 11+ and Linux alpine)](https://github.com/docker-library/postgres/blob/0a66d53fface5ccc8274f99712ba2f382a1caf42/11/alpine/Dockerfile), it exposes a single port (`5432`) and requires environment variables (for db name, user name and password).
These variables must match with those provided in the node service (see below).

### The node service

The node service is based on our `universalnamesystem/core` image (`livenet` or `sandbox` tags). 

It has two exposed ports; for p2p (`4001`/`4001`) and for API (`4003`), and mount 3 volumes (for logs, forger secret and configuration files).

Some environment variables are set :
- for the database: port, user name, user password and db name
- for the network
- and the forger secret: line `FORGER_SECRET`, commented by default

All environment variables can be found in the [Core configuration documentation](/docker-configuration.html).

## Development setup

Either because you want to develop on Core or because you need to build the node locally (eg. for a specific architecture: Raspberry PI, Silicon ...), follow the instructions.

### Local development

- Build the node: `yarn setup`
- Start dockerized Postgres: `yarn docker:db $network` with `$network=livenet|sandbox`
- Run the node: `cd packages/core && yarn $nodeType:$network` with `$nodeType=relay|forger`

### Build and run the Core container

- Build the container: `cd scripts/docker && ./build.sh`
- Start dockerized Postgres: `yarn docker:db $network` with `$network=livenet|sandbox`
- Run the node: 

```
docker run --  \
    -e UNS_NET=livenet|sandbox \
    -e CORE_DB_HOST=... \
    -e CORE_DB_PORT=5432 \
    -e CORE_DB_DATABASE=... \
    -e CORE_DB_USERNAME=... \
    -e CORE_DB_PASSWORD=... \
    -p 4001:4001 \ # or 4002:4002 for sandbox
    -p 4003:4003 \
    universalnamesystem/core:latest
```
