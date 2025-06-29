import { expect } from 'vitest';
import { CachePolicy, ModelType } from '../../../enums.js';
import logger from '../../../helpers/logger.js';
import findById from '../../../operations/findById.js';
export const deleteChannelInvitationSpecHelper = async (id, client) => {
    logger.debug('deleteChannelInvitationSpecHelper: calling API/deleteChannelInvitation', { id });
    const response = await client.operations.channelInvitation
        .deleteChannelInvitation(id, true);
    expect(response.error).toBeUndefined();
    // Verifying the network copy has been deleted:
    // const networkResponse = await findById<ChannelInvitation>(
    //   id,
    //   ModelType.ChannelInvitation,
    //   { cachePolicy: CachePolicy.network },
    // );
    //
    // expect(networkResponse.error).toBeUndefined();
    // expect(networkResponse.object).toBeNull();
    // Verifying the local copy has been deleted:
    const localResponse = await findById(id, ModelType.ChannelInvitation, { cachePolicy: CachePolicy.cache });
    expect(localResponse.error).toBeUndefined();
    expect(localResponse.object).toBeNull();
};
//# sourceMappingURL=deleteChannelInvitation.specHelper.js.map