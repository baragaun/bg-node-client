import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { Channel } from '../../../models/Channel.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import modelFields from '../../helpers/modelFields.js';
const createChannel = async (props) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('fsdata.createChannel: unavailable');
            return { error: 'unavailable' };
        }
        delete props.maxSeq; // not allowed in input
        delete props.lastLiveSeq; // not allowed in input
        const client = graffleClientStore.get();
        const args = {
            input: props,
        };
        const response = await client.mutation.createChannel({
            $: args,
            ...modelFields.channel,
        });
        logger.debug('fsdata.createChannel received response.', { response: JSON.stringify(response) });
        if (Array.isArray(response.errors) && response.errors.length > 0) {
            logger.error('fsdata.createChannel: errors received.', { errorCode: response.errors['0']?.extensions?.code, errors: JSON.stringify(response.errors) });
            return { error: response.errors.map(error => error.message).join(', ') };
        }
        return {
            object: response.data.createChannel
                ? new Channel(response.data.createChannel)
                : null,
        };
    }
    catch (error) {
        logger.error('fsdata.createChannel: error.', { error, headers: helpers.headers() });
        return { error: error.message };
    }
};
export default createChannel;
//# sourceMappingURL=createChannel.js.map