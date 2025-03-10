# bg-node-client

This is a Node.js client for [channels-service](https://github.com/baragaun/channels-service). 

## Installation

```bash
pnpm add "git+https://github.com/baragaun/bg-node-client" 
```

To update it:
```bash
pnpm install "git+https://github.com/baragaun/bg-node-client" 
```

## Usage

The following will create a mock channel with 2 participants and 10 messages:

```typescript
import { createClient, BgNodeClient } from 'bg-node-client';

const client = createClient({
  useMockData: true,
  dbType: BgNodeClient.DbType.rxdb,
});

// This will create a mock channel with 10 messages:
const { channel, messages, users } = client.createMockChannel(
  { name: 'Test Channel' }, // channel data
  2,   // 2 participants
  10,  // 10 messages
);

// Find this channel again:
const foundChannels = await client.operations.channel.findChannels({ id: mockChannel.id });

// Load the messages of this channel:
const foundMessages = await client.operations.channelMessage.findChannelMessages({ channelId: channels[0].id });
```

## Models

The database (RxDB) needs a [JSON schema representation](https://json-schema.org/) of 
each model.

We use [rosie](https://github.com/rosiejs/rosie) to create model objects for unit tests.

## GraphQL API

We use [codegen](https://the-guild.dev/graphql/codegen) to generate the GraphQL types.

To regenerate the types, make sure the `first-spark-server` is running at the location
that is defined in [./src/graphql/tools/codegen.ts](src/fsdata/tools/codegen.ts).

Then run:

```shell
pnpm run codegen
```

## Tests

We use [Vitest](https://vitest.dev/). The tests are in `src/test`. To run the test suite:

```shell
pnpm test
```

## Making Changes

When you are working on this package, and you want your changes to show up in the project
that is consuming this package follow these steps:

1. After editing the sources, build the package: `pnpm run build`
2. Push this to the `main` branch, with all the changes in the `lib` directory.
3. In the consuming project, issue: `pnpm i "git+https://github.com/baragaun/bg-node-client"`

That should get your changes from here to the other project.

Alternatively, for a quicker turnaround, link to the local `bg-node-client` in the other 
project's `package.json` like this:

```json
{
  "dependencies": {
     "@baragaun/bg-node-client": "link:/path/to/bg-node-client"
  }
}
```

Then you don't have to push the changes in `bg-node-client` to GitHub. You still need to run
`pnpm build` for this project.

## To Do

* Hook this up to our GraphQL API
* Set up NATS
  * See https://github.com/nats-io/nats.node
  * See https://docs.nats.io/running-a-nats-service/introduction/installation

## Credits

* This project is based on [node-typescript-boilerplate](https://github.com/jsynowiec/node-typescript-boilerplate)

