import { MutationType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import { MultiStepActionType, } from '../../fsdata/gql/graphql.js';
const signInWithToken = async (email) => {
    try {
        console.log('signInWithToken called:', email);
        const input = {
            actionType: MultiStepActionType.TokenSignIn,
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
export default signInWithToken;
//# sourceMappingURL=signInWithToken.js.map