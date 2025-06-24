import fsdata from '../../fsdata/fsdata.js';
import { MultiStepActionType, } from '../../fsdata/gql/graphql.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import getMultiStepActionProgress from '../multiStepAction/getMultiStepActionProgress.js';
const resetMyPassword = async (userIdent, queryOptions) => {
    if (!libData.isInitialized()) {
        logger.error('resetMyPassword: unavailable');
        return { error: 'unavailable' };
    }
    if (libData.isOffline() && !libData.config().enableMockMode) {
        logger.error('resetMyPassword: offline');
        return { error: 'offline' };
    }
    try {
        logger.debug('resetMyPassword called.', { userIdent });
        const input = {
            userIdent,
            actionType: MultiStepActionType.ResetPassword,
        };
        const response = await fsdata.multiStepAction.createMultiStepAction(input);
        if (response.error || !response || !response.object.actionId) {
            logger.error('resetMyPassword: action not found.', { response });
            return { error: response.error };
        }
        return getMultiStepActionProgress(response.object.actionId, undefined, queryOptions);
    }
    catch (error) {
        logger.error(error);
        return { error: error.message };
    }
};
export default resetMyPassword;
//# sourceMappingURL=resetMyPassword.js.map