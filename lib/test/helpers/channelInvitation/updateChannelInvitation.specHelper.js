import { expect } from 'vitest';
import { CachePolicy, ModelType } from '../../../enums.js';
import findById from '../../../operations/findById.js';
export const updateChannelInvitationSpecHelper = async (changes, client) => {
    const { object: existingChannelInvitation, error } = await findById(changes.id, ModelType.ChannelInvitation, {
        cachePolicy: CachePolicy.cacheFirst,
    });
    expect(error).toBeUndefined();
    const response = await client.operations.channelInvitation.updateChannelInvitation(changes, { polling: { enabled: true } });
    const updatedRemoteChannelInvitation = response.object;
    expect(response.error).toBeUndefined();
    expect(updatedRemoteChannelInvitation.id).toBe(changes.id);
    expect(updatedRemoteChannelInvitation.messageText).toBe(changes.messageText || existingChannelInvitation.messageText);
    const { object: reloadedChannelInvitationFromNetwork, error: findOnNetworkError } = await findById(changes.id, ModelType.ChannelInvitation, {
        cachePolicy: CachePolicy.cache,
    });
    expect(findOnNetworkError).toBeUndefined();
    expect(reloadedChannelInvitationFromNetwork.id).toBe(changes.id);
    expect(reloadedChannelInvitationFromNetwork.messageText).toBe(changes.messageText || existingChannelInvitation.messageText);
    const { object: reloadedChannelFromLocal, error: findLocalError } = await findById(changes.id, ModelType.ChannelInvitation, {
        cachePolicy: CachePolicy.cache,
    });
    expect(findLocalError).toBeUndefined();
    expect(reloadedChannelFromLocal.id).toBe(changes.id);
    expect(reloadedChannelFromLocal.messageText).toBe(changes.messageText || existingChannelInvitation.messageText);
    return updatedRemoteChannelInvitation;
};
//# sourceMappingURL=updateChannelInvitation.specHelper.js.map