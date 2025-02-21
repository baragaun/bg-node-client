# bg-channels-web-client

This is a Node.js client for [channels-service](https://github.com/baragaun/channels-service). 

## Installation

```bash
npm install --save https://github.com/baragaun/bg-channels-web-client.git 
```

## Usage

The following will create a mock channel with 10 messages:

```typescript
import { init } from 'bg-channels-web-client';

const chatClient = init({
  useMockData: true,
});

// This will create a mock channel with 10 messages
const mockChannel = chatClient.generateMockChannel(
  { name: 'Test Channel' }, // channel data
  2,   // 2 participants
  10,  // 10 messages
);

// Find this channel again:
const channels = await chatClient.findChannels({ id: mockChannel.id });

// Load the messages of this channel:
const messages = await chatClient.findChannelMessages({ channelId: channels[0].id });
```
