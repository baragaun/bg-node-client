import isChannelArchivedForMe from './isChannelArchivedForMe.js';
import { defaultQueryOptions } from '../../helpers/defaults.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
const findMyChannels = async (filter, match, options, queryOptions = defaultQueryOptions) => {
    if (!libData.isInitialized()) {
        logger.error('findMyChannels: unavailable');
        return { error: 'unavailable' };
    }
    if (!libData.clientInfoStore().isSignedIn) {
        logger.error('findMyChannels: unauthorized');
        return { error: 'unauthorized' };
    }
    const response = await findMyChannels(filter, match, options, queryOptions);
    if (!Array.isArray(response.objects) || response.objects.length < 1) {
        return response;
    }
    response.objects = response.objects.filter(c => isChannelArchivedForMe(c));
    return response;
};
export default findMyChannels;
//# sourceMappingURL=findMyArchivedChannels.js.map