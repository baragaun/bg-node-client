import { afterEach, beforeAll, describe, expect, test } from 'vitest';
import { CachePolicy } from '../../../enums.js';
import chance from '../../../helpers/chance.js';
import signMeOut from '../../../operations/myUser/signMeOut.js';
import { createChannelSpecHelper } from '../../helpers/channel/createChannel.specHelper.js';
import { deleteChannelSpecHelper } from '../../helpers/channel/deleteChannel.specHelper.js';
import clientStore from '../../helpers/clientStore.js';
import { deleteMyUserSpecHelper } from '../../helpers/user/deleteMyUser.specHelper.js';
import { getTestUserPropsSpecHelper } from '../../helpers/user/getTestUserProps.specHelper.js';
import { signMeInSpecHelper } from '../../helpers/user/signMeIn.specHelper.js';
import { signMeUpSpecHelper } from '../../helpers/user/signMeUp.specHelper.js';
describe('operations.channel.findMyChannels', () => {
    let client;
    beforeAll(async () => {
        client = await clientStore.getTestClient();
    });
    afterEach(async () => {
        await deleteMyUserSpecHelper(client);
    });
    test('returns the channels for the current user', async () => {
        const count = chance.integer({ min: 2, max: 10 });
        const otherUser = await signMeUpSpecHelper(undefined, false, client);
        const otherUserPassword = getTestUserPropsSpecHelper(otherUser).password;
        const channelOfOtherUser = await createChannelSpecHelper({ createdBy: otherUser.id }, 0, client);
        await signMeOut();
        await signMeUpSpecHelper(undefined, false, client);
        const channels = await Promise.all(Array.from({ length: count }, () => createChannelSpecHelper(undefined, 0, client)));
        const channelIds = channels.map((c) => c.id).sort();
        // Fetching channels from the network:
        const queryResultFromNetwork = await client.operations.channel.findMyChannels(4, true, undefined, { cachePolicy: CachePolicy.network });
        const channelsFromNetwork = queryResultFromNetwork.objects;
        const channelIdsFromNetwork = channelsFromNetwork.map((c) => c.id).sort();
        expect(channels.length).toBe(count);
        expect(queryResultFromNetwork.error).toBeUndefined();
        expect(channelsFromNetwork.length).toBe(count);
        expect(channelIdsFromNetwork).toEqual(channelIds);
        expect(channelIdsFromNetwork).not.include(channelOfOtherUser.id);
        // Fetching channels from the local cache:
        const queryResultFromLocal = await client.operations.channel.findMyChannels(4, true, undefined, { cachePolicy: CachePolicy.cache });
        const channelsFromLocal = queryResultFromLocal.objects;
        const channelIdsFromLocal = channelsFromLocal.map((c) => c.id).sort();
        expect(channels.length).toBe(count);
        expect(queryResultFromLocal.error).toBeUndefined();
        expect(channelsFromLocal.length).toBe(count);
        expect(channelIdsFromLocal).toEqual(channelIds);
        expect(channelIdsFromLocal).not.include(channelOfOtherUser.id);
        // Cleanup for user:
        await Promise.all(channels.map((channel) => deleteChannelSpecHelper(channel.id, client)));
        await deleteMyUserSpecHelper(client);
        // Cleanup for otherUser:
        await signMeInSpecHelper(otherUser.email, otherUserPassword, client);
        await deleteChannelSpecHelper(channelOfOtherUser.id, client);
    });
}, { timeout: 60_000 });
//# sourceMappingURL=findMyChannels.spec.js.map