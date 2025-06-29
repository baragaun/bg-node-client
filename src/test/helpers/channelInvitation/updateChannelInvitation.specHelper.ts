import { expect } from 'vitest';

import { BgNodeClient } from '../../../BgNodeClient.js';
import { CachePolicy, ModelType } from '../../../enums.js';
import { ChannelInvitation } from '../../../models/ChannelInvitation.js';
import findById from '../../../operations/findById.js';

export const updateChannelInvitationSpecHelper = async (
  changes: Partial<ChannelInvitation>,
  client: BgNodeClient,
): Promise<ChannelInvitation | null> => {
    const { object: existingChannelInvitation, error } = await findById<ChannelInvitation>(changes.id, ModelType.ChannelInvitation, {
        cachePolicy: CachePolicy.cacheFirst,
    });

    expect(error).toBeUndefined();

    const response = await client.operations.channelInvitation.updateChannelInvitation(
      changes,
      { polling: { enabled: true } },
    );
    const updatedRemoteChannelInvitation = response.object;

    expect(response.error).toBeUndefined();
    expect(updatedRemoteChannelInvitation.id).toBe(changes.id);
    expect(updatedRemoteChannelInvitation.messageText).toBe(changes.messageText || existingChannelInvitation.messageText);

    const { object: reloadedChannelInvitationFromNetwork, error: findOnNetworkError } =
      await findById<ChannelInvitation>(changes.id, ModelType.ChannelInvitation, {
          cachePolicy: CachePolicy.cache,
      });

    expect(findOnNetworkError).toBeUndefined();
    expect(reloadedChannelInvitationFromNetwork.id).toBe(changes.id);
    expect(reloadedChannelInvitationFromNetwork.messageText).toBe(changes.messageText || existingChannelInvitation.messageText);

    const { object: reloadedChannelFromLocal, error: findLocalError } =
      await findById<ChannelInvitation>(changes.id, ModelType.ChannelInvitation, {
          cachePolicy: CachePolicy.cache,
      });

    expect(findLocalError).toBeUndefined();
    expect(reloadedChannelFromLocal.id).toBe(changes.id);
    expect(reloadedChannelFromLocal.messageText).toBe(changes.messageText || existingChannelInvitation.messageText);

    return updatedRemoteChannelInvitation;
};

