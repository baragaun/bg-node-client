import { MutationType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import { MultiStepActionType } from '../../fsdata/gql/graphql.js';
const resetPassword = async (userIdent) => {
    try {
        console.log('resetPassword Input:', { userIdent });
        const input = {
            userIdent,
            actionType: MultiStepActionType.ResetPassword,
        };
        const response = await fsdata.multiStepAction.createMultiStepAction(input);
        return {
            operation: MutationType.create,
            object: response,
        };
    }
    catch (error) {
        console.error(error);
        return {
            operation: MutationType.create,
            error: error.message,
        };
    }
};
export default resetPassword;
//# sourceMappingURL=resetPassword.js.map