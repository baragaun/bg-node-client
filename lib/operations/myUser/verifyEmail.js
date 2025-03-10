import { MutationType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import { MultiStepActionType, } from '../../fsdata/gql/graphql.js';
const verifyEmail = async (userId, email) => {
    try {
        console.log('verifyEmail Input:', { userId, email });
        const input = {
            userId,
            actionType: MultiStepActionType.VerifyEmail,
            email,
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
export default verifyEmail;
//# sourceMappingURL=verifyEmail.js.map