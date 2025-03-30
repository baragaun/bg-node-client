import updateMyUser from './updateMyUser.js';
import { defaultQueryOptionsForMutations } from '../../helpers/defaults.js';
import libData from '../../helpers/libData.js';
const updateMyPassword = async (oldPassword, newPassword, queryOptions = defaultQueryOptionsForMutations) => {
    const changes = {
        id: libData.clientInfoStore().myUserId,
        currentPassword: oldPassword,
        newPassword,
    };
    return updateMyUser(changes, queryOptions);
};
export default updateMyPassword;
//# sourceMappingURL=updateMyPassword.js.map