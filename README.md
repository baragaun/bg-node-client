# bg-node-client

This is a Node.js client for [channels-service](https://github.com/baragaun/channels-service). 

## Installation

```bash
pnpm add https://github.com/baragaun/bg-node-client.git 
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

## GraphQL API

We use [codegen](https://the-guild.dev/graphql/codegen) to generate the GraphQL types.

To regenerate the types, make sure the `first-spark-server` is running at the location
that is defined in [./src/graphql/tools/codegen.ts](src/fsdata/tools/codegen.ts).

Then run:

```shell
 npm run codegen
```

## Tests

We use [Vitest](https://vitest.dev/). The tests are in `src/test`.

## Making Changes

When you are working on this package, and you want your changes to show up in the project
that is consuming this package follow these steps:

1. After editing the sources, build the package: `pnpm run build`
2. Push this to the `main` branch, with all the changes in the `lib` directory.
3. In the consuming project, issue: `pnpm install https://github.com/baragaun/bg-node-client.git`

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
`pnpm install` for the changes to show up in the other project.

## To Do

* Hook this up to our GraphQL API
* Set up NATS
  * See https://github.com/nats-io/nats.node
  * See https://docs.nats.io/running-a-nats-service/introduction/installation

## Credits

* This project is based on [node-typescript-boilerplate](https://github.com/jsynowiec/node-typescript-boilerplate)

