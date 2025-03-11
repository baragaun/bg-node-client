import fsdata from '../../fsdata/fsdata.js';
import { MultiStepActionType } from '../../fsdata/gql/graphql.js';
import data from '../../helpers/data.js';
import getMultiStepActionProgress from '../multiStepAction/getMultiStepActionProgress.js';
const verifyMyEmail = async (email, queryOptions) => {
    const config = data.config();
    if (!config) {
        console.error('findMyUser: no config.');
        return null;
    }
    try {
        console.log('verifyEmail Input:', { email });
        const input = {
            userId: config.myUserId,
            actionType: MultiStepActionType.VerifyEmail,
            email,
        };
        const response = await fsdata.multiStepAction.createMultiStepAction(input);
        if (!response || !response.actionId) {
            console.error('verifyMyEmail: action not found.');
            return {
                error: 'system-error',
            };
        }
        return getMultiStepActionProgress(response.actionId, undefined, queryOptions);
    }
    catch (error) {
        console.error(error);
        return {
            error: error.message,
        };
    }
};
export default verifyMyEmail;
//# sourceMappingURL=verifyMyEmail.js.map