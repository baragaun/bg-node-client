import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { Channel } from '../../../models/Channel.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import modelFields from '../../helpers/modelFields.js';
const findChannelById = async (channelId) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('fsdata.findChannelById: unavailable');
            return { error: 'unavailable' };
        }
        const client = graffleClientStore.get();
        const args = { id: channelId };
        const response = await client.query.findChannelById({
            $: args,
            ...modelFields.channel,
        });
        logger.debug('fsdata.findChannelById received response.', { response: JSON.stringify(response) });
        if (response.error) {
            logger.error('fsdata.findChannelById: errors received.', { errorCode: response.error?.extensions?.code, errors: JSON.stringify(response.error) });
            return { error: response.error };
        }
        return {
            object: response.data.findChannelById
                ? new Channel(response.data.findChannelById)
                : null,
        };
    }
    catch (error) {
        logger.error('fsdata.findChannelById: error.', { error, headers: helpers.headers() });
        return { error: error.message };
    }
};
export default findChannelById;
//# sourceMappingURL=findChannelById.js.map