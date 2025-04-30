import { connect, deferred } from '@nats-io/transport-node';
import { afterAll, afterEach, beforeAll, beforeEach, describe, expect, it, } from 'vitest';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
describe('NATS connection', () => {
    // const TEST_TIMEOUT = 5000;
    // const MSG_WAIT_TIME = 50;
    let nc;
    // let sub: nats.Subscription;
    let activeSubscriptions = [];
    beforeAll(async () => {
        const config = libData.config();
        const natsServer = config?.nats && Array.isArray(config.nats?.servers) && config.nats?.servers.length > 0
            ? config.nats?.servers?.[0] || 'nats://localhost:4222'
            : 'nats://localhost:4222';
        try {
            nc = await connect({
                servers: [natsServer],
                name: config?.nats?.name || `nats-test-client-${crypto.randomUUID()}`,
                timeout: 5000,
                reconnect: true,
                maxReconnectAttempts: 3,
            });
            logger.debug(`Connected to NATS server at ${nc.getServer()}`);
        }
        catch (error) {
            logger.error('Failed to connect to NATS server:', error);
            throw error;
        }
    });
    beforeEach(() => {
        activeSubscriptions = [];
    });
    afterEach(async () => {
        activeSubscriptions.forEach(sub => sub.unsubscribe());
        activeSubscriptions = [];
    });
    afterAll(async () => {
        try {
            await nc.drain();
            logger.debug('Disconnected from NATS server');
        }
        catch (error) {
            logger.error('Error during NATS connection cleanup:', error);
        }
    });
    it('should subscribe and continue to listen to my invite topic', async () => {
        const userId = crypto.randomUUID();
        const testCompletion = deferred();
        const subject = `${userId}/invites`;
        const receivedMessages = [];
        const subscription = nc.subscribe(subject, {
            callback: (err, msg) => {
                if (err) {
                    logger.error('Subscription error:', err);
                    return;
                }
                const data = msg.json();
                logger.debug(`Received message on <${msg.subject}>:`, data);
                receivedMessages.push(data);
                if (receivedMessages.length >= 10) {
                    testCompletion.resolve();
                }
            },
        });
        for (let i = 1; i <= 10; i++) {
            nc.publish(subject, JSON.stringify({ ts: new Date().toISOString(), i }));
            await new Promise(resolve => setTimeout(resolve, 10));
        }
        await Promise.race([
            testCompletion,
            new Promise(resolve => setTimeout(() => resolve('timeout'), 2000)),
        ]);
        // Clean up this new channel
        subscription.unsubscribe();
        // Verify that all 10 messages were received
        expect(receivedMessages.length).toBe(10);
        expect(receivedMessages.map(msg => msg.i)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
    it('should listen to my invite topic and then subscribe to a channel topic', async () => {
        const userId = crypto.randomUUID();
        const testCompletion = deferred();
        // First channel ID will come from the invite
        let channelId = null;
        // Track received messages
        const inviteMessages = [];
        const channelMessages = [];
        // Subscribe to the main invites topic
        const inviteSubject = `${userId}/invites`;
        const inviteSub = nc.subscribe(inviteSubject, {
            callback: (err, msg) => {
                if (err) {
                    logger.error('Error in invite subscription:', err);
                    return;
                }
                const data = msg.json();
                logger.debug(`Received invite on ${msg.subject}:`, data);
                inviteMessages.push(data);
                // Get the channelId from the message object
                if (data && typeof data === 'object' && 'channelId' in data) {
                    channelId = data.channelId;
                }
                // Subscribe to that channel in the invite
                if (channelId) {
                    const channelSubject = `${userId}/${channelId}`;
                    logger.debug(`Subscribing to channel: ${channelSubject}`);
                    const channelSub = nc.subscribe(channelSubject, {
                        callback: (chErr, chMsg) => {
                            if (chErr) {
                                logger.error('Error in channel subscription:', chErr);
                                return;
                            }
                            const chData = chMsg.json();
                            logger.debug(`Received message on channel ${chMsg.subject}:`, chData);
                            channelMessages.push(chData);
                            // If we've received all expected messages, resolve the test
                            if (channelMessages.length >= 3) {
                                channelSub.unsubscribe();
                                testCompletion.resolve();
                            }
                        },
                    });
                }
            },
        });
        // Send an invite message with a channel ID
        const testChannelId = crypto.randomUUID();
        nc.publish(inviteSubject, JSON.stringify({
            type: 'invite',
            channelId: testChannelId,
            timestamp: new Date().toISOString(),
        }));
        // Wait for the invitation to process and sub to the channel
        await new Promise(resolve => setTimeout(resolve, 300));
        // Send some messages to the new channel
        const channelSubject = `${userId}/${testChannelId}`;
        for (let i = 1; i <= 3; i++) {
            nc.publish(channelSubject, JSON.stringify({
                messageId: i,
                content: `Channel message ${i}`,
                timestamp: new Date().toISOString(),
            }));
        }
        // Wait for defer to receive the 3 messages
        await Promise.race([
            testCompletion,
            // Bail if something weird happens
            new Promise(resolve => setTimeout(() => resolve('timeout'), 2000)),
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
//# sourceMappingURL=natsCore.spec.js.map