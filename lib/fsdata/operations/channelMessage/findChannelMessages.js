import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { ChannelMessage } from '../../../models/ChannelMessage.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import modelFields from '../../helpers/modelFields.js';
const findChannelMessages = async (filter, match, options) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('fsdata.findChannelMessages: unavailable');
            return { error: 'unavailable' };
        }
        const client = graffleClientStore.get();
        const args = {
            filter: (filter || null),
            match: match,
            options: options,
        };
        const response = await client.query.findChannelMessages({
            $: args,
            ...modelFields.channelMessage,
        });
        logger.debug('fsdata.findChannelMessages received response.', { response: JSON.stringify(response) });
        if (Array.isArray(response.errors) && response.errors.length > 0) {
            logger.error('fsdata.findChannelMessages: errors received.', { errorCode: response.errors['0']?.extensions?.code, errors: JSON.stringify(response.errors) });
            return { error: response.errors.map(error => error.message).join(', ') };
        }
        return {
            objects: response.data.findChannelMessages
                ? response.data.findChannelMessages.map((i) => new ChannelMessage(i))
                : [],
        };
    }
    catch (error) {
        logger.error('fsdata.findChannelMessages: error.', { error, headers: helpers.headers() });
        return { error: error.message };
    }
};
export default findChannelMessages;
//# sourceMappingURL=findChannelMessages.js.map