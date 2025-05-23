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
describe('operations.myUser.findMyChannels', () => {
    let client;
    beforeAll(async () => {
        client = await clientStore.getTestClient();
    });
    test('should return the channels for this user', async () => {
        const count = chance.integer({ min: 2, max: 10 });
        // Create first user:
        const user1 = await signMeUpSpecHelper(undefined, false, client);
        const user1Password = getTestUserPropsSpecHelper(user1).password;
        const channel1 = await createChannelSpecHelper({ createdBy: user1.id }, client);
        await signMeOut();
        await signMeUpSpecHelper(undefined, false, client);
        const channels = await Promise.all(Array.from({ length: count }, () => createChannelSpecHelper(undefined, client)));
        const channelIds = channels.map((c) => c.id).sort();
        const queryResult = await client.operations.channel.findMyChannels(undefined, undefined, undefined, { cachePolicy: CachePolicy.network });
        const reloadedChannels = queryResult.objects;
        const reloadedChannelIds = reloadedChannels.map((c) => c.id).sort();
        expect(channels.length).toBe(count);
        expect(queryResult.error).toBeUndefined();
        expect(reloadedChannels.length).toBe(count);
        expect(reloadedChannelIds).toEqual(channelIds);
        expect(reloadedChannelIds).not.include(channelIds, channel1.id);
        // Cleanup for user2:
        await Promise.all(channels.map((channel) => deleteChannelSpecHelper(channel.id, client)));
        await deleteMyUserSpecHelper(client);
        // Cleanup for user1:
        await signMeInSpecHelper(user1.email, user1Password, client);
        await deleteChannelSpecHelper(channel1.id, client);
        await deleteMyUserSpecHelper(client);
    });
});
//# sourceMappingURL=findMyChannels.spec.js.map