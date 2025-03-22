import fsdata from '../../fsdata/fsdata.js';
import { MultiStepActionType, } from '../../fsdata/gql/graphql.js';
import clientInfoStore from '../../helpers/clientInfoStore.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import getMultiStepActionProgress from '../multiStepAction/getMultiStepActionProgress.js';
const verifyMyEmail = async (email, queryOptions) => {
    if (!libData.isInitialized()) {
        throw new Error('not-initialized');
    }
    const clientInfo = clientInfoStore.get();
    try {
        logger.debug('verifyEmail Input:', { email });
        const input = {
            userId: clientInfo.myUserId,
            actionType: MultiStepActionType.VerifyEmail,
            email,
        };
        const response = await fsdata.multiStepAction.createMultiStepAction(input);
        if (!response || !response.actionId) {
            logger.error('verifyMyEmail: action not found.');
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
export default verifyMyEmail;
//# sourceMappingURL=verifyMyEmail.js.map