import * as jetstream from '@nats-io/jetstream';
import { expect } from 'vitest';
import { CachePolicy, ModelType } from '../../../enums.js';
import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import randomDate from '../../../helpers/randomDate.js';
import { findStreamNameBySubject } from '../../../nats/findStreamNameBySubject.js';
import { NatsClient } from '../../../nats/NatsClient.js';
import findById from '../../../operations/findById.js';
import factories from '../../factories/factories.js';
import { createChannelMessageSpecHelper } from '../channelMessage/createChannelMessage.specHelper.js';
import { getTestClientConfig } from '../getTestClientConfig.js';
export const createChannelSpecHelper = async (props, messageCount, client) => {
    logger.debug('BgServiceApiCheck.createChannel: calling API/createChannel', { props });
    props = factories.channel.build(props);
    if (!props.createdBy) {
        props.createdBy = client.clientInfoStore.myUserId;
    }
    const response = await client.operations.channel.createChannel(props);
    const channel = response.object;
    const config = getTestClientConfig();
    libData.setConfig(config);
    const natsClient = new NatsClient(config.nats);
    await natsClient.connect();
    libData.setNatsClient(natsClient);
    expect(response.error).toBeUndefined();
    expect(channel).toBeTruthy();
    expect(channel.name).toBe(props.name);
    expect(channel.topic).toBe(props.topic);
    expect(channel.description).toBe(props.description);
    expect(channel.channelType).toBe(props.channelType);
    // Verifying local copy:
    const { object: channelFromCache, error: errorFromCache } = await findById(channel.id, ModelType.Channel, { cachePolicy: CachePolicy.cache });
    expect(errorFromCache).toBeUndefined();
    expect(channelFromCache.id).toBe(channel.id);
    expect(channelFromCache.name).toBe(props.name);
    expect(channelFromCache.topic).toBe(props.topic);
    expect(channelFromCache.description).toBe(props.description);
    expect(channelFromCache.channelType).toBe(props.channelType);
    if (!client.isInMockMode) {
        // Verifying remote copy:
        const { object: channelFromNetwork, error: errorFromNetwork } = await findById(channel.id, ModelType.Channel, { cachePolicy: CachePolicy.network });
        expect(errorFromNetwork).toBeUndefined();
        expect(channelFromNetwork.id).toBe(channel.id);
        expect(channelFromNetwork.name).toBe(props.name);
        expect(channelFromNetwork.topic).toBe(props.topic);
        expect(channelFromNetwork.description).toBe(props.description);
        expect(channelFromNetwork.channelType).toBe(props.channelType);
    }
    const timestamps = Array.from({ length: messageCount }).map(() => randomDate())
        .sort((a, b) => new Date(a).getTime() - new Date(b).getTime());
    if (messageCount && messageCount > 0) {
        const propsList = Array.from({ length: messageCount - 1 }).map((_, index) => ({
            channelId: channel.id,
            // We cannot use any other user than the one that is currently logged in:
            // createdBy: chance.pickone(channel.userIds),
            createdBy: client.clientInfoStore.myUserId,
            adminNotes: (index + 1).toString(),
            createdAt: timestamps[index + 1],
        }));
        // The first message is (usually) sent out by the creator of the channel:
        propsList.unshift({
            channelId: channel.id,
            createdBy: channel.createdBy,
            adminNotes: '0',
            createdAt: timestamps[0],
        });
        // Subscribe to NATS JetStream to verify messages
        const natsSubject = `first.spark.dev.channel.${channel.id}.messages`;
        const streamName = await findStreamNameBySubject(natsSubject);
        const consumerName = `first-spark-dev-channel-${channel.id}-messages`;
        // Create a new consumer that only gets messages from NOW onwards
        const consumerConfig = {
            durable_name: consumerName,
            ack_policy: jetstream.AckPolicy.Explicit,
            filter_subject: natsSubject,
            deliver_policy: jetstream.DeliverPolicy.New,
            replay_policy: jetstream.ReplayPolicy.Instant,
        };
        const js = await natsClient.getJetStreamClient();
        const jsm = await natsClient.getJetStreamManager();
        await jsm.consumers.add(streamName, consumerConfig);
        // Now create the messages AFTER setting up the consumer
        channel.messages = [];
        for (const props of propsList) {
            const message = await createChannelMessageSpecHelper(props, client);
            channel.messages.push(message);
        }
        // Now fetch only the messages we just created
        const consumer = await js.consumers.get(streamName, consumerName);
        const messages = await consumer.fetch({ max_messages: messageCount, expires: 3000 });
        const receivedMessages = [];
        for await (const message of messages) {
            const data = JSON.parse(new TextDecoder().decode(message.data));
            receivedMessages.push(data);
            message.ack();
        }
        // Verify NATS messages match created channel messages
        expect(receivedMessages).toHaveLength(messageCount);
        // Sort both arrays by creation time for comparison
        const sortedNatsMessages = receivedMessages.sort((a, b) => new Date(a.object.createdAt).getTime() - new Date(b.object.createdAt).getTime());
        const sortedChannelMessages = channel.messages.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
        sortedNatsMessages.forEach((natsMsg, index) => {
            const channelMsg = sortedChannelMessages[index];
            expect(natsMsg.object.id).toBe(channelMsg.id);
            expect(natsMsg.object.channelId).toBe(channelMsg.channelId);
            expect(natsMsg.object.messageText).toBe(channelMsg.messageText);
            expect(natsMsg.object.createdBy).toBe(channelMsg.createdBy);
        });
        // Cleanup the test consumer
        await jsm.consumers.delete(streamName, consumerName);
    }
    return channel;
};
//# sourceMappingURL=createChannel.specHelper.js.map
