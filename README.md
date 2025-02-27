# bg-node-client

This is a Node.js client for [channels-service](https://github.com/baragaun/channels-service). 

## Installation

```bash
npm install --save https://github.com/baragaun/bg-node-client.git 
```

## Usage

The following will create a mock channel with 2 participants and 10 messages:

```typescript
import BgChannelsWebClient, { init } from 'bg-node-client';

const chatClient = init({
  useMockData: true,
  dbType: BgChannelsWebClient.DbType.rxdb,
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
