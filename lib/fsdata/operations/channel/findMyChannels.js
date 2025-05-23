import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { Channel } from '../../../models/Channel.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import modelFields from '../../helpers/modelFields.js';
const findMyChannels = async (filter, match, options) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('fsdata.findMyChannels: unavailable');
            return { error: 'unavailable' };
        }
        const client = graffleClientStore.get();
        const args = {
            filter: filter || null,
            match: match || null,
            options: options || null,
        };
        const response = await client.query.findMyChannels({
            $: args,
            ...modelFields.channel,
        });
        logger.debug('fsdata.findMyChannels response:', { response });
        return {
            objects: response.data.findMyChannels
                ? response.data.findMyChannels.map((channel) => new Channel(channel))
                : null,
        };
    }
    catch (error) {
        logger.error('fsdata.findMyChannels: error', { error, headers: helpers.headers() });
        return { error: error.message };
    }
};
export default findMyChannels;
//# sourceMappingURL=findMyChannels.js.map