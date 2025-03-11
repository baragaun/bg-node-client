import fsdata from '../../fsdata/fsdata.js';
import { MultiStepActionType } from '../../fsdata/gql/graphql.js';
import getMultiStepActionProgress from '../multiStepAction/getMultiStepActionProgress.js';
const resetMyPassword = async (userIdent, queryOptions) => {
    try {
        console.log('resetMyPassword called.', { userIdent });
        const input = {
            userIdent,
            actionType: MultiStepActionType.ResetPassword,
        };
        const response = await fsdata.multiStepAction.createMultiStepAction(input);
        if (!response || !response.actionId) {
            console.error('resetMyPassword: action not found.');
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
export default resetMyPassword;
//# sourceMappingURL=resetMyPassword.js.map