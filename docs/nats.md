# NATS

## Introduction

NATS is a simple, secure and high performance open source data layer for cloud native
applications, IoT messaging, and microservices architectures.

Jetstream is an extension that delivers, among other things, persistence and
delivery guarantees. We need it. More on this below.

**General References:**

* [nats.io](https://nats.io)
* [Documentation](https://docs.nats.io)
* [10,000 foot view](https://docs.nats.io/#id-10-000-foot-view)

## Installation

### On macOS Using Homebrew

```bash
# Install server:
brew install nats-server

# Install client CLI tools:
brew install nats-io/nats-tools/nats

# Stop the server (it doesn't have Jetstream enabled):
brew services stop nats-server

# Create a Jetstream store:
mkdir ~/nats-jetstream-store
```

Find out where homebrew installed the server:

```shell
brew info nats-server
```

Edit the file `/opt/homebrew/Cellar/nats-server/2.11.1/homebrew.mxcl.nats-server.plist` (or
wherever that file is on your box) and add a new arguments to the `ProgramArguments` array:

```
<key>ProgramArguments</key>
<array>
  <string>/opt/homebrew/opt/nats-server/bin/nats-server</string>
  <string>-js</string> <!-- Add this line -->
</array>
```

This will enable Jetstream.

Create a server config file at `~/.config/nats/nats-server.conf` with the following steps:
1. Create the directory (if it doesn’t exist yet)
```shell
mkdir ~/.config/nats
```

2. Create and open the config file with nano
```shell
nano ~/.config/nats/nats-server.conf
```
Then paste your config content into the editor:
```
# Default NATS TCP listener (for CLI / backend)
port: 4222

# Enable JetStream (optional but useful)
jetstream {
  store_dir: "./jetstream"
}

# WebSocket support (for browser frontend like Svelte)
websocket {
  port: 8080
  no_tls: true
}
```

Now Start the server with Jetstream enabled:

```shell
nats-server -c ~/.config/nats/nats-server.conf
```

## NATS Core

NATS Core is a lightweight, high-performance messaging system that implements a publish-subscribe
architecture. It provides a simple, text-based protocol focused on speed and scalability.

[Core NATS](https://docs.nats.io/nats-concepts/core-nats)

```typescript
// NATS Core example

import { connect } from 'nats';

// Connect to a NATS server
const nc = await connect({ servers: 'nats://localhost:4222' });
// Subscribe to a topic
const sub = nc.subscribe('otp-updates');
// Publish a message to the topic
nc.publish('otp-updates', JSON.stringify({ status: 'email verified' }));
```

**Limitations:**
- No built-in message persistence
- At-most-once delivery semantics
- No message replay capabilities
- Messages are lost if no subscribers are active when published

## JetStream

JetStream extends NATS Core with persistence and enhanced delivery guarantees. It's built directly
into the NATS server and provides stream-based storage with rich consumer models.

```typescript
// JetStream example

import { connect, consumerOpts, StreamAPI } from 'nats';

const nc = await connect({ servers: 'nats://localhost:4222' });
const js = nc.jetstream();

// Create a stream
await js.streams.add({ name: 'CHAT', subjects: ['chat.>', 'user.>'] });

// Publish with acknowledgment
await js.publish('chat.room1', JSON.stringify({ msg: 'Hello!' }));

// Create pull consumer with explicit ack
const consumer = await js.consumers.add('CHAT', {
  durable_name: 'processor',
  ack_policy: 'explicit',
});
```

[JetStream](https://docs.nats.io/nats-concepts/jetstream)




## To Test

1. Set up a local NATS server to test against directly, [perhaps with Docker.](https://docs.nats.io/running-a-nats-service/introduction/installation#installing-via-docker)

```bash
docker pull nats:latest
docker run --name nats-js -p 4222:4222 nats -js
```

2. Install the Node transport, NATS core and NATS JetStream dependencies.

```bash
pnpm i
```

3. You'll probably want to install the NATS cli tools, [perhaps via HomeBrew.](https://github.com/nats-io/natscli?tab=readme-ov-file#macos-installation-via-homebrew)

```bash
brew tap nats-io/nats-tools
brew install nats-io/nats-tools/nats

# # #

nats cheat
```

