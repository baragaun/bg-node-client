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

## Handling `MultiStepAction`

The `MultiStepAction` is used for processes that involve user interactions along the way, 
i.e. signing in with a token, resetting a password, or verifying an email address. 

I.e., to sign in with a token, do this:

### Step 1: Execute `client.operations.user.signInWithToken`. 

To start the polling, set `queryOptions.polling.enabled` to `true`. The return value
contains a `MultiStepActionRun` object. This the object that does the polling.

### Step 2: Add a listener

Use `MultiStepActionRun.addListener` to add a listener that will be called when the
notification was sent out or the confirmation token was verified. You can also add listeners
through `BgNodeClient.addListener.operations.multiStepAction.addMultiStepActionListener`. 

Here is a sample listener:

```typescript
const sampleListener: MultiStepActionListener = {
  id: 'sign-in-page',
  onEvent: async (eventType: MultiStepActionEventType, action: SidMultiStepActionProgress) => {
    if (eventType === MultiStepActionEventType.notificationFailed) {
      // The notification failed to go out. 
      // todo Show an error message to the user.
      return;
    }

    if (eventType === MultiStepActionEventType.notificationSent) {
      // The notification has been sent out. 
      // todo Show the token input UI to the user.
      return;
    }

    if (eventType === MultiStepActionEventType.tokenFailed) {
      // The user entered the wrong token.
      // todo: Show an error message to the user.
      return;
    }

    if (eventType === MultiStepActionEventType.timedOut) {
      // The multi-step action timed out.
      // todo: Showing an error message
      return;
    }

    if (eventType === MultiStepActionEventType.failed) {
      // Something went wrong.
      // todo: Showing an error message, depending on action.result
      return;
    }

    if (eventType === MultiStepActionEventType.success) {
      // The token was accepted. The user is now signed in.
      // todo navigate to the dashboard
    }
  }
};
```

Refer to the end-to-end unit tests to learn more about the different types of multi-step actions.

### Step 3: Wait for the listener's `onNotificationSentOrFailed` to be called when a notification was sent.

When the listener is called, make sure the notification was sent out successfully. If that is
the case, show a token input UI to the user, otherwise an error message. 

### Step 4: Call `client.operations.multiStepAction.verifyToken`

Call this with the token that the user entered.

### Step 5: Wait for the listener's `onFinished` to be called when the token was verified.

This concludes the process. In the case of `signInWithToken`, the user is now signed already in.

## Tests

We use [Vitest](https://vitest.dev/). The tests are in `src/test`. To run the test suite:

```shell
pnpm test
```

When testing `MultiStepAction`, you can cause the backend to use a confirmation token
that you define. Create the user with these properties:

```ts
  isTestUser: true,
  source: `testtoken=123456`
```

In the backend, you need to add this environment variables:

```shell
SECURE_ID_ALLOW_TESTING_CONFIRM_TOKENS=true
```

The server will then use `123456` as the confirmation token.

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

