import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { Channel } from '../../../models/Channel.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import modelFields from '../../helpers/modelFields.js';
const findChannels = async (filter, match, options) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('fsdata.findChannels: unavailable');
            return { error: 'unavailable' };
        }
        const client = graffleClientStore.get();
        const args = {
            filter: (filter || null),
            match: match,
            options: options,
        };
        const response = await client.query.findChannels({
            $: args,
            ...modelFields.channel,
        });
        logger.debug('fsdata.findChannels received response.', { response: JSON.stringify(response) });
        if (Array.isArray(response.errors) && response.errors.length > 0) {
            logger.error('fsdata.findChannels: errors received.', { errorCode: response.errors['0']?.extensions?.code, errors: JSON.stringify(response.errors) });
            return { error: response.errors.map(error => error.message).join(', ') };
        }
        return {
            objects: response.data.findChannels
                ? response.data.findChannels.map((channel) => new Channel(channel))
                : [],
        };
    }
    catch (error) {
        logger.error('fsdata.findChannels: error.', { error, headers: helpers.headers() });
        return { error: error.message };
    }
};
export default findChannels;
//# sourceMappingURL=findChannels.js.map