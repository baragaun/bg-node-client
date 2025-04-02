import { ModelType } from '../../../enums.js';
import { defaultQueryOptionsForMutations } from '../../../helpers/defaults.js';
import logger from '../../../helpers/logger.js';
import helpers from '../../helpers/helpers.js';
import update from '../update.js';
const updateMyUser = async (changes, queryOptions = defaultQueryOptionsForMutations) => {
    try {
        return update(changes, ModelType.MyUser, queryOptions);
    }
    catch (error) {
        logger.error('fsdata.updateMyUser: failed with error.', { error, headers: helpers.headers() });
        return { error: error.message };
    }
};
export default updateMyUser;
//# sourceMappingURL=updateMyUser.js.map