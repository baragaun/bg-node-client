import fsdata from '../../fsdata/fsdata.js';
import { MultiStepActionType, } from '../../fsdata/gql/graphql.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import getMultiStepActionProgress from '../multiStepAction/getMultiStepActionProgress.js';
const resetMyPassword = async (userIdent, queryOptions) => {
    if (!libData.isInitialized()) {
        throw new Error('not-initialized');
    }
    try {
        logger.debug('resetMyPassword called.', { userIdent });
        const input = {
            userIdent,
            actionType: MultiStepActionType.ResetPassword,
        };
        const response = await fsdata.multiStepAction.createMultiStepAction(input);
        if (!response || !response.actionId) {
            logger.error('resetMyPassword: action not found.');
            return {
                error: 'system-error',
            };
        }
        return getMultiStepActionProgress(response.actionId, undefined, queryOptions);
    }
    catch (error) {
        logger.error(error);
        return {
            error: error.message,
        };
    }
};
export default resetMyPassword;
//# sourceMappingURL=resetMyPassword.js.map