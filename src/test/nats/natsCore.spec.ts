import * as nats from "@nats-io/nats-core";
import { connect, deferred } from "@nats-io/transport-node";
import { randomUUID } from 'crypto';
import { afterAll, afterEach, beforeAll, beforeEach, describe, expect, test } from 'vitest';

describe('NATS connection', () => {
  // const TEST_TIMEOUT = 5000;
  // const MSG_WAIT_TIME = 50;

  let nc: nats.NatsConnection;
  // let sub: nats.Subscription;
  let userId: string;
  let activeSubscriptions: nats.Subscription[] = [];


  // const userId = randomUUID();

  beforeAll(async () => {
    // const client = await clientStore.getTestClient();
    const natsServer = process.env.NATS_SERVER || 'nats://localhost:4222';

    try {
      nc = await connect({
        servers: [natsServer],
        name: `nats-test-client-${randomUUID()}`,
        timeout: 5000,
        reconnect: true,
        maxReconnectAttempts: 3,
      });

      console.log(`Connected to NATS server at ${nc.getServer()}`);
    } catch (error) {
      console.error('Failed to connect to NATS server:', error);
      throw error;
    }
  });

  beforeEach(() => {
    userId = randomUUID();
    activeSubscriptions = [];
  });

  afterEach(async () => {
    activeSubscriptions.forEach(sub => sub.unsubscribe());
    activeSubscriptions = [];
  });

  afterAll(async () => {
    try {
      await nc.drain();
      console.log('Disconnected from NATS server');
    } catch (error) {
      console.error('Error during NATS connection cleanup:', error);
    }
  });

  test('should subscribe and continue to listen to my invite topic', async () => {
    const testCompletion = deferred();

    const subject = `${userId}/invites`;
    const receivedMessages: any[] = [];

    const subscription = nc.subscribe(subject, {
      callback: (err, msg) => {
        if (err) {
          console.error('Subscription error:', err);
          return;
        }
        const data = msg.json();
        console.log(`Received message on <${msg.subject}>:`, data);
        receivedMessages.push(data);

        if (receivedMessages.length >= 10) {
          testCompletion.resolve();
        }
      },     
    });

    for (let i = 1; i <= 10; i++) {
      nc.publish(subject, JSON.stringify({ts: new Date().toISOString(), i}));

      await new Promise(resolve => setTimeout(resolve, 10))
    }

    await Promise.race([
        testCompletion,
      new Promise(resolve => setTimeout(() => resolve('timeout'), 2000))
    ])

    // Clean up this new channel
    subscription.unsubscribe();

    // Verify that all 10 messages were received
    expect(receivedMessages.length).toBe(10);
    expect(receivedMessages.map(msg => msg.i)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  })

  test('should listen to my invite topic and then subscribe to a channel topic', async () => {
    const testCompletion = deferred();

    // First channel ID will come from the invite
    let channelId: string | null = null;

    // Track received messages
    const inviteMessages: any[] = [];
    const channelMessages: any[] = [];

    // Subscribe to the main invites topic
    const inviteSubject = `${userId}/invites`;
    const inviteSub = nc.subscribe(inviteSubject, {
      callback: (err, msg) => {
        if (err) {
          console.error('Error in invite subscription:', err);
          return;
        }

        const data = msg.json();
        console.log(`Received invite on ${msg.subject}:`, data);
        inviteMessages.push(data);

        // Get the channelId from the message object
        if (data && typeof data === 'object' && 'channelId' in data) {
          channelId = data.channelId as string;
        }

        // Subscribe to that channel in the invite
        if (channelId) {
          const channelSubject = `${userId}/${channelId}`;
          console.log(`Subscribing to channel: ${channelSubject}`);

          const channelSub = nc.subscribe(channelSubject, {
            callback: (chErr, chMsg) => {
              if (chErr) {
                console.error('Error in channel subscription:', chErr);
                return;
              }

              const chData = chMsg.json();
              console.log(`Received message on channel ${chMsg.subject}:`, chData);
              channelMessages.push(chData);

              // If we've received all expected messages, resolve the test
              if (channelMessages.length >= 3) {
                channelSub.unsubscribe();
                testCompletion.resolve();
              }
            }
          });
        }
      }
    });

    // Send an invite message with a channel ID
    const testChannelId = randomUUID();
    nc.publish(inviteSubject, JSON.stringify({
      type: 'invite',
      channelId: testChannelId,
      timestamp: new Date().toISOString()
    }));

    // Wait for the invitation to process and sub to the channel
    await new Promise(resolve => setTimeout(resolve, 300));

    // Send some messages to the new channel
    const channelSubject = `${userId}/${testChannelId}`;
    for (let i = 1; i <= 3; i++) {
      nc.publish(channelSubject, JSON.stringify({
        messageId: i,
        content: `Channel message ${i}`,
        timestamp: new Date().toISOString()
      }));
    }

    // Wait for defer to receive the 3 messages
    await Promise.race([
      testCompletion,
      // Bail if something weird happens
      new Promise(resolve => setTimeout(() => resolve('timeout'), 2000))
    ]);

    // Clean up this new channel
    inviteSub.unsubscribe();

    // Assertions
    expect(inviteMessages.length).toBeGreaterThanOrEqual(1);
    expect(inviteMessages[0].channelId).toBe(testChannelId);
    expect(channelMessages.length).toBe(3);
    expect(channelMessages.map(msg => msg.messageId)).toEqual([1, 2, 3]);
  });
});
