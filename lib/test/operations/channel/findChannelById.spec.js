import { beforeAll, describe, expect, test } from 'vitest';
import { CachePolicy } from '../../../enums.js';
import chance from '../../../helpers/chance.js';
import signMeOut from '../../../operations/myUser/signMeOut.js';
import clientStore from '../../helpers/clientStore.js';
import { createChannelSpecHelper } from '../../helpers/createChannel.specHelper.js';
import { deleteChannelSpecHelper } from '../../helpers/deleteChannel.specHelper.js';
import { deleteMyUserSpecHelper } from '../../helpers/deleteMyUser.specHelper.js';
import { getTestUserPropsSpecHelper } from '../../helpers/getTestUserProps.specHelper.js';
import { signMeInSpecHelper } from '../../helpers/signMeIn.specHelper.js';
import { signMeUpSpecHelper } from '../../helpers/signMeUp.specHelper.js';
describe('operations.channel.findChannelById', () => {
    let client;
    beforeAll(async () => {
        client = await clientStore.getTestClient();
    });
    test('returns a channel', async () => {
        const messageCount = chance.integer({ min: 2, max: 10 });
        // Create first user:
        const user1 = await signMeUpSpecHelper(undefined, false, client);
        const user1Password = getTestUserPropsSpecHelper(user1).password;
        await signMeOut();
        const user2 = await signMeUpSpecHelper(undefined, false, client);
        const channel = await createChannelSpecHelper({
            createdBy: user2.id,
            userIds: [user2.id, user1.id],
        }, messageCount, client);
        await new Promise(resolve => setTimeout(resolve, 1000)); // wait for channel to be created
        // Fetching channels from the network:
        const queryResultFromNetwork = await client.operations.channel.findChannelById(channel.id, {
            includeMessages: true,
            includeParticipants: true,
            messageLimit: 5, // set low, to test pagination
            participantLimit: 5, // set low, to test pagination
        }, { cachePolicy: CachePolicy.network });
        const channelFromNetwork = queryResultFromNetwork.channel;
        const participantsFromNetwork = queryResultFromNetwork.participants;
        const messagesFromNetwork = queryResultFromNetwork.messages;
        expect(queryResultFromNetwork.error).toBeUndefined();
        expect(channelFromNetwork.id).toEqual(channel.id);
        expect(channelFromNetwork.name).toEqual(channel.name);
        expect(participantsFromNetwork.length).toBe(2);
        expect(messagesFromNetwork.length).toBe(messageCount);
        // Fetching channels from the local cache:
        const queryResultFromLocal = await client.operations.channel.findChannelById(channel.id, {
            includeMessages: true,
            includeParticipants: true,
            messageLimit: 5, // set low, to test pagination
            participantLimit: 5, // set low, to test pagination
        }, { cachePolicy: CachePolicy.cache });
        const channelFromLocal = queryResultFromLocal.channel;
        const participantsFromLocal = queryResultFromLocal.participants;
        const messagesFromLocal = queryResultFromLocal.messages;
        expect(queryResultFromLocal.error).toBeUndefined();
        expect(channelFromLocal.id).toEqual(channel.id);
        expect(channelFromLocal.name).toEqual(channel.name);
        expect(participantsFromLocal.length).toBe(2);
        expect(messagesFromLocal.length).toBe(messageCount);
        // Cleanup for user2:
        await deleteChannelSpecHelper(channel.id, client);
        await deleteMyUserSpecHelper(client);
        // Cleanup for user1:
        await signMeInSpecHelper(user1.email, user1Password, client);
        await deleteMyUserSpecHelper(client);
    });
}, { timeout: 60000 });
//# sourceMappingURL=findChannelById.spec.js.map