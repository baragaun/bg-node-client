import { expect } from 'vitest';
import logger from '../../helpers/logger.js';
export const createChannelInvitationSpeckHelper = async (props, client) => {
    logger.debug('BgServiceApiCheck.createChannelInvitation: calling API/createChannelInvitation', { props });
    const response = await client.operations.channelInvitation.createChannelInvitation(props);
    logger.debug('BgServiceApiCheck.createChannelInvitation: received createChannelInvitation response', { response });
    expect(response.error).toBeUndefined();
    expect(response.object).toBeDefined();
    const channelInvitation = response.object;
    expect(channelInvitation).toBeDefined();
    expect(channelInvitation.createdBy).toBe(props.createdBy);
    expect(channelInvitation.recipientId).toBe(props.recipientId);
    expect(channelInvitation.messageText).toBe(props.messageText);
    verifyChannelInvitationProps(channelInvitation, props);
    return channelInvitation;
};
//# sourceMappingURL=createChannelInvitation.speckHelper.js.map