import { MutationType } from '../../enums.js';
import updateUserMutation from '../../fsdata/mutations/updateUser.js';
const updateUser = async (input) => {
    try {
        await updateUserMutation(input);
        return {
            operation: MutationType.update,
        };
    }
    catch (error) {
        console.error(error);
        return {
            operation: MutationType.update,
            error: error.message,
        };
    }
};
export default updateUser;
//# sourceMappingURL=updateUser.js.map