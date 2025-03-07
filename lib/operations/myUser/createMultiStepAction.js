import { MutationType } from '../../enums.js';
import createMultiStepActionMutation from '../../fsdata/mutations/createMultiStepAction.js';
const createMultiStepAction = async (input) => {
    try {
        console.log('createMultiStepAction Input:', input);
        const verifyEmailResponse = await createMultiStepActionMutation(input);
        return {
            operation: MutationType.create,
            object: verifyEmailResponse,
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
export default createMultiStepAction;
//# sourceMappingURL=createMultiStepAction.js.map