# bg-node-client

This is a Node.js client for [channels-service](https://github.com/baragaun/channels-service). 

## Installation

```bash
npm install --save https://github.com/baragaun/bg-node-client.git 
```

To update it:
```bash
pnpm install https://github.com/baragaun/bg-node-client.git 
```

## Usage

The following will create a mock channel with 2 participants and 10 messages:

```typescript
import BgNodeClient, { init } from 'bg-node-client';

const chatClient = init({
  useMockData: true,
  dbType: BgNodeClient.DbType.rxdb,
});

// This will create a mock channel with 10 messages:
const { channel, messages, users } = chatClient.createMockChannel(
  { name: 'Test Channel' }, // channel data
  2,   // 2 participants
  10,  // 10 messages
);

// Find this channel again:
const foundChannels = await chatClient.findChannels({ id: mockChannel.id });

// Load the messages of this channel:
const foundMessages = await chatClient.findChannelMessages({ channelId: channels[0].id });
```

## Models

The database (RxDB) needs a [JSON schema representation](https://json-schema.org/) of 
each model.

We use [rosie](https://github.com/rosiejs/rosie) to create model objects for unit tests.

## Tests

We use [Vitest](https://vitest.dev/). The tests are in `src/test`.

## To Do

* Set up NATS
  * See https://github.com/nats-io/nats.node
  * See https://docs.nats.io/running-a-nats-service/introduction/installation

## Credits

* This project is based on [node-typescript-boilerplate](https://github.com/jsynowiec/node-typescript-boilerplate)

