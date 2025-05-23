import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { ChannelInvitation } from '../../../models/ChannelInvitation.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import modelFields from '../../helpers/modelFields.js';
const findChannelInvitationsForUser = async (userId, onlyUnseen, onlyPending, direction, options) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('fsdata.findChannelInvitationsForUser: unavailable');
            return { error: 'unavailable' };
        }
        const client = graffleClientStore.get();
        const args = {
            userId,
            onlyUnseen,
            onlyPending,
            direction: direction,
            options: options,
        };
        const response = await client.query.findChannelInvitationsForUser({
            $: args,
            id: true,
            ...modelFields.channelInvitation,
        });
        logger.debug('fsdata.findChannelInvitationsForUser response:', { response });
        return {
            objects: response.data.findChannelInvitationsForUser
                ? response.data.findChannelInvitationsForUser.map((i) => new ChannelInvitation(i))
                : null,
        };
    }
    catch (error) {
        logger.error('fsdata.findChannelInvitationsForUser: error', { error, headers: helpers.headers() });
        return { error: error.message };
    }
};
export default findChannelInvitationsForUser;
//# sourceMappingURL=findChannelInvitationsForUser.js.map