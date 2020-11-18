# UNS Core Docker Compose Management

## Main management commands

### Get UNS Core version from Docker image


```
docker image inspect --format="{{ index .Config.Labels \"org.label-schema.version\"}}" universalnamesystem/core:livenet
```
Replace ```livenet``` by ```sandbox``` for Sandbox images

## Reference Docker Compose File

From configuration file we can see that 2 services will be started: the node and its database.

You also have 2 volumes mounted on the file system (for node and database files) and a local network for services communication.

### The database service

Based on [`postgres` (version 11 and Linux alpine)](https://github.com/docker-library/postgres/blob/0a66d53fface5ccc8274f99712ba2f382a1caf42/11/alpine/Dockerfile), it exposes a single port (`5432`) and requires environment variables (for db name, user name and password).
These variables must match with those provided in the node service (see below).

### The node service

The node service is based on our `universalnamesystem/core` image (latest tag). 

It has two exposed ports; for p2p (`4102`) and for API (`4103`), and mount 3 volumes (for logs, forger secret and configuration files).

Some environment variables are set :
- for the database (port, user name, user password and db name)
- for the network (here it's `livenet`, it means that it'll connect to other <brand name="uns"/> livenet nodes, you can use `sandbox` too)
- and the forger secret (line `FORGER_SECRET`, commented by default). 
