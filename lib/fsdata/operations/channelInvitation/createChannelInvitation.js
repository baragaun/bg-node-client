import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { ChannelInvitation } from '../../../models/ChannelInvitation.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import modelFields from '../../helpers/modelFields.js';
const createChannelInvitation = async (props) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('fsdata.createChannelInvitation: unavailable');
            return { error: 'unavailable' };
        }
        const client = graffleClientStore.get();
        const args = {
            input: props,
        };
        const response = await client.mutation.createChannelInvitation({
            $: args,
            ...modelFields.channelInvitation,
        });
        logger.debug('fsdata.createChannelInvitation response:', { response });
        return {
            object: response.data.createChannelInvitation
                ? new ChannelInvitation(response.data.createChannelInvitation)
                : null,
        };
    }
    catch (error) {
        logger.error('fsdata.createChannelInvitation: failed', { error, headers: helpers.headers() });
        return { error: error.message };
    }
};
export default createChannelInvitation;
//# sourceMappingURL=createChannelInvitation.js.map