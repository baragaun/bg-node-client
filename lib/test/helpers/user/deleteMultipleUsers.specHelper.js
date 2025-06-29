import { deleteMyUserSpecHelper } from './deleteMyUser.specHelper.js';
import { getTestUserPropsSpecHelper } from './getTestUserProps.specHelper.js';
import { signMeInSpecHelper } from './signMeIn.specHelper.js';
import logger from '../../../helpers/logger.js';
export const deleteMultipleUsersSpecHelper = async (users, client) => {
    logger.debug('deleteMultipleUsersSpecHelper: called', { users });
    for (let i = 0; i < 2; i++) {
        logger.debug(`deleteMultipleUsersSpecHelper: signing in user #${i}`);
        await signMeInSpecHelper(users[i].email, getTestUserPropsSpecHelper(users[i]).password, client);
        logger.debug(`deleteMultipleUsersSpecHelper: deleting user #${i}`);
        await deleteMyUserSpecHelper(client);
    }
    return true;
};
//# sourceMappingURL=deleteMultipleUsers.specHelper.js.map