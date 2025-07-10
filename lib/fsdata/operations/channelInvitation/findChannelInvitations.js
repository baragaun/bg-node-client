import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { ChannelInvitation } from '../../../models/ChannelInvitation.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import modelFields from '../../helpers/modelFields.js';
const findChannelInvitations = async (_filter, _match, _options) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('fsdata.findChannelInvitations: unavailable');
            return { error: 'unavailable' };
        }
        const client = graffleClientStore.get();
        // const args: QueryFindChannelInvitationsArgs = {
        //   userId,
        //   onlyUnseen,
        //   onlyPending,
        //   direction: direction as unknown as ChannelInvitationDirection,
        //   options: options as unknown as InputMaybe<FindObjectsOptions>,
        // };
        const response = await client.query.findChannelInvitations({
            // $: args,
            ...modelFields.channelInvitation,
        });
        logger.debug('fsdata.findChannelInvitations received response.', { response: JSON.stringify(response) });
        if (Array.isArray(response.errors) && response.errors.length > 0) {
            logger.error('fsdata.findChannelInvitations: errors received.', { errorCode: response.errors['0']?.extensions?.code, errors: JSON.stringify(response.errors) });
            return { error: response.errors.map(error => error.message).join(', ') };
        }
        return {
            objects: response.data.findChannelInvitations
                ? response.data.findChannelInvitations.map((i) => new ChannelInvitation(i))
                : null,
        };
    }
    catch (error) {
        logger.error('fsdata.findChannelInvitations: error.', { error, headers: helpers.headers() });
        return { error: error.message };
    }
};
export default findChannelInvitations;
//# sourceMappingURL=findChannelInvitations.js.map