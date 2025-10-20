import { subscribeToChannel } from './subscribeToChannel.js';
import { CachePolicy } from '../enums.js';
import logger from '../helpers/logger.js';
import findMyChannelsV2 from '../operations/channel/findMyChannels.js';
/**
 * Subscribes to NATS subjects for all channels the user is a member of.
 * The channels are loaded from the local database only.
 */
export const subscribeToMyChannels = async () => {
    const myChannelsResult = await findMyChannelsV2(undefined, undefined, undefined, undefined, 
    // We only want to fetch the channels from the local DB:
    { cachePolicy: CachePolicy.cache });
    if (!myChannelsResult.error &&
        Array.isArray(myChannelsResult.objects) &&
        myChannelsResult.objects.length > 0) {
        logger.debug('NATS init: found channels.', {
            channels: myChannelsResult.objects,
        });
        return;
    }
    for (const channel of myChannelsResult.objects) {
        subscribeToChannel(channel.id);
    }
};
//# sourceMappingURL=subscribeToMyChannels.js.map