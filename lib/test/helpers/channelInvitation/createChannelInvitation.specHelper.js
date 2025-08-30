import { expect } from 'vitest';
import { verifyChannelInvitationPropsSpecHelper } from './verifyChannelInvitationProps.specHelper.js';
import logger from '../../../helpers/logger.js';
import factories from '../../factories/factories.js';
export const createChannelInvitationSpecHelper = async (props, client) => {
    logger.debug('BgServiceApiCheck.createChannelInvitation: calling API/createChannelInvitation', { props });
    props = factories.channelInvitation.build(props);
    const response = await client.operations.channelInvitation.createChannelInvitation(props);
    logger.debug('BgServiceApiCheck.createChannelInvitation: received createChannelInvitation response', { response });
    expect(response.error).toBeUndefined();
    expect(response.object).toBeTruthy();
    const channelInvitation = response.object;
    expect(channelInvitation).toBeTruthy();
    expect(channelInvitation.createdBy).toBe(props.createdBy);
    expect(channelInvitation.recipientId).toBe(props.recipientId);
    expect(channelInvitation.messageText).toBe(props.messageText);
    verifyChannelInvitationPropsSpecHelper(channelInvitation, props);
    return channelInvitation;
};
//# sourceMappingURL=createChannelInvitation.specHelper.js.map