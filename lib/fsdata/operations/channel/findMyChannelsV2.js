import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import modelFields from '../../helpers/modelFields.js';
const findMyChannelsV2 = async (participantLimit, addLatestMessage, options) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('fsdata.findMyChannelsV2: unavailable');
            return { error: 'unavailable' };
        }
        const client = graffleClientStore.get();
        const args = {
            participantLimit,
            addLatestMessage,
            options: options || null,
        };
        const response = await client.query.findMyChannelsV2({
            $: args,
            ...modelFields.channelListItem,
        });
        if (Array.isArray(response.errors) && response.errors.length > 0) {
            logger.error('fsdata.findChannels: errors received', { errorCode: response.errors['0'].extensions.code, errors: JSON.stringify(response.errors) });
            return { error: response.errors.map(error => error.message).join(', ') };
        }
        logger.debug('fsdata.findMyChannelsV2 response:', { response });
        return {
            objects: response.data.findMyChannelsV2,
        };
    }
    catch (error) {
        logger.error('fsdata.findMyChannelsV2: error', { error, headers: helpers.headers() });
        return { error: error.message };
    }
};
export default findMyChannelsV2;
//# sourceMappingURL=findMyChannelsV2.js.map