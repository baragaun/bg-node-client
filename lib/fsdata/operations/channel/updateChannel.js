import { ModelType } from '../../../enums.js';
import { defaultQueryOptionsForMutations } from '../../../helpers/defaults.js';
import logger from '../../../helpers/logger.js';
import helpers from '../../helpers/helpers.js';
import update from '../update.js';
const updateChannel = async (changes, queryOptions = defaultQueryOptionsForMutations) => {
    try {
        return update(changes, ModelType.Channel, queryOptions);
    }
    catch (error) {
        logger.error('fsdata.updateChannel: failed with error.', { error, headers: helpers.headers() });
        return { error: error.message };
    }
};
export default updateChannel;
//# sourceMappingURL=updateChannel.js.map