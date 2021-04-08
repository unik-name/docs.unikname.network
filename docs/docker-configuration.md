# UNS Core configuration

[[TOC]]

## Docker images

UNS Docker images are available on Docker Hub: [https://hub.docker.com/r/universalnamesystem/core](https://hub.docker.com/r/universalnamesystem/core).

Images for `livenet` and `sandbox` can be found.

## Docker environment variables

UNS Core allows you to provide a configuration that is environment specific to your Docker orchestrator (Compose, Kubernetes ...) without having to touch the internal configuration.

The default values are meant to be used with the UNS Docker container.

| Variable | Default value | Note / Description |
| :--- | :--- | :--- |
| `CORE_API_CACHE_TIMEOUT` | `8000` |   |
| `CORE_API_DISABLED` | `false` |   |
| `CORE_API_NO_ESTIMATED_TOTAL_COUNT` | `false` |   |
| `CORE_API_PORT` | `4003` | ⚠ If changed, you may need to update your Docker Compose configuration |
| `CORE_API_RATE_LIMIT` | `true` |   |
| `CORE_API_RATE_LIMIT_USER_EXPIRES` | `60000` |   |
| `CORE_API_RATE_LIMIT_USER_LIMIT` | `300` |   |
| `CORE_DB_HOST` | `localhost` |   |
| `CORE_DB_PORT` | `5432` | ⚠ If changed, you may need to update your Docker Compose configuration |
| `CORE_DB_DATABASE` | `uns_livenet` | sandbox: `uns_sandbox`  |
| `CORE_DB_USERNAME` | `uns` |   |
| `CORE_DB_PASSWORD` | `password` |   |
| `CORE_EXCHANGE_JSON_RPC_ENABLED` | `false` |   |
| `CORE_LOG_LEVEL` | `debug` | Other values: `info`, `warn`, `error`  |
| `CORE_LOG_LEVEL_FILE` | `trace` |   |
| `CORE_LOG_PROCESS_ERRORS_ENABLED` | `false` |
| `CORE_MAX_TRANSACTIONS_IN_POOL` | `100000` |   |
| `CORE_P2P_PEER_VERIFIER_DEBUG_EXTRA` | `false` |
| `CORE_P2P_PORT` | sandbox: `4002` <br/>livenet: `4001` | ⚠ If changed, you may need to update your Docker Compose configuration |
| `CORE_P2P_MAX_PEERS_SAME_SUBNET` | `5` |   |
| `CORE_P2P_RATE_LIMIT` | `100` |   |
| `CORE_TRANSACTION_POOL_DISABLED` | `false` |   |
| `CORE_TRANSACTION_POOL_MAX_PER_SENDER` | `300` |   |
| `CORE_TRANSACTION_POOL_MAX_PER_REQUEST` | `40` |   |
| `CORE_VOTE_REPORT_DELEGATE_ROWS` | `80` |   |
| `CORE_WEBHOOKS_ENABLED` | `false` | If you enable this, you will need to bind the webhook port (see [Docker ports](#docker-ports) below) |
| `CORE_WEBHOOKS_TIMEOUT` | `1500` |   |
| `EVENT_FORWARDER_CHAIN_EVENTS` | - | See [this list of Core events](https://ark.dev/docs/core/how-to-guides/how-to-listen-to-core-events#available-core-events) |
| `EVENT_FORWARDER_CUSTOM_EVENTS` | - | All or one of `systeminformation,network.latency,blockheight.current,transaction.confirmed` with `,` as separator<br/>- `transaction.confirmed` fired when a transaction is confirmed for a configurable amount of times<br/>- `systeminformation` fires system information like CPU, memory and filesystem stats<br/>- `network.latency` fires the stats of a HTTP request to measure latency in milliseconds<br/>- `blockheight.current` fires the current synced blockheight |
| `EVENT_FORWARDER_CUSTOM_EVENT_INTERVAL_SYSTEM_INFORMATION` | `5000` | Interval of `systeminformation` event as milliseconds |
| `EVENT_FORWARDER_CUSTOM_EVENT_INTERVAL_NETWORK_LATENCY` | `10000` | Interval of `network.latency` event  as milliseconds |
| `EVENT_FORWARDER_CUSTOM_EVENT_INTERVAL_BLOCK_HEIGHT` | `10000` | Interval of `blockheight.current` event as milliseconds |
| `EVENT_FORWARDER_CUSTOM_EVENT_TRANSACTION_CONFIRMATIONS` | - | The amount of confirmations needed before firing the `transaction.confirmed` event<br/>Array of number, with `,` as separator, such as `5,15,51`  |
| `EVENT_FORWARDER_PORT` | sandbox: `4102` <br/>livenet: `4101` | |
| `FORGER_SECRET` | - | one of `FORGER_SECRET` or `FORGERS_SECRET` is required for forging |
| `FORGERS_SECRET` | - | one of `FORGER_SECRET` or `FORGERS_SECRET` is required for forging |
| `UNS_NET` | no, but required | `livenet` or `sandbox` |

## Docker ports

All ports must be bound between the container and the host.

| Name | Port number to be bounded | Configured by default in the reference Docker-compose file |
| :--- | :--- | :--- |
| Core P2P port | livenet: `4001`<br/>sandbox: `4002` | ✅ |
| Core API port | `4003` | livenet:❌ <br/>sandbox: ✅ |
| Core Webhooks Port | `4004` | ❌ |
| Core Vote Report Port | `4006` | ❌ |
| Core Wallet Api Port | `4040` | ❌ |
| Core Exchange Json Rpc Port | `8080` | ❌ |
