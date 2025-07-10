import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { ChannelParticipant } from '../../../models/ChannelParticipant.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import modelFields from '../../helpers/modelFields.js';
const findChannelParticipants = async (filter, match, options) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('fsdata.findChannelParticipants: unavailable');
            return { error: 'unavailable' };
        }
        const client = graffleClientStore.get();
        const args = {
            filter,
            match,
            options: options,
        };
        const response = await client.query.findChannelParticipants({
            $: args,
            ...modelFields.channelParticipant,
        });
        logger.debug('fsdata.findChannelParticipants response:', { response: JSON.stringify(response) });
        if (Array.isArray(response.errors) && response.errors.length > 0) {
            logger.error('fsdata.findChannelParticipants: errors received.', { errorCode: response.errors['0']?.extensions?.code, errors: JSON.stringify(response.errors) });
            return { error: response.errors.map(error => error.message).join(', ') };
        }
        return {
            objects: response.data.findChannelParticipants
                ? response.data.findChannelParticipants.map((i) => new ChannelParticipant(i))
                : null,
        };
    }
    catch (error) {
        logger.error('fsdata.findChannelParticipants: error.', { error, headers: helpers.headers() });
        return { error: error.message };
    }
};
export default findChannelParticipants;
//# sourceMappingURL=findChannelParticipants.js.map