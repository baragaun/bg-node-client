import fsdata from '../../fsdata/fsdata.js';
import { MultiStepActionType, } from '../../fsdata/gql/graphql.js';
import logger from '../../helpers/logger.js';
import getMultiStepActionProgress from '../multiStepAction/getMultiStepActionProgress.js';
const signInWithToken = async (userIdent, queryOptions) => {
    try {
        logger.debug('signInWithToken called.', { userIdent });
        const input = {
            userIdent,
            actionType: MultiStepActionType.TokenSignIn,
        };
        const response = await fsdata.multiStepAction.createMultiStepAction(input);
        if (!response || !response.actionId) {
            logger.error('signInWithToken: action not found.');
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
export default signInWithToken;
//# sourceMappingURL=signInWithToken.js.map