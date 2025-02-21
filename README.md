# bg-channels-web-client

This is a Node.js client for [channels-service](https://github.com/baragaun/channels-service). 

## Installation

```bash
npm install --save https://github.com/baragaun/bg-channels-web-client.git 
```

## Usage

```typescript
import { init } from 'bg-channels-web-client';

const chatClient = init({
  useMockData: true,
});

const channels = chatClient.findChannels({});
```
