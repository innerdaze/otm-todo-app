## Installation

```sh
yarn
```

## Launch

### Server

```sh
yarn server:start
```

#### Optional: PM2

```sh
yarn pm2:install # unless you already have pm2 install
yarn pm2:start

# To view the logs...
yarn pm2:logs
```

### Client

```sh
yarn start
```

Visit http://localhost:3000/ in the browser if it is not launched automatically.

Launch multiple instances to view the realtime updates.

## Testing

```sh
yarn test
```

## Roadmap

- User Authentication
- Socket.IO Testing
- e2e Testing
- Multiple Todo Lists
- Error Handling
- Security (WSS)
- Offline Mode
- PropTypes...

## Known Issues

- LokiJS occasionally crashes when a client connects due to an app bug. Restart server as a workaround or run with PM2 (see above) for fault tolerance.
- Running tests whilst the server is throws UnhandledPromiseRejectionWarning warnings in the test logs. Doesn't affect test integrity.
