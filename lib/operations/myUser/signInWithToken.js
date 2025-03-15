import fsdata from '../../fsdata/fsdata.js';
import { MultiStepActionType, } from '../../fsdata/gql/graphql.js';
import getMultiStepActionProgress from '../multiStepAction/getMultiStepActionProgress.js';
const signInWithToken = async (userIdent, queryOptions) => {
    try {
        console.log('signInWithToken called.', { userIdent });
        const input = {
            userIdent,
            actionType: MultiStepActionType.TokenSignIn,
        };
        const response = await fsdata.multiStepAction.createMultiStepAction(input);
        if (!response || !response.actionId) {
            console.error('signInWithToken: action not found.');
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
export default signInWithToken;
//# sourceMappingURL=signInWithToken.js.map