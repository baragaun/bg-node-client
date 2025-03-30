import fsdata from '../../fsdata/fsdata.js';
import { MultiStepActionType, } from '../../fsdata/gql/graphql.js';
import { defaultQueryOptionsForMutations } from '../../helpers/defaults.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import getMultiStepActionProgress from '../multiStepAction/getMultiStepActionProgress.js';
const signInWithToken = async (userIdent, queryOptions = defaultQueryOptionsForMutations) => {
    if (!libData.isInitialized()) {
        logger.error('signInWithToken: unavailable');
        return { error: 'unavailable' };
    }
    if (libData.isOffline() && !libData.config().enableMockMode) {
        logger.error('signInWithToken: offline');
        return { error: 'offline' };
    }
    try {
        logger.debug('signInWithToken called.', { userIdent });
        const input = {
            userIdent,
            actionType: MultiStepActionType.TokenSignIn,
        };
        const response = await fsdata.multiStepAction.createMultiStepAction(input);
        if (response.error || !response.object || !response.object.actionId) {
            logger.error('signInWithToken: action not found.', { response });
            return response;
        }
        return getMultiStepActionProgress(response.object.actionId, undefined, queryOptions);
    }
    catch (error) {
        logger.error(error);
        return { error: error.message };
    }
};
export default signInWithToken;
//# sourceMappingURL=signInWithToken.js.map