import { afterEach, beforeAll, describe, expect, test } from 'vitest';
import { CachePolicy } from '../../../enums.js';
import chance from '../../../helpers/chance.js';
import signMeOut from '../../../operations/myUser/signMeOut.js';
import { createChannelSpecHelper } from '../../helpers/channel/createChannel.specHelper.js';
import { deleteChannelSpecHelper } from '../../helpers/channel/deleteChannel.specHelper.js';
import clientStore from '../../helpers/clientStore.js';
import { isFeatureEnabled } from '../../helpers/isFeatureEnabled.js';
import { deleteMyUserSpecHelper } from '../../helpers/user/deleteMyUser.specHelper.js';
import { getTestUserPropsSpecHelper } from '../../helpers/user/getTestUserProps.specHelper.js';
import { signMeInSpecHelper } from '../../helpers/user/signMeIn.specHelper.js';
import { signMeUpSpecHelper } from '../../helpers/user/signMeUp.specHelper.js';
// @failing-in-set
describe.runIf(isFeatureEnabled('channels'))('operations.channel.findChannelById', () => {
    let client;
    beforeAll(async () => {
        client = await clientStore.getTestClient();
    });
    afterEach(async () => {
        await deleteMyUserSpecHelper(client);
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
            messageLimit: 10,
            participantLimit: 10,
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
            messageLimit: 10,
            participantLimit: 10,
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
    });
}, { timeout: 20000 });
//# sourceMappingURL=findChannelById.spec.js.map